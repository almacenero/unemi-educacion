import Link from "next/link";

interface UnitCardProps {
  readonly id: number;
  readonly titulo: string;
  readonly descripcion: string;
  readonly subtemasCount: number;
}

export default function UnitCard({ id, titulo, descripcion, subtemasCount }: UnitCardProps) {
  return (
    <Link 
      href={`/unidad-${id}`}
      className="group block bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-400 hover:-translate-y-1"
    >
      <div className="bg-linear-to-r from-blue-500 to-blue-600 px-6 py-5">
        <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:scale-105 transition-transform">
          {titulo}
        </h2>
      </div>
      <div className="px-6 py-5">
        <p className="text-gray-700 mb-6 leading-relaxed">
          {descripcion}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-600 gap-2">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="font-medium">{subtemasCount} subtemas</span>
          </div>
          <svg className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
