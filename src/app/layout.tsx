import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "리액트 튜토리얼",
  description: "리액트 튜토리얼",
};

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "홈", href: "/" },
  { name: "프롭스 예제", href: "/props" },
  { name: "상태 관리 예제", href: "/state" },
];

function Header() {
  return (
    <header className="bg-base-200">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <h1 className="text-xl font-bold">리액트 튜토리얼</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="btn btn-ghost">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-theme="light">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="w-full min-w-xl max-w-[1200px]">{children}</div>
        </main>
      </body>
    </html>
  );
}
