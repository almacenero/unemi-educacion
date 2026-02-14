import Link from "next/link";
import SubtemaCard from "../components/SubtemaCard";
import { getUnidad } from "../data/course-structure";

export default function Unidad4Page() {
  const unidad = getUnidad(4)!;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          Inicio
        </Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-700">Unidad {unidad.id}</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg px-8 py-12 mb-12 text-white">
        <h1 className="text-4xl font-bold mb-4">
          {unidad.titulo}
        </h1>
        <p className="text-xl text-blue-100">
          {unidad.descripcion}
        </p>
      </div>

      {/* Subtemas */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Subtemas
        </h2>
        <div className="grid gap-4">
          {unidad.subtemas.map((subtema) => (
            <SubtemaCard
              key={subtema.id}
              unidadId={unidad.id}
              subtemaId={subtema.id}
              titulo={subtema.titulo}
            />
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <div>
          <Link 
            href="/unidad-3"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Unidad 3
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}
