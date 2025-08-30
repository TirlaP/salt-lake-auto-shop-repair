import type { Metadata } from "next";
import { DM_Sans, Orbitron } from "next/font/google";

import "./globals.css";

const inter = DM_Sans({
   subsets: ["latin"],
   variable: "--body-font",
   display: "swap",
});
const orbitron = Orbitron({
   subsets: ["latin"],
   variable: "--header-font",
   display: "swap",
});

export const metadata: Metadata = {
   title: {
      template: "%s - Si's Auto Repair",
      default: "Si's Auto Repair - South Salt Lake Auto Shop Repair & Mechanics",
   },
   description: "Professional auto repair services in South Salt Lake. Expert mechanics with 60+ years experience. Same day service available. Call 801-747-3284 for appointment.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${inter.variable} ${orbitron.variable}`}>
            {children}
         </body>
      </html>
   );
}
