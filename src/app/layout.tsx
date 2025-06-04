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
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">리액트 튜토리얼</h1>
        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
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
    <html lang="ko" className="h-full">
      <body className="h-full bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
