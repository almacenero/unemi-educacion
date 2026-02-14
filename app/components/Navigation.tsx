'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { courseData } from "../data/course-structure";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-xl font-bold hover:text-blue-200 transition-colors"
          >
            Propuesta de Investigación
          </Link>
          
          <div className="hidden md:flex space-x-1">
            {courseData.map((unidad) => (
              <Link
                key={unidad.id}
                href={`/unidad-${unidad.id}`}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname.startsWith(`/unidad-${unidad.id}`)
                    ? 'bg-blue-900 text-white'
                    : 'hover:bg-blue-700'
                }`}
              >
                Unidad {unidad.id}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="cursor-pointer list-none px-3 py-2 hover:bg-blue-700 rounded-md">
                ☰ Menú
              </summary>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                {courseData.map((unidad) => (
                  <Link
                    key={unidad.id}
                    href={`/unidad-${unidad.id}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Unidad {unidad.id}
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </nav>
  );
}
