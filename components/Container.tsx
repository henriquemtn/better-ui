import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  id?: string;
  classNames?: string;
}

export default function Container({ children, id, classNames }: ContainerProps) {
    return (
      <div id={id} className={`mx-auto max-w-screen-2xl px-4 md:px-0 ${classNames}`}>
        {children}
      </div>
    )
  }