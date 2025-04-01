# AI Mock Interview Platform

An AI-powered mock interview platform that helps users practice technical interviews with an AI interviewer. Built with Next.js, Firebase, and VAPI AI.

## Introduction

This project is inspired by the [AI Interviewer Tutorial](https://www.youtube.com/watch?v=8GK8R77Bd7g&t=12593s) and provides a platform for users to practice technical interviews with an AI interviewer. The platform uses advanced AI models to conduct interviews, provide real-time feedback, and generate comprehensive post-interview assessments.

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript, TailwindCSS
- **Backend**: Firebase Admin SDK
- **AI/ML**: 
  - VAPI AI for real-time voice interactions
  - Google's Gemini AI for interview analysis
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore
- **Styling**: TailwindCSS, Shadcn UI

## Features

- Real-time AI-powered voice interviews
- Dynamic question generation
- Real-time transcription
- Comprehensive post-interview feedback
- Interview history tracking
- User authentication
- Responsive design
- Dark/Light mode support

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- Firebase account
- VAPI AI account
- Google Cloud account (for Gemini AI)

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-mock-interview.git
cd ai-mock-interview
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables (see Environment Variables section)

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Firebase Client
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Firebase Admin
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=

# VAPI AI
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

# Google AI
GOOGLE_GENERATIVE_AI_API_KEY=
```

## Running the Program

1. **Development Mode**:
```bash
npm run dev
# or
yarn dev
```

2. **Production Build**:
```bash
npm run build
npm start
# or
yarn build
yarn start
```

3. **Linting**:
```bash
npm run lint
# or
yarn lint
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- [AI Interviewer Tutorial](https://www.youtube.com/watch?v=8GK8R77Bd7g&t=12593s) for inspiration
- VAPI AI for voice interaction capabilities
- Google's Gemini AI for interview analysis
