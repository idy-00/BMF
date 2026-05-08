import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BMF Dakar — Fast Food Premium | Ave Habib Bourguiba",
  description:
    "BMF Dakar, le meilleur fast food de Dakar. Burgers généreux, chawarmas, wraps et desserts. Note 4,7/5 sur Google. Commandez au +221 78 451 33 33. Ouvert dès 16h00.",
  keywords: ["fast food Dakar", "burger Dakar", "BMF Dakar", "restaurant Dakar", "chawarma Dakar"],
  openGraph: {
    title: "BMF Dakar — Fast Food Premium",
    description: "Burgers, chawarmas & wraps. Le vrai goût du fast food à Dakar.",
    locale: "fr_SN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${oswald.variable} ${inter.variable} font-sans antialiased bg-[#121212] text-white`}>
        {children}
      </body>
    </html>
  );
}
