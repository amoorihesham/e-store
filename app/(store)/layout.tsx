import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "100", "200", "300", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "e-Store",
  description: "Shop your desired products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} font-inter antialiased`}>
          <Toaster />
          <Header />
          <main className="min-h-[calc(100dvh-(80px+70px))]">
            <NuqsAdapter defaultOptions={{ shallow: false }}>
              {children}
            </NuqsAdapter>
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
