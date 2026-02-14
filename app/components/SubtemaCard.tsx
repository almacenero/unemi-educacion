import Link from "next/link";

interface SubtemaCardProps {
  unidadId: number;
  subtemaId: string;
  titulo: string;
}

export default function SubtemaCard({ unidadId, subtemaId, titulo }: SubtemaCardProps) {
  return (
    <Link 
      href={`/unidad-${unidadId}/${subtemaId}`}
      className="block bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 p-5 border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
            {titulo}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Click para ver el contenido
          </p>
        </div>
        <div className="flex-shrink-0 ml-2">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
