import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import NextAuthProvider from "@/components/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "University GPA Calculator",
    description: "Calculate your Semester and Final GPA",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-K0CDNVXWHZ"
                    strategy="afterInteractive"
                />
                <Script id="gtag-init" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-K0CDNVXWHZ');
                    `}
                </Script>
            </head>
            <body className={inter.className}>
                <NextAuthProvider>
                    {children}
                </NextAuthProvider>
            </body>
        </html>
    );
}
