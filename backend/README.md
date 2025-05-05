# Job Board Backend

A backend service for a job board application built with Node.js, Express, and PostgreSQL.

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Swagger UI for API documentation

## Project Structure

```
.
├── src/
│   ├── config/
│   │   └── database.js
│   ├── routes/
│   │   └── jobRoutes.js
│   ├── database/
│   │   └── schema.sql
│   └── index.js
├── swagger.yaml
├── package.json
└── README.md
```

## Setup Instructions

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up PostgreSQL database:

   - Create a new database named 'job_board'
   - Run the schema.sql file to create the necessary tables

3. Create a .env file with the following variables:

   ```
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=job_board
   DB_USER=postgres
   DB_PASSWORD=postgres
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Documentation

Once the server is running, you can access the Swagger UI documentation at:

```
http://localhost:3000/api-docs
```

## API Endpoints

- GET /api/jobs - Get all jobs
- GET /api/jobs/:id - Get job by ID
- POST /api/jobs - Create a new job

## Database Schema

The jobs table has the following structure:

- id (SERIAL PRIMARY KEY)
- title (VARCHAR)
- company (VARCHAR)
- description (TEXT)
- location (VARCHAR)
- application_method (TEXT)
- created_at (TIMESTAMP)
