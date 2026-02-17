import React from 'react';
import { Skeleton } from './ui/Skeleton';
import imgEllipse2 from "../assets/images/Ellipse/Ellipse 2.png";
import imgEllipse3 from "../assets/images/Ellipse/Ellipse 3.png";
import imgEllipse4 from "../assets/images/Ellipse/Ellipse 4.png";
import imgEllipse5 from "../assets/images/Ellipse/Ellipse 5.png";
import imgLogo from "../assets/images/Ellipse/logo.png";

import imgGroup132 from "../assets/images/Ellipse/Group 132.png";
import imgVector1 from "../assets/images/circleChart/Vector1.png";
import imgVector2 from "../assets/images/circleChart/Vector2.png";
import imgVector3 from "../assets/images/circleChart/Vector3.png";
import imgEllipse7 from "../assets/images/circleChart/Ellipse7.png";
import imgEllipse8 from "../assets/images/circleChart/Ellipse8.png";

// Mockup Card Container
function MockupCard({ className, children }) {
  return (
    <div className={`absolute bg-[#222228] rounded-[20px] overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

// Common Header for cards (Text lines + Right Icon)
function CardHeader({ 
  hasIcon = true,
  line1ClassName = "w-1/2 h-1.5 rounded-full",
  line2ClassName = "w-1/4 h-1.5 rounded-full",
  line3ClassName = "w-[28%] h-1.5 rounded-full",
  line4ClassName = "w-[24%] h-1.5 rounded-full", 
  iconClassName = "w-6 h-6 rounded-md"
}) {
  return (
    <div className="flex justify-between items-start mb-4">
      <div className="space-y-1.5 w-2/3">
        {/* Row 1: Long + Short */}
        <div className="flex gap-2">
          <Skeleton className={line1ClassName} variant="rectangular" />
          <Skeleton className={line2ClassName} variant="rectangular" />
        </div>
        {/* Row 2: Med + Med */}
        <div className="flex gap-2">
          <Skeleton className={line3ClassName} variant="rectangular" />
          <Skeleton className={line4ClassName} variant="rectangular" />
        </div>
      </div>
      {hasIcon && <Skeleton className={iconClassName} variant="rectangular" />}
    </div>
  );
}

// Left Card - User List with detailed items
function LeftCard() {
  return (
    <MockupCard className="h-[460px] left-[340px] top-[594px] w-[246px] p-6 flex flex-col">
      {/* Top Logo Icon */}
      <div className="mb-6 flex justify-center">
        <div className="w-[41px]">
          <img src={imgLogo} alt="Squid Logo" className="w-full h-auto object-contain" />
        </div>
      </div>
      
      {/* Separator Line */}
      <div className="h-px bg-white/10 w-full mb-8" />

      {/* List items with Icon + Text */}
      <div className="space-y-6 mb-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <Skeleton className="w-6 h-6 rounded-md shrink-0" variant="rectangular" />
            <div className="flex-1 space-y-2">
              {/* Row 1: Long bar + Short bar */}
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
      
      {/* Profile at bottom centered */}
      <div className="mt-6 pt-0 flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#3A3A47]">
          <img src={imgEllipse4} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-1.5 flex flex-col items-center w-full">
            {/* Top Line: Split into two pieces (Like list item) */}
            <div className="flex gap-2 w-full justify-center">
                <Skeleton className="w-[25%] h-1.5 rounded-full" variant="rectangular" />
                <Skeleton className="w-[18%] h-1.5 rounded-full" variant="rectangular" />
            </div>
            {/* Bottom Line: Single 70% width */}
            <Skeleton className="w-[27%] h-1.5 rounded-full" variant="rectangular" />
        </div>
      </div>
    </MockupCard>
  );
}

// Top Middle Card - Donut Chart with Header
function TopMiddleCard() {
  return (
    <MockupCard className="h-[217px] left-[614px] top-[594px] w-[231px] p-6 flex flex-col">
      {/* Header (Text + Icon) */}
      <CardHeader 
        line1ClassName="w-[60%] h-1.5 rounded-full"
        line2ClassName="w-[20%] h-1.5 rounded-full"
        line3ClassName = "w-[30%] h-1.5 rounded-full"
        line4ClassName = "w-[20%] h-1.5 rounded-full"
      />
      
      <div className="flex-1 flex items-center justify-center relative">
        <div className="relative w-[110px] h-[110px]">
          <div className="relative w-[110px] h-[110px] bg-[#313139] rounded-full">
            <img src={imgVector2} className='h-full w-full' alt="" />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[83.5%] w-[83.5%] rounded-full bg-[#222228] flex items-center justify-center'>
              <div className='h-[60%] w-[60%] bg-[#313139] rounded-full flex items-center justify-center'>
                <div className='h-[67%] w-[67%] bg-[#222228] rounded-full'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockupCard>
  );
}

// Bottom Middle Card - Bar Chart with Header
function BottomMiddleCard() {
  return (
    <MockupCard className="h-[217px] left-[614px] top-[837px] w-[231px] p-6 flex flex-col">
       <CardHeader 
        line1ClassName="w-[60%] h-1.5 rounded-full"
        line2ClassName="w-[20%] h-1.5 rounded-full"
        line3ClassName = "w-[30%] h-1.5 rounded-full"
        line4ClassName = "w-[20%] h-1.5 rounded-full"
      />
       {/* Separator Line */}
       <div className="h-px bg-white/5 w-full mb-4" />
      <div className="flex-1 flex items-end justify-center">
         <div className="relative w-full h-[100px]">
            <img 
            src={imgGroup132} 
            alt="Bar Chart" 
            className="w-full h-full object-contain object-bottom"
            />
        </div>
      </div>
    </MockupCard>
  );
}

// Right Card - Recent Users
function RightCard() {
  const users = [
    { id: 1, img: imgEllipse4 },
    { id: 2, img: imgEllipse2 },
    { id: 3, img: imgEllipse3 },
    { id: 4, img: imgEllipse5 },
  ];

  return (
    <MockupCard className="h-[328px] left-[873px] top-[594px] w-[230px] p-6 flex flex-col">
      {/* Header with Title lines and Icon */}
      <CardHeader 
        line1ClassName="w-[60%] h-1.5 rounded-full"
        line2ClassName="w-[20%] h-1.5 rounded-full"
        line3ClassName = "w-[30%] h-1.5 rounded-full"
        line4ClassName = "w-[20%] h-1.5 rounded-full"
      />

      {/* User list with dividers */}
      <div className="flex-1 flex flex-col justify-between mt-2 mb-4">
        {users.map((user, index) => (
          <React.Fragment key={user.id}>
            <div className="flex items-center gap-3">
              {/* Avatar on LEFT */}
              <div className="w-[36px] h-[36px] rounded-full overflow-hidden shrink-0">
                <img src={user.img} alt="" className="w-full h-full object-cover" />
              </div>
              {/* Text bars on RIGHT */}
              <div className="flex-1 space-y-2">
                  {/* Row 1: Long + Short */}
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
            {/* Horizontal divider */}
            {index < users.length - 1 && (
              <div className="h-px bg-[#3A3A47]/50 my-1" />
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Blur/Fade effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#222228] via-[#222228]/80 to-transparent pointer-events-none rounded-b-[20px]" />
    </MockupCard>
  );
}

// Main MockupCards Component
export default function MockupCards() {
  return (
    <>
      <LeftCard />
      <TopMiddleCard />
      <BottomMiddleCard />
      <RightCard />
      {/* Bottom small card */}
       <MockupCard className="h-[103px] left-[873px] top-[948px] w-[230px]" />
    </>
  );
}
