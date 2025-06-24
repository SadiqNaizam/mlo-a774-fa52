import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the AuthLayout component.
 */
interface AuthLayoutProps {
  /**
   * The content to be rendered within the layout.
   * This is typically a page or a main content component.
   */
  children: React.ReactNode;
  /**
   * Optional additional class names for custom styling.
   */
  className?: string;
}

/**
 * AuthLayout component
 * 
 * A simple layout component that centers its children both vertically and horizontally
 * on a full-screen background. It's designed for authentication pages like login or sign-up.
 * 
 * @param {AuthLayoutProps} props - The props for the component.
 * @returns {JSX.Element} The rendered AuthLayout component.
 */
const AuthLayout: React.FC<AuthLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen w-full items-center justify-center bg-background p-4 sm:p-6 md:p-8',
        className
      )}
    >
      {children}
    </main>
  );
};

export default AuthLayout;
