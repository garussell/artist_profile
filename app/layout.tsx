import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "../components/header";
import Footer from "../components/footer";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
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
        <div className="layout-container">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
