import ScrollUpButton from "@/components/scrollUpButton";
import localFont from "next/font/local";
import Header from "../components/header";
import Footer from "../components/footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import type { Metadata } from "next";
config.autoAddCss = false;
import "./globals.css";

const bowlbyOne = localFont({
  src: "../fonts/BowlbyOneSC-Regular.ttf",
  variable: "--font-bowlby-one",
  weight: "100 900",
});
const vigaReg = localFont({
  src: "../fonts/Viga-Regular.ttf",
  variable: "--font-viga-reg",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gary Allen Russell Jr - Full Stack Developer",
  description: "Professional portfolio for a modern developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bowlbyOne.variable} ${vigaReg.variable} antialiased`}
      >
        <div className="layout-container flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ScrollUpButton />
        </div>
      </body>
    </html>
  );
}
