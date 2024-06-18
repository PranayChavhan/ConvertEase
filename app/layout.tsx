import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ConvertEase - File Converter",
    description: `Explore ConvertEase – your comprehensive, online toolkit for unlimited and free multimedia conversion. Revolutionize your content creation with effortless transformations of images, audio, and videos. Start converting now to unlock boundless possibilities and elevate your projects like never before!`,
    creator: "Pranay Chavhan",
    keywords: "image converter, video converter, audio converter, unlimited image converter, unlimited video converter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={["light", "dark"]}>
                    <Navbar />
                    <Toaster />
                    <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
