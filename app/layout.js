import "./globals.css";
import StarBackground from "./components/StarBackground/StarBackground";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Navbar from "./components/Navbar/Navbar";
import { Providers } from "./components/providers/providers";
import WhatsApp from "./components/WhatsApp/WhatsApp";

export const metadata = {
  title: "Ahmed's Portfolio",
  description: "Ahmed's Portfolio Fronend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className="scroll-smooth selection:bg-neon-blue selection:text-white"
    >
      <body suppressHydrationWarning className="antialiased">
        <Providers>
          <StarBackground />
          <CustomCursor />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <WhatsApp />
        </Providers>
      </body>
    </html>
  );
}
