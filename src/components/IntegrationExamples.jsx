import React from 'react';
import { useLoadingState } from '../hooks/useLoadingState';
import { DashboardSkeleton } from './skeleton/DashboardSkeleton';

// Example of a page integration
export function DashboardIntegrationExample() {
  // 1. Use the hook (initial state = loading)
  const { isLoading, stopLoading, startLoading } = useLoadingState(true, 2000);

  // 2. Simulate data fetching
  React.useEffect(() => {
    // Determine when to stop loading based on your data fetch
    // The hook handles the minimum display time automatically
    const fetchData = async () => {
      // simulate network request
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      stopLoading(); 
    };
    
    fetchData();
  }, [stopLoading]);

  // 3. Render skeleton while loading
  if (isLoading) {
    return <DashboardSkeleton />;
  }

  // 4. Render actual content when done
  return (
    <div className="p-6 bg-[#0B0B0F] min-h-screen text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard Loaded</h1>
        <button 
          onClick={startLoading}
          className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
        >
          Reload Data
        </button>
      </div>
      
      <div className="p-8 border border-[#27272A] rounded-xl bg-[#18181C]">
        <p className="text-gray-400">
          This is the actual dashboard content that appears after the skeleton loading animation finishes.
          The skeleton ensures a smooth transition and reduces perceived wait time.
        </p>
      </div>
    </div>
  );
}
