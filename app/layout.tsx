import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


const geistMono = Nunito({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free template portfolio 1 build by leonel yimga",
  description: "For help developer with creation of her portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`w-full flex justify-center items-center bg-neutral-900  antialiased  ${geistMono.variable} `}
      >
        <div className="w-full max-w-[500px] overflow-hidden flex flex-col gap-y-4">
          <Header/>
          
          <section 
          className='w-full md:px-0 px-8  flex overflow-hidden flex-col justify-center items-center'
        id="transition-element">
          
        {children}
        </section>
        <Footer/>
        </div>
      </body>
    </html>
  );
}
