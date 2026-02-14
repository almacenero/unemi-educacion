import UnitCard from "./components/UnitCard";
import { courseData } from "./data/course-structure";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full">
              UNEMI - Material Educativo
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Propuesta de Investigación
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
            Bienvenido al material educativo de la asignatura Propuesta de Investigación. 
            Explora las cuatro unidades fundamentales para desarrollar tu proyecto de investigación.
          </p>
        </div>

        {/* Introduction Card */}
        <div className="bg-linear-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-8 sm:p-10 lg:p-12 mb-16 sm:mb-20 rounded-r-xl shadow-sm">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">
            💡 Sobre este curso
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            La investigación científica es un proceso sistemático que permite generar conocimiento 
            válido y confiable. Este curso te guiará a través de las etapas fundamentales para 
            desarrollar una propuesta de investigación sólida.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Metodología clara</h3>
                <p className="text-sm text-gray-600">Paso a paso en el proceso investigativo</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Contenido completo</h3>
                <p className="text-sm text-gray-600">Todos los temas esenciales cubiertos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Units Grid */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10">
            📚 Unidades del Curso
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
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
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-xl shadow-md p-8 sm:p-10 lg:p-12 border border-gray-100 mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            📖 Cómo utilizar este material
          </h2>
          <div className="space-y-6">
            {[
              { num: 1, title: "Navega por las unidades", desc: "Selecciona cualquier unidad desde el menú superior o las tarjetas anteriores" },
              { num: 2, title: "Explora los subtemas", desc: "Dentro de cada unidad encontrarás los temas específicos a estudiar" },
              { num: 3, title: "Revisa el contenido", desc: "Cada subtema incluye explicaciones detalladas y ejemplos prácticos" },
              { num: 4, title: "Sigue la secuencia", desc: "Se recomienda estudiar las unidades en orden para mejor comprensión" }
            ].map((item) => (
              <div key={item.num} className="flex gap-4 items-start">
                <div className="shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.num}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
