import Link from "next/link";

interface SubtemaCardProps {
  readonly unidadId: number;
  readonly subtemaId: string;
  readonly titulo: string;
}

export default function SubtemaCard({ unidadId, subtemaId, titulo }: SubtemaCardProps) {
  return (
    <Link 
      href={`/unidad-${unidadId}/${subtemaId}`}
      className="group block bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 px-6 py-5 border border-gray-200 hover:border-blue-400 hover:-translate-y-0.5"
    >
      <div className="flex items-center gap-4">
        <div className="shrink-0">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {titulo}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Click para ver el contenido completo
          </p>
        </div>
        <div className="shrink-0">
          <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
