import Header from "@/components/header/Header";
import "./globals.css";

import { Afacad } from "next/font/google";
import { Button } from "@/components/ui/button";
import { phone } from "@/lib/phone";
import CallAndWhatsappButton from "@/components/buttons/CallAndWhatsappButton";
import Footer from "@/components/footer/Footer";

const font = Afacad({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const metadata = {
  title: "Instant Appliances Repair",
  description: "Best home appliances repait site in Dubai and Abu Dhabi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} flex w-full flex-col items-center justify-center`}
      >
        <div className="flex w-full items-center justify-center bg-primary py-1 pl-3 pr-1 text-white">
          <div className="flex w-full max-w-7xl items-center justify-between gap-2">
            <h1 className="text-">Hire us:</h1>
            <span className="hidden sm:block">{phone}</span>
            <CallAndWhatsappButton />
          </div>
        </div>
        <div className="flex w-full flex-col rounded-md">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
