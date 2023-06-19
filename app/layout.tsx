import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "FindMyCar",
  description: "Discover the best cars in the world!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative custom-scrollbar">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
