import { SocialLogo } from "@/components/SocialLogo";
import {
   MotionDiv,
   MotionH1,
   MotionP,
   MotionSection,
} from "@/components/animations/motion";

export const onscreen = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const HeroSection = () => {
   return (
      <MotionSection
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: true }}
         className="relative h-screen w-full bg-[url('/images/image-29.png')] bg-cover bg-center bg-no-repeat"
      >
         <MotionDiv
            variants={{
               offscreen: { opacity: 0, x: -100 },
               onscreen: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
            className="offscreen absolute top-1/2 hidden md:block lg:flex"
         >
            <SocialLogo isRotate />
         </MotionDiv>
         <div className="flex h-full w-full flex-col items-center justify-center font-header text-default">
            <MotionH1
               variants={{
                  offscreen: { opacity: 0, y: -100 },
                  onscreen,
               }}
               className="text-center text-4xl font-black sm:text-[50px] sm:leading-[50px] md:text-[70px] md:leading-[70px] lg:text-[90px] lg:leading-[90px] xl:text-[100px] xl:leading-[100px]"
            >
               <span className="text-primary">PROFESSIONAL</span> <span>AUTO</span>
               <br />
               <span>REPAIR IN</span>
               <br />
               <span className="text-tertiary">SOUTH SALT LAKE</span>
            </MotionH1>
            <MotionP
               variants={{
                  offscreen: { opacity: 0, y: 100 },
                  onscreen,
               }}
               className="mt-4 text-center text-lg font-medium leading-6 sm:text-xl md:mt-6 md:text-2xl md:leading-8"
            >
               <span>Expert mechanics with over 60 years of combined experience</span>
               <br />
               <span className="text-primary font-bold">SAME DAY SERVICE AVAILABLE</span>
            </MotionP>

            <div className="mt-10 md:hidden">
               <SocialLogo />
            </div>
         </div>
      </MotionSection>
   );
};

export { HeroSection };

