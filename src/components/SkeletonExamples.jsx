import React from 'react';
import { 
  UsersTableSkeleton, 
  UsersGridSkeleton, 
  StatsCardsSkeleton, 
  SettingsPageSkeleton 
} from './skeleton';

export function SkeletonExamples() {
  return (
    <div className="space-y-12 p-8 bg-[#0B0B0F] min-h-screen text-white">
      <section>
        <h2 className="text-xl font-bold mb-4 text-purple-400">1. Stats Cards Skeleton</h2>
        <StatsCardsSkeleton />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 text-purple-400">2. Users Table Skeleton</h2>
        <UsersTableSkeleton />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 text-purple-400">3. Users Grid Skeleton</h2>
        <UsersGridSkeleton />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 text-purple-400">4. Settings Page Skeleton</h2>
        <SettingsPageSkeleton />
      </section>
    </div>
  );
}
