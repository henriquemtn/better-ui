import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'danger' | 'outline' | 'success';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const buttonVariants = {
  default: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-300 text-black hover:bg-gray-400',
  danger: 'bg-red-500 text-white hover:bg-red-600',
  outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
  success: 'bg-green-500 text-white hover:bg-green-600',
};

export default function Button({
  children,
  variant = 'default',
  onClick,
  disabled = false,
  className = '',
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${buttonVariants[variant]} px-4 py-2 rounded font-semibold transition-all duration-300 ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'} ${className}`}
    >
      {children}
    </button>
  );
}
