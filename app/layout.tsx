import type { Metadata } from "next";
import { Roboto, Space_Grotesk as SpaceGrotesk } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";
import { ThemeProvider } from "@/components/provider/theme-provider"

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-roboto"
})

const spaceGrotesk = SpaceGrotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk"
})

export const metadata: Metadata = {
  title: "Uz Academy",
  description: "You will learn any thing in this online education",
};

export default function RootLayout({children}: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${spaceGrotesk.variable} antialiased bg-slate-50 dark:bg-slate-800`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
