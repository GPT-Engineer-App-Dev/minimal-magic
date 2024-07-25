import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">My Application</h1>
        <nav className="mt-2">
          <Link to="/" className="text-blue-300 hover:text-blue-100 mr-4">Home</Link>
          <Link to="/about" className="text-blue-300 hover:text-blue-100">About</Link>
        </nav>
      </header>

      <main className="flex-grow p-4">
        <Card className="mb-4">
          <CardHeader>
            <h2 className="text-xl font-semibold">About Us</h2>
          </CardHeader>
          <CardContent>
            <p>This is the About page of our application. Here you can add information about your company, project, or team.</p>
          </CardContent>
        </Card>

        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;