import type { Metadata } from "next";
import { Cinzel_Decorative, Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/spiritual/footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/contexts/auth-context";

const cinzel = Cinzel_Decorative({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dharma Hundi",
  description: "A Worldwide Dharma Movement - Making Dharma a Daily Habit",
  icons: {
    icon: "https://firebasestorage.googleapis.com/v0/b/voice-62ddc.firebasestorage.app/o/dharmaLogo.png?alt=media&token=eca586ba-6b52-4328-8365-5db706212ab0",
  },
  openGraph: {
    title: "Dharma Hundi",
    description: "A Worldwide Dharma Movement - Making Dharma a Daily Habit",
    image: "https://firebasestorage.googleapis.com/v0/b/voice-62ddc.firebasestorage.app/o/dharmaLogo.png?alt=media&token=eca586ba-6b52-4328-8365-5db706212ab0",
    url: "https://dharmahundi.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cinzel.variable} ${poppins.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AuthProvider>
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
