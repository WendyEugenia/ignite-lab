import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'px-3 py-4 bg-cyan-300 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-500 focus:ring-white', className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}