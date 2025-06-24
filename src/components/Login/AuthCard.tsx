import React from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface AuthCardProps {
  className?: string;
}

/**
 * AuthCard Component
 * 
 * A self-contained authentication card for the login screen.
 * It includes fields for email, password, a login button, and links for password reset and sign-up.
 * The component is designed to be placed within a centered layout.
 */
const AuthCard: React.FC<AuthCardProps> = ({ className }) => {
  // Custom styles to mimic the underline-only input field from the design
  const inputUnderlineStyle = "bg-transparent border-x-0 border-t-0 border-b px-1 rounded-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-primary";

  return (
    <Card className={cn("w-full max-w-sm p-8 bg-card rounded-lg shadow-lg", className)}>
      <div className="flex flex-col gap-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome</h1>
        </div>

        <form className="flex flex-col gap-y-6">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email" className="text-sm font-medium text-gray-500">
              Email Address
            </Label>
            <Input
              type="email"
              id="email"
              required
              className={inputUnderlineStyle}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="password" className="text-sm font-medium text-gray-500">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              required
              className={inputUnderlineStyle}
            />
          </div>

          <div className="text-left -mt-2">
            <Button variant="link" className="p-0 h-auto text-sm font-normal text-primary/90 hover:text-primary">
              Forgot Password
            </Button>
          </div>

          <Button type="submit" className="w-full rounded-md py-2.5 text-base font-semibold">
            Login
          </Button>
        </form>

        <div className="text-center text-sm">
          <span className="text-muted-foreground">Don't have an account? </span>
          <Button variant="link" className="p-0 h-auto text-primary font-semibold">
            SignUp
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AuthCard;
