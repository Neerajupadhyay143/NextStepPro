import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-white text-white">
      <div className="text-center px-6 py-10 bg-muted bg-opacity-10 backdrop-blur-md rounded-2xl shadow-2xl max-w-md">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 text-transparent bg-clip-text mb-4">
          404
        </h1>
        <p className="text-2xl font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 text-transparent bg-clip-text mb-2">Page Not Found</p>
        <p className="text-md bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 text-transparent bg-clip-text mb-6">
          Sorry, the page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
