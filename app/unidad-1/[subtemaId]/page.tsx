import Link from "next/link";
import { getUnidad, getSubtema } from "../../data/course-structure";
import { notFound } from "next/navigation";

const UNIDAD_ID = 1;

export default async function SubtemaPage({ 
  params 
}: { 
  params: Promise<{ subtemaId: string }>
}) {
  const { subtemaId } = await params;
  const unidad = getUnidad(UNIDAD_ID);
  const subtema = getSubtema(UNIDAD_ID, subtemaId);

  if (!unidad || !subtema) {
    notFound();
  }

  // Encontrar el índice del subtema actual
  const currentIndex = unidad.subtemas.findIndex(s => s.id === subtemaId);
  const prevSubtema = currentIndex > 0 ? unidad.subtemas[currentIndex - 1] : null;
  const nextSubtema = currentIndex < unidad.subtemas.length - 1 ? unidad.subtemas[currentIndex + 1] : null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          Inicio
        </Link>
        <span className="mx-2 text-gray-500">/</span>
        <Link href={`/unidad-${unidad.id}`} className="text-blue-600 hover:text-blue-800">
          Unidad {unidad.id}
        </Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-700">{subtema.titulo}</span>
      </nav>

      {/* Content */}
      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-8 text-white">
          <div className="text-sm font-semibold text-blue-200 mb-2">
            {unidad.titulo}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            {subtema.titulo}
          </h1>
        </div>

        {/* Content Body */}
        <div 
          className="px-8 py-8 prose prose-lg max-w-none
            prose-headings:text-gray-900 
            prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-blue-800
            prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-blue-700
            prose-h4:text-lg prose-h4:font-semibold prose-h4:mt-4 prose-h4:mb-2
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-gray-700 prose-li:mb-2
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-em:text-gray-600
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: subtema.contenido }}
        />
      </article>

      {/* Navigation */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Previous */}
        {prevSubtema ? (
          <Link 
            href={`/unidad-${unidad.id}/${prevSubtema.id}`}
            className="block bg-white rounded-lg shadow hover:shadow-md transition-shadow p-5 border border-gray-200 hover:border-blue-300"
          >
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Anterior
            </div>
            <div className="text-gray-900 font-semibold">
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
            className="block bg-white rounded-lg shadow hover:shadow-md transition-shadow p-5 border border-gray-200 hover:border-blue-300 text-right"
          >
            <div className="flex items-center justify-end text-sm text-gray-500 mb-2">
              Siguiente
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="text-gray-900 font-semibold">
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
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver a {unidad.titulo}
        </Link>
      </div>
    </div>
  );
}
