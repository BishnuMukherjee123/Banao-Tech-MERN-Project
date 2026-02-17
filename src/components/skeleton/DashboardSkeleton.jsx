import React from 'react';
import { Skeleton } from '../ui/Skeleton';

export function DashboardSkeleton() {
  return (
    <div className="p-6 bg-[#0a0a0b] min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN - Tall card */}
        <div className="lg:row-span-2">
          <UserListSkeleton />
        </div>
        
        {/* MIDDLE COLUMN - Two stacked cards */}
        <div className="space-y-6">
          <ChartSkeleton />
          <SmallChartSkeleton />
        </div>
        
        {/* RIGHT COLUMN - Two stacked cards */}
        <div className="space-y-6">
          <RecentUsersSkeleton />
          <EmptyCardSkeleton />
        </div>
        
      </div>
    </div>
  );
}

// Left Card - User List Skeleton
export function UserListSkeleton() {
  return (
    <div className="bg-[#222228] h-[460px] p-6 flex flex-col rounded-[20px] overflow-hidden">
      {/* Icon placeholder at top - S Logo */}
      <div className="mb-6 flex justify-center">
        <div className="flex items-center gap-2 font-bold text-xl text-white">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black text-sm font-bold">S</div>
          Squid
        </div>
      </div>
      
      {/* Separator Line */}
      <div className="h-px bg-white/10 w-full mb-6" />
      
      {/* List items - 5 horizontal bars with broken lines */}
      <div className="flex-1 space-y-6 mb-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <Skeleton className="w-6 h-6 rounded-md shrink-0" variant="rectangular" />
            <div className="flex-1 space-y-2">
              <div className="flex gap-2">
                <Skeleton className="w-[55%] h-1.5 rounded-full" />
                <Skeleton className="w-[15%] h-1.5 rounded-full" />
              </div>
              <div className="flex gap-2 w-[70%]">
                 <Skeleton className="w-[35%] h-1.5 rounded-full" />
                 <Skeleton className="w-[29%] h-1.5 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* User profile section at bottom */}
      <div className="mt-4 pt-0 flex flex-col items-center gap-2">
        <Skeleton className="w-12 h-12 rounded-full border-2 border-[#3A3A47]" variant="circular" />
        <div className="space-y-1.5 flex flex-col items-center w-full">
            <Skeleton className="w-[40%] h-1.5 rounded-full" variant="rectangular" />
            <Skeleton className="w-[25%] h-1.5 rounded-full" variant="rectangular" />
        </div>
      </div>
    </div>
  );
}

// Middle Top Card - Large Chart Skeleton
export function ChartSkeleton() {
  return (
    <div className="bg-[#222228] h-[217px] p-6 rounded-[20px] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-6 relative z-10">
        <div className="space-y-1.5 w-2/3">
          <div className="flex gap-2">
             <Skeleton className="w-3/4 h-1.5 rounded-full" variant="rectangular" />
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center relative">
        <div className="relative w-[140px] h-[140px]">
          <Skeleton className="w-full h-full rounded-full border-16 border-[#3A3A47]" variant="circular" />
        </div>
      </div>
    </div>
  );
}

// Middle Bottom Card - Small Chart Skeleton
export function SmallChartSkeleton() {
  return (
    <div className="bg-[#222228] h-[217px] p-6 rounded-[20px] flex flex-col overflow-hidden">
       {/* Header */}
      <div className="mb-4">
        <div className="space-y-1.5 w-2/3">
          <div className="flex gap-2">
             <Skeleton className="w-1/2 h-1.5 rounded-full" variant="rectangular" />
             <Skeleton className="w-1/4 h-1.5 rounded-full" variant="rectangular" />
          </div>
          <div className="flex gap-2">
             <Skeleton className="w-[28%] h-1.5 rounded-full" variant="rectangular" />
             <Skeleton className="w-[22%] h-1.5 rounded-full" variant="rectangular" />
          </div>
        </div>
      </div>

      {/* Bar chart area (placeholder) */}
      <div className="flex-1 flex items-end justify-center gap-3">
         <Skeleton className="w-full h-[100px] object-contain object-bottom" variant="rectangular"/>
      </div>
    </div>
  );
}

// Right Top Card - Recent Users Skeleton
export function RecentUsersSkeleton() {
  return (
    <div className="bg-[#222228] h-[328px] p-6 rounded-[20px] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-6 space-y-1.5 w-2/3">
        <div className="flex gap-2">
           <Skeleton className="w-1/2 h-1.5 rounded-full" variant="rectangular" />
           <Skeleton className="w-1/4 h-1.5 rounded-full" variant="rectangular" />
        </div>
        <div className="flex gap-2">
           <Skeleton className="w-[28%] h-1.5 rounded-full" variant="rectangular" />
           <Skeleton className="w-[24%] h-1.5 rounded-full" variant="rectangular" />
        </div>
      </div>
      
      {/* User list items - 4 rows with avatar + text */}
      <div className="flex-1 flex flex-col">
        {[...Array(4)].map((_, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center gap-4 py-3">
              <Skeleton className="w-[36px] h-[36px] flex-shrink-0" variant="circular" />
              <div className="flex-1 space-y-2">
                  <div className="flex gap-2">
                    <Skeleton className="w-3/5 h-1.5 rounded-full" />
                    <Skeleton className="w-1/5 h-1.5 rounded-full" />
                  </div>
                  <div className="flex gap-2 w-4/5">
                    <Skeleton className="w-[45%] h-1.5 rounded-full" />
                    <Skeleton className="w-[22%] h-1.5 rounded-full" />
                  </div>
              </div>
            </div>
            {index < 3 && <div className="h-px bg-[#3A3A47]/50 my-1" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// Right Bottom Card - Empty Placeholder
export function EmptyCardSkeleton() {
  return (
    <div className="bg-[#222228] h-[217px] p-6 rounded-[20px] overflow-hidden">
      <Skeleton className="w-full h-full rounded-lg" variant="rectangular" />
    </div>
  );
}
