import { ComponentPropsWithoutRef } from 'react';
import { cn } from './cn';

export function Button({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className={cn(
        'w-full rounded-sm border-2 border-purple-600 px-4 py-2 text-sm font-bold',
        'hover:not-[:disabled]:bg-purple-700 hover:not-[:disabled]:text-white',
        'disabled:bg-purple-300 disabled:text-purple-200',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
