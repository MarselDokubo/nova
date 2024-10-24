import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TopNav } from "./_components/top-nav";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Nova Gallery",
  description: "An image gallery app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <div className="">
            <TopNav />
            <main>{children}</main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
