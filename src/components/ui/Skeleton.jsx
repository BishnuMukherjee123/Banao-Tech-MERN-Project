import React from 'react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Skeleton({ className, ...props }) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "relative overflow-hidden rounded-md bg-white/5",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
