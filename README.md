# To-Do List App

A simple, responsive To-Do List web application built using [Next.js](https://nextjs.org/). The app allows users to add  and delete tasks, providing an easy way to manage daily tasks.

## Features

- Add new tasks
- Delete tasks
- Persistent task storage (if applicable)
- Responsive design for mobile and desktop

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

2. Install the dependencies:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

### Running the Application

1. Start the development server:

   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the app.

### Building for Production

To create an optimized production build:

```bash
npm run build
npm start
```

Or with yarn:

```bash
yarn build
yarn start
```

This will generate a `.next` folder containing the production build files.

### Environment Variables (Optional)

If your app uses environment variables (e.g., for a backend API or database), create a `.env.local` file in the root of your project and add your environment-specific variables:

```bash
NEXT_PUBLIC_API_URL=http://yourapiurl.com
```

Make sure to include this file in your `.gitignore` to avoid exposing sensitive information.

### Testing (Optional)

To run tests (if you've implemented any):

```bash
npm test
```

Or with yarn:

```bash
yarn test
```
