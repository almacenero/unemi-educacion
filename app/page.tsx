import UnitCard from "./components/UnitCard";
import { courseData } from "./data/course-structure";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Propuesta de Investigación
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Bienvenido al material educativo de la asignatura Propuesta de Investigación. 
          Explora las cuatro unidades fundamentales para desarrollar tu proyecto de investigación.
        </p>
      </div>

      {/* Introduction Card */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12 rounded-r-lg">
        <h2 className="text-2xl font-semibold text-blue-900 mb-3">
          Sobre este curso
        </h2>
        <p className="text-gray-700 mb-3">
          La investigación científica es un proceso sistemático que permite generar conocimiento 
          válido y confiable. Este curso te guiará a través de las etapas fundamentales para 
          desarrollar una propuesta de investigación sólida.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-semibold text-gray-900">Metodología clara</h3>
              <p className="text-sm text-gray-600">Paso a paso en el proceso investigativo</p>
            </div>
          </div>
          <div className="flex items-start">
            <svg className="w-6 h-6 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <div>
              <h3 className="font-semibold text-gray-900">Contenido completo</h3>
              <p className="text-sm text-gray-600">Todos los temas esenciales cubiertos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Units Grid */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Unidades del Curso
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {courseData.map((unidad) => (
          <UnitCard
            key={unidad.id}
            id={unidad.id}
            titulo={unidad.titulo}
            descripcion={unidad.descripcion}
            subtemasCount={unidad.subtemas.length}
          />
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Cómo utilizar este material
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li className="pl-2">
            <strong>Navega por las unidades:</strong> Selecciona cualquier unidad desde el menú superior o las tarjetas anteriores
          </li>
          <li className="pl-2">
            <strong>Explora los subtemas:</strong> Dentro de cada unidad encontrarás los temas específicos a estudiar
          </li>
          <li className="pl-2">
            <strong>Revisa el contenido:</strong> Cada subtema incluye explicaciones detalladas y ejemplos prácticos
          </li>
          <li className="pl-2">
            <strong>Sigue la secuencia:</strong> Se recomienda estudiar las unidades en orden para mejor comprensión
          </li>
        </ol>
      </div>
    </div>
  );
}
