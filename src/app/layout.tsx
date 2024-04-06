import './globals.css'
import type { Metadata } from "next";
import { Gowun_Dodum } from "next/font/google";
import Link from "next/link";

const dodum = Gowun_Dodum({
  weight: '400',
  subsets: ["latin"]
});

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
      <body className='flex flex-col items-center'>
        <header className='w-5/6 h-auto flex justify-between mt-4'>
          <h1 className='font-bold text-4xl'><Link href="/">ssoyaXD Blog</Link></h1>
          <nav>
            <Link className='mr-3' href="/">Home</Link>
            <Link className='mr-3' href="/posts">Posts</Link>
            <Link className='mr-3' href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <section className='w-5/6'>
          {children}
        </section>
        <footer className='w-5/6 h-56 bg-[#1c1c1c] text-white flex flex-col items-center mt-8'>
          <h2 className='mt-4'>Copyrightⓒ2024 ssoyaXD All Rights Reserved.</h2>
        </footer>
      </body>
    </html>
  );
}
