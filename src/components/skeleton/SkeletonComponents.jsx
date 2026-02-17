import React from 'react';
import { Skeleton } from '../ui/Skeleton';

// 1. Users Table Skeleton
export function UsersTableSkeleton() {
  return (
    <div className="rounded-md border border-[#27272A] bg-[#18181C] overflow-hidden">
      {/* Table Header */}
      <div className="border-b border-[#27272A] p-4 flex gap-4 bg-[#222228]">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[100px] ml-auto" />
      </div>
      {/* Table Rows */}
      <div className="divide-y divide-[#27272A]">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 p-4">
            <Skeleton className="h-10 w-10 rounded-full" /> {/* Avatar */}
            <div className="flex flex-col gap-1 flex-1">
              <Skeleton className="h-4 w-[150px]" /> {/* Name */}
              <Skeleton className="h-3 w-[200px]" /> {/* Email */}
            </div>
            <Skeleton className="h-8 w-[80px] rounded-md" /> {/* Status/Action */}
          </div>
        ))}
      </div>
    </div>
  );
}

// 2. Users Grid Skeleton
export function UsersGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <UserCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function UserCardSkeleton() {
  return (
    <div className="bg-[#18181C] border border-[#27272A] rounded-xl p-6 flex flex-col items-center gap-4">
      <Skeleton className="h-24 w-24 rounded-full" />
      <div className="space-y-2 w-full flex flex-col items-center">
        <Skeleton className="h-5 w-1/2" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <div className="flex gap-2 w-full mt-2">
        <Skeleton className="h-9 flex-1 rounded-md" />
        <Skeleton className="h-9 flex-1 rounded-md" />
      </div>
    </div>
  );
}

// 3. Stats Cards Skeleton
export function StatsCardsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {[...Array(4)].map((_, i) => (
        <StatsCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function StatsCardSkeleton() {
  return (
    <div className="bg-[#18181C] border border-[#27272A] rounded-xl p-6">
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-4" />
      </div>
      <div className="space-y-2 mt-4">
        <Skeleton className="h-8 w-[60px]" />
        <Skeleton className="h-3 w-[140px]" />
      </div>
    </div>
  );
}

// 4. Settings Page Skeleton
export function SettingsPageSkeleton() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-2">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
      
      <div className="bg-[#18181C] border border-[#27272A] rounded-xl p-6 space-y-6">
        <SettingsSection />
        <div className="h-px bg-[#27272A]" />
        <SettingsSection />
        <div className="h-px bg-[#27272A]" />
        <SettingsSection />
      </div>
    </div>
  );
}

function SettingsSection() {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Skeleton className="h-5 w-[150px]" />
        <Skeleton className="h-3 w-[250px]" />
      </div>
      <div className="space-y-4 pt-2">
        <FormFieldSkeleton />
        <FormFieldSkeleton />
      </div>
    </div>
  );
}

function FormFieldSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-[100px]" />
      <Skeleton className="h-10 w-full rounded-md" />
    </div>
  );
}

// 5. List Item Skeleton
export function ListItemSkeleton() {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-[#27272A] last:border-0">
      <Skeleton className="h-10 w-10 rounded-lg" />
      <div className="space-y-1 flex-1">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-3 w-[150px]" />
      </div>
      <Skeleton className="h-8 w-8 rounded-full" />
    </div>
  );
}
