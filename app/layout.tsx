import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Propuesta de Investigación - UNEMI",
  description: "Material educativo de la asignatura Propuesta de Investigación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        <Navigation />
        <main>
          {children}
        </main>
        <footer className="bg-linear-to-r from-gray-800 to-gray-900 text-white py-10 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-lg font-semibold">Universidad Estatal de Milagro</h3>
              </div>
              <p className="text-sm text-gray-300 mb-1">
                Propuesta de Investigación - Material Educativo
              </p>
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} UNEMI. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
