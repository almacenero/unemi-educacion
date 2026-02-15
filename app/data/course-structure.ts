export interface Subtema {
  id: string;
  titulo: string;
  contenido: string;
}

export interface Tema {
  id: string;
  titulo: string;
  subtemas: Subtema[];
}

export interface Unidad {
  id: number;
  titulo: string;
  descripcion: string;
  temas: Tema[];
}

export const courseData: Unidad[] = [
  {
    id: 1,
    titulo: "Unidad 1: CONTEXTUALIZACIÓN DE LA INVESTIGACIÓN Y DEFINICIÓN DEL TEMA DE ESTUDIO",
    descripcion: "Resultado de Aprendizaje 1: Reconocerá los enfoques cuantitativo y cualitativo de la investigación científica y seleccionará un tema de estudio pertinente a la realidad profesional y académica.",
    temas: [
      {
        id: "tema-1-1",
        titulo: "Tema 1: Introducción a la investigación científica",
        subtemas: [
          {
            id: "1-1-1",
            titulo: "Subtema 1: Investigación científica y su aplicación en las ciencias económicas y empresariales",
            contenido: `
              <h2>Investigación científica y su aplicación en las ciencias económicas y empresariales</h2>
              <p>La investigación científica es un proceso sistemático y riguroso que busca generar nuevo conocimiento y resolver problemas en el ámbito de las ciencias económicas y empresariales.</p>
              
              <h3>Características de la investigación científica:</h3>
              <ul>
                <li><strong>Sistemática:</strong> Sigue un proceso ordenado y metódico</li>
                <li><strong>Objetiva:</strong> Busca la verdad independientemente de preferencias personales</li>
                <li><strong>Verificable:</strong> Los resultados pueden ser comprobados por otros investigadores</li>
                <li><strong>Empírica:</strong> Se basa en la observación y experiencia</li>
              </ul>

              <h3>Aplicaciones en ciencias económicas y empresariales:</h3>
              <ul>
                <li>Análisis de mercados y comportamiento del consumidor</li>
                <li>Evaluación de políticas económicas y su impacto</li>
                <li>Estudio de modelos de gestión empresarial</li>
                <li>Investigación de factores que afectan la competitividad</li>
                <li>Análisis financiero y de inversiones</li>
              </ul>
            `
          },
          {
            id: "1-1-2",
            titulo: "Subtema 2: Enfoque cuantitativo y cualitativo: características y contextos de aplicación",
            contenido: `
              <h2>Enfoque cuantitativo y cualitativo</h2>
              
              <h3>Enfoque Cuantitativo:</h3>
              <p>Se centra en la medición numérica y el análisis estadístico de variables.</p>
              <ul>
                <li><strong>Características:</strong> Objetivo, deductivo, generalizable, usa estadística</li>
                <li><strong>Métodos:</strong> Encuestas, experimentos, análisis de datos numéricos</li>
                <li><strong>Contextos de aplicación:</strong> Estudios de mercado, análisis financiero, evaluación de rendimiento</li>
              </ul>

              <h3>Enfoque Cualitativo:</h3>
              <p>Se enfoca en comprender fenómenos desde la perspectiva de los participantes.</p>
              <ul>
                <li><strong>Características:</strong> Subjetivo, inductivo, profundo, usa análisis interpretativo</li>
                <li><strong>Métodos:</strong> Entrevistas, grupos focales, observación participante</li>
                <li><strong>Contextos de aplicación:</strong> Cultura organizacional, comportamiento del consumidor, estudios de caso</li>
              </ul>

              <h3>Enfoque Mixto:</h3>
              <p>Combina elementos cuantitativos y cualitativos para obtener una comprensión más completa del fenómeno estudiado.</p>
            `
          },
          {
            id: "1-1-3",
            titulo: "Subtema 3: Relación entre el enfoque metodológico y el objeto de estudio",
            contenido: `
              <h2>Relación entre el enfoque metodológico y el objeto de estudio</h2>
              <p>La selección del enfoque metodológico debe estar alineada con la naturaleza del objeto de estudio y los objetivos de la investigación.</p>
              
              <h3>Criterios para seleccionar el enfoque:</h3>
              <ul>
                <li><strong>Naturaleza del problema:</strong> ¿Es cuantificable o requiere comprensión profunda?</li>
                <li><strong>Objetivos de investigación:</strong> ¿Busca medir o comprender?</li>
                <li><strong>Recursos disponibles:</strong> Tiempo, acceso a información, herramientas</li>
                <li><strong>Conocimiento previo:</strong> Nivel de teorización del tema</li>
              </ul>

              <h3>Ejemplos de alineación:</h3>
              <table>
                <tr>
                  <th>Objeto de Estudio</th>
                  <th>Enfoque Sugerido</th>
                </tr>
                <tr>
                  <td>Impacto de estrategias de marketing en ventas</td>
                  <td>Cuantitativo</td>
                </tr>
                <tr>
                  <td>Cultura organizacional en startups</td>
                  <td>Cualitativo</td>
                </tr>
                <tr>
                  <td>Satisfacción laboral y productividad</td>
                  <td>Mixto</td>
                </tr>
              </table>
            `
          },
          {
            id: "1-1-4",
            titulo: "Subtema 4: Ética académica en el proceso investigativo",
            contenido: `
              <h2>Ética académica en el proceso investigativo</h2>
              <p>La ética académica establece principios y normas que garantizan la integridad y honestidad en la investigación científica.</p>
              
              <h3>Principios éticos fundamentales:</h3>
              <ul>
                <li><strong>Honestidad:</strong> Presentar datos y resultados de manera veraz</li>
                <li><strong>Objetividad:</strong> Evitar sesgos y conflictos de interés</li>
                <li><strong>Integridad:</strong> Cumplir promesas y acuerdos</li>
                <li><strong>Respeto a la propiedad intelectual:</strong> Citar adecuadamente las fuentes</li>
                <li><strong>Confidencialidad:</strong> Proteger información sensible de los participantes</li>
              </ul>

              <h3>Prácticas éticas en la investigación:</h3>
              <ul>
                <li>Obtener consentimiento informado de los participantes</li>
                <li>Evitar el plagio y la falsificación de datos</li>
                <li>Reconocer las contribuciones de otros investigadores</li>
                <li>Declarar conflictos de interés</li>
                <li>Garantizar la privacidad y anonimato cuando sea necesario</li>
              </ul>

              <h3>Consecuencias de violaciones éticas:</h3>
              <ul>
                <li>Pérdida de credibilidad académica</li>
                <li>Sanciones institucionales</li>
                <li>Retractación de publicaciones</li>
                <li>Daño a la reputación profesional</li>
              </ul>
            `
          }
        ]
      },
      {
        id: "tema-1-2",
        titulo: "Tema 2: Planteamiento del tema y problema de investigación",
        subtemas: [
          {
            id: "1-2-1",
            titulo: "Subtema 1: Criterios para plantear el tema de investigación",
            contenido: `
              <h2>Criterios para plantear el tema de investigación</h2>
              <p>La selección adecuada del tema de investigación es crucial para el éxito del proceso investigativo.</p>
              
              <h3>Criterios principales:</h3>
              <ul>
                <li><strong>Relevancia:</strong> El tema debe ser significativo para el área de conocimiento</li>
                <li><strong>Interés personal:</strong> Afinidad y motivación del investigador</li>
                <li><strong>Viabilidad:</strong> Posibilidad de realizar la investigación con recursos disponibles</li>
                <li><strong>Originalidad:</strong> Aportar nuevo conocimiento o perspectiva</li>
                <li><strong>Pertinencia profesional:</strong> Relación con la carrera y contexto laboral</li>
              </ul>

              <h3>Fuentes de temas de investigación:</h3>
              <ul>
                <li>Problemas observados en la práctica profesional</li>
                <li>Revisión de literatura científica</li>
                <li>Recomendaciones de estudios previos</li>
                <li>Necesidades del sector empresarial</li>
                <li>Tendencias y cambios en el mercado</li>
              </ul>

              <h3>Delimitación del tema:</h3>
              <ul>
                <li><strong>Espacial:</strong> Lugar donde se realizará la investigación</li>
                <li><strong>Temporal:</strong> Período de tiempo que abarcará el estudio</li>
                <li><strong>Conceptual:</strong> Aspectos específicos que se abordarán</li>
              </ul>
            `
          },
          {
            id: "1-2-2",
            titulo: "Subtema 2: Identificación y descripción del problema de investigación",
            contenido: `
              <h2>Identificación y descripción del problema de investigación</h2>
              <p>El problema de investigación es una situación que requiere solución o comprensión a través de un proceso de indagación científica.</p>
              
              <h3>Identificación del problema:</h3>
              <ul>
                <li>Observación de la realidad y detección de situaciones problemáticas</li>
                <li>Análisis de brechas entre el estado actual y el deseado</li>
                <li>Consulta con expertos y revisión de literatura</li>
                <li>Identificación de contradicciones o inconsistencias teóricas</li>
              </ul>

              <h3>Descripción del problema:</h3>
              <p>La descripción debe incluir:</p>
              <ul>
                <li><strong>Contextualización:</strong> Marco en el que se presenta el problema</li>
                <li><strong>Síntomas:</strong> Manifestaciones observables del problema</li>
                <li><strong>Causas potenciales:</strong> Factores que podrían estar generando el problema</li>
                <li><strong>Consecuencias:</strong> Efectos de no atender el problema</li>
                <li><strong>Magnitud:</strong> Alcance e impacto del problema</li>
              </ul>

              <h3>Características de un buen problema:</h3>
              <ul>
                <li>Claramente definido y delimitado</li>
                <li>Factible de investigar</li>
                <li>Relevante y actual</li>
                <li>Expresado de manera precisa</li>
              </ul>
            `
          },
          {
            id: "1-2-3",
            titulo: "Subtema 3: Formulación de las preguntas y objetivos generales y específicos de investigación",
            contenido: `
              <h2>Formulación de preguntas y objetivos de investigación</h2>
              
              <h3>Pregunta de investigación:</h3>
              <p>Es la interrogante central que guía todo el proceso investigativo. Debe ser:</p>
              <ul>
                <li>Clara y precisa</li>
                <li>Factible de responder con la investigación</li>
                <li>Relevante para el campo de estudio</li>
                <li>Formulada de manera que admita exploración empírica</li>
              </ul>

              <h3>Objetivo General:</h3>
              <p>Expresa el propósito central de la investigación. Debe:</p>
              <ul>
                <li>Comenzar con un verbo en infinitivo</li>
                <li>Ser alcanzable y realista</li>
                <li>Estar alineado con la pregunta de investigación</li>
                <li>Expresar un resultado específico</li>
              </ul>

              <h3>Objetivos Específicos:</h3>
              <p>Desglosan el objetivo general en metas concretas:</p>
              <ul>
                <li>Deben ser entre 3 y 5 objetivos</li>
                <li>Cada uno debe:comenzar con un verbo en infinitivo medible</li>
                <li>Representar pasos para lograr el objetivo general</li>
                <li>Estar secuenciados lógicamente</li>
              </ul>

              <h3>Verbos recomendados según el nivel:</h3>
              <ul>
                <li><strong>Exploratoria:</strong> Identificar, explorar, descubrir, observar</li>
                <li><strong>Descriptiva:</strong> Describir, caracterizar, clasificar, enumerar</li>
                <li><strong>Correlacional:</strong> Relacionar, asociar, comparar, correlacionar</li>
                <li><strong>Explicativa:</strong> Explicar, determinar, analizar, evaluar</li>
              </ul>
            `
          },
          {
            id: "1-2-4",
            titulo: "Subtema 4: Justificación y delimitación de la investigación",
            contenido: `
              <h2>Justificación y delimitación de la investigación</h2>
              
              <h3>Justificación de la investigación:</h3>
              <p>Explica las razones por las cuales es importante realizar la investigación.</p>

              <h4>Tipos de justificación:</h4>
              <ul>
                <li><strong>Teórica:</strong> Contribución al conocimiento científico, llenado de vacíos teóricos, generación de nuevas teorías</li>
                <li><strong>Práctica:</strong> Solución de problemas concretos, mejora de procesos, toma de decisiones empresariales</li>
                <li><strong>Metodológica:</strong> Desarrollo de nuevos instrumentos, técnicas o procedimientos de investigación</li>
                <li><strong>Social:</strong> Beneficios para la comunidad, mejora de calidad de vida, impacto en el desarrollo sostenible</li>
              </ul>

              <h3>Delimitación de la investigación:</h3>
              <p>Establece los límites y alcance del estudio para hacerlo viable y manejable.</p>

              <h4>Dimensiones de la delimitación:</h4>
              <ul>
                <li><strong>Espacial o geográfica:</strong> Lugar específico donde se realizará el estudio (ciudad, empresa, región)</li>
                <li><strong>Temporal:</strong> Período de tiempo que abarca la investigación (año, semestre, década)</li>
                <li><strong>Temática o conceptual:</strong> Aspectos específicos del tema que se abordarán, variables a estudiar</li>
                <li><strong>Poblacional:</strong> Grupo o segmento específico que será objeto de estudio</li>
              </ul>

              <h3>Importancia de la delimitación:</h3>
              <ul>
                <li>Hace la investigación más manejable</li>
                <li>Permite profundizar en aspectos específicos</li>
                <li>Facilita la obtención de resultados concretos</li>
                <li>Optimiza el uso de recursos y tiempo</li>
              </ul>
            `
          }
        ]
      }
    ]
  },
  {
    id: 2,
    titulo: "UNIDAD 2: FUNDAMENTACIÓN TEÓRICA Y USO DE NORMATIVA ACADÉMICA",
    descripcion: "Resultado de Aprendizaje 2: Desarrollará el marco teórico de la investigación mediante la revisión de literatura científica y el uso adecuado de normas APA.",
    temas: [
      {
        id: "tema-2-1",
        titulo: "Tema 1: Normas APA y gestión de fuentes",
        subtemas: [
          {
            id: "2-1-1",
            titulo: "Subtema 1: Normas APA (7.ª edición)",
            contenido: `
              <h2>Normas APA (7.ª edición)</h2>
              <p>Las normas de la American Psychological Association (APA) son un conjunto de directrices para la presentación de trabajos académicos y científicos.</p>
              
              <h3>Aspectos principales de la 7.ª edición:</h3>
              <ul>
                <li><strong>Formato del documento:</strong> Márgenes de 2.54 cm, fuente Times New Roman 12pt, interlineado doble</li>
                <li><strong>Encabezados:</strong> Sistema de 5 niveles de encabezados para organizar el contenido</li>
                <li><strong>Números de página:</strong> En la esquina superior derecha</li>
                <li><strong>Párrafos:</strong> Sangría de 1.27 cm en la primera línea</li>
              </ul>

              <h3>Estructura de un trabajo APA:</h3>
              <ol>
                <li>Página de título</li>
                <li>Resumen (abstract)</li>
                <li>Cuerpo del documento</li>
                <li>Referencias</li>
                <li>Apéndices (si aplica)</li>
              </ol>

              <h3>Citas en el texto:</h3>
              <ul>
                <li><strong>Cita narrativa:</strong> Apellido del autor (año)</li>
                <li><strong>Cita parentética:</strong> (Apellido, año)</li>
                <li><strong>Cita directa:</strong> Incluir número de página (Apellido, año, p. X)</li>
              </ul>
            `
          },
          {
            id: "2-1-2",
            titulo: "Subtema 2: Conectores gramaticales",
            contenido: `
              <h2>Conectores gramaticales</h2>
              <p>Los conectores son palabras o frases que unen ideas y permiten que el texto fluya de manera coherente y lógica.</p>
              
              <h3>Tipos de conectores:</h3>
              
              <h4>Conectores de adición:</h4>
              <p>Además, asimismo, también, igualmente, del mismo modo, por otra parte</p>

              <h4>Conectores de contraste:</h4>
              <p>Sin embargo, no obstante, por el contrario, en cambio, mientras que, aunque</p>

              <h4>Conectores de causa y efecto:</h4>
              <p>Por lo tanto, por consiguiente, en consecuencia, debido a, dado que, puesto que</p>

              <h4>Conectores de secuencia:</h4>
              <p>En primer lugar, posteriormente, finalmente, a continuación, luego, después</p>

              <h4>Conectores de énfasis:</h4>
              <p>Ciertamente, en efecto, de hecho, sin duda, evidentemente, indudablemente</p>

              <h4>Conectores de conclusión:</h4>
              <p>En conclusión, en resumen, en síntesis, para concluir, en definitiva</p>

              <h3>Importancia de los conectores:</h3>
              <ul>
                <li>Mejoran la cohesión del texto</li>
                <li>Facilitan la comprensión lectora</li>
                <li>Establecen relaciones lógicas entre ideas</li>
                <li>Dan fluidez a la escritura académica</li>
              </ul>
            `
          },
          {
            id: "2-1-3",
            titulo: "Subtema 3: Referencias bibliográficas",
            contenido: `
              <h2>Referencias bibliográficas</h2>
              <p>Las referencias bibliográficas son la lista completa de fuentes citadas en el trabajo, presentadas en orden alfabético.</p>
              
              <h3>Formato general APA 7.ª edición:</h3>
              
              <h4>Libro:</h4>
              <p>Apellido, A. A. (Año). <em>Título del libro en cursiva</em>. Editorial.</p>

              <h4>Artículo de revista:</h4>
              <p>Apellido, A. A. (Año). Título del artículo. <em>Nombre de la Revista</em>, volumen(número), páginas. https://doi.org/xxx</p>

              <h4>Capítulo de libro editado:</h4>
              <p>Apellido, A. A. (Año). Título del capítulo. En A. Editor (Ed.), <em>Título del libro</em> (pp. xx-xx). Editorial.</p>

              <h4>Sitio web:</h4>
              <p>Apellido, A. A. (Año, día mes). Título de la página. Nombre del sitio. URL</p>

              <h4>Tesis:</h4>
              <p>Apellido, A. A. (Año). <em>Título de la tesis</em> [Tesis de pregrado/maestría/doctorado, Nombre de la institución]. Repositorio.</p>

              <h3>Elementos clave:</h3>
              <ul>
                <li>Orden alfabético por apellido del primer autor</li>
                <li>Sangría francesa (1.27 cm desde la segunda línea)</li>
                <li>Cursiva en títulos de libros y revistas</li>
                <li>Incluir DOI cuando esté disponible</li>
                <li>URL activas y funcionales</li>
              </ul>
            `
          },
          {
            id: "2-1-4",
            titulo: "Subtema 4: Uso de gestores bibliográficos",
            contenido: `
              <h2>Uso de gestores bibliográficos</h2>
              <p>Los gestores bibliográficos son herramientas digitales que facilitan la organización, almacenamiento y citación de referencias.</p>
              
              <h3>Principales gestores bibliográficos:</h3>
              
              <h4>Mendeley:</h4>
              <ul>
                <li>Gratuito, multiplataforma</li>
                <li>Organización de PDFs</li>
                <li>Sincronización en la nube</li>
                <li>Generación automática de citas y bibliografías</li>
              </ul>

              <h4>Zotero:</h4>
              <ul>
                <li>Software libre y gratuito</li>
                <li>Complemento para navegador</li>
                <li>Compatible con Microsoft Word y LibreOffice</li>
                <li>Almacenamiento de archivos adjuntos</li>
              </ul>

              <h4>EndNote:</h4>
              <ul>
                <li>Versión de pago (con trial gratuito)</li>
                <li>Amplia capacidad de almacenamiento</li>
                <li>Integración completa con Word</li>
                <li>Múltiples estilos de citación</li>
              </ul>

              <h3>Ventajas del uso de gestores bibliográficos:</h3>
              <ul>
                <li>Ahorro de tiempo en la gestión de referencias</li>
                <li>Reducción de errores en las citas</li>
                <li>Facilita el cambio de estilo de citación</li>
                <li>Organización centralizada de fuentes</li>
                <li>Colaboración con otros investigadores</li>
                <li>Acceso desde múltiples dispositivos</li>
              </ul>

              <h3>Funciones básicas:</h3>
              <ul>
                <li>Importación automática de referencias desde bases de datos</li>
                <li>Generación de citas y bibliografías en formato APA</li>
                <li>Anotaciones y destacados en documentos PDF</li>
                <li>Creación de carpetas y etiquetas para organización</li>
              </ul>
            `
          }
        ]
      },
      {
        id: "tema-2-2",
        titulo: "Tema 2: Marco teórico de la investigación",
        subtemas: [
          {
            id: "2-2-1",
            titulo: "Subtema 1: Antecedentes de investigación nacionales e internacionales",
            contenido: `
              <h2>Antecedentes de investigación nacionales e internacionales</h2>
              <p>Los antecedentes son estudios previos relacionados con el tema que se está investigando. Proveen contexto y fundamentan la necesidad de la nueva investigación.</p>
              
              <h3>Características de los antecedentes:</h3>
              <ul>
                <li><strong>Actualidad:</strong> Preferiblemente de los últimos 5 años</li>
                <li><strong>Relevancia:</strong> Directamente relacionados con las variables de estudio</li>
                <li><strong>Variedad geográfica:</strong> Incluir estudios nacionales e internacionales</li>
                <li><strong>Calidad:</strong> Investigaciones publicadas en revistas científicas o tesis de posgrado</li>
              </ul>

              <h3>Estructura para presentar cada antecedente:</h3>
              <ol>
                <li><strong>Datos bibliográficos:</strong> Autor, año, título, institución o revista</li>
                <li><strong>Objetivo:</strong> Propósito principal del estudio citado</li>
                <li><strong>Metodología:</strong> Enfoque, diseño, muestra, instrumentos utilizados</li>
                <li><strong>Resultados principales:</strong> Hallazgos más relevantes</li>
                <li><strong>Conclusiones:</strong> Síntesis de los aportes del estudio</li>
                <li><strong>Aporte a la investigación actual:</strong> Cómo se relaciona con el presente estudio</li>
              </ol>

              <h3>Cantidad sugerida:</h3>
              <ul>
                <li>Mínimo 3 antecedentes internacionales</li>
                <li>Mínimo 2 antecedentes nacionales</li>
                <li>Total recomendado: 5-7 antecedentes</li>
              </ul>

              <h3>Fuentes para buscar antecedentes:</h3>
              <ul>
                <li>Google Scholar</li>
                <li>Scopus y Web of Science</li>
                <li>Repositorios institucionales</li>
                <li>EBSCO, ProQuest, JSTOR</li>
                <li>SciELO, Redalyc (América Latina)</li>
              </ul>
            `
          },
          {
            id: "2-2-2",
            titulo: "Subtema 2: Bases teóricas y conceptuales relacionadas con el tema de estudio",
            contenido: `
              <h2>Bases teóricas y conceptuales relacionadas con el tema de estudio</h2>
              <p>Las bases teóricas constituyen el fundamento conceptual que sustenta la investigación, integrando teorías, modelos y conceptos relevantes.</p>
              
              <h3>Bases Teóricas:</h3>
              <p>Conjunto de teorías, postulados y enfoques que explican el fenómeno estudiado.</p>
              
              <h4>Elementos de las bases teóricas:</h4>
              <ul>
                <li><strong>Teorías principales:</strong> Enfoques teóricos centrales que explican el fenómeno</li>
                <li><strong>Autores clásicos:</strong> Pensadores fundamentales en el área</li>
                <li><strong>Modelos teóricos:</strong> Representaciones esquemáticas de relaciones entre conceptos</li>
                <li><strong>Enfoques contemporáneos:</strong> Perspectivas actuales sobre el tema</li>
              </ul>

              <h3>Bases Conceptuales:</h3>
              <p>Definición y explicación de los conceptos y términos clave utilizados en la investigación.</p>
              
              <h4>Elementos de las bases conceptuales:</h4>
              <ul>
                <li><strong>Definiciones operacionales:</strong> Cómo se entienden los conceptos en el contexto del estudio</li>
                <li><strong>Términos técnicos:</strong> Vocabulario especializado del área</li>
                <li><strong>Variables de estudio:</strong> Definición conceptual de cada variable</li>
                <li><strong>Dimensiones e indicadores:</strong> Aspectos medibles de los conceptos</li>
              </ul>

              <h3>Organización del marco teórico:</h3>
              <ol>
                <li>De lo general a lo específico</li>
                <li>Estructura lógica y coherente</li>
                <li>Conexión entre teorías y variables de estudio</li>
                <li>Integración de diferentes perspectivas cuando sea relevante</li>
              </ol>

              <h3>Recomendaciones:</h3>
              <ul>
                <li>Utilizar fuentes primarias cuando sea posible</li>
                <li>Citar adecuadamente todas las fuentes</li>
                <li>Evitar citas excesivamente largas</li>
                <li>Mantener un hilo conductor a lo largo del texto</li>
                <li>Relacionar la teoría con el problema de investigación</li>
              </ul>
            `
          },
          {
            id: "2-2-3",
            titulo: "Subtema 3: Bases legales y normativas aplicables a la investigación",
            contenido: `
              <h2>Bases legales y normativas aplicables a la investigación</h2>
              <p>Las bases legales son el conjunto de leyes, reglamentos y normativas que sustentan y regulan el tema de investigación, especialmente relevante en estudios empresariales y económicos.</p>
              
              <h3>Tipos de normativa a considerar:</h3>
              
              <h4>Constitución:</h4>
              <p>Artículos constitucionales relacionados con el tema (educación, trabajo, economía, etc.)</p>

              <h4>Leyes orgánicas y ordinarias:</h4>
              <ul>
                <li>Ley de Compañías</li>
                <li>Código de Comercio</li>
                <li>Ley de Economía Popular y Solidaria</li>
                <li>Ley Orgánica de Educación Superior</li>
                <li>Código de Trabajo</li>
              </ul>

              <h4>Reglamentos y decretos:</h4>
              <ul>
                <li>Reglamentos de aplicación de leyes específicas</li>
                <li>Decretos ejecutivos relevantes</li>
                <li>Acuerdos ministeriales</li>
              </ul>

              <h4>Normas técnicas:</h4>
              <ul>
                <li>Normas INEN (Ecuador)</li>
                <li>Normas ISO aplicables</li>
                <li>Normas internacionales del sector</li>
              </ul>

              <h3>Cómo presentar las bases legales:</h3>
              <ol>
                <li>Jerarquía normativa (Constitución → Leyes → Reglamentos)</li>
                <li>Citar artículo, capítulo o sección específica</li>
                <li>Explicar la relación con el tema de investigación</li>
                <li>Incluir año de promulgación y reformas relevantes</li>
              </ol>

              <h3>Formato de citación legal:</h3>
              <p><em>Ejemplo:</em> Según el artículo X de la Ley Orgánica de... (año), se establece que...</p>

              <h3>Importancia:</h3>
              <ul>
                <li>Fundamenta legalmente la investigación</li>
                <li>Contextualiza el marco regulatorio</li>
                <li>Identifica restricciones o facilidades normativas</li>
                <li>Demuestra viabilidad legal del estudio</li>
              </ul>
            `
          },
          {
            id: "2-2-4",
            titulo: "Subtema 4: Sistema de variables",
            contenido: `
              <h2>Sistema de variables</h2>
              <p>El sistema de variables es la operacionalización de los conceptos teóricos en elementos medibles y observables.</p>
              
              <h3>Definición de variable:</h3>
              <p>Característica o propiedad que puede adoptar diferentes valores y que es objeto de medición o manipulación en la investigación.</p>

              <h3>Tipos de variables:</h3>
              
              <h4>Según su función:</h4>
              <ul>
                <li><strong>Variable independiente:</strong> Causa o factor que se manipula o analiza</li>
                <li><strong>Variable dependiente:</strong> Efecto o resultado que se mide</li>
                <li><strong>Variable interviniente:</strong> Factor que puede afectar la relación entre VI y VD</li>
                <li><strong>Variable moderadora:</strong> Modifica la intensidad de la relación</li>
              </ul>

              <h4>Según su naturaleza:</h4>
              <ul>
                <li><strong>Cuantitativa:</strong> Se expresa numéricamente (continua o discreta)</li>
                <li><strong>Cualitativa:</strong> Se expresa en categorías (nominal u ordinal)</li>
              </ul>

              <h3>Operacionalización de variables:</h3>
              <p>Proceso de convertir conceptos abstractos en elementos medibles.</p>

              <h4>Pasos para operacionalizar:</h4>
              <ol>
                <li><strong>Definición conceptual:</strong> Qué es la variable teóricamente</li>
                <li><strong>Dimensiones:</strong> Aspectos o componentes de la variable</li>
                <li><strong>Indicadores:</strong> Elementos específicos y medibles de cada dimensión</li>
                <li><strong>Ítems:</strong> Preguntas o afirmaciones para medir cada indicador</li>
                <li><strong>Escala de medición:</strong> Nominal, ordinal, intervalo, razón</li>
              </ol>

              <h3>Matriz de operacionalización:</h3>
              <table border="1">
                <tr>
                  <th>Variable</th>
                  <th>Definición Conceptual</th>
                  <th>Dimensiones</th>
                  <th>Indicadores</th>
                  <th>Ítems/Preguntas</th>
                  <th>Escala</th>
                </tr>
                <tr>
                  <td colspan="6"><em>Se completa para cada variable del estudio</em></td>
                </tr>
              </table>

              <h3>Importancia de la operacionalización:</h3>
              <ul>
                <li>Facilita la medición precisa de conceptos abstractos</li>
                <li>Permite la replicabilidad del estudio</li>
                <li>Guía el diseño de instrumentos de recolección</li>
                <li>Asegura coherencia entre teoría y práctica</li>
              </ul>
            `
          }
        ]
      }
    ]
  },
  {
    id: 3,
    titulo: "UNIDAD 3: DISEÑO METODOLÓGICO DE LA INVESTIGACIÓN",
    descripcion: "Resultado de Aprendizaje 3: Aplicará la metodología de la investigación cuantitativa y cualitativa para estructurar la fase empírica del estudio",
    temas: [
      {
        id: "tema-3-1",
        titulo: "Tema 1: Metodología de la investigación",
        subtemas: [
          {
            id: "3-1-1",
            titulo: "Subtema 1: Tipo y diseño de investigación",
            contenido: `
              <h2>Tipo y diseño de investigación</h2>
              <p>El tipo y diseño de investigación definen el marco metodológico dentro del cual se desarrollará el estudio.</p>
              
              <h3>Tipos de investigación por su finalidad:</h3>
              <ul>
                <li><strong>Investigación básica o pura:</strong> Busca generar conocimiento teórico sin aplicación inmediata</li>
                <li><strong>Investigación aplicada:</strong> Orientada a resolver problemas prácticos específicos</li>
              </ul>

              <h3>Tipos por su alcance:</h3>
              <ul>
                <li><strong>Exploratoria:</strong> Investiga problemas poco estudiados, genera hipótesis</li>
                <li><strong>Descriptiva:</strong> Caracteriza fenómenos, situaciones o eventos</li>
                <li><strong>Correlacional:</strong> Mide relaciones entre dos o más variables</li>
                <li><strong>Explicativa:</strong> Determina causas de los fenómenos</li>
              </ul>

              <h3>Tipos por su enfoque:</h3>
              <ul>
                <li><strong>Cuantitativa:</strong> Usa datos numéricos y análisis estadístico</li>
                <li><strong>Cualitativa:</strong> Comprende fenómenos desde perspectivas subjetivas</li>
                <li><strong>Mixta:</strong> Combina elementos cuantitativos y cualitativos</li>
              </ul>

              <h3>Diseños de investigación:</h3>
              
              <h4>Diseño experimental:</h4>
              <ul>
                <li>Manipulación intencional de variables independientes</li>
                <li>Control de variables extrañas</li>
                <li>Grupo experimental y grupo control</li>
                <li>Asignación aleatoria de participantes</li>
              </ul>

              <h4>Diseño no experimental:</h4>
              <ul>
                <li><strong>Transversal:</strong> Recolección de datos en un momento único</li>
                <li><strong>Longitudinal:</strong> Mediciones repetidas a lo largo del tiempo</li>
              </ul>

              <h4>Diseño documental:</h4>
              <ul>
                <li>Basado en análisis de fuentes documentales</li>
                <li>Revisiones sistemáticas</li>
                <li>Metaanálisis</li>
              </ul>

              <h4>Diseño de campo:</h4>
              <ul>
                <li>Recolección de datos en contexto natural</li>
                <li>Interacción directa con los sujetos de estudio</li>
              </ul>
            `
          },
          {
            id: "3-1-2",
            titulo: "Subtema 2: Población y muestra",
            contenido: `
              <h2>Población y muestra</h2>
              
              <h3>Población:</h3>
              <p>La población es el conjunto total de elementos que comparten características comunes y son objeto de estudio.</p>
              
              <h4>Características de la población:</h4>
              <ul>
                <li>Debe estar claramente delimitada espacial y temporalmente</li>
                <li>Los elementos deben compartir características comunes</li>
                <li>Se deben especificar criterios de inclusión y exclusión</li>
              </ul>

              <h4>Tipos de población:</h4>
              <ul>
                <li><strong>Finita:</strong> Número limitado y conocido de elementos</li>
                <li><strong>Infinita:</strong> Número ilimitado o desconocido de elementos</li>
              </ul>

              <h3>Muestra:</h3>
              <p>Subconjunto representativo de la población seleccionado para el estudio.</p>

              <h4>Muestreo probabilístico:</h4>
              <ul>
                <li><strong>Aleatorio simple:</strong> Cada elemento tiene la misma probabilidad de ser seleccionado</li>
                <li><strong>Sistemático:</strong> Selección cada k elementos</li>
                <li><strong>Estratificado:</strong> División en subgrupos homogéneos</li>
                <li><strong>Por conglomerados:</strong> Selección de grupos naturales</li>
              </ul>

              <h4>Muestreo no probabilístico:</h4>
              <ul>
                <li><strong>Por conveniencia:</strong> Elementos de fácil acceso</li>
                <li><strong>Intencional o por juicio:</strong> Selección basada en criterios del investigador</li>
                <li><strong>Por cuotas:</strong> Proporciones según características</li>
                <li><strong>Bola de nieve:</strong> Participantes recomiendan a otros</li>
              </ul>

              <h3>Cálculo del tamaño de muestra:</h3>
              <p>Para población finita:</p>
              <p>n = (N × Z² × p × q) / (e² × (N-1) + Z² × p × q)</p>
              <p>Donde:</p>
              <ul>
                <li>N = Tamaño de la población</li>
                <li>Z = Nivel de confianza (1.96 para 95%)</li>
                <li>p = Probabilidad de éxito (0.5 cuando se desconoce)</li>
                <li>q = Probabilidad de fracaso (1-p)</li>
                <li>e = Margen de error (generalmente 0.05)</li>
              </ul>
            `
          },
          {
            id: "3-1-3",
            titulo: "Subtema 3: Técnicas de recolección de datos (encuesta, entrevista, observación, etc.)",
            contenido: `
              <h2>Técnicas de recolección de datos</h2>
              <p>Las técnicas de recolección son procedimientos sistemáticos para obtener información del objeto de estudio.</p>
              
              <h3>Encuesta:</h3>
              <p>Técnica cuantitativa que recopila información de una muestra mediante cuestionarios estandarizados.</p>
              <h4>Características:</h4>
              <ul>
                <li>Alcance masivo</li>
                <li>Preguntas estructuradas</li>
                <li>Respuestas estandarizadas</li>
                <li>Análisis estadístico</li>
              </ul>
              <h4>Tipos:</h4>
              <ul>
                <li>Presencial</li>
                <li>Telefónica</li>
                <li>En línea (Google Forms, SurveyMonkey)</li>
                <li>Por correo</li>
              </ul>

              <h3>Entrevista:</h3>
              <p>Técnica cualitativa que obtiene información mediante diálogo directo.</p>
              <h4>Tipos:</h4>
              <ul>
                <li><strong>Estructurada:</strong> Preguntas predeterminadas en orden fijo</li>
                <li><strong>Semiestructurada:</strong> Guía flexible con preguntas abiertas</li>
                <li><strong>No estructurada o en profundidad:</strong> Conversación libre sobre temas amplios</li>
              </ul>
              <h4>Ventajas:</h4>
              <ul>
                <li>Información detallada y profunda</li>
                <li>Posibilidad de aclarar dudas</li>
                <li>Observación de lenguaje no verbal</li>
              </ul>

              <h3>Observación:</h3>
              <p>Registro sistemático de comportamientos, eventos o fenómenos en su contexto natural.</p>
              <h4>Tipos:</h4>
              <ul>
                <li><strong>Participante:</strong> El investigador se integra al grupo</li>
                <li><strong>No participante:</strong> El investigador observa sin intervenir</li>
                <li><strong>Estructurada:</strong> Con guía de aspectos a observar</li>
                <li><strong>No estructurada:</strong> Registro abierto de eventos</li>
              </ul>

              <h3>Grupo focal:</h3>
              <p>Discusión dirigida con 6-12 personas sobre un tema específico.</p>
              <ul>
                <li>Moderador guía la conversación</li>
                <li>Genera información cualitativa rica</li>
                <li>Útil para explorar percepciones y opiniones</li>
              </ul>

              <h3>Análisis documental:</h3>
              <p>Revisión sistemática de documentos, registros y fuentes escritas.</p>
              <ul>
                <li>Libros, artículos científicos</li>
                <li>Informes institucionales</li>
                <li>Estadísticas oficiales</li>
                <li>Documentos históricos</li>
              </ul>

              <h3>Experimentación:</h3>
              <p>Manipulación controlada de variables para observar efectos.</p>
              <ul>
                <li>Diseño experimental</li>
                <li>Control de variables</li>
                <li>Medición precisa de resultados</li>
              </ul>
            `
          },
          {
            id: "3-1-4",
            titulo: "Subtema 4: Instrumentos de recolección de datos",
            contenido: `
              <h2>Instrumentos de recolección de datos</h2>
              <p>Los instrumentos son herramientas específicas utilizadas para registrar la información obtenida mediante las técnicas de recolección.</p>
              
              <h3>Cuestionario:</h3>
              <p>Conjunto estructurado de preguntas diseñadas para obtener información específica.</p>
              
              <h4>Tipos de preguntas:</h4>
              <ul>
                <li><strong>Cerradas:</strong>
                  <ul>
                    <li>Dicotómicas (Sí/No)</li>
                    <li>Opción múltiple</li>
                    <li>Escalas (Likert, numérica, diferencial semántico)</li>
                  </ul>
                </li>
                <li><strong>Abiertas:</strong> Permiten respuestas libres y extensas</li>
                <li><strong>Mixtas:</strong> Combinan cerradas y abiertas</li>
              </ul>

              <h4>Estructura del cuestionario:</h4>
              <ol>
                <li>Encabezado (título, instrucciones, datos del investigador)</li>
                <li>Datos demográficos del encuestado</li>
                <li>Preguntas organizadas por variables o dimensiones</li>
                <li>Agradecimiento final</li>
              </ol>

              <h3>Guía de entrevista:</h3>
              <p>Listado de temas y preguntas orientadoras para conducir la entrevista.</p>
              <ul>
                <li>Preguntas generadoras de conversación</li>
                <li>Temas clave a explorar</li>
                <li>Secuencia lógica de abordaje</li>
                <li>Preguntas de profundización</li>
              </ul>

              <h3>Ficha de observación:</h3>
              <p>Instrumento para registrar sistemáticamente lo observado.</p>
              <h4>Elementos:</h4>
              <ul>
                <li>Datos de identificación (fecha, hora, lugar)</li>
                <li>Aspectos a observar (categorías predefinidas)</li>
                <li>Espacio para descripción detallada</li>
                <li>Sección de interpretaciones</li>
              </ul>

              <h3>Lista de cotejo (checklist):</h3>
              <p>Listado de criterios o indicadores con opciones de verificación (Sí/No, Presente/Ausente).</p>
              <ul>
                <li>Útil para evaluar cumplimiento de requisitos</li>
                <li>Fácil de aplicar y analizar</li>
                <li>Respuestas dicotómicas</li>
              </ul>

              <h3>Escala de valoración:</h3>
              <p>Instrumento que mide intensidad o grado de una actitud, opinion o característica.</p>
              
              <h4>Escala de Likert:</h4>
              <p>Ejemplo: 1=Totalmente en desacuerdo, 2=En desacuerdo, 3=Neutral, 4=De acuerdo, 5=Totalmente de acuerdo</p>

              <h4>Escala numérica:</h4>
              <p>Valoraciones del 1 al 10 o 1 al 5</p>

              <h4>Diferencial semántico:</h4>
              <p>Escala entre dos conceptos opuestos (Ej: Rápido 1-2-3-4-5 Lento)</p>

              <h3>Test o pruebas:</h3>
              <ul>
                <li>Instrumentos estandarizados</li>
                <li>Medición de conocimientos, habilidades o actitudes</li>
                <li>Con baremos de interpretación</li>
              </ul>

              <h3>Validación de instrumentos:</h3>
              
              <h4>Validez:</h4>
              <ul>
                <li><strong>De contenido:</strong> Juicio de expertos</li>
                <li><strong>De criterio:</strong> Comparación con patrón de referencia</li>
                <li><strong>De constructo:</strong> Análisis factorial</li>
              </ul>

              <h4>Confiabilidad:</h4>
              <ul>
                <li><strong>Alpha de Cronbach:</strong> Para instrumentos de escala (>0.7)</li>
                <li><strong>Test-retest:</strong> Aplicación repetida</li>
                <li><strong>Mitades partidas:</strong> División del instrumento en dos partes</li>
              </ul>
            `
          }
        ]
      },
      {
        id: "tema-3-2",
        titulo: "Tema 2: Procedimientos metodológicos",
        subtemas: [
          {
            id: "3-2-1",
            titulo: "Subtema 1: Población, muestra y unidades de análisis",
            contenido: `
              <h2>Población, muestra y unidades de análisis</h2>
              
              <h3>Unidad de análisis:</h3>
              <p>Es el elemento individual del cual se recopila información. Define "quién" o "qué" es medido en la investigación.</p>
              
              <h4>Ejemplos de unidades de análisis:</h4>
              <ul>
                <li><strong>Individuos:</strong> Personas, estudiantes, empleados, clientes</li>
                <li><strong>Organizaciones:</strong> Empresas, instituciones, ONGs</li>
                <li><strong>Eventos:</strong> Transacciones, ventas, incidentes</li>
                <li><strong>Productos:</strong> Bienes, servicios, documentos</li>
                <li><strong>Unidades geográficas:</strong> Ciudades, provincias, países</li>
              </ul>

              <h3>Relación entre población, muestra y unidad de análisis:</h3>
              <ul>
                <li><strong>Unidad de análisis:</strong> El "qué" se estudia (un cliente)</li>
                <li><strong>Población:</strong> Todos los elementos posibles (todos los clientes de la empresa)</li>
                <li><strong>Muestra:</strong> Subconjunto seleccionado (150 clientes seleccionados)</li>
              </ul>

              <h3>Definición operacional de la población:</h3>
              <p>Debe especificar claramente:</p>
              <ul>
                <li><strong>Características:</strong> Atributos que deben cumplir los elementos</li>
                <li><strong>Delimitación espacial:</strong> Lugar donde se encuentra la población</li>
                <li><strong>Delimitación temporal:</strong> Período de tiempo considerado</li>
                <li><strong>Criterios de inclusión:</strong> Qué elementos SÍ forman parte</li>
                <li><strong>Criterios de exclusión:</strong> Qué elementos NO forman parte</li>
              </ul>

              <h3>Determinación del tamaño de la muestra:</h3>
              <p>Factores a considerar:</p>
              <ul>
                <li>Nivel de confianza deseado (90%, 95%, 99%)</li>
                <li>Margen de error aceptable (3%, 5%, 10%)</li>
                <li>Variabilidad de la población</li>
                <li>Tamaño de la población (finita o infinita)</li>
                <li>Recursos y tiempo disponibles</li>
              </ul>

              <h3>Ejemplo práctico:</h3>
              <p><strong>Investigación:</strong> Satisfacción laboral en empresas tecnológicas de Guayaquil</p>
              <ul>
                <li><strong>Unidad de análisis:</strong> Empleado de empresa tecnológica</li>
                <li><strong>Población:</strong> 850 empleados de empresas tecnológicas registradas en Guayaquil en 2024</li>
                <li><strong>Criterios de inclusión:</strong> Empleados con mínimo 6 meses de antigüedad, jornada completa</li>
                <li><strong>Muestra:</strong> 265 empleados (calculada con 95% confianza, 5% error)</li>
              </ul>
            `
          },
          {
            id: "3-2-2",
            titulo: "Subtema 2: Procedimiento de recolección de datos",
            contenido: `
              <h2>Procedimiento de recolección de datos</h2>
              <p>El procedimiento detalla los pasos sistemáticos que se seguirán para obtener la información necesaria.</p>
              
              <h3>Fases del procedimiento de recolección:</h3>
              
              <h4>Fase 1: Preparación</h4>
              <ol>
                <li><strong>Diseño del instrumento:</strong> Crear y estructurar el instrumento de recolección</li>
                <li><strong>Validación:</strong> Someter a juicio de expertos y pruebas piloto</li>
                <li><strong>Ajustes:</strong> Corregir según retroalimentación recibida</li>
                <li><strong>Reproducción:</strong> Preparar cantidad necesaria de instrumentos</li>
              </ol>

              <h4>Fase 2: Gestión de permisos</h4>
              <ul>
                <li>Solicitar autorizaciones institucionales</li>
                <li>Obtener consentimientos informados</li>
                <li>Coordinar fechas y horarios</li>
                <li>Establecer protocolos de acceso</li>
              </ul>

              <h4>Fase 3: Aplicación</h4>
              <ol>
                <li><strong>Contacto inicial:</strong> Presentación e información sobre el estudio</li>
                <li><strong>Explicación:</strong> Instrucciones claras sobre el llenado</li>
                <li><strong>Aplicación:</strong> Administración del instrumento</li>
                <li><strong>Supervisión:</strong> Apoyo durante el proceso</li>
                <li><strong>Recolección:</strong> Recepción de instrumentos completados</li>
              </ol>

              <h4>Fase 4: Procesamiento inicial</h4>
              <ul>
                <li>Verificación de completitud</li>
                <li>Organización y numeración</li>
                <li>Creación de base de datos</li>
                <li>Control de calidad de la información</li>
              </ul>

              <h3>Consideraciones durante la recolección:</h3>
              <ul>
                <li><strong>Estandarización:</strong> Aplicar el mismo procedimiento a todos los participantes</li>
                <li><strong>Confidencialidad:</strong> Garantizar anonimato y protección de datos</li>
                <li><strong>Tiempo:</strong> Respetar disponibilidad de participantes</li>
                <li><strong>Ambiente:</strong> Asegurar condiciones adecuadas</li>
                <li><strong>Registro:</strong> Documentar incidencias y observaciones</li>
              </ul>

              <h3>Aspectos éticos:</h3>
              <ul>
                <li>Consentimiento informado voluntario</li>
                <li>Derecho a retirarse en cualquier momento</li>
                <li>Protección de información sensible</li>
                <li>Uso exclusivo para fines de investigación</li>
                <li>Devolución de resultados si se solicita</li>
              </ul>

              <h3>Cronograma de recolección:</h3>
              <p>Ejemplo de planificación:</p>
              <ul>
                <li>Semana 1-2: Preparación de instrumentos y validación</li>
                <li>Semana 3: Gestión de permisos y coordinación</li>
                <li>Semana 4-6: Aplicación de instrumentos</li>
                <li>Semana 7: Revisión y organización de datos</li>
              </ul>
            `
          },
          {
            id: "3-2-3",
            titulo: "Subtema 3: Plan de análisis de datos",
            contenido: `
              <h2>Plan de análisis de datos</h2>
              <p>El plan de análisis establece cómo se procesarán e interpretarán los datos recolectados para responder a las preguntas de investigación.</p>
              
              <h3>Procesamiento de datos:</h3>
              
              <h4>1. Codificación:</h4>
              <p>Asignar códigos numéricos o alfanuméricos a las respuestas.</p>
              <ul>
                <li>Preguntas cerradas: asignar valores (1=Sí, 2=No)</li>
                <li>Escalas Likert: 1, 2, 3, 4, 5</li>
                <li>Categorías abiertas: crear libro de códigos</li>
              </ul>

              <h4>2. Tabulación:</h4>
              <p>Organizar datos en matrices o bases de datos.</p>
              <ul>
                <li>Filas: casos o participantes</li>
                <li>Columnas: variables</li>
                <li>Utilizar Excel, SPSS, R, etc.</li>
              </ul>

              <h4>3. Depuración:</h4>
              <ul>
                <li>Detectar valores atípicos o errores</li>
                <li>Verificar consistencia de respuestas</li>
                <li>Tratamiento de datos faltantes</li>
                <li>Corregir errores de digitación</li>
              </ul>

              <h3>Análisis cuantitativo:</h3>
              
              <h4>Estadística Descriptiva:</h4>
              <ul>
                <li><strong>Tendencia central:</strong> Media, mediana, moda</li>
                <li><strong>Dispersión:</strong> Desviación estándar, varianza, rango</li>
                <li><strong>Distribución de frecuencias:</strong> Tablas y gráficos (barras, pie, histogramas)</li>
                <li><strong>Medidas de forma:</strong> Asimetría, curtosis</li>
              </ul>

              <h4>Estadística Inferencial:</h4>
              <ul>
                <li><strong>Pruebas de hipótesis:</strong>
                  <ul>
                    <li>t de Student (comparación de medias)</li>
                    <li>Chi-cuadrado (relación entre categóricas)</li>
                    <li>ANOVA (comparación de múltiples grupos)</li>
                  </ul>
                </li>
                <li><strong>Correlación:</strong> Pearson, Spearman</li>
                <li><strong>Regresión:</strong> Lineal simple, múltiple, logística</li>
                <li><strong>Análisis multivariado:</strong> Factorial, clúster, discriminante</li>
              </ul>

              <h3>Análisis cualitativo:</h3>
              <ul>
                <li><strong>Categorización:</strong> Agrupar información en categorías temáticas</li>
                <li><strong>Codificación abierta:</strong> Identificar conceptos emergentes</li>
                <li><strong>Codificación axial:</strong> Relacion entre categorías</li>
                <li><strong>Análisis de contenido:</strong> Examen sistemático de textos</li>
                <li><strong>Triangulación:</strong> Contrastar diferentes fuentes</li>
                <li><strong>Teorización:</strong> Construcción de explicaciones</li>
              </ul>

              <h3>Software de análisis:</h3>
              <ul>
                <li><strong>Cuantitativo:</strong> SPSS, Excel, R, Stata, SAS</li>
                <li><strong>Cualitativo:</strong> NVivo, Atlas.ti, MAXQDA</li>
                <li><strong>Visualización:</strong> Tableau, Power BI, Python (matplotlib)</li>
              </ul>

              <h3>Presentación de resultados:</h3>
              <ul>
                <li>Tablas estadísticas descriptivas</li>
                <li>Gráficos (barras, líneas, dispersión, pie)</li>
                <li>Matrices de datos</li>
                <li>Interpretación narrativa</li>
                <li>Relación con objetivos e hipótesis</li>
              </ul>
            `
          },
          {
            id: "3-2-4",
            titulo: "Subtema 4: Consideraciones éticas del proceso metodológico",
            contenido: `
              <h2>Consideraciones éticas del proceso metodológico</h2>
              <p>La ética en la investigación garantiza el respeto a los derechos de los participantes y la integridad del proceso investigativo.</p>
              
              <h3>Principios éticos fundamentales:</h3>
              
              <h4>1. Respeto a las personas:</h4>
              <ul>
                <li><strong>Autonomía:</strong> Derecho a decidir voluntariamente su participación</li>
                <li><strong>Consentimiento informado:</strong> Información clara sobre el estudio antes de participar</li>
                <li><strong>Protección de poblaciones vulnerables:</strong> Menores, personas con discapacidad, etc.</li>
              </ul>

              <h4>2. Beneficencia:</h4>
              <ul>
                <li>Maximizar beneficios de la investigación</li>
                <li>Minimizar riesgos y daños potenciales</li>
                <li>Asegurar bienestar de los participantes</li>
              </ul>

              <h4>3. No maleficencia:</h4>
              <ul>
                <li>No causar daño físico, psicológico o social</li>
                <li>Evitar riesgos innecesarios</li>
                <li>Proteger de consecuencias negativas</li>
              </ul>

              <h4>4. Justicia:</h4>
              <ul>
                <li>Distribución equitativa de cargas y beneficios</li>
                <li>Selección justa de participantes</li>
                <li>Acceso equitativo a resultados</li>
              </ul>

              <h3>Consentimiento informado:</h3>
              <p>Documento que debe incluir:</p>
              <ul>
                <li>Propósito del estudio</li>
                <li>Procedimientos que se realizarán</li>
                <li>Duración estimada</li>
                <li>Riesgos y beneficios potenciales</li>
                <li>Garantía de confidencialidad</li>
                <li>Participación voluntaria</li>
                <li>Derecho a retirarse sin consecuencias</li>
                <li>Contacto del investigador responsable</li>
              </ul>

              <h3>Confidencialidad y privacidad:</h3>
              <ul>
                <li><strong>Anonimización:</strong> No recopilar datos identificatorios</li>
                <li><strong>Codificación:</strong> Usar códigos en lugar de nombres</li>
                <li><strong>Almacenamiento seguro:</strong> Proteger bases de datos</li>
                <li><strong>Acceso restringido:</strong> Solo equipo autorizado</li>
                <li><strong>Destrucción posterior:</strong> Eliminar datos tras período establecido</li>
              </ul>

              <h3>Integridad científica:</h3>
              <ul>
                <li><strong>Honestidad:</strong> Reportar datos reales sin alteración</li>
                <li><strong>Objetividad:</strong> Evitar sesgos en la interpretación</li>
                <li><strong>Transparencia:</strong> Declarar limitaciones y conflictos de interés</li>
                <li><strong>No plagio:</strong> Citar adecuadamente las fuentes</li>
                <li><strong>No falsificación:</strong> No inventar o manipular datos</li>
              </ul>

              <h3>Consideraciones específicas en investigación empresarial:</h3>
              <ul>
                <li>Protección de información confidencial de empresas</li>
                <li>Acuerdos de no divulgación (NDA) cuando aplique</li>
                <li>Respeto a secretos comerciales</li>
                <li>Uso responsable de datos financieros</li>
                <li>Transparencia sobre conflictos de interés económicos</li>
              </ul>

              <h3>Comités de ética:</h3>
              <p>En algunos casos, la investigación requiere aprobación de un Comité de Ética Institucional que evalúa:</p>
              <ul>
                <li>Riesgos para los participantes</li>
                <li>Adecuación del consentimiento informado</li>
                <li>Procedimientos de protección de datos</li>
                <li>Pertinencia científica del estudio</li>
              </ul>

              <h3>Consecuencias de violaciones éticas:</h3>
              <ul>
                <li>Invalidación de resultados</li>
                <li>Retractación de publicaciones</li>
                <li>Sanciones institucionales</li>
                <li>Pérdida de credibilidad profesional</li>
                <li>Responsabilidades legales</li>
              </ul>
            `
          }
        ]
      }
    ]
  },
  {
    id: 4,
    titulo: "UNIDAD 4: INTEGRACIÓN Y PRESENTACIÓN DE LA PROPUESTA DE INVESTIGACIÓN",
    descripcion: "Resultado de Aprendizaje 4: Integrará y presentará la propuesta de investigación completa, aplicando criterios metodológicos, teóricos y académicos.",
    temas: [
      {
        id: "tema-4-1",
        titulo: "Tema 1: Estructuración final de la propuesta",
        subtemas: [
          {
            id: "4-1-1",
            titulo: "Subtema 1: Esquema de contenidos de la propuesta",
            contenido: `
              <h2>Esquema de contenidos de la propuesta</h2>
              <p>La propuesta de investigación debe seguir una estructura lógica y coherente que facilite la comprensión del proyecto.</p>
              
              <h3>Estructura típica de una propuesta de investigación:</h3>
              
              <h4>1. Páginas preliminares:</h4>
              <ul>
                <li>Portada (título, autor, institución, fecha)</li>
                <li>Índice de contenidos</li>
                <li>Índice de tablas y figuras</li>
              </ul>

              <h4>2. Capítulo I: El Problema:</h4>
              <ul>
                <li>Planteamiento del problema</li>
                <li>Formulación del problema (pregunta de investigación)</li>
                <li>Objetivos (general y específicos)</li>
                <li>Justificación</li>
                <li>Delimitación</li>
              </ul>

              <h4>3. Capítulo II: Marco Teórico:</h4>
              <ul>
                <li>Antecedentes de investigación</li>
                <li>Bases teóricas</li>
                <li>Bases conceptuales</li>
                <li>Bases legales (si aplica)</li>
                <li>Sistema de variables o hipótesis (según el tipo de estudio)</li>
              </ul>

              <h4>4. Capítulo III: Marco Metodológico:</h4>
              <ul>
                <li>Tipo y diseño de investigación</li>
                <li>Población y muestra</li>
                <li>Técnicas e instrumentos de recolección de datos</li>
                <li>Validez y confiabilidad de instrumentos</li>
                <li>Procedimiento de recolección de datos</li>
                <li>Plan de análisis de datos</li>
                <li>Consideraciones éticas</li>
              </ul>

              <h4>5. Capítulo IV: Aspectos Administrativos:</h4>
              <ul>
                <li>Cronograma de actividades</li>
                <li>Recursos humanos y materiales</li>
                <li>Presupuesto</li>
              </ul>

              <h4>6. Secciones finales:</h4>
              <ul>
                <li>Referencias bibliográficas</li>
                <li>Anexos</li>
                <li>Apéndices</li>
              </ul>

              <h3>Formato y presentación:</h3>
              <ul>
                <li>Normas APA 7.ª edición</li>
                <li>Extensión: 40-60 páginas (varía según institución)</li>
                <li>Fuente: Times New Roman 12pt</li>
                <li>Interlineado: doble o 1.5</li>
                <li>Márgenes: 2.54 cm o según normativa institucional</li>
              </ul>
            `
          },
          {
            id: "4-1-2",
            titulo: "Subtema 2: Cronograma de actividades",
            contenido: `
              <h2>Cronograma de actividades</h2>
              <p>El cronograma es la planificación temporal detallada de todas las actividades que se ejecutarán durante el desarrollo de la investigación.</p>
              
              <h3>Finalidad del cronograma:</h3>
              <ul>
                <li>Organizar el tiempo de manera eficiente</li>
                <li>Visualizar la secuencia de actividades</li>
                <li>Identificar plazos y entregas</li>
                <li>Facilitar el seguimiento del proyecto</li>
                <li>Detectar posibles retrasos a tiempo</li>
              </ul>

              <h3>Actividades típicas en un cronograma de investigación:</h3>
              
              <h4>Fase 1: Planificación (Semanas 1-4)</h4>
              <ul>
                <li>Selección y delimitación del tema</li>
                <li>Revisión bibliográfica preliminar</li>
                <li>Elaboración del planteamiento del problema</li>
                <li>Formulación de objetivos</li>
              </ul>

              <h4>Fase 2: Fundamentación teórica (Semanas 5-8)</h4>
              <ul>
                <li>Búsqueda de antecedentes</li>
                <li>Revisión exhaustiva de literatura</li>
                <li>Construcción del marco teórico</li>
                <li>Definición de variables</li>
              </ul>

              <h4>Fase 3: Diseño metodológico (Semanas 9-12)</h4>
              <ul>
                <li>Definición del tipo y diseño de investigación</li>
                <li>Determinación de población y muestra</li>
                <li>Diseño de instrumentos</li>
                <li>Validación de instrumentos</li>
              </ul>

              <h4>Fase 4: Trabajo de campo (Semanas 13-16)</h4>
              <ul>
                <li>Aplicación prueba piloto</li>
                <li>Ajustes a instrumentos</li>
                <li>Recolección de datos</li>
                <li>Organización de información</li>
              </ul>

              <h4>Fase 5: Análisis (Semanas 17-20)</h4>
              <ul>
                <li>Procesamiento de datos</li>
                <li>Análisis estadístico o cualitativo</li>
                <li>Interpretación de resultados</li>
                <li>Elaboración de gráficos y tablas</li>
              </ul>

              <h4>Fase 6: Redacción (Semanas 21-24)</h4>
              <ul>
                <li>Redacción de capítulos</li>
                <li>Integración de componentes</li>
                <li>Revisión de forma y fondo</li>
                <li>Preparación de presentación</li>
              </ul>

              <h3>Herramientas de representación:</h3>
              
              <h4>Diagrama de Gantt:</h4>
              <p>Gráfico de barras horizontales que muestra la duración de cada actividad en el tiempo.</p>
              
              <h4>Tabla cronológica:</h4>
              <p>Tabla con actividades en filas y períodos de tiempo en columnas (semanas o meses).</p>

              <h3>Recomendaciones:</h3>
              <ul>
                <li>Ser realista en la estimación de tiempos</li>
                <li>Incluir tiempo de contingencia (10-15%)</li>
                <li>Considerar períodos no laborables (vacaciones, feriados)</li>
                <li>Establecer hitos de control</li>
                <li>Actualizar periódicamente el avance</li>
              </ul>
            `
          },
          {
            id: "4-1-3",
            titulo: "Subtema 3: Referencias bibliográficas finales",
            contenido: `
              <h2>Referencias bibliográficas finales</h2>
              <p>La lista de referencias es la relación completa y detallada de todas las fuentes citadas en el documento de investigación.</p>
              
              <h3>Características de las referencias:</h3>
              <ul>
                <li>Solo incluir fuentes efectivamente citadas en el texto</li>
                <li>Ordenar alfabéticamente por apellido del primer autor</li>
                <li>Usar sangría francesa (1.27 cm desde segunda línea)</li>
                <li>Mantener formato consistente según normas APA 7.ª edición</li>
              </ul>

              <h3>Tipos de fuentes y formato APA:</h3>
              
              <h4>Libro completo:</h4>
              <p>Hernández, R., Fernández, C., y Baptista, P. (2014). <em>Metodología de la investigación</em> (6.ª ed.). McGraw-Hill.</p>

              <h4>Capítulo de libro editado:</h4>
              <p>Porter, M. (2008). Las cinco fuerzas competitivas que moldean la estrategia. En M. Porter (Ed.), <em>Ser competitivo</em> (pp. 33-68). Deusto.</p>

              <h4>Artículo de revista científica con DOI:</h4>
              <p>Smith, J. A. (2020). The impact of digital transformation on business models. <em>Journal of Business Research</em>, 112, 234-245. https://doi.org/10.1016/j.jbusres.2020.03.018</p>

              <h4>Artículo de revista científica sin DOI (versión impresa):</h4>
              <p>García, M., y López, A. (2019). Innovación organizacional en PYMES ecuatorianas. <em>Revista de Economía</em>, 15(2), 45-62.</p>

              <h4>Tesis o disertación:</h4>
              <p>Ramírez, P. (2021). <em>Factores que influyen en la satisfacción laboral del sector bancario</em> [Tesis de maestría, Universidad de Guayaquil]. Repositorio Digital UGYE.</p>

              <h4>Sitio web o página web:</h4>
              <p>Banco Central del Ecuador. (2023, 15 de marzo). <em>Índice de precios al consumidor</em>. https://www.bce.fin.ec/estadisticas</p>

              <h4>Informe institucional:</h4>
              <p>Instituto Nacional de Estadística y Censos. (2022). <em>Encuesta Nacional de Empleo, Desempleo y Subempleo</em>. INEC.</p>

              <h4>Artículo de periódico en línea:</h4>
              <p>Pérez, L. (2023, 10 de enero). Crecimiento del comercio electrónico en Ecuador. <em>El Comercio</em>. https://www.elcomercio.com/actualidad/negocios</p>

              <h4>Ley o norma legal:</h4>
              <p>Ley Orgánica de Educación Superior. (2010). Registro Oficial Suplemento 298.</p>

              <h3>Gestión de referencias:</h3>
              <ul>
                <li>Usar gestores bibliográficos (Mendeley, Zotero, EndNote)</li>
                <li>Verificar formato antes de la entrega final</li>
                <li>Comprobar que todas las citas en texto tengan su referencia</li>
                <li>Asegurar que todas las referencias estén citadas en el texto</li>
              </ul>

              <h3>Errores comunes a evitar:</h3>
              <ul>
                <li>Incluir fuentes no citadas en el texto</li>
                <li>Inconsistencias en el formato</li>
                <li>URLs rotas o inactivas</li>
                <li>Datos incompletos de las fuentes</li>
                <li>Errores ortográficos en nombres o títulos</li>
              </ul>
            `
          },
          {
            id: "4-1-4",
            titulo: "Subtema 4: Anexos y apéndices",
            contenido: `
              <h2>Anexos y apéndices</h2>
              <p>Los anexos y apéndices son materiales complementarios que apoyan la investigación pero que por su extensión o naturaleza no se incluyen en el cuerpo principal del documento.</p>
              
              <h3>Diferencia entre anexos y apéndices:</h3>
              
              <h4>Anexos:</h4>
              <ul>
                <li>Materiales elaborados por terceros</li>
                <li>Documentos existentes que se adjuntan como soporte</li>
                <li>Ejemplos: leyes, reglamentos, artículos, informes oficiales</li>
              </ul>

              <h4>Apéndices:</h4>
              <ul>
                <li>Materiales elaborados por el investigador</li>
                <li>Documentos creados específicamente para la investigación</li>
                <li>Ejemplos: instrumentos, matrices, cálculos, fotografías tomadas</li>
              </ul>

              <h3>Contenidos típicos de anexos/apéndices:</h3>
              
              <h4>Instrumentos de recolección de datos:</h4>
              <ul>
                <li>Cuestionarios completos</li>
                <li>Guías de entrevista</li>
                <li>Fichas de observación</li>
                <li>Listas de cotejo</li>
              </ul>

              <h4>Validación de instrumentos:</h4>
              <ul>
                <li>Formatos de validación por expertos</li>
                <li>Resultados de prueba piloto</li>
                <li>Cálculos de confiabilidad (Alpha de Cronbach)</li>
              </ul>

              <h4>Datos complementarios:</h4>
              <ul>
                <li>Tablas extensas de resultados</li>
                <li>Bases de datos (versiones resumidas)</li>
                <li>Salidas completas de software estadístico</li>
                <li>Transcripciones de entrevistas</li>
              </ul>

              <h4>Documentos de soporte:</h4>
              <ul>
                <li>Autorizaciones institucionales</li>
                <li>Consentimientos informados firmados</li>
                <li>Permisos de acceso a información</li>
              </ul>

              <h4>Material gráfico:</h4>
              <ul>
                <li>Fotografías</li>
                <li>Mapas</li>
                <li>Diagramas extensos</li>
                <li>Organigramas</li>
              </ul>

              <h4>Documentos legales o normativos:</h4>
              <ul>
                <li>Extractos de leyes relevantes</li>
                <li>Normas técnicas aplicables</li>
                <li>Reglamentos institucionales</li>
              </ul>

              <h3>Presentación de anexos/apéndices:</h3>
              <ul>
                <li>Numerarlos consecutivamente (Anexo 1, Anexo 2, etc.)</li>
                <li>Titular cada anexo descriptivamente</li>
                <li>Referenciarlos en el texto principal cuando corresponda</li>
                <li>Incluirlos al final del documento, después de las referencias</li>
                <li>Listarlos en el índice de contenidos</li>
              </ul>

              <h3>Ejemplo de referencia en el texto:</h3>
              <p>"El cuestionario aplicado se presenta en el Apéndice A"</p>
              <p>"Los resultados detallados de la validación se encuentran en el Anexo 3"</p>

              <h3>Consideraciones:</h3>
              <ul>
                <li>Incluir solo material relevante y necesario</li>
                <li>No saturar con información innecesaria</li>
                <li>Mantener formato profesional</li>
                <li>Asegurar legibilidad de documentos escaneados</li>
                <li>Respetar derechos de autor en documentos de terceros</li>
              </ul>
            `
          }
        ]
      },
      {
        id: "tema-4-2",
        titulo: "Tema 2: Ajustes y presentación final",
        subtemas: [
          {
            id: "4-2-1",
            titulo: "Subtema 1: Retroalimentación académica de los entregables",
            contenido: `
              <h2>Retroalimentación académica de los entregables</h2>
              <p>La retroalimentación es el proceso mediante el cual tutores, asesores o pares académicos revisan y proporcionan observaciones sobre el trabajo de investigación.</p>
              
              <h3>Importancia de la retroalimentación:</h3>
              <ul>
                <li>Mejora la calidad académica del trabajo</li>
                <li>Identifica debilidades metodológicas</li>
                <li>Fortalece la coherencia argumentativa</li>
                <li>Corrige errores conceptuales o técnicos</li>
                <li>Orienta hacia mejores prácticas</li>
              </ul>

              <h3>Fuentes de retroalimentación:</h3>
              
              <h4>Tutor o director de tesis:</h4>
              <ul>
                <li>Asesoría continua durante el proceso</li>
                <li>Revisión de avances parciales</li>
                <li>Orientación metodológica</li>
                <li>Validación de decisiones técnicas</li>
              </ul>

              <h4>Comité académico o tribunal:</h4>
              <ul>
                <li>Evaluación formal de entregas</li>
                <li>Observaciones sobre contenido y forma</li>
                <li>Recomendaciones de mejora</li>
              </ul>

              <h4>Pares académicos:</h4>
              <ul>
                <li>Revisión entre colegas</li>
                <li>Discusión de ideas</li>
                <li>Validación de interpretaciones</li>
              </ul>

              <h4>Revisores externos:</h4>
              <ul>
                <li>Expertos en el área temática</li>
                <li>Validadores de instrumentos</li>
                <li>Consultores metodológicos</li>
              </ul>

              <h3>Aspectos típicos de la retroalimentación:</h3>
              
              <h4>Estructura y organización:</h4>
              <ul>
                <li>Coherencia entre secciones</li>
                <li>Secuencia lógica de ideas</li>
                <li>Completitud de componentes</li>
              </ul>

              <h4>Marco teórico:</h4>
              <ul>
                <li>Pertinencia de autores y teorías</li>
                <li>Actualidad de fuentes</li>
                <li>Profundidad del análisis</li>
                <li>Relación con el problema</li>
              </ul>

              <h4>Metodología:</h4>
              <ul>
                <li>Adecuación del diseño al problema</li>
                <li>Validez de instrumentos</li>
                <li>Representatividad de la muestra</li>
                <li>Rigor en el procedimiento</li>
              </ul>

              <h4>Redacción y formato:</h4>
              <ul>
                <li>Claridad y precisión</li>
                <li>Ortografía y gramática</li>
                <li>Cumplimiento de normas APA</li>
                <li>Calidad de citas y referencias</li>
              </ul>

              <h3>Cómo recibir retroalimentación constructivamente:</h3>
              <ul>
                <li>Escuchar con actitud abierta y receptiva</li>
                <li>Tomar notas de las observaciones</li>
                <li>Pedir aclaraciones cuando sea necesario</li>
                <li>Distinguir entre comentarios de forma y fondo</li>
                <li>No tomarlo de manera personal</li>
                <li>Agradecer las observaciones recibidas</li>
              </ul>

              <h3>Registro y seguimiento:</h3>
              <ul>
                <li>Crear una matriz de observaciones recibidas</li>
                <li>Clasificar por prioridad (críticas, importantes, sugerencias)</li>
                <li>Establecer plan de acción para cada observación</li>
                <li>Documentar los cambios realizados</li>
                <li>Verificar que se atendieron todas las observaciones</li>
              </ul>

              <h3>Momentos clave para retroalimentación:</h3>
              <ul>
                <li>Después del planteamiento del problema</li>
                <li>Al completar el marco teórico</li>
                <li>Antes de aplicar instrumentos</li>
                <li>Tras el análisis de datos</li>
                <li>Antes de la entrega final</li>
              </ul>
            `
          },
          {
            id: "4-2-2",
            titulo: "Subtema 2: Correcciones y mejoras de la propuesta",
            contenido: `
              <h2>Correcciones y mejoras de la propuesta</h2>
              <p>Las correcciones son ajustes necesarios que se realizan al documento de investigación basándose en la retroalimentación recibida y la autorrevisión del investigador.</p>
              
              <h3>Proceso de corrección:</h3>
              
              <h4>Paso 1: Análisis de observaciones</h4>
              <ul>
                <li>Revisar todas las observaciones recibidas</li>
                <li>Clasificar por tipo (contenido, metodología, forma)</li>
                <li>Priorizar según impacto en la calidad</li>
                <li>Identificar observaciones recurrentes</li>
              </ul>

              <h4>Paso 2: Planificación de correcciones</h4>
              <ul>
                <li>Crear lista detallada de acciones</li>
                <li>Establecer orden lógico de implementación</li>
                <li>Estimar tiempo para cada corrección</li>
                <li>Identificar si se necesita asesoría adicional</li>
              </ul>

              <h4>Paso 3: Implementación de cambios</h4>
              <ul>
                <li>Realizar correcciones de fondo primero</li>
                <li>Luego ajustar aspectos de forma</li>
                <li>Documentar cada cambio realizado</li>
                <li>Mantener versiones anteriores como respaldo</li>
              </ul>

              <h4>Paso 4: Verificación</h4>
              <ul>
                <li>Comprobar que se atendieron todas las observaciones</li>
                <li>Revisar coherencia del documento completo</li>
                <li>Verificar que los cambios no generaron inconsistencias</li>
              </ul>

              <h3>Tipos de correcciones:</h3>
              
              <h4>Correcciones de contenido:</h4>
              <ul>
                <li>Ampliar fundamentación teórica</li>
                <li>Fortalecer argumentación</li>
                <li>Agregar fuentes adicionales</li>
                <li>Profundizar análisis</li>
                <li>Mejorar relación entre secciones</li>
              </ul>

              <h4>Correcciones metodológicas:</h4>
              <ul>
                <li>Ajustar diseño de investigación</li>
                <li>Refinar instrumentos de recolección</li>
                <li>Recalcular tamaño de muestra</li>
                <li>Clarificar procedimientos</li>
                <li>Mejorar operacionalización de variables</li>
              </ul>

              <h4>Correcciones de forma:</h4>
              <ul>
                <li>Corregir ortografía y gramática</li>
                <li>Ajustar formato según normas APA</li>
                <li>Estandarizar estilos de títulos</li>
                <li>Corregir citas y referencias</li>
                <li>Mejorar presentación de tablas y figuras</li>
              </ul>

              <h4>Correcciones estructurales:</h4>
              <ul>
                <li>Reorganizar secciones</li>
                <li>Mejorar transiciones entre capítulos</li>
                <li>Balancear extensión de secciones</li>
                <li>Eliminar redundancias</li>
                <li>Agregar subsecciones necesarias</li>
              </ul>

              <h3>Estrategias de mejora continua:</h3>
              
              <h4>Autorrevisión sistemática:</h4>
              <ul>
                <li>Dejar "reposar" el documento antes de revisar</li>
                <li>Leer en voz alta para detectar errores</li>
                <li>Revisar una sección a la vez</li>
                <li>Usar herramientas de corrección ortográfica</li>
              </ul>

              <h4>Validación cruzada:</h4>
              <ul>
                <li>Verificar coherencia entre objetivos, metodología y resultados esperados</li>
                <li>Asegurar que cada cita tenga su referencia</li>
                <li>Comprobar numeración de figuras y tablas</li>
                <li>Validar fórmulas y cálculos</li>
              </ul>

              <h4>Mejoras de redacción:</h4>
              <ul>
                <li>Usar lenguaje académico formal pero claro</li>
                <li>Evitar ambigüedades</li>
                <li>Utilizar voz activa cuando sea posible</li>
                <li>Mantener consistencia en tiempos verbales</li>
                <li>Eliminar muletillas y redundancias</li>
              </ul>

              <h3>Control de versiones:</h3>
              <ul>
                <li>Nombrar archivos con fecha (Propuesta_2024_02_15)</li>
                <li>Mantener carpeta de versiones anteriores</li>
                <li>Usar "control de cambios" durante correcciones</li>
                <li>Documentar cambios significativos en un log</li>
              </ul>

              <h3>Checklist final antes de entregar:</h3>
              <ul>
                <li>☐ Todas las observaciones atendidas</li>
                <li>☐ Ortografía y gramática revisadas</li>
                <li>☐ Formato APA verificado</li>
                <li>☐ Citas y referencias completas y correctas</li>
                <li>☐ Tablas y figuras numeradas y tituladas</li>
                <li>☐ Índices actualizados</li>
                <li>☐ Páginas numeradas</li>
                <li>☐ Anexos incluidos y referenciados</li>
                <li>☐ Documento PDF generado correctamente</li>
              </ul>
            `
          },
          {
            id: "4-2-3",
            titulo: "Subtema 3: Presentación final de la propuesta de investigación",
            contenido: `
              <h2>Presentación final de la propuesta de investigación</h2>
              <p>La presentación final es la exposición oral del proyecto de investigación ante un tribunal académico, comité o audiencia especializada.</p>
              
              <h3>Objetivos de la presentación:</h3>
              <ul>
                <li>Comunicar claramente el proyecto de investigación</li>
                <li>Demostrar dominio del tema y la metodología</li>
                <li>Justificar decisiones metodológicas</li>
                <li>Responder dudas y cuestionamientos</li>
                <li>Obtener aprobación del proyecto</li>
              </ul>

              <h3>Preparación de la presentación:</h3>
              
              <h4>Contenido de la presentación oral:</h4>
              <ol>
                <li><strong>Introducción (1-2 min)</strong>
                  <ul>
                    <li>Saludo y presentación</li>
                    <li>Título de la investigación</li>
                    <li>Contexto general del tema</li>
                  </ul>
                </li>
                <li><strong>Planteamiento del problema (3-4 min)</strong>
                  <ul>
                    <li>Descripción del problema</li>
                    <li>Pregunta de investigación</li>
                    <li>Objetivos</li>
                    <li>Justificación</li>
                  </ul>
                </li>
                <li><strong>Marco teórico (3-4 min)</strong>
                  <ul>
                    <li>Teorías principales</li>
                    <li>Conceptos clave</li>
                    <li>Antecedentes relevantes</li>
                  </ul>
                </li>
                <li><strong>Metodología (4-5 min)</strong>
                  <ul>
                    <li>Tipo y diseño</li>
                    <li>Población y muestra</li>
                    <li>Instrumentos</li>
                    <li>Procedimiento</li>
                  </ul>
                </li>
                <li><strong>Aspectos administrativos (2-3 min)</strong>
                  <ul>
                    <li>Cronograma</li>
                    <li>Recursos</li>
                    <li>Presupuesto (opcional)</li>
                  </ul>
                </li>
                <li><strong>Resultados esperados (1-2 min)</strong>
                  <ul>
                    <li>Contribuciones teóricas</li>
                    <li>Aportes prácticos</li>
                  </ul>
                </li>
                <li><strong>Conclusiones (1 min)</strong>
                  <ul>
                    <li>Síntesis</li>
                    <li>Agradecimiento</li>
                  </ul>
                </li>
              </ol>

              <p><em>Tiempo total recomendado: 15-20 minutos</em></p>

              <h3>Diseño de diapositivas:</h3>
              
              <h4>Principios de diseño:</h4>
              <ul>
                <li>Máximo 15-20 diapositivas</li>
                <li>Título claro en cada diapositiva</li>
                <li>Texto conciso (no más de 6 líneas por diapositiva)</li>
                <li>Tamaño de fuente mínimo 24pt</li>
                <li>Usar viñetas, no párrafos largos</li>
                <li>Incluir gráficos, tablas o imágenes relevantes</li>
                <li>Colores contrastantes y profesionales</li>
                <li>Marca de agua con logo institucional</li>
              </ul>

              <h4>Estructura de diapositivas:</h4>
              <ol>
                <li>Portada (título, autor, tutor, institución, fecha)</li>
                <li>Índice o agenda</li>
                <li>Introducción/contexto</li>
                <li>Planteamiento del problema</li>
                <li>Objetivos</li>
                <li>Justificación</li>
                <li>Marco teórico (conceptos clave)</li>
                <li>Antecedentes</li>
                <li>Metodología</li>
                <li>Población y muestra</li>
                <li>Instrumentos</li>
                <li>Cronograma</li>
                <li>Resultados esperados</li>
                <li>Conclusiones</li>
                <li>Agradecimiento/Preguntas</li>
              </ol>

              <h3>Técnicas de presentación oral:</h3>
              
              <h4>Comunicación verbal:</h4>
              <ul>
                <li>Hablar con claridad y buen volumen</li>
                <li>Ritmo pausado y controlado</li>
                <li>Evitar muletillas ("este", "o sea", "como")</li>
                <li>Utilizar lenguaje técnico pero comprensible</li>
                <li>Hacer pausas estratégicas</li>
              </ul>

              <h4>Comunicación no verbal:</h4>
              <ul>
                <li>Contacto visual con el tribunal</li>
                <li>Postura erguida y profesional</li>
                <li>Gestos naturales que refuercen el mensaje</li>
                <li>Vestimenta formal</li>
                <li>Evitar movimientos nerviosos</li>
              </ul>

              <h4>Manejo de recursos:</h4>
              <ul>
                <li>No leer las diapositivas</li>
                <li>Usar las diapositivas como apoyo visual</li>
                <li>Señalar elementos importantes en gráficos</li>
                <li>Controlar el tiempo asignado</li>
              </ul>

              <h3>Sesión de preguntas y respuestas:</h3>
              
              <h4>Preparación:</h4>
              <ul>
                <li>Anticipar posibles preguntas</li>
                <li>Repasar aspectos críticos del proyecto</li>
                <li>Tener datos y referencias a mano</li>
              </ul>

              <h4>Durante las preguntas:</h4>
              <ul>
                <li>Escuchar atentamente la pregunta completa</li>
                <li>Pedir aclaración si es necesario</li>
                <li>Responder de manera concisa y directa</li>
                <li>Si no sabe la respuesta, ser honesto y comprometerse a revisar</li>
                <li>Mantener la calma ante cuestionamientos críticos</li>
                <li>Agradecer las observaciones constructivas</li>
              </ul>

              <h3>Ensayo de la presentación:</h3>
              <ul>
                <li>Practicar al menos 3-5 veces</li>
                <li>Cronometrar la exposición</li>
                <li>Ensayar frente a audiencia de prueba</li>
                <li>Grabar la práctica para autoevaluación</li>
                <li>Ajustar según retroalimentación</li>
              </ul>

              <h3>Checklist día de la presentación:</h3>
              <ul>
                <li>☐ Presentación en USB y en la nube</li>
                <li>☐ Documento impreso de respaldo</li>
                <li>☐ Apuntes de apoyo (tarjetas)</li>
                <li>☐ Llegar 15 minutos antes</li>
                <li>☐ Probar equipo audiovisual</li>
                <li>☐ Tener agua disponible</li>
                <li>☐ Vestimenta formal preparada</li>
              </ul>
            `
          },
          {
            id: "4-2-4",
            titulo: "Subtema 4: Criterios de calidad académica y coherencia metodológica",
            contenido: `
              <h2>Criterios de calidad académica y coherencia metodológica</h2>
              <p>La calidad académica de una propuesta de investigación se evalúa según criterios que garantizan rigor, coherencia y pertinencia científica.</p>
              
              <h3>Criterios de calidad académica:</h3>
              
              <h4>1. Relevancia y originalidad:</h4>
              <ul>
                <li><strong>Pertinencia:</strong> El tema es actual y significativo para el área de conocimiento</li>
                <li><strong>Originalidad:</strong> Aporta nuevas perspectivas o aborda vacíos en la literatura</li>
                <li><strong>Viabilidad:</strong> Es factible realizar la investigación con recursos disponibles</li>
              </ul>

              <h4>2. Fundamentación teórica:</h4>
              <ul>
                <li><strong>Profundidad:</strong> Marco teórico sólido y bien desarrollado</li>
                <li><strong>Actualidad:</strong> Fuentes recientes y de calidad académica</li>
                <li><strong>Pertinencia:</strong> Teorías y conceptos directamente relacionados con el problema</li>
                <li><strong>Integración:</strong> Articulación coherente entre diferentes autores y perspectivas</li>
              </ul>

              <h4>3. Rigor metodológico:</h4>
              <ul>
                <li><strong>Adecuación:</strong> Metodología apropiada para los objetivos planteados</li>
                <li><strong>Precisión:</strong> Descripción clara y detallada de procedimientos</li>
                <li><strong>Validez:</strong> Instrumentos validados y confiables</li>
                <li><strong>Ética:</strong> Consideraciones éticas explícitas y apropiadas</li>
              </ul>

              <h4>4. Coherencia interna:</h4>
              <ul>
                <li>Alineación entre problema, objetivos, metodología y resultados esperados</li>
                <li>Consistencia terminológica a lo largo del documento</li>
                <li>Secuencia lógica de ideas</li>
                <li>Articulación entre capítulos y secciones</li>
              </ul>

              <h4>5. Calidad de la redacción:</h4>
              <ul>
                <li><strong>Claridad:</strong> Expresión precisa de ideas</li>
                <li><strong>Precisión:</strong> Uso adecuado de lenguaje técnico</li>
                <li><strong>Corrección:</strong> Sin errores ortográficos ni gramaticales</li>
                <li><strong>Estilo académico:</strong> Formal, objetivo, impersonal</li>
              </ul>

              <h4>6. Cumplimiento de normas:</h4>
              <ul>
                <li>Aplicación correcta de normas APA 7.ª edición</li>
                <li>Formato consistente de citas y referencias</li>
                <li>Presentación profesional del documento</li>
              </ul>

              <h3>Coherencia metodológica:</h3>
              <p>La coherencia metodológica se refiere a la articulación lógica entre todos los componentes del diseño de investigación.</p>
              
              <h4>Matriz de coherencia:</h4>
              <table border="1">
                <tr>
                  <th>Problema</th>
                  <th>Objetivos</th>
                  <th>Variables</th>
                  <th>Metodología</th>
                  <th>Instrumentos</th>
                </tr>
                <tr>
                  <td colspan="5"><em>Cada elemento debe estar alineado con los demás</em></td>
                </tr>
              </table>

              <h4>Verificación de coherencia:</h4>
              <ul>
                <li><strong>Pregunta → Objetivos:</strong> Los objetivos responden directamente a la pregunta</li>
                <li><strong>Objetivos → Variables:</strong> Las variables permiten cumplir los objetivos</li>
                <li><strong>Variables → Instrumentos:</strong> Los instrumentos miden las variables definidas</li>
                <li><strong>Metodología → Objetivos:</strong> El diseño permite alcanzar los objetivos</li>
                <li><strong>Análisis → Objetivos:</strong> El análisis propuesto llevará a responder los objetivos</li>
              </ul>

              <h3>Indicadores de calidad:</h3>
              
              <h4>Excelente calidad:</h4>
              <ul>
                <li>Problema claramente definido y justificado</li>
                <li>Objetivos SMART (específicos, medibles, alcanzables, relevantes, temporales)</li>
                <li>Marco teórico robusto con fuentes de alto impacto</li>
                <li>Metodología rigurosa y bien fundamentada</li>
                <li>Coherencia total entre componentes</li>
                <li>Redacción impecable</li>
                <li>Formato APA perfecto</li>
              </ul>

              <h4>Buena calidad:</h4>
              <ul>
                <li>Problema bien planteado</li>
                <li>Objetivos claros y alcanzables</li>
                <li>Marco teórico suficiente con fuentes válidas</li>
                <li>Metodología adecuada</li>
                <li>Coherencia en general</li>
                <li>Redacción clara con errores menores</li>
                <li>Formato APA correcto con pequeñas fallas</li>
              </ul>

              <h4>Necesita mejoras:</h4>
              <ul>
                <li>Problema poco claro o difuso</li>
                <li>Objetivos ambiguos</li>
                <li>Marco teórico superficial</li>
                <li>Metodología poco detallada</li>
                <li>Inconsistencias entre componentes</li>
                <li>Redacción mejorable</li>
                <li>Errores de formato frecuentes</li>
              </ul>

              <h3>Autoevaluación de calidad:</h3>
              <p>Preguntas clave para autoevaluar la propuesta:</p>
              <ul>
                <li>¿El problema está claramente formulado y justificado?</li>
                <li>¿Los objetivos son alcanzables con la metodología propuesta?</li>
                <li>¿El marco teórico fundamenta adecuadamente el estudio?</li>
                <li>¿La metodología es rigurosa y está bien descrita?</li>
                <li>¿Hay coherencia entre todas las secciones?</li>
                <li>¿Las referencias son pertinentes, actuales y de calidad?</li>
                <li>¿El documento cumple con las normas institucionales?</li>
                <li>¿La redacción es clara, precisa y académica?</li>
                <li>¿Podría otro investigador replicar el estudio con esta propuesta?</li>
              </ul>

              <h3>Rúbrica de evaluación típica:</h3>
              <p>Aspectos comúnmente evaluados por tribunales académicos:</p>
              <ul>
                <li>Planteamiento del problema (15-20%)</li>
                <li>Marco teórico (20-25%)</li>
                <li>Metodología (25-30%)</li>
                <li>Coherencia y rigor (15-20%)</li>
                <li>Redacción y formato (10-15%)</li>
                <li>Presentación oral (10-15% si aplica)</li>
              </ul>

              <h3>Recomendaciones finales:</h3>
              <ul>
                <li>Solicitar revisión de al menos dos lectores externos</li>
                <li>Utilizar rúbricas de evaluación como guía</li>
                <li>No conformarse con el mínimo aceptable</li>
                <li>Revisar propuestas ejemplares del área</li>
                <li>Dar tiempo suficiente para revisiones y ajustes</li>
                <li>Mantener estándares éticos en todo momento</li>
              </ul>
            `
          }
        ]
      }
    ]
  }
];

export function getUnidad(id: number): Unidad | undefined {
  return courseData.find(unidad => unidad.id === id);
}

export function getTema(unidadId: number, temaId: string): Tema | undefined {
  const unidad = getUnidad(unidadId);
  return unidad?.temas.find(tema => tema.id === temaId);
}

export function getSubtema(unidadId: number, subtemaId: string): Subtema | undefined {
  const unidad = getUnidad(unidadId);
  if (!unidad) return undefined;
  
  for (const tema of unidad.temas) {
    const subtema = tema.subtemas.find(st => st.id === subtemaId);
    if (subtema) return subtema;
  }
  
  return undefined;
}

export function getAllSubtemas(unidadId: number): Subtema[] {
  const unidad = getUnidad(unidadId);
  if (!unidad) return [];
  
  return unidad.temas.flatMap(tema => tema.subtemas);
}
