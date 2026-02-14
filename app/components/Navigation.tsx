'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { courseData } from "../data/course-structure";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-linear-to-r from-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-lg sm:text-xl font-bold hover:text-blue-100 transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="hidden sm:inline">Propuesta de Investigación</span>
            <span className="sm:hidden">UNEMI</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-2">
            {courseData.map((unidad) => (
              <Link
                key={unidad.id}
                href={`/unidad-${unidad.id}`}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname.startsWith(`/unidad-${unidad.id}`)
                    ? 'bg-blue-900 shadow-md scale-105'
                    : 'bg-blue-700/50 hover:bg-blue-700 hover:scale-105'
                }`}
              >
                Unidad {unidad.id}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden px-3 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-2">
            {courseData.map((unidad) => (
              <Link
                key={unidad.id}
                href={`/unidad-${unidad.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-5 py-3.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith(`/unidad-${unidad.id}`)
                    ? 'bg-blue-900'
                    : 'bg-blue-700/50 hover:bg-blue-700'
                }`}
              >
                Unidad {unidad.id}: {unidad.titulo.replace('Unidad ' + unidad.id + ': ', '')}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
