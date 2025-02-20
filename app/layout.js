import { DM_Sans } from "next/font/google";
import "./globals.scss";
import Providers from "./providers";

const dm_Sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm_Sans",
  display: "swap",
  weight: ["100", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export const metadata = {
  title: "Izam",
  description: "Izam Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dm_Sans.variable} antialiased`}>
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
