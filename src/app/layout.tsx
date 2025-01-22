import type { Metadata } from "next";
import "./globals.css";
import { Search } from "./components/search/Search";
import { Sider } from "./components/sider/Sider";
import { Play } from "./components/play/Play";

export const metadata: Metadata = {
  title: "Project 5",
  description: "Project nghe nhạc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />

      <body className="bg-background-primary">
        <div className="container mx-auto">
          <div className="inner-wrap flex gap-[20px]">
            <div className="inner-left w-[280px] bg-background-secondary h-[150vh]">
              <Sider />
            </div>

            <div className="inner-right flex-1">
              <Search />
              <main className="inner-main">{children}</main>
            </div>
          </div>
        </div>
        
        <div className="inner-bottom bg-background-secondary w-full fixed bottom-0 left-0 border-t-[1px] border-[#494949] py-[22px]">
          <div className=" container mx-auto">
            <Play />
          </div>
        </div>
      </body>
    </html>
  );
}
