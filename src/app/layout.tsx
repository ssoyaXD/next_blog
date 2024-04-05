import './globals.css'
import type { Metadata } from "next";
import { Gowun_Dodum } from "next/font/google";
import Link from "next/link";

const dodum = Gowun_Dodum({ 
  weight: '400',
  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ssoyaXD",
  description: "ssoyaXD의 Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dodum.className}>
      <body>
        <header>
          <h1><Link href="/">ssoyaXD Blog</Link></h1>
          <nav>
              <Link href="/">Home</Link>
              <Link href="/posts">Posts</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
          </nav>
        </header>
      {children}
      </body>
    </html>
  );
}
