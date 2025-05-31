# DeepSeek Clone 🤖

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Saksham-Goel1107/Deepseek-Clone/issues)
[![Stars](https://img.shields.io/github/stars/Saksham-Goel1107/Deepseek-Clone)](https://github.com/Saksham-Goel1107/Deepseek-Clone/stargazers)
[![Forks](https://img.shields.io/github/forks/Saksham-Goel1107/Deepseek-Clone)](https://github.com/Saksham-Goel1107/Deepseek-Clone/network/members)
[![Issues](https://img.shields.io/github/issues/Saksham-Goel1107/Deepseek-Clone)](https://github.com/Saksham-Goel1107/Deepseek-Clone/issues)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.12.1-green)](https://www.mongodb.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Authentication-purple)](https://clerk.dev/)
[![DeepSeek AI](https://img.shields.io/badge/DeepSeek-AI-orange)](https://deepseek.ai/)

A modern chat interface powered by DeepSeek's AI models, built with Next.js, React, and MongoDB. Experience seamless conversations with state-of-the-art language models while enjoying a beautiful, responsive UI.

![DeepSeek Clone Demo](./assets/qrcode.png)

## ✨ Features

- 🤖 **AI-Powered Chat**: Engage in natural conversations with DeepSeek's advanced language models
- 🔐 **Secure Authentication**: User authentication powered by Clerk
- 💾 **Persistent Storage**: All chats are saved in MongoDB for future reference
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Real-time Updates**: Dynamic message updates with no page refresh
- 🎨 **Modern UI**: Clean and intuitive interface with dark mode support
- 🔍 **Chat Management**: Create, rename, and delete chat conversations

## 🚀 Tech Stack

- **Frontend**: 
  - ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
  - ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
  - ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

- **Backend**: 
  - ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
  - ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)

- **Authentication**: 
  - ![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=flat&logo=clerk&logoColor=white)

- **AI Integration**: 
  - ![DeepSeek](https://img.shields.io/badge/DeepSeek-AI-FF5733?style=flat)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Saksham-Goel1107/Deepseek-Clone.git
cd Deepseek-Clone
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with:
```env
# MongoDB Connection
MONGODB_URI=your_mongodb_uri

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# DeepSeek Configuration
DEEPSEEK_API_KEY=your_deepseek_api_key

# Webhook Configuration
WEBHOOK_SECRET=your_webhook_secret
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
deepseek-clone/
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   └── layout.js        # Root layout
├── components/          # React components
├── config/             # Configuration files
├── context/            # React context
├── models/             # MongoDB models
└── public/            # Static assets
```

## 🔄 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/chat/ai` | POST | Send messages to AI |
| `/api/chat/create` | POST | Create new chat |
| `/api/chat/rename` | POST | Rename existing chat |
| `/api/chat/delete` | POST | Delete chat |
| `/api/chat/get` | GET | Get chat history |

## 🤝 Contributing

Contributions are always welcome! See `CONTRIBUTING.md` for ways to get started.

1. Fork the repository
2. Create your feature branch:
```bash
git checkout -b feature/AmazingFeature
```
3. Commit your changes:
```bash
git commit -m 'Add some AmazingFeature'
```
4. Push to the branch:
```bash
git push origin feature/AmazingFeature
```
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Saksham Goel**

[![GitHub](https://img.shields.io/badge/GitHub-Saksham--Goel1107-black?style=flat&logo=github)](https://github.com/Saksham-Goel1107)
[![Portfolio](https://img.shields.io/badge/Portfolio-Saksham_Goel-blue?style=flat&logo=google-chrome)](https://your-portfolio-url.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Saksham_Goel-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/your-linkedin)

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

<div align="center">
Made with ❤️ by Saksham Goel
</div>