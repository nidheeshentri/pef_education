import type { Metadata } from "next";
import "../styles/CSS/global-min.css";
import Header from "@/components/Header";
import { Inter, Poppins, Bad_Script, Podkova } from "next/font/google";
import Footer from "@/components/footer/Footer";

const badScript = Bad_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const podkova = Podkova({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-podkova'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

console.log(badScript, podkova)

export const metadata: Metadata = {
  title: "PEF Education",
  description: "Turn your study abroad dream into reality. Explore top universities, experience new cultures, and build a future without limits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
