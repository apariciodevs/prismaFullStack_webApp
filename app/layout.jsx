import "./globals.css";
import Nav from "./auth/Nav";
import { Roboto } from "@next/font/google";
import QueryWrapper from "./auth/QueryWrapper";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        className={`mx-4 xl:mx-48 2xl:mx-96 bg-gray-200 ${roboto.variable}`}
      >
        <QueryWrapper>
          <Nav />
          {children}
        </QueryWrapper>
      </body>
    </html>
  );
}
