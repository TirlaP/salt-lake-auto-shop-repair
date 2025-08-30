import Link from "next/link";

const Services = () => {
   return (
      <div className="w-full">
         <h4 className="mb-6 font-header text-lg font-extrabold uppercase text-default">
            services
         </h4>
         <ul className="text-lg font-normal leading-9 text-default-foreground">
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/services/diagnostics">Diagnostics</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/services/oil-change">Oil Changes</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/services/brake-service">Brake Service</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/services/emissions">Emissions Testing</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/services/ac-repair">AC/Heater Repair</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/services/suspension">Suspension Repair</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/services/tire-service">Tire Services</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/services/engine-repair">Engine Repair</Link>
            </li>
         </ul>
      </div>
   );
};

export { Services };
