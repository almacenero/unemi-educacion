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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-16">
        {/* Breadcrumb */}
        <nav className="mb-6 sm:mb-8 flex items-center gap-2 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors px-2 py-1">
            🏠 Inicio
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-700 font-medium">Unidad {unidad.id}</span>
        </nav>

        {/* Header */}
        <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl px-8 sm:px-12 lg:px-16 py-12 sm:py-16 mb-12 sm:mb-16 text-white">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Unidad {unidad.id} de 4
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            {unidad.titulo}
          </h1>
          <p className="text-lg sm:text-xl text-blue-50 leading-relaxed max-w-3xl">
            {unidad.descripcion}
          </p>
        </div>

        {/* Temas y Subtemas */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Temas y Subtemas
            </h2>
          </div>
          <div className="space-y-8">
            {unidad.temas.map((tema) => (
              <div key={tema.id} className="bg-white rounded-xl shadow-md border-2 border-blue-100 overflow-hidden">
                {/* Tema Header */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b-2 border-blue-200">
                  <h3 className="text-xl font-bold text-blue-900">{tema.titulo}</h3>
                </div>
                {/* Subtemas */}
                <div className="p-4 grid gap-4">
                  {tema.subtemas.map((subtema) => (
                    <SubtemaCard
                      key={subtema.id}
                      unidadId={unidad.id}
                      subtemaId={subtema.id}
                      titulo={subtema.titulo}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diapositiva Section */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Diapositiva
            </h2>
          </div>
          
          <div className="group relative bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-purple-200 hover:border-purple-400">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
            
            <div className="relative px-8 py-8 sm:px-10 sm:py-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Icon & Info */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">
                      PDF
                    </span>
                    <span className="text-sm text-gray-600">Material complementario</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Presentación Unidad {unidad.id}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Descarga las diapositivas en formato PDF para estudiar offline o imprimir
                  </p>
                </div>

                {/* Download Button */}
                <div className="flex-shrink-0 w-full sm:w-auto">
                  <a
                    href={`/documentos/Unidad ${unidad.id}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl font-semibold w-full sm:w-auto"
                  >
                    <svg className="w-6 h-6 group-hover/btn:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Descargar PDF</span>
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 pt-6 border-t border-purple-200/50 flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">Formato: PDF</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="font-medium">Ver en navegador</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actividad Section */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Actividad
            </h2>
          </div>
          
          <div className="group relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-emerald-200 hover:border-emerald-400">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-cyan-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
            
            <div className="relative px-8 py-8 sm:px-10 sm:py-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Icon & Info */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                      PDF
                    </span>
                    <span className="text-sm text-gray-600">Ejercicio práctico</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Actividad Unidad {unidad.id}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Realiza los ejercicios propuestos para reforzar el aprendizaje de esta unidad
                  </p>
                </div>

                {/* Download Button */}
                <div className="flex-shrink-0 w-full sm:w-auto">
                  <a
                    href={`/documentos/ACTIVIDAD ${unidad.id}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl font-semibold w-full sm:w-auto"
                  >
                    <svg className="w-6 h-6 group-hover/btn:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Descargar PDF</span>
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 pt-6 border-t border-emerald-200/50 flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="font-medium">Formato: PDF</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  <span className="font-medium">Ejercicios prácticos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t-2 border-gray-200">
          <div className="w-full sm:w-auto">
            {prevUnidad && (
              <Link 
                href={`/unidad-${prevUnidad}`}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm hover:shadow-md font-semibold"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Unidad {prevUnidad}</span>
              </Link>
            )}
          </div>
          <div className="w-full sm:w-auto">
            {nextUnidad && (
              <Link 
                href={`/unidad-${nextUnidad}`}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg font-semibold"
              >
                <span>Unidad {nextUnidad}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
