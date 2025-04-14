# Sentence Construction Game

An interactive web application where users complete sentences by selecting the correct words to fill in the blanks. Built with React, TypeScript, and Tailwind CSS.

![Game Screenshot](public/game-screenshot.png)

## Features

- 🎮 Interactive sentence completion game
- ⏱️ 30-second timer for each question
- 📊 Progress tracking and score calculation
- 🎯 Multiple difficulty levels
- 📱 Responsive design for all devices
- 🎨 Modern UI with Tailwind CSS
- 🔄 Real-time feedback on answers

## Tech Stack

- **Frontend:**
  - React
  - TypeScript
  - Vite
  - Tailwind CSS
  - React Router

- **Backend:**
  - Express.js
  - Node.js

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Subbarayudu9493/Sentence-Construction-Game.git
   cd Sentence-Construction-Game
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=http://localhost:3002
   ```

## Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Start the backend server:
   ```bash
   node server.js
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Project Structure

```
sentence-construction-tool/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── types/         # TypeScript type definitions
│   ├── hooks/         # Custom React hooks
│   └── assets/        # Static assets
├── public/            # Public assets
├── data/             # JSON data files
└── server.js         # Backend server
```

## Deployment

### Backend Deployment

1. Create a new project on [Railway](https://railway.app/) or [Render](https://render.com/)
2. Connect your GitHub repository
3. Set the following environment variables:
   - `PORT`: 3002
4. Deploy the project

### Frontend Deployment

1. Create a new project on [Vercel](https://vercel.com/)
2. Connect your GitHub repository
3. Set the environment variable:
   - `VITE_API_URL`: Your deployed backend URL
4. Deploy the project

## API Endpoints

- `GET /questions`: Fetch all questions
- Response format:
  ```json
  {
    "questions": [
      {
        "id": 1,
        "sentence": "The {blank} is {blank} than the {blank}.",
        "options": ["sun", "moon", "brighter", "darker", "star", "planet"],
        "correctAnswers": ["sun", "brighter", "moon"]
      }
    ]
  }
  ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Contact

- GitHub: [@Subbarayudu9493](https://github.com/Subbarayudu9493)
- Email: [Your Email]

---

Made with ❤️ by [Your Name]
