import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/themeContext/ThemeContext";
import { ThemeProvider } from "@/providers";
import { Footer, Header } from "@/components";
import AuthProvider from "@/providers/authProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="page">
                <div className="container">
                  <Header />
                  <div className="wrapper">{children}</div>
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
