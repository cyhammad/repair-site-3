import Header from "@/components/header/Header";
import "./globals.css";

import { Afacad } from "next/font/google";
import { Button } from "@/components/ui/button";
import { phone } from "@/lib/phone";
import CallAndWhatsappButton from "@/components/buttons/CallAndWhatsappButton";
import Footer from "@/components/footer/Footer";
import FixedButtons from "@/components/buttons/FixedButtons";
import Script from "next/script";


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
      <head>
        {/* Include gtag.js script */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16714947224" />

        {/* Include gtag.js initialization script */}
        <Script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16714947224');
        ` }} />
      
        <Script dangerouslySetInnerHTML={{ __html: `
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': 'AW-16714947224/UUH5CKKElN0ZEJi1p6I-',
              'event_callback': callback
            });
            return false;
          }
        ` }} />

        {/* Other head elements... */}
        {/* Google Tag Manager - Global base code */}
      
      </head>
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
          <FixedButtons />
        </div>
      </body>
    </html>
  );
}
