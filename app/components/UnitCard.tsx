import Link from "next/link";

interface UnitCardProps {
  id: number;
  titulo: string;
  descripcion: string;
  subtemasCount: number;
}

export default function UnitCard({ id, titulo, descripcion, subtemasCount }: UnitCardProps) {
  return (
    <Link 
      href={`/unidad-${id}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 hover:border-blue-400"
    >
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
        <h2 className="text-2xl font-bold text-white">
          {titulo}
        </h2>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 mb-4">
          {descripcion}
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {subtemasCount} subtemas
        </div>
      </div>
    </Link>
  );
}
