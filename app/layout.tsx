import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Motion from "@/components/Motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tailwind CSS Catchup",
  description: "Tailwind CSSのキャッチアップ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
