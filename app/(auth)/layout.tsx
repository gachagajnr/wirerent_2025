import { ReactNode } from 'react';

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="p-6 bg-white shadow-md rounded-md">{children}</div>
      </div>
    );
  }
  