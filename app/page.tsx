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

        {/* Recursos Section */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <span>📦 Recursos</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Video Clase */}
            <div className="group relative bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-red-200 hover:border-red-400">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
              
              <div className="relative p-6 sm:p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full mb-3">
                    VIDEO
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Video Clase
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Contenido audiovisual complementario
                  </p>
                </div>

                <button
                  disabled
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-300 text-gray-500 rounded-xl font-semibold cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Próximamente</span>
                </button>
              </div>
            </div>

            {/* Sílabo */}
            <div className="group relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-orange-200 hover:border-orange-400">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-full blur-3xl"></div>
              
              <div className="relative p-6 sm:p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full mb-3">
                    PDF
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Sílabo
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Plan de estudios de la asignatura
                  </p>
                </div>

                <a
                  href="/documentos/SILABO.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl hover:from-orange-700 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl font-semibold"
                >
                  <svg className="w-5 h-5 group-hover/btn:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Descargar</span>
                </a>
              </div>
            </div>

            {/* Programa Analítico */}
            <div className="group relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-amber-200 hover:border-amber-400">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-yellow-400/20 rounded-full blur-3xl"></div>
              
              <div className="relative p-6 sm:p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full mb-3">
                    PDF
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Programa Analítico
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Contenido detallado del curso
                  </p>
                </div>

                <a
                  href="/documentos/PROGRAMA ANALITICO.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-xl hover:from-amber-700 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl font-semibold"
                >
                  <svg className="w-5 h-5 group-hover/btn:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Descargar</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bibliografía Subsection */}
          <div className="mt-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Bibliografía básica</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Bernal */}
              <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-indigo-100 hover:border-indigo-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 mb-1 text-base sm:text-lg">
                        Metodología de la investigación
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        César Augusto Bernal Torres
                      </p>
                      <a
                        href="/documentos/Metodología de la investigación Bernal.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold text-sm group-hover:gap-3 transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Descargar PDF</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hernández y Mendoza */}
              <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 mb-1 text-base sm:text-lg">
                        Metodología de la investigación
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Roberto Hernández Sampieri y Christian Paulina Mendoza Torres
                      </p>
                      <a
                        href="/documentos/Metodología de la investigación Hernández y Mendoza.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold text-sm group-hover:gap-3 transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Descargar PDF</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Units Grid */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10">
            📚 Unidades de la asignatura
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {courseData.map((unidad) => (
              <UnitCard
                key={unidad.id}
                id={unidad.id}
                titulo={unidad.titulo}
                descripcion={unidad.descripcion}
                subtemasCount={unidad.temas.reduce((total, tema) => total + tema.subtemas.length, 0)}
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
