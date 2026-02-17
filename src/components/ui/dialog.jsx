// Dialog/Modal component (simplified)
import { forwardRef, useEffect } from 'react';
import { X } from 'lucide-react';

const Dialog = ({ open, onOpenChange, children }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
     document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50" 
        onClick={() => onOpenChange(false)}
      />
      {/* Content */}
      <div className="relative z-50">{children}</div>
    </div>
  );
};

const DialogContent = forwardRef(({ className = '', children, onClose, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`relative bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto ${className}`}
      {...props}
    >
      {children}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:pointer-events-none dark:ring-offset-gray-950"
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </button>
    </div>
  );
});
DialogContent.displayName = 'DialogContent';

const DialogHeader = forwardRef(({ className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`}
      {...props}
    />
  );
});
DialogHeader.displayName = 'DialogHeader';

const DialogTitle = forwardRef(({ className = '', ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={`text-lg font-semibold leading-none tracking-tight dark:text-white ${className}`}
      {...props}
    />
  );
});
DialogTitle.displayName = 'DialogTitle';

const DialogDescription = forwardRef(({ className = '', ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}
      {...props}
    />
  );
});
DialogDescription.displayName = 'DialogDescription';

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription };
