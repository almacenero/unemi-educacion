import Link from "next/link";
import type { Unidad, Subtema } from "../data/course-structure";

interface SubtemaTemplateProps {
  readonly unidad: Unidad;
  readonly subtema: Subtema;
  readonly prevSubtema: Subtema | null;
  readonly nextSubtema: Subtema | null;
}

export default function SubtemaTemplate({ unidad, subtema, prevSubtema, nextSubtema }: SubtemaTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 sm:mb-8 flex flex-wrap items-center gap-2 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
            🏠 Inicio
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href={`/unidad-${unidad.id}`} className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
            Unidad {unidad.id}
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-700 font-medium truncate">{subtema.titulo}</span>
        </nav>

        {/* Content */}
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-linear-to-r from-blue-600 to-blue-700 px-6 sm:px-10 py-8 sm:py-10 text-white">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3">
              {unidad.titulo}
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              {subtema.titulo}
            </h1>
          </div>

          {/* Content Body */}
          <div 
            className="px-6 sm:px-10 py-8 sm:py-10 prose prose-base sm:prose-lg max-w-none
              prose-headings:text-gray-900 
              prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-blue-800
              prose-h3:text-lg sm:prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-blue-700
              prose-h4:text-base sm:prose-h4:text-lg prose-h4:font-semibold prose-h4:mt-4 prose-h4:mb-2
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
              prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-gray-700 prose-li:mb-2 prose-li:leading-relaxed
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-em:text-gray-600
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: subtema.contenido }}
          />
        </article>

        {/* Navigation */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Previous */}
          {prevSubtema ? (
            <Link 
              href={`/unidad-${unidad.id}/${prevSubtema.id}`}
              className="group block bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-5 border-2 border-gray-200 hover:border-blue-400 hover:-translate-y-0.5"
            >
              <div className="flex items-center text-sm text-gray-500 mb-2 group-hover:text-blue-600 transition-colors">
                <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Anterior
              </div>
              <div className="text-gray-900 font-semibold text-sm sm:text-base line-clamp-2">
                {prevSubtema.titulo}
              </div>
            </Link>
          ) : (
            <div></div>
          )}

          {/* Next */}
          {nextSubtema ? (
            <Link 
              href={`/unidad-${unidad.id}/${nextSubtema.id}`}
              className="group block bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-5 border-2 border-gray-200 hover:border-blue-400 hover:-translate-y-0.5 text-right sm:col-start-2"
            >
              <div className="flex items-center justify-end text-sm text-gray-500 mb-2 group-hover:text-blue-600 transition-colors">
                Siguiente
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="text-gray-900 font-semibold text-sm sm:text-base line-clamp-2">
                {nextSubtema.titulo}
              </div>
            </Link>
          ) : (
            <div></div>
          )}
        </div>

        {/* Back to unit */}
        <div className="mt-8 text-center">
          <Link 
            href={`/unidad-${unidad.id}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 hover:text-gray-900 font-medium transition-all shadow-sm hover:shadow"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Volver a todos los subtemas</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
