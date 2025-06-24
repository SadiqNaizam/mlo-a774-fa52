import React from 'react';
import AuthLayout from '../components/layout/AuthLayout';
import AuthCard from '../components/Login/AuthCard';

/**
 * IndexPage Component
 * 
 * This is the main entry page for the application, serving as the login screen.
 * It utilizes the AuthLayout to center the AuthCard component in the middle of the screen.
 * The page itself is a simple composition of the layout and the authentication card.
 */
const IndexPage: React.FC = () => {
  return (
    <AuthLayout>
      <AuthCard />
    </AuthLayout>
  );
};

export default IndexPage;
