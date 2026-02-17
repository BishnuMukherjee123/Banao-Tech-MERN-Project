import React, { useState } from 'react';
import { DashboardSkeleton } from '../components/skeleton/DashboardSkeleton';
import { SkeletonExamples } from '../components/SkeletonExamples';
import { DashboardIntegrationExample } from '../components/IntegrationExamples';

export default function SkeletonPreviewPage() {
  const [view, setView] = useState('examples'); // 'examples' | 'dashboard' | 'integration'

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white font-sans">
      {/* Navigation Header */}
      <header className="border-b border-[#27272A] bg-[#18181C] p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Skeleton System Preview
          </h1>
          <div className="flex gap-2">
            <TabButton 
              active={view === 'examples'} 
              onClick={() => setView('examples')}
              label="Component Library" 
            />
            <TabButton 
              active={view === 'dashboard'} 
              onClick={() => setView('dashboard')}
              label="Dashboard Layout" 
            />
            <TabButton 
              active={view === 'integration'} 
              onClick={() => setView('integration')}
              label="Live Integration" 
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main>
        {view === 'examples' && <SkeletonExamples />}
        {view === 'dashboard' && <DashboardSkeleton />}
        {view === 'integration' && <DashboardIntegrationExample />}
      </main>
    </div>
  );
}

function TabButton({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
        active 
          ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25' 
          : 'text-gray-400 hover:text-white hover:bg-[#27272A]'
      }`}
    >
      {label}
    </button>
  );
}
