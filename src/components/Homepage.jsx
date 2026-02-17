import imgSubtract from "../assets/images/Subtract.png";
import imgFrame from "../assets/Frame.svg";
import imgFeatureIcon1 from "../assets/images/Feature Boxes/Group 102.png";
import imgFeatureIcon2 from "../assets/images/Feature Boxes/Group 103.png";
import imgFeatureIcon3 from "../assets/images/Feature Boxes/Group 105.png";
import imgFeatureIcon4 from "../assets/images/Feature Boxes/Group 106.png";
import imgFeatureIcon5 from "../assets/images/Feature Boxes/Group 129.png";
import imgFeatureIcon6 from "../assets/images/Feature Boxes/Group.png";
import imgCompanyS from "../assets/images/Companies/s.png";
import imgCompanyC from "../assets/images/Companies/c.png";
import imgCompanyN from "../assets/images/Companies/n.png";
import imgCompanyW from "../assets/images/Companies/w.png";
import imgCompanyH from "../assets/images/Companies/h.png";
import imgCompanyA from "../assets/images/Companies/a.png";
import imgGlove from "../assets/images/glove.png";
import imgGuideL from "../assets/images/We're here to guide and help you at all times/l.png";
import imgGuideR from "../assets/images/We're here to guide and help you at all times/r.png";
import imgGuideB from "../assets/images/We're here to guide and help you at all times/b.png";
import imgGuideLogo from "../assets/images/We're here to guide and help you at all times/Vector.png";
import imgEllipse2 from "../assets/images/Ellipse/Ellipse 2.png";
import imgEllipse3 from "../assets/images/Ellipse/Ellipse 3.png";
import imgEllipse4 from "../assets/images/Ellipse/Ellipse 4.png";
import imgEllipse5 from "../assets/images/Ellipse/Ellipse 5.png";
import imgGroup115 from "../assets/images/Ellipse/Group 115.png";
import imgGroup132 from "../assets/images/Ellipse/Group 132.png";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import MockupCards from "./MockupCards";

function FeatureCard({ left, top, title = "Fully Customizable", icon, iconColor = "#222228" }) {
  return (
    <Card 
      className="absolute w-[350px] h-[371px] !bg-[#18181c] !border-0 !rounded-[20px] !shadow-none p-0" 
      style={{ left, top }}
    >
      <CardContent className="flex flex-col items-center pt-[50px] p-0 h-full relative">
        <div 
          className="rounded-[30px] size-[104px] mb-[39px] flex items-center justify-center shrink-0" 
          style={{ backgroundColor: iconColor }} 
        >
          {icon && <img src={icon} alt={title} className="size-[50px] object-contain" />}
        </div>
        <h3 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-white mb-[15px] text-center leading-[32px] shrink-0">
          {title}
        </h3>
        <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#9e9e9e] text-center leading-[28px] w-[303px] mx-auto shrink-0">
          A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
        </p>
      </CardContent>
    </Card>
  );
}

// Placeholder SVG paths - these are decorative elements
import assetsSvgPaths from "../assets/svgPaths";

// Placeholder SVG paths - these are decorative elements
const svgPaths = new Proxy(assetsSvgPaths, {
  get: (target, prop) => {
    return target[prop] || ""; 
  }
});

// Placeholder images - replace these with your downloaded Figma assets
const imgEllipse9 = "data:image/svg+xml,%3Csvg width='66' height='66' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='33' cy='33' r='33' fill='%23FF9898'/%3E%3C/svg%3E";
const imgEllipse10 = "data:image/svg+xml,%3Csvg width='66' height='66' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='33' cy='33' r='33' fill='%238054FF'/%3E%3C/svg%3E";
const imgEllipse11 = "data:image/svg+xml,%3Csvg width='66' height='66' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='33' cy='33' r='33' fill='%23FF9898'/%3E%3C/svg%3E";
// imgEllipse5 is imported from actual file at the top and used by Group19
// imgEllipse6 and 7 are placeholders still used by Group21 and Group23
const imgEllipse6 = "data:image/svg+xml,%3Csvg width='42' height='42' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='21' cy='21' r='21' fill='%23FF9898'/%3E%3C/svg%3E";
const imgEllipse7 = "data:image/svg+xml,%3Csvg width='42' height='42' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='21' cy='21' r='21' fill='%238054FF'/%3E%3C/svg%3E";

function Group6() {
  return (
    <div className="absolute h-[851px] left-[107px] top-[-4px] w-[1227px] opacity-20">
      {/* Vertical grid lines */}
      <div className="absolute w-[1px] h-full left-0 bg-gradient-to-b from-[#404047] to-transparent" />
      <div className="absolute w-[1px] h-full left-[111px] bg-gradient-to-b from-[#404047] to-transparent" />
      <div className="absolute w-[1px] h-full left-[223px] bg-gradient-to-b from-[#404047] to-transparent" />
      <div className="absolute w-[1px] h-full left-[334px] bg-gradient-to-b from-[#404047] to-transparent" />
      <div className="absolute w-[1px] h-full left-[446px] bg-gradient-to-b from-[#404047] to-transparent" />
      <div className="absolute w-[1px] h-full left-[557px] bg-gradient-to-b from-[#404047] to-transparent" />
      <div className="absolute w-[1px] h-full left-[669px] bg-gradient-to-b from-[#404047] to-transparent" />
      <div className="absolute w-[1px] h-full left-[780px] bg-gradient-to-b from-[#404047] to-transparent" />
      <div className="absolute w-[1px] h-full left-[892px] bg-gradient-to-b from-[#404047] to-transparent" />
      <div className="absolute w-[1px] h-full left-[1003px] bg-gradient-to-b from-[#404047] to-transparent" />
      <div className="absolute w-[1px] h-full left-[1115px] bg-gradient-to-b from-[#404047] to-transparent" />
      <div className="absolute w-[1px] h-full left-[1226px] bg-gradient-to-b from-[#404047] to-transparent" />
      <svg className="hidden" fill="none" preserveAspectRatio="none" viewBox="0 0 1227 851">
        <g id="Group 95">
          <path clipRule="evenodd" d={svgPaths.p35126e00} fill="url(#paint0_linear_1_1326)" fillRule="evenodd" id="Line 2 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p326af700} fill="url(#paint1_linear_1_1326)" fillRule="evenodd" id="Line 3 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p24afd900} fill="url(#paint2_linear_1_1326)" fillRule="evenodd" id="Line 4 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p2f2152c0} fill="url(#paint3_linear_1_1326)" fillRule="evenodd" id="Line 5 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p3e817580} fill="url(#paint4_linear_1_1326)" fillRule="evenodd" id="Line 6 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p11385e80} fill="url(#paint5_linear_1_1326)" fillRule="evenodd" id="Line 7 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p486df00} fill="url(#paint6_linear_1_1326)" fillRule="evenodd" id="Line 8 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p2eecf900} fill="url(#paint7_linear_1_1326)" fillRule="evenodd" id="Line 9 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p133bf900} fill="url(#paint8_linear_1_1326)" fillRule="evenodd" id="Line 10 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p3c71ea80} fill="url(#paint9_linear_1_1326)" fillRule="evenodd" id="Line 11 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p3a5bd980} fill="url(#paint10_linear_1_1326)" fillRule="evenodd" id="Line 12 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p86dfe00} fill="url(#paint11_linear_1_1326)" fillRule="evenodd" id="Line 13 (Stroke)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1326" x1="1.77905e-05" x2="0.654542" y1="425.5" y2="425.5">
            <stop stopColor="#404047" />
            <stop offset="1" stopColor="#404047" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1326" x1="111.471" x2="112.125" y1="425.5" y2="425.5">
            <stop stopColor="#404047" />
            <stop offset="1" stopColor="#404047" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1326" x1="222.942" x2="223.597" y1="425.5" y2="425.5">
            <stop stopColor="#404047" />
            <stop offset="1" stopColor="#404047" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_1326" x1="334.413" x2="335.067" y1="425.5" y2="425.5">
            <stop stopColor="#404047" />
            <stop offset="1" stopColor="#404047" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_1326" x1="445.884" x2="446.538" y1="425.5" y2="425.5">
            <stop stopColor="#404047" />
            <stop offset="1" stopColor="#404047" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_1326" x1="557.355" x2="558.009" y1="425.5" y2="425.5">
            <stop stopColor="#404047" />
            <stop offset="1" stopColor="#404047" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_1326" x1="668.826" x2="669.48" y1="425.5" y2="425.5">
            <stop stopColor="#404047" />
            <stop offset="1" stopColor="#404047" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_1326" x1="780.297" x2="780.951" y1="425.5" y2="425.5">
            <stop stopColor="#404047" />
            <stop offset="1" stopColor="#404047" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_1326" x1="891.768" x2="892.422" y1="425.5" y2="425.5">
            <stop stopColor="#404047" />
            <stop offset="1" stopColor="#404047" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_1326" x1="1003.24" x2="1003.89" y1="425.5" y2="425.5">
            <stop stopColor="#404047" />
            <stop offset="1" stopColor="#404047" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_1326" x1="1114.71" x2="1115.36" y1="425.5" y2="425.5">
            <stop stopColor="#404047" />
            <stop offset="1" stopColor="#404047" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_1326" x1="1226" x2="1226.65" y1="386.5" y2="386.5">
            <stop stopColor="#404047" />
            <stop offset="1" stopColor="#404047" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute left-[130px] size-[678px] top-[2223px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 678 678">
        <g id="Group 122">
          <circle cx="339" cy="339" fill="var(--fill-0, #18181C)" id="Ellipse 9" r="64.5714" />
          <circle cx="339" cy="339" id="Ellipse 10" r="129.719" stroke="var(--stroke-0, #222228)" />
          <circle cx="339" cy="339" id="Ellipse 11" r="189.986" stroke="var(--stroke-0, #222228)" />
          <circle cx="339" cy="339" id="Ellipse 12" r="189.986" stroke="var(--stroke-0, #222228)" />
          <circle cx="339" cy="339" id="Ellipse 12_2" r="254.557" stroke="var(--stroke-0, #222228)" />
          <circle cx="339" cy="339" id="Ellipse 13" opacity="0.5" r="338.5" stroke="var(--stroke-0, #222228)" />
        </g>
      </svg>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents left-[130px] top-[2223px]">
      <Group32 />
    </div>
  );
}



function Frame2() {
  return null;
}

function Frame8() {
  return null;
}






function Frame() {
  return (
    <div className="absolute h-[37.76px] left-[194px] top-[3282px] w-[101.07px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.07 37.76">
        <g clipPath="url(#clip0_1_1293)" id="Frame">
          <path d={svgPaths.p25e3da00} fill="var(--fill-0, #3B3B42)" id="Vector" />
          <path d={svgPaths.pa9f83f0} fill="var(--fill-0, #3B3B42)" id="Vector_2" />
          <path d={svgPaths.p3daab0b0} fill="var(--fill-0, #3B3B42)" id="Vector_3" />
          <path d={svgPaths.p30750900} fill="var(--fill-0, #3B3B42)" id="Vector_4" />
          <path d={svgPaths.pe1c0200} fill="var(--fill-0, #3B3B42)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1293">
            <rect fill="white" height="37.76" width="101.07" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}


function Group7() {
  return (
    <div className="absolute inset-[66.53%_66.36%_32.96%_27.01%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 95.42 25.15">
        <g id="Group 96">
          <path d={svgPaths.p177eb100} fill="var(--fill-0, #3B3B42)" id="Vector" />
          <path d={svgPaths.p17e4bb80} fill="var(--fill-0, #3B3B42)" id="Vector_2" />
          <path d={svgPaths.p33f37030} fill="var(--fill-0, #3B3B42)" id="Vector_3" />
          <path d={svgPaths.p33a21ec0} fill="var(--fill-0, #3B3B42)" id="Vector_4" />
          <path d={svgPaths.p22da26e0} fill="var(--fill-0, #3B3B42)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[66.57%_52.95%_33%_39.72%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105.46 21.02">
        <g id="Group 97">
          <path d={svgPaths.p9ca3b80} fill="var(--fill-0, #3B3B42)" id="Vector" />
          <path d={svgPaths.p2ef99470} fill="var(--fill-0, #3B3B42)" id="Vector_2" />
          <path d={svgPaths.p35c98400} fill="var(--fill-0, #3B3B42)" id="Vector_3" />
          <path d={svgPaths.p1a9e8d80} fill="var(--fill-0, #3B3B42)" id="Vector_4" />
          <path d={svgPaths.p1976e200} fill="var(--fill-0, #3B3B42)" id="Vector_5" />
          <path d={svgPaths.p1853ca80} fill="var(--fill-0, #3B3B42)" id="Vector_6" />
          <path d={svgPaths.p8278800} fill="var(--fill-0, #3B3B42)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[66.61%_40.68%_33%_53.4%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.18 19.22">
        <g id="Group 98">
          <path d={svgPaths.p22a6b700} fill="var(--fill-0, #3B3B42)" id="Vector" />
          <path d={svgPaths.p16f5a1f0} fill="var(--fill-0, #3B3B42)" id="Vector_2" />
          <path d={svgPaths.p2600da00} fill="var(--fill-0, #3B3B42)" id="Vector_3" />
          <path d={svgPaths.p2f992a00} fill="var(--fill-0, #3B3B42)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[66.55%_27.79%_32.93%_67.36%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.8713 25.4573">
        <g id="Group 99">
          <path d={svgPaths.p20535200} fill="var(--fill-0, #3B3B42)" id="Vector" />
          <path d={svgPaths.p33b85d00} fill="var(--fill-0, #3B3B42)" id="Vector_2" />
          <path d={svgPaths.p33afec00} fill="var(--fill-0, #3B3B42)" id="Vector_3" />
          <path d={svgPaths.p2301ea00} fill="var(--fill-0, #3B3B42)" id="Vector_4" />
          <path d={svgPaths.p1322ab00} fill="var(--fill-0, #3B3B42)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[66.55%_14.65%_32.97%_80.49%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.9998 23.9306">
        <g id="Group 100">
          <path d={svgPaths.p241c9320} fill="var(--fill-0, #3B3B42)" id="Vector" />
          <path d={svgPaths.p2e278900} fill="var(--fill-0, #3B3B42)" id="Vector_2" />
          <path d={svgPaths.p12ff4e00} fill="var(--fill-0, #3B3B42)" id="Vector_3" />
          <path d={svgPaths.p29bfb80} fill="var(--fill-0, #3B3B42)" id="Vector_4" />
          <path d={svgPaths.p1706c000} fill="var(--fill-0, #3B3B42)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Component0043DModel() {
  return (
    <div className="absolute h-[45.96px] left-[318px] overflow-clip top-[1499px] w-[44.782px]" data-name="004-3d model">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.7819 45.9603">
        <g id="Group">
          <path d={svgPaths.p17003380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[318px] top-[1499px]">
      <Component0043DModel />
    </div>
  );
}



function Group1() {
  return (
    <div className="absolute inset-[38.47%_74.86%_60.62%_22.08%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.0001 45">
        <g id="Group">
          <path d={svgPaths.p1fda8400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[38.47%_74.86%_60.62%_22.08%]">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[38.45%_48.4%_60.62%_48.47%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.9964 45.9998">
        <g id="Group">
          <path d={svgPaths.pe812000} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[38.45%_48.4%_60.62%_48.47%]">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[38.47%_22.08%_60.65%_74.86%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 43.4844">
        <g id="Group">
          <path d={svgPaths.pb5e9040} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[38.47%_22.08%_60.65%_74.86%]">
      <Group3 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[952px] top-[674px]">
      <div className="absolute bg-[#313139] h-[6px] left-[952px] rounded-[33px] top-[674px] w-[74px]" />
      <div className="absolute bg-[#313139] h-[6px] left-[1034px] rounded-[33px] top-[674px] w-[24px]" />
      <div className="absolute bg-[#313139] h-[6px] left-[998px] rounded-[33px] top-[688px] w-[24px]" />
      <div className="absolute bg-[#313139] h-[6px] left-[952px] rounded-[33px] top-[688px] w-[36px]" />
    </div>
  );
}

/* Commented out to prevent overlap with MockupCards
function Group18() {
  return (
    <div className="absolute contents left-[893px] top-[663px]">
      <div className="absolute left-[893px] size-[42px] top-[663px]">
        <img alt="" className="block max-w-none size-full" height="42" src={imgEllipse4} width="42" />
      </div>
      <Group17 />
      <div className="absolute h-0 left-[893px] top-[717px] w-[192px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 1">
            <line id="Line 14" stroke="var(--stroke-0, #3D3D49)" x2="192" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
*/

function Group20() {
  return (
    <div className="absolute contents left-[952px] top-[733px]">
      <div className="absolute bg-[#313139] h-[6px] left-[952px] rounded-[33px] top-[733px] w-[74px]" />
      <div className="absolute bg-[#313139] h-[6px] left-[1034px] rounded-[33px] top-[733px] w-[24px]" />
      <div className="absolute bg-[#313139] h-[6px] left-[998px] rounded-[33px] top-[747px] w-[24px]" />
      <div className="absolute bg-[#313139] h-[6px] left-[952px] rounded-[33px] top-[747px] w-[36px]" />
    </div>
  );
}

/* Commented out to prevent overlap with MockupCards
function Group19() {
  return (
    <div className="absolute contents left-[893px] top-[722px]">
      <div className="absolute left-[893px] size-[42px] top-[722px]">
        <img alt="" className="block max-w-none size-full" height="42" src={imgEllipse5} width="42" />
      </div>
      <Group20 />
      <div className="absolute h-0 left-[893px] top-[776px] w-[192px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 1">
            <line id="Line 14" stroke="var(--stroke-0, #3D3D49)" x2="192" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
*/

function Group22() {
  return (
    <div className="absolute contents left-[952px] top-[792px]">
      <div className="absolute bg-[#313139] h-[6px] left-[952px] rounded-[33px] top-[792px] w-[74px]" />
      <div className="absolute bg-[#313139] h-[6px] left-[1034px] rounded-[33px] top-[792px] w-[24px]" />
      <div className="absolute bg-[#313139] h-[6px] left-[998px] rounded-[33px] top-[806px] w-[24px]" />
      <div className="absolute bg-[#313139] h-[6px] left-[952px] rounded-[33px] top-[806px] w-[36px]" />
    </div>
  );
}

/* Commented out to prevent overlap with MockupCards
function Group21() {
  return (
    <div className="absolute contents left-[893px] top-[781px]">
      <div className="absolute left-[893px] size-[42px] top-[781px]">
        <img alt="" className="block max-w-none size-full" height="42" src={imgEllipse6} width="42" />
      </div>
      <Group22 />
      <div className="absolute h-0 left-[893px] top-[835px] w-[192px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 1">
            <line id="Line 14" stroke="var(--stroke-0, #3D3D49)" x2="192" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
*/

function Group24() {
  return (
    <div className="absolute contents left-[952px] top-[851px]">
      <div className="absolute bg-[#313139] h-[6px] left-[952px] rounded-[33px] top-[851px] w-[74px]" />
      <div className="absolute bg-[#313139] h-[6px] left-[1034px] rounded-[33px] top-[851px] w-[24px]" />
      <div className="absolute bg-[#313139] h-[6px] left-[998px] rounded-[33px] top-[865px] w-[24px]" />
      <div className="absolute bg-[#313139] h-[6px] left-[952px] rounded-[33px] top-[865px] w-[36px]" />
    </div>
  );
}

/* Commented out to prevent overlap with MockupCards
function Group23() {
  return (
    <div className="absolute contents left-[893px] top-[840px]">
      <div className="absolute left-[893px] size-[42px] top-[840px]">
        <img alt="" className="block max-w-none size-full" height="42" src={imgEllipse7} width="42" />
      </div>
      <Group24 />
      <div className="absolute h-0 left-[893px] top-[894px] w-[192px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 1">
            <line id="Line 14" stroke="var(--stroke-0, #3D3D49)" x2="192" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
*/

function Group26() {
  return null; // Removed phantom skeleton
}

/* Commented out to prevent overlap with MockupCards
function Group25() {
  return (
    <div className="absolute contents left-[893px] top-[619px]">
      <Group26 />
      <div className="absolute bg-[#313139] left-[1065px] rounded-[5px] size-[20px] top-[619px]" />
    </div>
  );
}
*/

function Group29() {
  return null; // Removed phantom skeleton
}

function Group28() {
  return null; // Removed phantom skeleton
}

/* Commented out to prevent overlap with MockupCards  
function Group27() {
  return (
    <div className="absolute contents left-[634px] top-[619px]">
      <div className="absolute inset-[13.42%_45.49%_84.34%_46.81%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111 111">
          <path d={svgPaths.p2362d180} fill="var(--fill-0, #313139)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[13.6%_46.13%_84.53%_47.45%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.5 92.4848">
          <path d={svgPaths.p17479000} fill="var(--fill-0, #222228)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[13.42%_45.52%_84.35%_46.84%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110.149 110.149">
          <path d={svgPaths.pe44c080} fill="url(#paint0_linear_1_997)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_997" x1="-2.71297e-07" x2="114.203" y1="12.5169" y2="17.5157">
              <stop stopColor="#FF9898" />
              <stop offset="1" stopColor="#8054FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[13.98%_47.43%_84.93%_48.82%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
          <circle cx="27" cy="27" fill="var(--fill-0, #313139)" id="Ellipse 7" r="27" />
        </svg>
      </div>
      <div className="absolute inset-[14.14%_47.99%_85.09%_49.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
          <circle cx="19" cy="19" fill="var(--fill-0, #222228)" id="Ellipse 8" r="19" />
        </svg>
      </div>
      <Group28 />
    </div>
  );
}
*/

function Frame1() {
  return (
    <div className="absolute h-[369px] left-[721px] top-[3478px] w-[554px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 554 369">
        <g clipPath="url(#clip0_1_1025)" id="Frame">
          <path d={svgPaths.p2504cc80} fill="var(--fill-0, #231F20)" id="Vector" />
          <path d={svgPaths.p17b3200} fill="var(--fill-0, #231F20)" id="Vector_2" />
          <path d={svgPaths.p2ebb9b00} fill="var(--fill-0, #231F20)" id="Vector_3" />
          <path d={svgPaths.p33abb2f0} fill="var(--fill-0, #231F20)" id="Vector_4" />
          <path d={svgPaths.p3ca26d00} fill="var(--fill-0, #231F20)" id="Vector_5" />
          <path d={svgPaths.p1140f4c0} fill="var(--fill-0, #231F20)" id="Vector_6" />
          <path d={svgPaths.p17346572} fill="var(--fill-0, #231F20)" id="Vector_7" />
          <path d={svgPaths.p29825cc0} fill="var(--fill-0, #231F20)" id="Vector_8" />
          <path d={svgPaths.p3992bf80} fill="var(--fill-0, #231F20)" id="Vector_9" />
          <path d={svgPaths.p14e7480} fill="var(--fill-0, #231F20)" id="Vector_10" />
          <path d={svgPaths.p3f0f1e00} fill="var(--fill-0, #231F20)" id="Vector_11" />
          <path d={svgPaths.p30949680} fill="var(--fill-0, #231F20)" id="Vector_12" />
          <path d={svgPaths.p5e0b380} fill="var(--fill-0, #231F20)" id="Vector_13" />
          <path d={svgPaths.p19f5fa80} fill="var(--fill-0, #231F20)" id="Vector_14" />
          <path d={svgPaths.pfd01300} fill="var(--fill-0, #231F20)" id="Vector_15" />
          <path d={svgPaths.p127bed80} fill="var(--fill-0, #231F20)" id="Vector_16" />
          <path d={svgPaths.pf6d8e00} fill="var(--fill-0, #231F20)" id="Vector_17" />
          <path d={svgPaths.p10db1280} fill="var(--fill-0, #231F20)" id="Vector_18" />
          <path d={svgPaths.p1301fef0} fill="var(--fill-0, #231F20)" id="Vector_19" />
          <path d={svgPaths.p2f7e6500} fill="var(--fill-0, #231F20)" id="Vector_20" />
          <path d={svgPaths.pb5f6680} fill="var(--fill-0, #231F20)" id="Vector_21" />
          <path d={svgPaths.p36257c80} fill="var(--fill-0, #231F20)" id="Vector_22" />
          <path d={svgPaths.p2f889c00} fill="var(--fill-0, #231F20)" id="Vector_23" />
          <path d={svgPaths.p240ddf80} fill="var(--fill-0, #231F20)" id="Vector_24" />
          <path d={svgPaths.p14757a40} fill="var(--fill-0, #231F20)" id="Vector_25" />
          <path d={svgPaths.p35677800} fill="var(--fill-0, #231F20)" id="Vector_26" />
          <path d={svgPaths.p10524200} fill="var(--fill-0, #231F20)" id="Vector_27" />
          <path d={svgPaths.p26213100} fill="var(--fill-0, #231F20)" id="Vector_28" />
          <path d={svgPaths.pf690700} fill="var(--fill-0, #231F20)" id="Vector_29" />
          <path d={svgPaths.pb61a500} fill="var(--fill-0, #231F20)" id="Vector_30" />
          <path d={svgPaths.p22cf2300} fill="var(--fill-0, #231F20)" id="Vector_31" />
          <path d={svgPaths.p2d34700} fill="var(--fill-0, #231F20)" id="Vector_32" />
          <path d={svgPaths.p334d4780} fill="var(--fill-0, #231F20)" id="Vector_33" />
          <path d={svgPaths.p19dc9900} fill="var(--fill-0, #231F20)" id="Vector_34" />
          <path d={svgPaths.p350f1400} fill="var(--fill-0, #231F20)" id="Vector_35" />
          <path d={svgPaths.p34e4aec0} fill="var(--fill-0, #231F20)" id="Vector_36" />
          <path d={svgPaths.p239e2c00} fill="var(--fill-0, #231F20)" id="Vector_37" />
          <path d={svgPaths.pa714600} fill="var(--fill-0, #231F20)" id="Vector_38" />
          <path d={svgPaths.p3dc21400} fill="var(--fill-0, #231F20)" id="Vector_39" />
          <path d={svgPaths.p2e063100} fill="var(--fill-0, #231F20)" id="Vector_40" />
          <path d={svgPaths.p38d40700} fill="var(--fill-0, #231F20)" id="Vector_41" />
          <path d={svgPaths.p38d4d580} fill="var(--fill-0, #231F20)" id="Vector_42" />
          <path d={svgPaths.p1194b800} fill="var(--fill-0, #231F20)" id="Vector_43" />
          <path d={svgPaths.p142b680} fill="var(--fill-0, #231F20)" id="Vector_44" />
          <path d={svgPaths.p3b842a40} fill="var(--fill-0, #231F20)" id="Vector_45" />
          <path d={svgPaths.p3931f100} fill="var(--fill-0, #231F20)" id="Vector_46" />
          <path d={svgPaths.p1495e600} fill="var(--fill-0, #231F20)" id="Vector_47" />
          <path d={svgPaths.p5dfef0} fill="var(--fill-0, #231F20)" id="Vector_48" />
          <path d={svgPaths.p3becb280} fill="var(--fill-0, #231F20)" id="Vector_49" />
          <path d={svgPaths.p31c08400} fill="var(--fill-0, #231F20)" id="Vector_50" />
          <path d={svgPaths.p2fa818a0} fill="var(--fill-0, #231F20)" id="Vector_51" />
          <path d={svgPaths.p27d028f0} fill="var(--fill-0, #231F20)" id="Vector_52" />
          <path d={svgPaths.p340bc470} fill="var(--fill-0, #231F20)" id="Vector_53" />
          <path d={svgPaths.p2df71c00} fill="var(--fill-0, #231F20)" id="Vector_54" />
          <path d={svgPaths.p31f08d80} fill="var(--fill-0, #231F20)" id="Vector_55" />
          <path d={svgPaths.p3a234e80} fill="var(--fill-0, #231F20)" id="Vector_56" />
          <path d={svgPaths.p39a0ba80} fill="var(--fill-0, #231F20)" id="Vector_57" />
          <path d={svgPaths.p2e151100} fill="var(--fill-0, #231F20)" id="Vector_58" />
          <path d={svgPaths.p263aec00} fill="var(--fill-0, #231F20)" id="Vector_59" />
          <path d={svgPaths.p6495f00} fill="var(--fill-0, #231F20)" id="Vector_60" />
          <path d={svgPaths.p343ce8c0} fill="var(--fill-0, #231F20)" id="Vector_61" />
          <path d={svgPaths.p2c480600} fill="var(--fill-0, #231F20)" id="Vector_62" />
          <path d={svgPaths.pe82c800} fill="var(--fill-0, #231F20)" id="Vector_63" />
          <path d={svgPaths.p2aa93200} fill="var(--fill-0, #231F20)" id="Vector_64" />
          <path d={svgPaths.p2a4dc500} fill="var(--fill-0, #231F20)" id="Vector_65" />
          <path d={svgPaths.p5ce0500} fill="var(--fill-0, #231F20)" id="Vector_66" />
          <path d={svgPaths.p94e1900} fill="var(--fill-0, #231F20)" id="Vector_67" />
          <path d={svgPaths.p28708700} fill="var(--fill-0, #231F20)" id="Vector_68" />
          <path d={svgPaths.pb462200} fill="var(--fill-0, #231F20)" id="Vector_69" />
          <path d={svgPaths.p1bd4d500} fill="var(--fill-0, #231F20)" id="Vector_70" />
          <path d={svgPaths.p20815780} fill="var(--fill-0, #231F20)" id="Vector_71" />
          <path d={svgPaths.p21083680} fill="var(--fill-0, #231F20)" id="Vector_72" />
          <path d={svgPaths.p10f97400} fill="var(--fill-0, #231F20)" id="Vector_73" />
          <path d={svgPaths.p2f1e5ef0} fill="var(--fill-0, #231F20)" id="Vector_74" />
          <path d={svgPaths.p1b85a470} fill="var(--fill-0, #231F20)" id="Vector_75" />
          <path d={svgPaths.p71f6000} fill="var(--fill-0, #231F20)" id="Vector_76" />
          <path d={svgPaths.p138b0200} fill="var(--fill-0, #231F20)" id="Vector_77" />
          <path d={svgPaths.p2e9d77f0} fill="var(--fill-0, #231F20)" id="Vector_78" />
          <path d={svgPaths.p38a23b00} fill="var(--fill-0, #231F20)" id="Vector_79" />
          <path d={svgPaths.p30e8bd80} fill="var(--fill-0, #231F20)" id="Vector_80" />
          <path d={svgPaths.p1bc298f0} fill="var(--fill-0, #231F20)" id="Vector_81" />
          <path d={svgPaths.pa459200} fill="var(--fill-0, #231F20)" id="Vector_82" />
          <path d={svgPaths.p261ce1f2} fill="var(--fill-0, #231F20)" id="Vector_83" />
          <path d={svgPaths.p3de54d00} fill="var(--fill-0, #231F20)" id="Vector_84" />
          <path d={svgPaths.p1da51f00} fill="var(--fill-0, #231F20)" id="Vector_85" />
          <path d={svgPaths.p167ff100} fill="var(--fill-0, #231F20)" id="Vector_86" />
          <path d={svgPaths.p24c7da00} fill="var(--fill-0, #231F20)" id="Vector_87" />
          <path d={svgPaths.p4063a40} fill="var(--fill-0, #231F20)" id="Vector_88" />
          <path d={svgPaths.p2afb7980} fill="var(--fill-0, #231F20)" id="Vector_89" />
          <path d={svgPaths.p29d68e80} fill="var(--fill-0, #231F20)" id="Vector_90" />
          <path d={svgPaths.p3e6e0500} fill="var(--fill-0, #231F20)" id="Vector_91" />
          <path d={svgPaths.p7be2c00} fill="var(--fill-0, #231F20)" id="Vector_92" />
          <path d={svgPaths.p2065ba00} fill="var(--fill-0, #231F20)" id="Vector_93" />
          <path d={svgPaths.p48cc6f0} fill="var(--fill-0, #231F20)" id="Vector_94" />
          <path d={svgPaths.p19b8ba00} fill="var(--fill-0, #231F20)" id="Vector_95" />
          <path d={svgPaths.p1585800} fill="var(--fill-0, #231F20)" id="Vector_96" />
          <path d={svgPaths.p1f6ae900} fill="var(--fill-0, #231F20)" id="Vector_97" />
          <path d={svgPaths.p18810980} fill="var(--fill-0, #231F20)" id="Vector_98" />
          <path d={svgPaths.p1e469700} fill="var(--fill-0, #231F20)" id="Vector_99" />
          <path d={svgPaths.p22dd2a00} fill="var(--fill-0, #231F20)" id="Vector_100" />
          <path d={svgPaths.p21684780} fill="var(--fill-0, #231F20)" id="Vector_101" />
          <path d={svgPaths.p394ddd00} fill="var(--fill-0, #231F20)" id="Vector_102" />
          <path d={svgPaths.p21e37480} fill="var(--fill-0, #231F20)" id="Vector_103" />
          <path d={svgPaths.p37941780} fill="var(--fill-0, #231F20)" id="Vector_104" />
          <path d={svgPaths.p3f9fc100} fill="var(--fill-0, #231F20)" id="Vector_105" />
          <path d={svgPaths.p1b44db00} fill="var(--fill-0, #231F20)" id="Vector_106" />
          <path d={svgPaths.p1513e500} fill="var(--fill-0, #231F20)" id="Vector_107" />
          <path d={svgPaths.p2b37a200} fill="var(--fill-0, #231F20)" id="Vector_108" />
          <path d={svgPaths.pee5b380} fill="var(--fill-0, #231F20)" id="Vector_109" />
          <path d={svgPaths.p2d3ba700} fill="var(--fill-0, #231F20)" id="Vector_110" />
          <path d={svgPaths.p1d713280} fill="var(--fill-0, #231F20)" id="Vector_111" />
          <path d={svgPaths.p21b24ff0} fill="var(--fill-0, #231F20)" id="Vector_112" />
          <path d={svgPaths.p3c057100} fill="var(--fill-0, #231F20)" id="Vector_113" />
          <path d={svgPaths.pb0df700} fill="var(--fill-0, #231F20)" id="Vector_114" />
          <path d={svgPaths.p4fa48e0} fill="var(--fill-0, #231F20)" id="Vector_115" />
          <path d={svgPaths.p298de5f0} fill="var(--fill-0, #231F20)" id="Vector_116" />
          <path d={svgPaths.p3fbce600} fill="var(--fill-0, #231F20)" id="Vector_117" />
          <path d={svgPaths.p24a9b9c0} fill="var(--fill-0, #231F20)" id="Vector_118" />
          <path d={svgPaths.p15c5e4f0} fill="var(--fill-0, #231F20)" id="Vector_119" />
          <path d={svgPaths.p15d63900} fill="var(--fill-0, #231F20)" id="Vector_120" />
          <path d={svgPaths.p35790c00} fill="var(--fill-0, #231F20)" id="Vector_121" />
          <path d={svgPaths.pf16c000} fill="var(--fill-0, #231F20)" id="Vector_122" />
          <path d={svgPaths.p1c17d680} fill="var(--fill-0, #231F20)" id="Vector_123" />
          <path d={svgPaths.p214b7870} fill="var(--fill-0, #231F20)" id="Vector_124" />
          <path d={svgPaths.p13d45800} fill="var(--fill-0, #231F20)" id="Vector_125" />
          <path d={svgPaths.p30764300} fill="var(--fill-0, #231F20)" id="Vector_126" />
          <path d={svgPaths.p11ce800} fill="var(--fill-0, #231F20)" id="Vector_127" />
          <path d={svgPaths.p352fa000} fill="var(--fill-0, #231F20)" id="Vector_128" />
          <path d={svgPaths.p381c3d00} fill="var(--fill-0, #231F20)" id="Vector_129" />
          <path d={svgPaths.pc9a3a70} fill="var(--fill-0, #231F20)" id="Vector_130" />
          <path d={svgPaths.p3958cb80} fill="var(--fill-0, #231F20)" id="Vector_131" />
          <path d={svgPaths.p9eb0d00} fill="var(--fill-0, #231F20)" id="Vector_132" />
          <path d={svgPaths.p3d4b86f0} fill="var(--fill-0, #231F20)" id="Vector_133" />
          <path d={svgPaths.p2896ed00} fill="var(--fill-0, #231F20)" id="Vector_134" />
          <path d={svgPaths.p9991200} fill="var(--fill-0, #231F20)" id="Vector_135" />
          <path d={svgPaths.p118ec080} fill="var(--fill-0, #231F20)" id="Vector_136" />
          <path d={svgPaths.p32cda200} fill="var(--fill-0, #231F20)" id="Vector_137" />
          <path d={svgPaths.p28c3bf00} fill="var(--fill-0, #231F20)" id="Vector_138" />
          <path d={svgPaths.p379b6c00} fill="var(--fill-0, #231F20)" id="Vector_139" />
          <path d={svgPaths.p11950480} fill="var(--fill-0, #231F20)" id="Vector_140" />
          <path d={svgPaths.p38e2aa80} fill="var(--fill-0, #231F20)" id="Vector_141" />
          <path d={svgPaths.p1ca7bef0} fill="var(--fill-0, #231F20)" id="Vector_142" />
          <path d={svgPaths.p4bf5900} fill="var(--fill-0, #231F20)" id="Vector_143" />
          <path d={svgPaths.p225dd500} fill="var(--fill-0, #231F20)" id="Vector_144" />
          <path d={svgPaths.p2d8a6c80} fill="var(--fill-0, #231F20)" id="Vector_145" />
          <path d={svgPaths.p143c8de0} fill="var(--fill-0, #231F20)" id="Vector_146" />
          <path d={svgPaths.p2ed5c440} fill="var(--fill-0, #231F20)" id="Vector_147" />
          <path d={svgPaths.p1ba8da80} fill="var(--fill-0, #231F20)" id="Vector_148" />
          <path d={svgPaths.p68f51c0} fill="var(--fill-0, #231F20)" id="Vector_149" />
          <path d={svgPaths.p2e1eb000} fill="var(--fill-0, #231F20)" id="Vector_150" />
          <path d={svgPaths.p331e7c80} fill="var(--fill-0, #231F20)" id="Vector_151" />
          <path d={svgPaths.pa2e9900} fill="var(--fill-0, #231F20)" id="Vector_152" />
          <path d={svgPaths.p23e07180} fill="var(--fill-0, #231F20)" id="Vector_153" />
          <path d={svgPaths.p2498b740} fill="var(--fill-0, #231F20)" id="Vector_154" />
          <path d={svgPaths.p2fc39180} fill="var(--fill-0, #231F20)" id="Vector_155" />
          <path d={svgPaths.pfd8cc80} fill="var(--fill-0, #231F20)" id="Vector_156" />
          <path d={svgPaths.p310ec200} fill="var(--fill-0, #231F20)" id="Vector_157" />
          <path d={svgPaths.p57e6940} fill="var(--fill-0, #231F20)" id="Vector_158" />
          <path d={svgPaths.p2e323e0} fill="var(--fill-0, #231F20)" id="Vector_159" />
          <path d={svgPaths.p1881380} fill="var(--fill-0, #231F20)" id="Vector_160" />
          <path d={svgPaths.p10af4400} fill="var(--fill-0, #231F20)" id="Vector_161" />
          <path d={svgPaths.p1adef600} fill="var(--fill-0, #231F20)" id="Vector_162" />
          <path d={svgPaths.p23930440} fill="var(--fill-0, #231F20)" id="Vector_163" />
          <path d={svgPaths.p1bf6cf70} fill="var(--fill-0, #231F20)" id="Vector_164" />
          <path d={svgPaths.p280ab200} fill="var(--fill-0, #231F20)" id="Vector_165" />
          <path d={svgPaths.p28fe3300} fill="var(--fill-0, #231F20)" id="Vector_166" />
          <path d={svgPaths.p39d6e730} fill="var(--fill-0, #231F20)" id="Vector_167" />
          <path d={svgPaths.pc377200} fill="var(--fill-0, #231F20)" id="Vector_168" />
          <path d={svgPaths.p23a4f880} fill="var(--fill-0, #231F20)" id="Vector_169" />
          <path d={svgPaths.p22c9d080} fill="var(--fill-0, #231F20)" id="Vector_170" />
          <path d={svgPaths.p1ba9ba00} fill="var(--fill-0, #231F20)" id="Vector_171" />
          <path d={svgPaths.p1d302000} fill="var(--fill-0, #231F20)" id="Vector_172" />
          <path d={svgPaths.p37bab400} fill="var(--fill-0, #231F20)" id="Vector_173" />
          <path d={svgPaths.pbb0e800} fill="var(--fill-0, #231F20)" id="Vector_174" />
          <path d={svgPaths.p3ab58780} fill="var(--fill-0, #231F20)" id="Vector_175" />
          <path d={svgPaths.p301b6080} fill="var(--fill-0, #231F20)" id="Vector_176" />
          <path d={svgPaths.p462e400} fill="var(--fill-0, #231F20)" id="Vector_177" />
          <path d={svgPaths.p2fcc2f00} fill="var(--fill-0, #231F20)" id="Vector_178" />
          <path d={svgPaths.p3ae64700} fill="var(--fill-0, #231F20)" id="Vector_179" />
          <path d={svgPaths.p15c4b000} fill="var(--fill-0, #231F20)" id="Vector_180" />
          <path d={svgPaths.p226b3d00} fill="var(--fill-0, #231F20)" id="Vector_181" />
          <path d={svgPaths.p34468440} fill="var(--fill-0, #231F20)" id="Vector_182" />
          <path d={svgPaths.p7c57080} fill="var(--fill-0, #231F20)" id="Vector_183" />
          <path d={svgPaths.p2d06d700} fill="var(--fill-0, #231F20)" id="Vector_184" />
          <path d={svgPaths.p17c93300} fill="var(--fill-0, #231F20)" id="Vector_185" />
          <path d={svgPaths.p2032eb80} fill="var(--fill-0, #231F20)" id="Vector_186" />
          <path d={svgPaths.p257c2200} fill="var(--fill-0, #231F20)" id="Vector_187" />
          <path d={svgPaths.p3656c000} fill="var(--fill-0, #231F20)" id="Vector_188" />
          <path d={svgPaths.p9bbb200} fill="var(--fill-0, #231F20)" id="Vector_189" />
          <path d={svgPaths.p24a54000} fill="var(--fill-0, #231F20)" id="Vector_190" />
          <path d={svgPaths.p23088d00} fill="var(--fill-0, #231F20)" id="Vector_191" />
          <path d={svgPaths.p16ea7af0} fill="var(--fill-0, #231F20)" id="Vector_192" />
          <path d={svgPaths.p2a071c00} fill="var(--fill-0, #231F20)" id="Vector_193" />
          <path d={svgPaths.p35c5c980} fill="var(--fill-0, #231F20)" id="Vector_194" />
          <path d={svgPaths.p1afc1e80} fill="var(--fill-0, #231F20)" id="Vector_195" />
          <path d={svgPaths.p39f2aac0} fill="var(--fill-0, #231F20)" id="Vector_196" />
          <path d={svgPaths.p4b51600} fill="var(--fill-0, #231F20)" id="Vector_197" />
          <path d={svgPaths.pd26ae00} fill="var(--fill-0, #231F20)" id="Vector_198" />
          <path d={svgPaths.p293a8e00} fill="var(--fill-0, #231F20)" id="Vector_199" />
          <path d={svgPaths.p13eadc80} fill="var(--fill-0, #231F20)" id="Vector_200" />
          <path d={svgPaths.p207f5000} fill="var(--fill-0, #231F20)" id="Vector_201" />
          <path d={svgPaths.p8980480} fill="var(--fill-0, #231F20)" id="Vector_202" />
          <path d={svgPaths.p1e11ae80} fill="var(--fill-0, #231F20)" id="Vector_203" />
          <path d={svgPaths.p25d44d80} fill="var(--fill-0, #231F20)" id="Vector_204" />
          <path d={svgPaths.p3e39f00} fill="var(--fill-0, #231F20)" id="Vector_205" />
          <path d={svgPaths.pb384600} fill="var(--fill-0, #231F20)" id="Vector_206" />
          <path d={svgPaths.p2ee4ea00} fill="var(--fill-0, #231F20)" id="Vector_207" />
          <path d={svgPaths.p1dbab080} fill="var(--fill-0, #231F20)" id="Vector_208" />
          <path d={svgPaths.p2b7cf300} fill="var(--fill-0, #231F20)" id="Vector_209" />
          <path d={svgPaths.p17a18b80} fill="var(--fill-0, #231F20)" id="Vector_210" />
          <path d={svgPaths.p33ab2c40} fill="var(--fill-0, #231F20)" id="Vector_211" />
          <path d={svgPaths.pd5fab2a} fill="var(--fill-0, #231F20)" id="Vector_212" />
          <path d={svgPaths.p382ca500} fill="var(--fill-0, #231F20)" id="Vector_213" />
          <path d={svgPaths.pb9ad600} fill="var(--fill-0, #231F20)" id="Vector_214" />
          <path d={svgPaths.p2e445080} fill="var(--fill-0, #231F20)" id="Vector_215" />
          <path d={svgPaths.pf53ba80} fill="var(--fill-0, #231F20)" id="Vector_216" />
          <path d={svgPaths.p3cd61800} fill="var(--fill-0, #231F20)" id="Vector_217" />
          <path d={svgPaths.p1a3dfd00} fill="var(--fill-0, #231F20)" id="Vector_218" />
          <path d={svgPaths.p15656c20} fill="var(--fill-0, #231F20)" id="Vector_219" />
          <path d={svgPaths.p8cf880} fill="var(--fill-0, #231F20)" id="Vector_220" />
          <path d={svgPaths.p26609e00} fill="var(--fill-0, #231F20)" id="Vector_221" />
          <path d={svgPaths.p1117d00} fill="var(--fill-0, #231F20)" id="Vector_222" />
          <path d={svgPaths.p762d480} fill="var(--fill-0, #231F20)" id="Vector_223" />
          <path d={svgPaths.p231a8f2} fill="var(--fill-0, #231F20)" id="Vector_224" />
          <path d={svgPaths.p298f1380} fill="var(--fill-0, #231F20)" id="Vector_225" />
          <path d={svgPaths.p2809e740} fill="var(--fill-0, #231F20)" id="Vector_226" />
          <path d={svgPaths.p2babc800} fill="var(--fill-0, #231F20)" id="Vector_227" />
          <path d={svgPaths.p2e1e400} fill="var(--fill-0, #231F20)" id="Vector_228" />
          <path d={svgPaths.pc74f180} fill="var(--fill-0, #231F20)" id="Vector_229" />
          <path d={svgPaths.p17cbcc00} fill="var(--fill-0, #231F20)" id="Vector_230" />
          <path d={svgPaths.p33184200} fill="var(--fill-0, #231F20)" id="Vector_231" />
          <path d={svgPaths.p2153b980} fill="var(--fill-0, #231F20)" id="Vector_232" />
          <path d={svgPaths.pe8074b0} fill="var(--fill-0, #231F20)" id="Vector_233" />
          <path d={svgPaths.pb2dc8f0} fill="var(--fill-0, #231F20)" id="Vector_234" />
          <path d={svgPaths.pca01a00} fill="var(--fill-0, #231F20)" id="Vector_235" />
          <path d={svgPaths.p193cba00} fill="var(--fill-0, #231F20)" id="Vector_236" />
          <path d={svgPaths.p26c693f0} fill="var(--fill-0, #231F20)" id="Vector_237" />
          <path d={svgPaths.p14fc1d00} fill="var(--fill-0, #231F20)" id="Vector_238" />
          <path d={svgPaths.p25091d00} fill="var(--fill-0, #231F20)" id="Vector_239" />
          <path d={svgPaths.p1e8ae800} fill="var(--fill-0, #231F20)" id="Vector_240" />
          <path d={svgPaths.p3a89d500} fill="var(--fill-0, #231F20)" id="Vector_241" />
          <path d={svgPaths.p3c51d700} fill="var(--fill-0, #231F20)" id="Vector_242" />
          <path d={svgPaths.p2d712b80} fill="var(--fill-0, #231F20)" id="Vector_243" />
        </g>
        <defs>
          <clipPath id="clip0_1_1025">
            <rect fill="white" height="369" width="554" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group31() {
  return null; // Removed phantom skeleton
}

function Group30() {
  return null; // Removed phantom skeleton
}

function Group35() {
  return null; // Removed phantom skeleton
}

function Group34() {
  return null; // Removed phantom skeleton
}

function Group37() {
  return null; // Removed phantom skeleton
}

function Group36() {
  return (
    <div className="absolute contents left-[369px] top-[837px]">
      <Group37 />
      <div className="absolute bg-[#313139] left-[369px] rounded-[5px] size-[20px] top-[837px]" />
    </div>
  );
}

function Group39() {
  return null; // Removed phantom skeleton
}

function Group38() {
  return null; // Removed phantom skeleton
}

function Group41() {
  return null; // Removed phantom skeleton
}

function Group40() {
  return (
    <div className="absolute contents left-[409px] top-[945px]">
      <div className="absolute left-[441px] size-[42px] top-[945px]">
        <img alt="" className="block max-w-none size-full" height="42" src={imgEllipse4} width="42" />
      </div>
      <Group41 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex items-start left-[830px] px-[28px] py-[12px] rounded-[5px] top-[2712px]" style={{ backgroundImage: "linear-gradient(97.2006deg, rgb(255, 152, 152) 0.47654%, rgb(128, 84, 255) 100%)" }}>
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Download</p>
    </div>
  );
}

function Group42() {
  return (
    <div 
      onClick={() => window.location.href = '/login'}
      className="absolute left-[165px] top-[28px] z-30 cursor-pointer flex items-center gap-2 hover:opacity-80 transition"
    >
      <img 
        src={imgGuideLogo} 
        alt="Squid Logo" 
        className="h-10 w-auto object-contain"
      />
      <span className="text-[24px] font-bold text-white font-['Poppins',sans-serif] tracking-tight">
        Squid
      </span>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute left-[512px] size-[32px] top-[2365px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 124">
          <circle cx="16" cy="16" fill="url(#paint0_radial_1_957)" fillOpacity="0.3" id="Ellipse 15" r="16" />
          <circle cx="16" cy="16" fill="url(#paint1_radial_1_957)" id="Ellipse 14" r="9.05882" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(12.3636 31.2727 -250.267 444.472 10.1818 -2.1818)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_957" r="1">
            <stop stopColor="#FF9898" />
            <stop offset="1" stopColor="#8054FF" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(7.00001 17.7059 -141.695 251.65 12.7059 5.70589)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_957" r="1">
            <stop stopColor="#FF9898" />
            <stop offset="1" stopColor="#8054FF" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute left-[567px] size-[32px] top-[2696px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 124">
          <circle cx="16" cy="16" fill="url(#paint0_radial_1_957)" fillOpacity="0.3" id="Ellipse 15" r="16" />
          <circle cx="16" cy="16" fill="url(#paint1_radial_1_957)" id="Ellipse 14" r="9.05882" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(12.3636 31.2727 -250.267 444.472 10.1818 -2.1818)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_957" r="1">
            <stop stopColor="#FF9898" />
            <stop offset="1" stopColor="#8054FF" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(7.00001 17.7059 -141.695 251.65 12.7059 5.70589)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_957" r="1">
            <stop stopColor="#FF9898" />
            <stop offset="1" stopColor="#8054FF" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute left-[271px] size-[32px] top-[2595px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 124">
          <circle cx="16" cy="16" fill="url(#paint0_radial_1_957)" fillOpacity="0.3" id="Ellipse 15" r="16" />
          <circle cx="16" cy="16" fill="url(#paint1_radial_1_957)" id="Ellipse 14" r="9.05882" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(12.3636 31.2727 -250.267 444.472 10.1818 -2.1818)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_957" r="1">
            <stop stopColor="#FF9898" />
            <stop offset="1" stopColor="#8054FF" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(7.00001 17.7059 -141.695 251.65 12.7059 5.70589)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_957" r="1">
            <stop stopColor="#FF9898" />
            <stop offset="1" stopColor="#8054FF" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents left-[409px] top-[749px]">
      <div className="absolute bg-[#313139] h-[6px] left-[409px] rounded-[33px] top-[749px] w-[74px]" />
      <div className="absolute bg-[#313139] h-[6px] left-[491px] rounded-[33px] top-[749px] w-[24px]" />
      <div className="absolute bg-[#313139] h-[6px] left-[455px] rounded-[33px] top-[763px] w-[24px]" />
      <div className="absolute bg-[#313139] h-[6px] left-[409px] rounded-[33px] top-[763px] w-[36px]" />
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents left-[369px] top-[749px]">
      <Group47 />
      <div className="absolute bg-[#313139] left-[369px] rounded-[5px] size-[20px] top-[749px]" />
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute inset-[15.93%_84.65%_71.54%_11.46%] flex items-center justify-center">
      <img src={imgGuideLogo} alt="Footer Logo" className="object-contain w-full h-full" />
    </div>
  );
}

function Elements() {
  return (
    <div className="absolute inset-[85%_19.97%_10.79%_78.75%]" data-name="ELEMENTS">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3705 15.1568">
        <g id="ELEMENTS">
          <path d={svgPaths.p39f00500} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents inset-[74.44%_0_0_0]">
      <div className="absolute bg-black inset-[74.44%_0_0_0]" />
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[83.33%_73.96%_8.89%_10.07%] leading-[28px] not-italic text-[#9e9e9e] text-[14px]">All Rights Reservd Inkyy.com 2022</p>
      <div className="absolute bg-[#18181c] inset-[81.67%_11.46%_7.22%_85.76%] rounded-[16px]" />
      <div className="absolute bg-[#18181c] inset-[81.67%_15.35%_7.22%_81.88%] rounded-[16px]" />
      <div className="absolute bg-[#18181c] inset-[81.67%_19.24%_7.22%_77.99%] rounded-[16px]" />
      <div className="absolute inset-[85.28%_12.17%_10.72%_86.53%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7771 14.4086">
          <path d={svgPaths.p29e79680} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[85.28%_16.25%_10.72%_82.71%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0606 14.4086">
          <path d={svgPaths.p30624b80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <Elements />
    </div>
  );
}



function Group48({ className }) {
  return (
    <div className={className || "absolute h-[360px] left-0 right-0 mx-auto top-[4640px] w-[1440px]"}>
      <div className="absolute bg-[#18181c] inset-[0_0_25.56%_0]" />
      <div className="absolute bg-[#18181c] inset-[0_0_25.56%_0]" />
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[34.72%_67.5%_42.22%_11.46%] leading-[28px] not-italic text-[#9e9e9e] text-[14px] whitespace-pre-wrap">{`A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem `}</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[23.06%_37.85%_34.17%_56.18%] leading-[38px] not-italic text-[#9e9e9e] text-[14px] whitespace-pre-wrap">
        Home
        <br aria-hidden="true" />
        Section One
        <br aria-hidden="true" />
        Section Two
        <br aria-hidden="true" />
        Section Tree
      </p>
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[23.06%_24.65%_34.17%_69.38%] leading-[38px] not-italic text-[#9e9e9e] text-[14px] whitespace-pre-wrap">
        Home
        <br aria-hidden="true" />
        Section One
        <br aria-hidden="true" />
        Section Two
        <br aria-hidden="true" />
        Section Tree
      </p>
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[23.06%_11.46%_34.17%_82.57%] leading-[38px] not-italic text-[#9e9e9e] text-[14px] whitespace-pre-wrap">
        Home
        <br aria-hidden="true" />
        Section One
        <br aria-hidden="true" />
        Section Two
        <br aria-hidden="true" />
        Section Tree
      </p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[13.89%_38.96%_77.22%_56.18%] leading-[32px] not-italic text-[16px] text-center text-white">Sections</p>
      <Group49 />
      <Group50 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[30.33%_22.08%_68.74%_74.86%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 46.0001">
        <g id="Group">
          <path d={svgPaths.p32c97fc0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[30.33%_22.08%_68.74%_74.86%]">
      <Group4 />
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents left-[1048px] top-[1470px]">
      <div className="absolute left-[1048px] size-[104px] top-[1470px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 104">
          <path d={svgPaths.p411600} fill="url(#paint0_linear_1_946)" id="Rectangle 28" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_946" x1="31" x2="104.587" y1="-9.39648e-06" y2="75.3118">
              <stop stopColor="#FF9898" />
              <stop offset="1" stopColor="#8054FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group14 />
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute inset-[18.82%_43.35%_79.29%_44.72%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171.75 93.34">
        <g id="Group 132">
          <g id="Group">
            <path d={svgPaths.p2d57aa00} fill="var(--fill-0, #313139)" id="Vector" />
            <path d={svgPaths.p160e480} fill="var(--fill-0, #313139)" id="Vector_2" />
          </g>
          <path d={svgPaths.p26e1b330} fill="var(--fill-0, #313139)" id="Vector_3" />
          <path d={svgPaths.p2b8b4b80} fill="var(--fill-0, #313139)" id="Vector_4" />
          <path d={svgPaths.p1b040670} fill="var(--fill-0, #313139)" id="Vector_5" />
          <path d={svgPaths.p1cabec80} fill="var(--fill-0, #313139)" id="Vector_6" />
          <path d={svgPaths.p11298180} fill="var(--fill-0, #313139)" id="Vector_7" />
          <path d={svgPaths.p3a69ebf0} fill="url(#paint0_linear_1_1311)" id="Vector_8" />
          <path d={svgPaths.pb0cae72} fill="url(#paint1_linear_1_1311)" id="Vector_9" />
          <path d={svgPaths.p2b7d6800} fill="url(#paint2_linear_1_1311)" id="Vector_10" />
          <path d={svgPaths.p32916d00} fill="url(#paint3_linear_1_1311)" id="Vector_11" />
          <path d={svgPaths.p305f7600} fill="url(#paint4_linear_1_1311)" id="Vector_12" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1311" x1="163.5" x2="193.116" y1="2.99997" y2="19.2608">
            <stop stopColor="#FF9898" />
            <stop offset="1" stopColor="#8054FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1311" x1="132.887" x2="160.117" y1="15.0978" y2="32.1472">
            <stop stopColor="#FF9898" />
            <stop offset="1" stopColor="#8054FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1311" x1="101.887" x2="124.225" y1="34.5734" y2="53.2213">
            <stop stopColor="#FF9898" />
            <stop offset="1" stopColor="#8054FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_1311" x1="71.8867" x2="88.8168" y1="49.18" y2="68.0245">
            <stop stopColor="#FF9898" />
            <stop offset="1" stopColor="#8054FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_1311" x1="41.8867" x2="48.2512" y1="71.09" y2="85.2583">
            <stop stopColor="#FF9898" />
            <stop offset="1" stopColor="#8054FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute contents left-[638px] top-[862px]">
      <div className="absolute bg-[#313139] h-[6px] left-[638px] rounded-[33px] top-[862px] w-[74px]" />
      <div className="absolute bg-[#313139] h-[6px] left-[720px] rounded-[33px] top-[862px] w-[24px]" />
      <div className="absolute bg-[#313139] h-[6px] left-[684px] rounded-[33px] top-[876px] w-[24px]" />
      <div className="absolute bg-[#313139] h-[6px] left-[638px] rounded-[33px] top-[876px] w-[36px]" />
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute contents left-[638px] top-[862px]">
      <Group54 />
      <div className="absolute bg-[#313139] left-[810px] rounded-[5px] size-[20px] top-[862px]" />
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute inset-[80.15%_53.33%_8.89%_9.03%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 541.985 541.851">
        <g id="Group 133">
          <path d={svgPaths.p11f71e00} fill="var(--fill-0, #3A3A47)" id="Vector" />
          <path d={svgPaths.p3ea592a0} fill="var(--fill-0, #3A3A47)" id="Vector_2" />
          <path d={svgPaths.p48acc00} fill="var(--fill-0, #3A3A47)" id="Vector_3" />
          <path d={svgPaths.p2034b740} fill="var(--fill-0, #3A3A47)" id="Vector_4" />
          <path d={svgPaths.p2006f500} fill="var(--fill-0, #3A3A47)" id="Vector_5" />
          <path d={svgPaths.p1d14cb00} fill="var(--fill-0, #3A3A47)" id="Vector_6" />
          <path d={svgPaths.p7b7c0b0} fill="var(--fill-0, #3A3A47)" id="Vector_7" />
          <path d={svgPaths.p2c4c1800} fill="var(--fill-0, #3A3A47)" id="Vector_8" />
          <path d={svgPaths.p180b4e00} fill="var(--fill-0, #3A3A47)" id="Vector_9" />
          <path d={svgPaths.p2483ed00} fill="var(--fill-0, #3A3A47)" id="Vector_10" />
          <path d={svgPaths.p2f750880} fill="var(--fill-0, #3A3A47)" id="Vector_11" />
          <path d={svgPaths.p3bb2140} fill="var(--fill-0, #3A3A47)" id="Vector_12" />
          <path d={svgPaths.p21fcf580} fill="var(--fill-0, #3A3A47)" id="Vector_13" />
          <path d={svgPaths.p1dbd8580} fill="var(--fill-0, #3A3A47)" id="Vector_14" />
          <path d={svgPaths.p3c4f5c80} fill="var(--fill-0, #3A3A47)" id="Vector_15" />
          <path d={svgPaths.p20dc7f80} fill="var(--fill-0, #3A3A47)" id="Vector_16" />
          <path d={svgPaths.p2e99e300} fill="var(--fill-0, #3A3A47)" id="Vector_17" />
          <path d={svgPaths.p36d47000} fill="var(--fill-0, #3A3A47)" id="Vector_18" />
          <path d={svgPaths.p2b07cb80} fill="var(--fill-0, #3A3A47)" id="Vector_19" />
          <path d={svgPaths.p14fec600} fill="var(--fill-0, #3A3A47)" id="Vector_20" />
          <path d={svgPaths.p93f5800} fill="var(--fill-0, #3A3A47)" id="Vector_21" />
          <path d={svgPaths.p25fab300} fill="var(--fill-0, #3A3A47)" id="Vector_22" />
          <path d={svgPaths.p2f952a00} fill="var(--fill-0, #3A3A47)" id="Vector_23" />
          <path d={svgPaths.p10f60670} fill="var(--fill-0, #3A3A47)" id="Vector_24" />
          <path d={svgPaths.p3b5f3a00} fill="var(--fill-0, #3A3A47)" id="Vector_25" />
          <path d={svgPaths.p1f324e00} fill="var(--fill-0, #3A3A47)" id="Vector_26" />
          <path d={svgPaths.pebd6980} fill="var(--fill-0, #3A3A47)" id="Vector_27" />
          <path d={svgPaths.p3d046180} fill="var(--fill-0, #3A3A47)" id="Vector_28" />
          <path d={svgPaths.p2c874ef0} fill="var(--fill-0, #3A3A47)" id="Vector_29" />
          <path d={svgPaths.pc803400} fill="var(--fill-0, #3A3A47)" id="Vector_30" />
          <path d={svgPaths.p341b6f00} fill="var(--fill-0, #3A3A47)" id="Vector_31" />
          <path d={svgPaths.p37660800} fill="var(--fill-0, #3A3A47)" id="Vector_32" />
          <path d={svgPaths.p2505b780} fill="var(--fill-0, #3A3A47)" id="Vector_33" />
          <path d={svgPaths.p284b3d00} fill="var(--fill-0, #3A3A47)" id="Vector_34" />
          <path d={svgPaths.p38e2ec00} fill="var(--fill-0, #3A3A47)" id="Vector_35" />
          <path d={svgPaths.p3eb33880} fill="var(--fill-0, #3A3A47)" id="Vector_36" />
          <path d={svgPaths.p196a7a80} fill="var(--fill-0, #3A3A47)" id="Vector_37" />
          <path d={svgPaths.p11882d00} fill="var(--fill-0, #3A3A47)" id="Vector_38" />
          <path d={svgPaths.p1a399b00} fill="var(--fill-0, #3A3A47)" id="Vector_39" />
          <path d={svgPaths.p383f2c00} fill="var(--fill-0, #3A3A47)" id="Vector_40" />
          <path d={svgPaths.pb2c1480} fill="var(--fill-0, #3A3A47)" id="Vector_41" />
          <path d={svgPaths.p2a258b0} fill="var(--fill-0, #3A3A47)" id="Vector_42" />
          <path d={svgPaths.p1940e180} fill="var(--fill-0, #3A3A47)" id="Vector_43" />
          <path d={svgPaths.p30ea7200} fill="var(--fill-0, #3A3A47)" id="Vector_44" />
          <path d={svgPaths.p146e0f80} fill="var(--fill-0, #3A3A47)" id="Vector_45" />
          <path d={svgPaths.p63a4d80} fill="var(--fill-0, #3A3A47)" id="Vector_46" />
          <path d={svgPaths.p244a2400} fill="var(--fill-0, #3A3A47)" id="Vector_47" />
          <path d={svgPaths.p1713d980} fill="var(--fill-0, #3A3A47)" id="Vector_48" />
          <path d={svgPaths.p1179cc00} fill="var(--fill-0, #3A3A47)" id="Vector_49" />
          <path d={svgPaths.p38856b80} fill="var(--fill-0, #3A3A47)" id="Vector_50" />
          <path d={svgPaths.p3a573e00} fill="var(--fill-0, #3A3A47)" id="Vector_51" />
          <path d={svgPaths.pb6483c0} fill="var(--fill-0, #3A3A47)" id="Vector_52" />
          <path d={svgPaths.p36bc88f0} fill="var(--fill-0, #3A3A47)" id="Vector_53" />
          <path d={svgPaths.p2d36fdf0} fill="var(--fill-0, #3A3A47)" id="Vector_54" />
          <path d={svgPaths.p10184180} fill="var(--fill-0, #3A3A47)" id="Vector_55" />
          <path d={svgPaths.p9c2a00} fill="var(--fill-0, #3A3A47)" id="Vector_56" />
          <path d={svgPaths.p1fe69300} fill="var(--fill-0, #3A3A47)" id="Vector_57" />
          <path d={svgPaths.p10671600} fill="var(--fill-0, #3A3A47)" id="Vector_58" />
          <path d={svgPaths.p324cad00} fill="var(--fill-0, #3A3A47)" id="Vector_59" />
          <path d={svgPaths.p3759b800} fill="var(--fill-0, #3A3A47)" id="Vector_60" />
          <path d={svgPaths.p2c9b58b2} fill="var(--fill-0, #3A3A47)" id="Vector_61" />
          <path d={svgPaths.p3bba3200} fill="var(--fill-0, #3A3A47)" id="Vector_62" />
          <path d={svgPaths.p3ee6cf00} fill="var(--fill-0, #3A3A47)" id="Vector_63" />
          <path d={svgPaths.p2d626100} fill="var(--fill-0, #3A3A47)" id="Vector_64" />
          <path d={svgPaths.p2ad2b500} fill="var(--fill-0, #3A3A47)" id="Vector_65" />
          <path d={svgPaths.p3284b780} fill="var(--fill-0, #3A3A47)" id="Vector_66" />
          <path d={svgPaths.p27d47370} fill="var(--fill-0, #3A3A47)" id="Vector_67" />
          <path d={svgPaths.p3e528d80} fill="var(--fill-0, #3A3A47)" id="Vector_68" />
          <path d={svgPaths.pd94c30} fill="var(--fill-0, #3A3A47)" id="Vector_69" />
          <path d={svgPaths.p29002e00} fill="var(--fill-0, #3A3A47)" id="Vector_70" />
          <path d={svgPaths.p73f3400} fill="var(--fill-0, #3A3A47)" id="Vector_71" />
          <path d={svgPaths.p298c1bf0} fill="var(--fill-0, #3A3A47)" id="Vector_72" />
          <path d={svgPaths.p4b0d280} fill="var(--fill-0, #3A3A47)" id="Vector_73" />
          <path d={svgPaths.p131756f0} fill="var(--fill-0, #3A3A47)" id="Vector_74" />
          <path d={svgPaths.p13abba80} fill="var(--fill-0, #3A3A47)" id="Vector_75" />
          <path d={svgPaths.p1d57a400} fill="var(--fill-0, #3A3A47)" id="Vector_76" />
          <path d={svgPaths.p1a783b00} fill="var(--fill-0, #3A3A47)" id="Vector_77" />
          <path d={svgPaths.p1ecf1f00} fill="var(--fill-0, #3A3A47)" id="Vector_78" />
          <path d={svgPaths.p15c16000} fill="var(--fill-0, #3A3A47)" id="Vector_79" />
          <path d={svgPaths.p1d07d700} fill="var(--fill-0, #3A3A47)" id="Vector_80" />
          <path d={svgPaths.p2770fae0} fill="var(--fill-0, #3A3A47)" id="Vector_81" />
          <path d={svgPaths.p37954f40} fill="var(--fill-0, #3A3A47)" id="Vector_82" />
          <path d={svgPaths.p18504e80} fill="var(--fill-0, #3A3A47)" id="Vector_83" />
          <path d={svgPaths.p11305c00} fill="var(--fill-0, #3A3A47)" id="Vector_84" />
          <path d={svgPaths.p15c82f40} fill="var(--fill-0, #3A3A47)" id="Vector_85" />
          <path d={svgPaths.pcbf3e00} fill="var(--fill-0, #3A3A47)" id="Vector_86" />
          <path d={svgPaths.p2878b880} fill="var(--fill-0, #3A3A47)" id="Vector_87" />
          <path d={svgPaths.pc5ddf00} fill="var(--fill-0, #3A3A47)" id="Vector_88" />
          <path d={svgPaths.p2b80d400} fill="var(--fill-0, #3A3A47)" id="Vector_89" />
          <path d={svgPaths.pe688300} fill="var(--fill-0, #3A3A47)" id="Vector_90" />
          <path d={svgPaths.p26fdea00} fill="var(--fill-0, #3A3A47)" id="Vector_91" />
          <path d={svgPaths.pbd0ec40} fill="var(--fill-0, #3A3A47)" id="Vector_92" />
          <path d={svgPaths.p3b18a800} fill="var(--fill-0, #3A3A47)" id="Vector_93" />
          <path d={svgPaths.p4686e00} fill="var(--fill-0, #3A3A47)" id="Vector_94" />
          <path d={svgPaths.p14869000} fill="var(--fill-0, #3A3A47)" id="Vector_95" />
          <path d={svgPaths.p4126000} fill="var(--fill-0, #3A3A47)" id="Vector_96" />
          <path d={svgPaths.p7aea400} fill="var(--fill-0, #3A3A47)" id="Vector_97" />
          <path d={svgPaths.p3d9200} fill="var(--fill-0, #3A3A47)" id="Vector_98" />
          <path d={svgPaths.p26642000} fill="var(--fill-0, #3A3A47)" id="Vector_99" />
          <path d={svgPaths.p38d1f900} fill="var(--fill-0, #3A3A47)" id="Vector_100" />
          <path d={svgPaths.p3db6db00} fill="var(--fill-0, #3A3A47)" id="Vector_101" />
          <path d={svgPaths.p114bc80} fill="var(--fill-0, #3A3A47)" id="Vector_102" />
          <path d={svgPaths.p84f5d00} fill="var(--fill-0, #3A3A47)" id="Vector_103" />
          <path d={svgPaths.p36036d00} fill="var(--fill-0, #3A3A47)" id="Vector_104" />
          <path d={svgPaths.p3c3cca80} fill="var(--fill-0, #3A3A47)" id="Vector_105" />
          <path d={svgPaths.p1f5c0680} fill="var(--fill-0, #3A3A47)" id="Vector_106" />
          <path d={svgPaths.p147abf00} fill="var(--fill-0, #3A3A47)" id="Vector_107" />
          <path d={svgPaths.p94c2400} fill="var(--fill-0, #3A3A47)" id="Vector_108" />
          <path d={svgPaths.pcd3ad00} fill="var(--fill-0, #3A3A47)" id="Vector_109" />
          <path d={svgPaths.pf247d80} fill="var(--fill-0, #3A3A47)" id="Vector_110" />
          <path d={svgPaths.p365c3f00} fill="var(--fill-0, #3A3A47)" id="Vector_111" />
          <path d={svgPaths.p2a5a7c00} fill="var(--fill-0, #3A3A47)" id="Vector_112" />
          <path d={svgPaths.p85fe300} fill="var(--fill-0, #3A3A47)" id="Vector_113" />
          <path d={svgPaths.p8e99700} fill="var(--fill-0, #3A3A47)" id="Vector_114" />
          <path d={svgPaths.p18dba00} fill="var(--fill-0, #3A3A47)" id="Vector_115" />
          <path d={svgPaths.p31d5f200} fill="var(--fill-0, #3A3A47)" id="Vector_116" />
          <path d={svgPaths.p2b1ba380} fill="var(--fill-0, #3A3A47)" id="Vector_117" />
          <path d={svgPaths.p36e6300} fill="var(--fill-0, #3A3A47)" id="Vector_118" />
          <path d={svgPaths.pd8a2200} fill="var(--fill-0, #3A3A47)" id="Vector_119" />
          <path d={svgPaths.p1ca1ec00} fill="var(--fill-0, #3A3A47)" id="Vector_120" />
          <path d={svgPaths.p2e4b1980} fill="var(--fill-0, #3A3A47)" id="Vector_121" />
          <path d={svgPaths.p1d296500} fill="var(--fill-0, #3A3A47)" id="Vector_122" />
          <path d={svgPaths.p38354700} fill="var(--fill-0, #3A3A47)" id="Vector_123" />
          <path d={svgPaths.p3e35e000} fill="var(--fill-0, #3A3A47)" id="Vector_124" />
          <path d={svgPaths.p11096d00} fill="var(--fill-0, #3A3A47)" id="Vector_125" />
          <path d={svgPaths.p17236e00} fill="var(--fill-0, #3A3A47)" id="Vector_126" />
          <path d={svgPaths.p20564500} fill="var(--fill-0, #3A3A47)" id="Vector_127" />
          <path d={svgPaths.p28770d80} fill="var(--fill-0, #3A3A47)" id="Vector_128" />
          <path d={svgPaths.p27ead280} fill="var(--fill-0, #3A3A47)" id="Vector_129" />
          <path d={svgPaths.peb869f0} fill="var(--fill-0, #3A3A47)" id="Vector_130" />
          <path d={svgPaths.p1d140900} fill="var(--fill-0, #3A3A47)" id="Vector_131" />
          <path d={svgPaths.p28db1480} fill="var(--fill-0, #3A3A47)" id="Vector_132" />
          <path d={svgPaths.p28aba600} fill="var(--fill-0, #3A3A47)" id="Vector_133" />
          <path d={svgPaths.p29132c00} fill="var(--fill-0, #3A3A47)" id="Vector_134" />
          <path d={svgPaths.p1cf75100} fill="var(--fill-0, #3A3A47)" id="Vector_135" />
          <path d={svgPaths.p3f76bc80} fill="var(--fill-0, #3A3A47)" id="Vector_136" />
          <path d={svgPaths.p4e99200} fill="var(--fill-0, #3A3A47)" id="Vector_137" />
          <path d={svgPaths.p2badb6f0} fill="var(--fill-0, #3A3A47)" id="Vector_138" />
          <path d={svgPaths.pb3fbc40} fill="var(--fill-0, #3A3A47)" id="Vector_139" />
          <path d={svgPaths.p2e079640} fill="var(--fill-0, #3A3A47)" id="Vector_140" />
          <path d={svgPaths.p1514eb00} fill="var(--fill-0, #3A3A47)" id="Vector_141" />
          <path d={svgPaths.p2d3bed00} fill="var(--fill-0, #3A3A47)" id="Vector_142" />
          <path d={svgPaths.p1dd13a00} fill="var(--fill-0, #3A3A47)" id="Vector_143" />
          <path d={svgPaths.p2066da00} fill="var(--fill-0, #3A3A47)" id="Vector_144" />
          <path d={svgPaths.p11ade200} fill="var(--fill-0, #3A3A47)" id="Vector_145" />
          <path d={svgPaths.p1957c470} fill="var(--fill-0, #3A3A47)" id="Vector_146" />
          <path d={svgPaths.p32f93780} fill="var(--fill-0, #3A3A47)" id="Vector_147" />
          <path d={svgPaths.p3931e500} fill="var(--fill-0, #3A3A47)" id="Vector_148" />
          <path d={svgPaths.pf239f00} fill="var(--fill-0, #3A3A47)" id="Vector_149" />
          <path d={svgPaths.peffac80} fill="var(--fill-0, #3A3A47)" id="Vector_150" />
          <path d={svgPaths.p2ab7f600} fill="var(--fill-0, #3A3A47)" id="Vector_151" />
          <path d={svgPaths.p2320d480} fill="var(--fill-0, #3A3A47)" id="Vector_152" />
          <path d={svgPaths.pf08eb00} fill="var(--fill-0, #3A3A47)" id="Vector_153" />
          <path d={svgPaths.p331b3380} fill="var(--fill-0, #3A3A47)" id="Vector_154" />
          <path d={svgPaths.p19f8a080} fill="var(--fill-0, #3A3A47)" id="Vector_155" />
          <path d={svgPaths.p3b8ef900} fill="var(--fill-0, #3A3A47)" id="Vector_156" />
          <path d={svgPaths.p1434ba00} fill="var(--fill-0, #3A3A47)" id="Vector_157" />
          <path d={svgPaths.p1a8e4200} fill="var(--fill-0, #3A3A47)" id="Vector_158" />
          <path d={svgPaths.p33f26100} fill="var(--fill-0, #3A3A47)" id="Vector_159" />
          <path d={svgPaths.p14487000} fill="var(--fill-0, #3A3A47)" id="Vector_160" />
          <path d={svgPaths.pb4a8400} fill="var(--fill-0, #3A3A47)" id="Vector_161" />
          <path d={svgPaths.p29844f80} fill="var(--fill-0, #3A3A47)" id="Vector_162" />
          <path d={svgPaths.p104b1d00} fill="var(--fill-0, #3A3A47)" id="Vector_163" />
          <path d={svgPaths.p154e3c00} fill="var(--fill-0, #3A3A47)" id="Vector_164" />
          <path d={svgPaths.p279ac540} fill="var(--fill-0, #3A3A47)" id="Vector_165" />
          <path d={svgPaths.p1be1e80} fill="var(--fill-0, #3A3A47)" id="Vector_166" />
          <path d={svgPaths.p1db6ff00} fill="var(--fill-0, #3A3A47)" id="Vector_167" />
          <path d={svgPaths.p1c7b2400} fill="var(--fill-0, #3A3A47)" id="Vector_168" />
          <path d={svgPaths.p21ac3c80} fill="var(--fill-0, #3A3A47)" id="Vector_169" />
          <path d={svgPaths.p2a7d1d00} fill="var(--fill-0, #3A3A47)" id="Vector_170" />
          <path d={svgPaths.pad942b0} fill="var(--fill-0, #3A3A47)" id="Vector_171" />
          <path d={svgPaths.p1f7c900} fill="var(--fill-0, #3A3A47)" id="Vector_172" />
          <path d={svgPaths.p2d913500} fill="var(--fill-0, #3A3A47)" id="Vector_173" />
          <path d={svgPaths.p1252b300} fill="var(--fill-0, #3A3A47)" id="Vector_174" />
          <path d={svgPaths.p3bc9dc00} fill="var(--fill-0, #3A3A47)" id="Vector_175" />
          <path d={svgPaths.p37f56500} fill="var(--fill-0, #3A3A47)" id="Vector_176" />
          <path d={svgPaths.p17294500} fill="var(--fill-0, #3A3A47)" id="Vector_177" />
          <path d={svgPaths.p3b272d00} fill="var(--fill-0, #3A3A47)" id="Vector_178" />
          <path d={svgPaths.p154a8600} fill="var(--fill-0, #3A3A47)" id="Vector_179" />
          <path d={svgPaths.p27137b00} fill="var(--fill-0, #3A3A47)" id="Vector_180" />
          <path d={svgPaths.p8758500} fill="var(--fill-0, #3A3A47)" id="Vector_181" />
          <path d={svgPaths.p18eb580} fill="var(--fill-0, #3A3A47)" id="Vector_182" />
          <path d={svgPaths.p1792aa00} fill="var(--fill-0, #3A3A47)" id="Vector_183" />
          <path d={svgPaths.p179394b0} fill="var(--fill-0, #3A3A47)" id="Vector_184" />
        </g>
      </svg>
    </div>
  );
}

export default function Homepage() {
  return (
  <div className="bg-black w-full min-h-screen flex justify-center overflow-x-hidden">
    <div className="relative w-[1440px] shrink-0 h-[5000px] bg-black mx-auto" data-name="Homepage">
      {/* Footer Grey Section Background */}
      <div className="absolute bg-[#131415] h-[653px] left-0 right-0 top-[3000px] w-full" data-name="FooterGreyBg" />
      <Group6 />
      {/* Hero Download Button - Restored */}
      <div className="absolute h-[474.398px] left-0 right-0 top-[777px]" data-name="Subtract">
        <img src={imgSubtract} alt="" className="block w-full h-full object-fill" />
      </div>
      <Group33 />
      <div className="absolute left-[611px] size-[66px] top-[2456px]">
        <img alt="Guide Right" className="block max-w-none size-full object-contain" src={imgGuideR} />
      </div>
      <div className="absolute left-[371px] size-[66px] top-[2709px]">
        <img alt="Guide Bottom" className="block max-w-none size-full object-contain" src={imgGuideB} />
      </div>
      <div className="absolute left-[279px] size-[66px] top-[2431px]">
        <img alt="Guide Left" className="block max-w-none size-full object-contain" src={imgGuideL} />
      </div>
      <div className="absolute left-[451px] size-[538px] top-[-30px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 538 538">
          <circle cx="269" cy="269" fill="url(#paint0_radial_1_1270)" id="Ellipse 5" r="269" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(269 269) rotate(90) scale(269)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1270" r="1">
              <stop stopColor="#222228" />
              <stop offset="1" stopColor="#222228" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <FeatureCard left="925px" top="1420px" title="Fully Customizable" icon={imgFeatureIcon5} />
      <FeatureCard left="925px" top="1821px" title="Fully Customizable" icon={imgFeatureIcon4} />
      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] leading-[80px] left-[720.5px] not-italic text-[64px] text-center text-white top-[169px]">
        Beautiful Landing Page
        <br aria-hidden="true" />
        Design for You
      </p>
      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] leading-[80px] left-[336px] not-italic text-[48px] text-center text-white top-[1236px]">Feature Boxes</p>
      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] leading-[64px] left-[720.5px] not-italic text-[48px] text-center text-white top-[3057px]">
        Companies we Worked
        <br aria-hidden="true" />
        With in SInce 2015
      </p>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[66px] leading-[28px] left-[165px] not-italic text-[#9e9e9e] text-[18px] top-[1321px] w-[577px] whitespace-pre-wrap">{`A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem `}</p>
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] h-[66px] leading-[28px] left-[720.5px] not-italic text-[#9e9e9e] text-[18px] text-center top-[347px] w-[577px] whitespace-pre-wrap">{`A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem `}</p>
      
      {/* Download Template Button */}
      <div className="-translate-x-1/2 absolute left-[720.5px] top-[440px] z-10">
        <Button 
          size="lg"
          className="bg-linear-to-r from-[#FF9898] to-[#8054FF] text-white hover:opacity-90 shadow-lg rounded-[5px]"
          onClick={() => window.open('https://www.figma.com', '_blank')}
        >
          Download Template
        </Button>
      </div>
      <Group42 />
      
      {/* Navbar Download Button */}
      {/* Explicit Home Link */}
      <div 
        className="absolute left-[1010px] top-[40px] z-20 cursor-pointer"
        onClick={() => window.location.href = '/login'}
      >
        <p className="font-['Poppins:Regular',sans-serif] text-[16px] text-[#9e9e9e] hover:text-white transition-colors">
          Home
        </p>
      </div>
      <div className="absolute left-[1077px] top-[27px] z-10">
        <Button 
          size="default"
          className="bg-linear-to-r from-[#FF9898] to-[#8054FF] hover:opacity-90 text-white shadow-md h-[44px] px-6"
          onClick={() => window.open('https://www.figma.com', '_blank')}
        >
          Download Template
        </Button>
      </div>
      <FeatureCard left="165px" top="1420px" title="Fully Customizable" icon={imgFeatureIcon1} />
      <FeatureCard left="545px" top="1420px" title="Fully Customizable" icon={imgFeatureIcon6} />
      <div className="absolute bg-[#131415] h-[553px] left-[287px] rounded-[28px] top-[551px] w-[866px]" />

      <FeatureCard left="165px" top="1821px" title="Fully Customizable" icon={imgFeatureIcon2} />
      <FeatureCard left="545px" top="1821px" title="Fully Customizable" icon={imgFeatureIcon3} />
      <div className="absolute bg-black h-[92px] left-[165px] rounded-[10px] top-[3255px] w-[160px] flex items-center justify-center">
        <img src={imgCompanyS} alt="Smile" className="object-contain" />
      </div>
      <div className="absolute bg-black h-[92px] left-[355px] rounded-[10px] top-[3255px] w-[160px] flex items-center justify-center">
        <img src={imgCompanyC} alt="Company C" className="object-contain" />
      </div>
      <div className="absolute bg-black h-[92px] left-[545px] rounded-[10px] top-[3255px] w-[160px] flex items-center justify-center">
        <img src={imgCompanyN} alt="Natural" className="object-contain" />
      </div>
      <div className="absolute bg-black h-[92px] left-[735px] rounded-[10px] top-[3255px] w-[160px] flex items-center justify-center">
        <img src={imgCompanyW} alt="Wave" className="object-contain" />
      </div>
      <div className="absolute bg-black h-[92px] left-[925px] rounded-[10px] top-[3255px] w-[160px] flex items-center justify-center">
        <img src={imgCompanyH} alt="Company H" className="object-contain" />
      </div>
      <div className="absolute bg-black h-[92px] left-[1115px] rounded-[10px] top-[3255px] w-[160px] flex items-center justify-center">
        <img src={imgCompanyA} alt="Alisa" className="object-contain" />
      </div>
      <div className="absolute h-[425px] left-[165px] rounded-[40px] top-[3441px] w-[1110px]" style={{ backgroundImage: "linear-gradient(159.488deg, rgb(255, 152, 152) 14.731%, rgb(128, 84, 255) 86.327%)" }} />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[65px] left-[262px] not-italic text-[48px] text-white top-[3584px] w-[499px] whitespace-pre-wrap z-20">Fell Free to Join our 15 Days Free Trial</p>
      <div className="absolute left-[721px] top-[3469px] z-10 w-[554px] overflow-hidden">
        <img src={imgFrame} alt="" className="block w-full scale-100 origin-right" />
      </div>
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[32px] left-[354px] not-italic text-[20px] text-center text-white top-[3540px]">Love our Our Tool?</p>
      <Button 
        className="absolute left-[262px] top-[3750px] px-[28px] py-[12px] h-auto rounded-[5px] bg-[#000000]! text-[#FFFFFF]! hover:opacity-80 border-0 font-['Poppins:Regular',sans-serif] text-[14px] leading-[20px]"
      >
        Download Template
      </Button>
      <Input 
        type="email" 
        placeholder="Your Email" 
        className="absolute left-[735px] top-[4135px] !w-[408px] h-[44px] !bg-[#18181c] !border-0 !rounded-[5px] text-[#9e9e9e] placeholder:text-[#9e9e9e] !shadow-none z-10" 
      />
      <Input 
        type="text" 
        placeholder="Name" 
        className="absolute left-[735px] top-[4197px] !w-[408px] h-[44px] !bg-[#18181c] !border-0 !rounded-[5px] text-[#9e9e9e] placeholder:text-[#9e9e9e] !shadow-none z-10" 
      />
      
      {/* Restored CTA Section: Orbs + Text + Button */}
      <Group43 />
      <Group45 />
      <Group44 />
      <div className="absolute font-['Poppins:SemiBold',sans-serif] h-[204px] leading-[64px] left-[832px] not-italic text-[48px] text-white top-[2384px] w-[443px] whitespace-pre-wrap">
        <p className="mb-0">{`We're here to guide and help you at all times `}</p>
        <p>&nbsp;</p>
      </div>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[66px] leading-[28px] left-[832px] not-italic text-[#9e9e9e] text-[18px] top-[2600px] w-[385px] whitespace-pre-wrap">{`A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem `}</p>
      {/* Replaced Frame9 with Button and added Guide Logo */}
      <Button 
        className="absolute left-[830px] top-[2712px] px-[28px] py-[12px] h-auto rounded-[5px] bg-linear-to-r from-[#FF9898] to-[#8054FF] text-white hover:opacity-90 border-0 z-10 font-['Poppins:Regular',sans-serif] text-[14px] leading-[20px]"
      >
        Download
      </Button>
      <div className="absolute left-[469px] top-[2562px] -translate-x-1/2 -translate-y-1/2 z-20 w-[64px]">
        <img src={imgGuideLogo} alt="Guide Logo" className="w-full h-auto object-contain" />
      </div>

      <textarea 
        placeholder="Message" 
        className="absolute left-[735px] top-[4259px] !w-[408px] h-[156px] !bg-[#18181c] !border-0 !rounded-[5px] text-[#9e9e9e] placeholder:text-[#9e9e9e] p-3 resize-none focus:outline-none focus:ring-1 focus:ring-purple-500 !shadow-none font-['Poppins:Regular',sans-serif] text-[14px] z-10"
      />

      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] leading-[80px] left-[887px] not-italic text-[48px] text-center text-white top-[3961px]">Get In Touch</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[66px] leading-[28px] left-[735px] not-italic text-[#9e9e9e] text-[18px] top-[4041px] w-[503px] whitespace-pre-wrap">{`A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem `}</p>
      <Button 
        className="absolute left-[735px] top-[4433px] px-[28px] py-[12px] h-auto rounded-[5px] bg-linear-to-r from-[#FF9898] to-[#8054FF] text-white hover:opacity-90 border-0 z-10"
      >
        Get in Touch
      </Button>
      <Frame />
      <MockupCards />
      <div className="absolute left-[1223px] size-[96px] top-[303px]">
        <div className="absolute inset-[-20.83%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 136">
            <g filter="url(#filter0_f_1_1016)" id="Ellipse 3">
              <circle cx="68" cy="68" fill="url(#paint0_radial_1_1016)" r="48" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="136" id="filter0_f_1_1016" width="136" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_1016" stdDeviation="10" />
              </filter>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(3.99998 101.2 -1153.96 1014.13 61.2 13.1999)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1016" r="1">
                <stop stopColor="#494955" />
                <stop offset="1" stopColor="#141414" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[656px] size-[64px] top-[70px]">
        <div className="absolute inset-[-31.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 104">
            <g filter="url(#filter0_f_1_995)" id="Ellipse 13">
              <circle cx="52" cy="52" fill="url(#paint0_radial_1_995)" r="32" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="104" id="filter0_f_1_995" width="104" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_995" stdDeviation="10" />
              </filter>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(2.66666 67.4667 -769.307 676.085 47.4667 15.4666)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_995" r="1">
                <stop stopColor="#494955" />
                <stop offset="1" stopColor="#141414" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[122px] size-[130px] top-[400px]">
        <div className="absolute inset-[-23.08%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 190 190">
            <g filter="url(#filter0_f_1_993)" id="Ellipse 14">
              <circle cx="95" cy="95" fill="url(#paint0_radial_1_993)" r="65" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="190" id="filter0_f_1_993" width="190" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_993" stdDeviation="15" />
              </filter>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(5.41665 137.042 -1562.65 1373.3 85.7917 20.7916)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_993" r="1">
                <stop stopColor="#494955" />
                <stop offset="1" stopColor="#141414" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <MockupCards />

      <Group55 />
      <div className="absolute left-[594px] size-[96px] top-[4465px]">
        <div className="absolute inset-[-20.83%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 136">
            <g filter="url(#filter0_f_1_1016)" id="Ellipse 3">
              <circle cx="68" cy="68" fill="url(#paint0_radial_1_1016)" r="48" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="136" id="filter0_f_1_1016" width="136" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_1016" stdDeviation="10" />
              </filter>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(3.99998 101.2 -1153.96 1014.13 61.2 13.1999)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1016" r="1">
                <stop stopColor="#494955" />
                <stop offset="1" stopColor="#141414" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[108px] size-[64px] top-[3933px]">
        <div className="absolute inset-[-31.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 104">
            <g filter="url(#filter0_f_1_995)" id="Ellipse 13">
              <circle cx="52" cy="52" fill="url(#paint0_radial_1_995)" r="32" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="104" id="filter0_f_1_995" width="104" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_995" stdDeviation="10" />
              </filter>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(2.66666 67.4667 -769.307 676.085 47.4667 15.4666)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_995" r="1">
                <stop stopColor="#494955" />
                <stop offset="1" stopColor="#141414" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      </div>
      <Group48 />
    </div>
  );
}