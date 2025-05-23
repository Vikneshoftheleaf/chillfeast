import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes"
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

import FeedbackForm from "@/components/feebackForm";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F59CXC13QW"
        />

        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config','G-F59CXC13QW'});
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar></Navbar>
          <main>
            {children}
          </main>
          <Footer></Footer>
          <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
          <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
          <script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </ThemeProvider>
        <FeedbackForm apiUrl={'https://formspree.io/f/mrbepdav'}/>
      </body>
    </html>
  );
}
