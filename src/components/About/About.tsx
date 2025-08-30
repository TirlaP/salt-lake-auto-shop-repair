import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "../ui/button";
import { RightArrowIcon, SpannerIcon } from "../ui/icons";

const About = () => {
   return (
      <section className="overflow-hidden py-9 font-header md:py-[80px] lg:py-[120px] xl:py-[150px]">
         <div className="container flex max-w-[1420px] flex-col items-center gap-x-[70px] gap-y-5 px-5 lg:flex-row lg:px-0">
            <div className="w-full xl:w-[705px]">
               <Image
                  src="/images/image-12.png"
                  alt="Autofix about"
                  width={705}
                  height={615}
                  quality={60}
                  className="h-auto w-full"
               />
            </div>
            <div className="w-full xl:w-[645px]">
               <p className="relative z-10 text-sm font-extrabold uppercase leading-7 text-default-black before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-tertiary before:content-[''] lg:text-base">
                  about si&apos;s auto repair
               </p>

               <h2 className="mb-2 mt-2.5 text-3xl font-black uppercase md:mb-3.5 md:mt-4 lg:mb-6 lg:mt-4 lg:text-4xl xl:mb-8 xl:text-5xl xl:leading-heavy">
                  south salt lake&apos;s trusted auto shop
               </h2>

               <p className="font-body text-base font-normal text-default-tertiary lg:text-lg">
                  Si&apos;s Auto Repair is South Salt Lake&apos;s trusted automotive service center, now under new ownership with a renewed commitment to excellence. Located at 3715 700 West in Salt Lake City, we&apos;ve been serving the community with professional auto repair services backed by over 60 years of combined mechanical expertise. Our team of skilled mechanics is dedicated to providing high-quality repairs that keep you safe and satisfied.
               </p>

               <div
                  className="relative mb-10 mt-4 rounded-l-md bg-background-fade bg-[url('/images/bg-3.svg')] px-5 py-4 md:mb-12 md:px-7 md:py-6 lg:mb-14 lg:mt-7 lg:px-9 lg:py-8 xl:mb-16 xl:px-12 xl:py-10"
                  style={{
                     clipPath: "polygon(0 0, 94% 0, 100% 100%, 0% 100%)",
                  }}
               >
                  <p className="z-10 text-base font-extrabold uppercase text-default-foreground lg:text-lg">
                     &quot;We understand that auto repair can be stressful, which is why we strive to maintain constant communication with our customers throughout the entire process.&quot;
                  </p>
                  <SpannerIcon className="absolute right-20 top-1/2 -z-10 h-[68px] w-[74px] -translate-y-2/4 fill-[#D6D7DD]" />
               </div>

               <div className="flex items-center gap-x-8">
                  <div>
                     <Link
                        className={buttonVariants({
                           variant: "skewBig",
                           size: "skewBig",
                        })}
                        href="/about"
                     >
                        <span>LEARN MORE</span>
                        <RightArrowIcon className="fill-white" />
                     </Link>
                  </div>
                  <div className="leading-normal">
                     <h4 className="text-base font-extrabold uppercase leading-7 text-default-black lg:text-lg">
                        Si&apos;s Auto Team
                     </h4>
                     <p className="font-body text-base font-normal text-default-tertiary lg:text-lg">
                        Expert Mechanics
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { About };

