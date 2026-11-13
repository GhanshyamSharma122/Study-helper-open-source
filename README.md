# Study Helper

Study Helper is an open-source quiz and study application for students. It supports quiz practice, question-and-answer practice, mistake tracking, and PDF text extraction.

## Features

- Create and practice quizzes.
- Practice question-and-answer sets.
- Track mistakes.
- Import and export question sets as JSON.
- Generate questions with an OpenAI-compatible local AI endpoint.
- Extract text from PDFs.

## Requirements

- Node.js 20 or newer.
- A local AI endpoint for AI question generation.

The server uses `mongodb-memory-server` for local storage. Set `MONGO_DB_PATH` when you want to keep the database between restarts.

## Installation

1. Clone this repository.
2. Install the Node.js packages with `npm install`.
3. Copy `.env.example` to `.env`.
4. Set the values that your setup needs.
5. Start the server with `npm run dev`.
6. Open `http://localhost:8000` in a browser.

## Environment variables

The `.env.example` file lists all supported settings. Never commit `.env` or an API key.

The AI provider uses these settings:

- `DEEPSEEK_BASE_URL`
- `DEEPSEEK_MODEL`
- `DEEPSEEK_API_KEY`
- `AI_KEY`

## API routes

- `GET /api/v1/quiz`
- `GET /api/v1/qna`
- `GET /api/v1/mistakes`

The route files in `src/routes` contain the complete route definitions.

## Development

Run the test suite with:

```bash
npm test
```

Start the development server with:

```bash
npm run dev
```

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before you create a pull request.

## License

This project uses the ISC license. Read [LICENSE](LICENSE) for the full text.
