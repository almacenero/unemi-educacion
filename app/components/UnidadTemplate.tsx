import Link from "next/link";
import SubtemaCard from "./SubtemaCard";
import type { Unidad } from "../data/course-structure";

interface UnidadTemplateProps {
  readonly unidad: Unidad;
  readonly prevUnidad?: number;
  readonly nextUnidad?: number;
}

export default function UnidadTemplate({ unidad, prevUnidad, nextUnidad }: UnidadTemplateProps) {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 sm:mb-8 flex items-center gap-2 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
            🏠 Inicio
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-700 font-medium">Unidad {unidad.id}</span>
        </nav>

        {/* Header */}
        <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl px-6 sm:px-10 py-10 sm:py-14 mb-10 sm:mb-12 text-white">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-4">
            Unidad {unidad.id} de 4
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            {unidad.titulo}
          </h1>
          <p className="text-lg sm:text-xl text-blue-50 leading-relaxed max-w-3xl">
            {unidad.descripcion}
          </p>
        </div>

        {/* Subtemas */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Subtemas
            </h2>
          </div>
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
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t-2 border-gray-200">
          <div className="w-full sm:w-auto">
            {prevUnidad && (
              <Link 
                href={`/unidad-${prevUnidad}`}
                className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-semibold">Unidad {prevUnidad}</span>
              </Link>
            )}
          </div>
          <div className="w-full sm:w-auto">
            {nextUnidad && (
              <Link 
                href={`/unidad-${nextUnidad}`}
                className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
              >
                <span className="font-semibold">Unidad {nextUnidad}</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
