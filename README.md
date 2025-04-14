# Sentence Construction Tool

An interactive game where users complete sentences by selecting the correct words to fill in the blanks.

## Features

- Interactive sentence completion
- 30-second timer for each question
- Progress tracking
- Score calculation
- Responsive design

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```

## Deployment

### Backend Deployment

1. Create a new project on [Railway](https://railway.app/) or [Render](https://render.com/)
2. Connect your GitHub repository
3. Set the following environment variables:
   - `PORT`: 3002 (or your preferred port)
4. Deploy the project

### Frontend Deployment

1. Create a new project on [Vercel](https://vercel.com/)
2. Connect your GitHub repository
3. Set the following environment variables:
   - `VITE_API_URL`: Your backend API URL
4. Deploy the project

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3002
```

For production, replace the URL with your deployed backend URL.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Express.js

## License

MIT
