import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Use to set title of webpage
  title: "AirBnb",
  description: "A clone project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
