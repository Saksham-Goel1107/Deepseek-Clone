export const maxDuration = 60;
import connectDB from "@/config/db";
import Chat from "@/models/Chat";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    const { userId } = getAuth(req);

    const { chatId, prompt } = await req.json();

    if (!userId) {
      return NextResponse.json({
        success: false,
        message: "User not authenticated",
      });
    }

    await connectDB();
    const data = await Chat.findOne({ userId, _id: chatId });

    const userPrompt = {
      role: "user",
      content: prompt,
      timestamp: Date.now(),
    };

    data.messages.push(userPrompt);

    const response = await fetch('https://api.deepinfra.com/v1/openai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
        messages: [
          {"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": prompt}
        ],
        stream: false,
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    if (!response.ok) {
      let errorMessage;
      try {
        const error = await response.json();
        errorMessage = JSON.stringify(error);
      } catch (e) {
        errorMessage = await response.text();
      }
      console.error('DeepSeek API Error:', {
        status: response.status,
        statusText: response.statusText,
        errorMessage
      });
      throw new Error(`DeepSeek API Error: ${response.status} ${response.statusText} - ${errorMessage}`);
    }

    const responseData = await response.json();
    console.log('DeepSeek API Response:', responseData);

    const message = {
      role: "assistant",
      content: responseData.choices?.[0]?.message?.content || responseData.response,
      timestamp: Date.now()
    };
    data.messages.push(message);
    await data.save();

    return NextResponse.json({ success: true, data: message });
  } catch (error) {
    console.error('API Error:', {
      message: error.message,
      stack: error.stack,
      cause: error.cause
    });
    
    return NextResponse.json({ 
      success: false, 
      error: error.message,
      details: {
        status: error.status,
        statusText: error.statusText,
        error: error.toString()
      }
    });
  }
}
