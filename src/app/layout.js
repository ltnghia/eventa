import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventa"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
    
          <Sidebar  />
          {children}
        <Footer />
        </body>
    </html>
  );
}
