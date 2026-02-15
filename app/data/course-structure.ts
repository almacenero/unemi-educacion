export interface Subtema {
  id: string;
  titulo: string;
  contenido: string;
}

export interface Unidad {
  id: number;
  titulo: string;
  descripcion: string;
  subtemas: Subtema[];
}

export const courseData: Unidad[] = [
  {
    id: 1,
    titulo: "Unidad 1: CONTEXTUALIZACIÓN DE LA INVESTIGACIÓN Y DEFINICIÓN DEL TEMA DE ESTUDIO",
    descripcion: "Resultado de Aprendizaje 1: Reconocerá los enfoques cuantitativo y cualitativo de la investigación científica y seleccionará un tema de estudio pertinente a la realidad profesional y académica.",
    subtemas: [
      {
        id: "1-1",
        titulo: "1.1 Planteamiento del problema",
        contenido: `
          <h2>Planteamiento del problema</h2>
          <p>El planteamiento del problema es el primer paso fundamental en la investigación científica. Consiste en identificar, describir y delimitar claramente la situación problemática que se desea investigar.</p>
          
          <h3>Aspectos clave:</h3>
          <ul>
            <li><strong>Contextualización:</strong> Situar el problema en su entorno real</li>
            <li><strong>Delimitación:</strong> Establecer límites espaciales, temporales y conceptuales</li>
            <li><strong>Relevancia:</strong> Justificar por qué es importante investigar este problema</li>
            <li><strong>Viabilidad:</strong> Asegurar que el problema puede ser investigado</li>
          </ul>

          <h3>Características de un buen planteamiento:</h3>
          <ul>
            <li>Claridad y precisión en la descripción</li>
            <li>Expresado en forma de pregunta o afirmación</li>
            <li>Factible de investigar con recursos disponibles</li>
            <li>Relevante para el área de conocimiento</li>
          </ul>
        `
      },
      {
        id: "1-2",
        titulo: "1.2 Formulación del problema",
        contenido: `
          <h2>Formulación del problema</h2>
          <p>La formulación del problema consiste en expresar de manera precisa y concreta la pregunta de investigación que guiará todo el proceso investigativo.</p>
          
          <h3>Elementos de la formulación:</h3>
          <ul>
            <li><strong>Pregunta principal:</strong> Interrogante central de la investigación</li>
            <li><strong>Preguntas secundarias:</strong> Interrogantes derivadas que especifican aspectos del problema</li>
            <li><strong>Variables:</strong> Identificación de las variables a estudiar</li>
          </ul>

          <h3>Criterios para formular el problema:</h3>
          <ol>
            <li>Expresar una relación entre variables</li>
            <li>Formularse en forma de pregunta</li>
            <li>Ser medible u observable</li>
            <li>Ser específico y delimitado</li>
          </ol>
        `
      },
      {
        id: "1-3",
        titulo: "1.3 Objetivos de la investigación",
        contenido: `
          <h2>Objetivos de la investigación</h2>
          <p>Los objetivos establecen qué pretende lograr la investigación. Se dividen en objetivo general y objetivos específicos.</p>
          
          <h3>Objetivo General:</h3>
          <p>Expresa el propósito global de la investigación. Debe ser alcanzable y coherente con el problema planteado.</p>
          
          <h3>Objetivos Específicos:</h3>
          <p>Desglosan el objetivo general en metas concretas y realizables. Deben:</p>
          <ul>
            <li>Ser claros y precisos</li>
            <li>Comenzar con verbos en infinitivo</li>
            <li>Ser medibles y alcanzables</li>
            <li>Estar relacionados con el problema</li>
          </ul>

          <h3>Verbos recomendados:</h3>
          <p><em>Identificar, describir, analizar, comparar, determinar, establecer, evaluar, proponer, diseñar</em></p>
        `
      },
      {
        id: "1-4",
        titulo: "1.4 Justificación de la investigación",
        contenido: `
          <h2>Justificación de la investigación</h2>
          <p>La justificación explica las razones por las cuales es importante realizar la investigación y los beneficios que aportará.</p>
          
          <h3>Tipos de justificación:</h3>
          <ul>
            <li><strong>Teórica:</strong> Aportes al conocimiento científico</li>
            <li><strong>Práctica:</strong> Solución a problemas concretos</li>
            <li><strong>Metodológica:</strong> Nuevos métodos o técnicas de investigación</li>
            <li><strong>Social:</strong> Beneficios para la sociedad</li>
          </ul>

          <h3>Preguntas guía:</h3>
          <ul>
            <li>¿Por qué es importante investigar este tema?</li>
            <li>¿Qué beneficios aportará?</li>
            <li>¿Quiénes se beneficiarán?</li>
            <li>¿Qué vacío en el conocimiento llenará?</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 2,
    titulo: "Unidad 2: Marco Teórico",
    descripcion: "Fundamentos teóricos y conceptuales que sustentan la investigación.",
    subtemas: [
      {
        id: "2-1",
        titulo: "2.1 Antecedentes de la investigación",
        contenido: `
          <h2>Antecedentes de la investigación</h2>
          <p>Los antecedentes son investigaciones previas relacionadas con el tema que se está estudiando. Sirven como referencia y punto de partida.</p>
          
          <h3>Características de los antecedentes:</h3>
          <ul>
            <li>Deben ser recientes (preferiblemente últimos 5 años)</li>
            <li>Relacionados directamente con el tema</li>
            <li>Incluir autor, año, título y conclusiones relevantes</li>
            <li>Mínimo 3-5 antecedentes (nacionales e internacionales)</li>
          </ul>

          <h3>Estructura de cada antecedente:</h3>
          <ol>
            <li>Datos bibliográficos del estudio</li>
            <li>Objetivo de la investigación citada</li>
            <li>Metodología empleada</li>
            <li>Principales conclusiones</li>
            <li>Relación con la investigación actual</li>
          </ol>
        `
      },
      {
        id: "2-2",
        titulo: "2.2 Bases teóricas",
        contenido: `
          <h2>Bases teóricas</h2>
          <p>Las bases teóricas constituyen el conjunto de conceptos, teorías y enfoques que fundamentan la investigación desde el punto de vista teórico.</p>
          
          <h3>Componentes:</h3>
          <ul>
            <li><strong>Teorías principales:</strong> Enfoques teóricos que sustentan el estudio</li>
            <li><strong>Conceptos clave:</strong> Definiciones operacionales de términos importantes</li>
            <li><strong>Modelos teóricos:</strong> Esquemas conceptuales aplicables</li>
            <li><strong>Leyes y principios:</strong> Fundamentos científicos relacionados</li>
          </ul>

          <h3>Organización:</h3>
          <p>Se recomienda organizar de lo general a lo específico, siguiendo una secuencia lógica que facilite la comprensión del marco conceptual.</p>
        `
      },
      {
        id: "2-3",
        titulo: "2.3 Marco conceptual",
        contenido: `
          <h2>Marco conceptual</h2>
          <p>El marco conceptual define y explica los conceptos y términos principales utilizados en la investigación.</p>
          
          <h3>Elementos del marco conceptual:</h3>
          <ul>
            <li>Definición de variables</li>
            <li>Términos técnicos específicos</li>
            <li>Conceptos operacionales</li>
            <li>Sistemas de clasificación utilizados</li>
          </ul>

          <h3>Recomendaciones:</h3>
          <ul>
            <li>Usar definiciones de fuentes confiables</li>
            <li>Citar adecuadamente las fuentes</li>
            <li>Mantener coherencia terminológica</li>
            <li>Evitar ambigüedades</li>
          </ul>
        `
      },
      {
        id: "2-4",
        titulo: "2.4 Hipótesis y variables",
        contenido: `
          <h2>Hipótesis y variables</h2>
          
          <h3>Hipótesis:</h3>
          <p>Es una proposición tentativa que responde al problema de investigación. Debe ser verificable empíricamente.</p>
          
          <h4>Tipos de hipótesis:</h4>
          <ul>
            <li><strong>Hipótesis de investigación:</strong> Afirmación sobre la relación entre variables</li>
            <li><strong>Hipótesis nula:</strong> Niega la relación planteada</li>
            <li><strong>Hipótesis alternativa:</strong> Propone explicaciones diferentes</li>
          </ul>

          <h3>Variables:</h3>
          <ul>
            <li><strong>Variable independiente:</strong> Causa o factor manipulado</li>
            <li><strong>Variable dependiente:</strong> Efecto o resultado medido</li>
            <li><strong>Variables intervinientes:</strong> Factores que pueden influir en la relación</li>
          </ul>

          <h3>Operacionalización de variables:</h3>
          <p>Proceso de convertir variables conceptuales en indicadores medibles mediante dimensiones e indicadores específicos.</p>
        `
      }
    ]
  },
  {
    id: 3,
    titulo: "Unidad 3: Marco Metodológico",
    descripcion: "Métodos, técnicas y procedimientos que se utilizarán para desarrollar la investigación.",
    subtemas: [
      {
        id: "3-1",
        titulo: "3.1 Tipo y diseño de investigación",
        contenido: `
          <h2>Tipo y diseño de investigación</h2>
          
          <h3>Tipos de investigación:</h3>
          <ul>
            <li><strong>Por su finalidad:</strong> Básica o Aplicada</li>
            <li><strong>Por su alcance:</strong> Exploratoria, Descriptiva, Correlacional, Explicativa</li>
            <li><strong>Por su enfoque:</strong> Cuantitativa, Cualitativa, Mixta</li>
          </ul>

          <h3>Diseños de investigación:</h3>
          <ul>
            <li><strong>Experimental:</strong> Manipulación de variables con grupo control</li>
            <li><strong>No experimental:</strong> Observación sin manipulación
              <ul>
                <li>Transversal: Un momento en el tiempo</li>
                <li>Longitudinal: Varios momentos en el tiempo</li>
              </ul>
            </li>
            <li><strong>Documental:</strong> Basada en fuentes documentales</li>
            <li><strong>De campo:</strong> Datos recolectados en el contexto natural</li>
          </ul>
        `
      },
      {
        id: "3-2",
        titulo: "3.2 Población y muestra",
        contenido: `
          <h2>Población y muestra</h2>
          
          <h3>Población:</h3>
          <p>Conjunto total de individuos, objetos o medidas que poseen características comunes observables en un lugar y momento determinado.</p>
          
          <h4>Características:</h4>
          <ul>
            <li>Debe estar claramente delimitada</li>
            <li>Ser homogénea en sus características esenciales</li>
            <li>Especificar criterios de inclusión y exclusión</li>
          </ul>

          <h3>Muestra:</h3>
          <p>Subconjunto representativo de la población que se selecciona para el estudio.</p>
          
          <h4>Tipos de muestreo:</h4>
          <ul>
            <li><strong>Probabilístico:</strong>
              <ul>
                <li>Aleatorio simple</li>
                <li>Sistemático</li>
                <li>Estratificado</li>
                <li>Por conglomerados</li>
              </ul>
            </li>
            <li><strong>No probabilístico:</strong>
              <ul>
                <li>Por conveniencia</li>
                <li>Intencional</li>
                <li>Por cuotas</li>
                <li>Bola de nieve</li>
              </ul>
            </li>
          </ul>

          <h3>Tamaño de la muestra:</h3>
          <p>Se calcula mediante fórmulas estadísticas considerando el nivel de confianza, margen de error y variabilidad de la población.</p>
        `
      },
      {
        id: "3-3",
        titulo: "3.3 Técnicas e instrumentos de recolección de datos",
        contenido: `
          <h2>Técnicas e instrumentos de recolección de datos</h2>
          
          <h3>Técnicas de recolección:</h3>
          <ul>
            <li><strong>Encuesta:</strong> Recopilación de información mediante cuestionarios</li>
            <li><strong>Entrevista:</strong> Diálogo directo con los sujetos de estudio</li>
            <li><strong>Observación:</strong> Registro sistemático de comportamientos o fenómenos</li>
            <li><strong>Análisis documental:</strong> Revisión de documentos y registros</li>
            <li><strong>Grupos focales:</strong> Discusión dirigida con grupos pequeños</li>
          </ul>

          <h3>Instrumentos:</h3>
          <ul>
            <li><strong>Cuestionario:</strong> Conjunto de preguntas estructuradas</li>
            <li><strong>Guía de entrevista:</strong> Preguntas orientadoras para la entrevista</li>
            <li><strong>Ficha de observación:</strong> Registro de datos observables</li>
            <li><strong>Lista de cotejo:</strong> Verificación de presencia/ausencia de características</li>
            <li><strong>Escala de valoración:</strong> Medición de actitudes u opiniones</li>
          </ul>

          <h3>Validación de instrumentos:</h3>
          <ul>
            <li><strong>Validez:</strong> Que mida lo que pretende medir (contenido, criterio, constructo)</li>
            <li><strong>Confiabilidad:</strong> Consistencia de los resultados (Alpha de Cronbach, test-retest)</li>
          </ul>
        `
      },
      {
        id: "3-4",
        titulo: "3.4 Procesamiento y análisis de datos",
        contenido: `
          <h2>Procesamiento y análisis de datos</h2>
          
          <h3>Procesamiento de datos:</h3>
          <ol>
            <li><strong>Codificación:</strong> Asignación de códigos a las respuestas</li>
            <li><strong>Tabulación:</strong> Organización de datos en tablas o matrices</li>
            <li><strong>Depuración:</strong> Revisión y corrección de errores</li>
            <li><strong>Sistematización:</strong> Ordenamiento lógico de la información</li>
          </ol>

          <h3>Análisis cuantitativo:</h3>
          <ul>
            <li><strong>Estadística descriptiva:</strong>
              <ul>
                <li>Medidas de tendencia central (media, mediana, moda)</li>
                <li>Medidas de dispersión (desviación estándar, varianza)</li>
                <li>Distribución de frecuencias</li>
                <li>Gráficos y tablas</li>
              </ul>
            </li>
            <li><strong>Estadística inferencial:</strong>
              <ul>
                <li>Pruebas de hipótesis</li>
                <li>Correlaciones</li>
                <li>Regresiones</li>
                <li>Análisis de varianza (ANOVA)</li>
              </ul>
            </li>
          </ul>

          <h3>Análisis cualitativo:</h3>
          <ul>
            <li>Categorización de información</li>
            <li>Análisis de contenido</li>
            <li>Triangulación de datos</li>
            <li>Interpretación hermenéutica</li>
          </ul>

          <h3>Software de apoyo:</h3>
          <p><em>SPSS, Excel, R, NVivo, Atlas.ti, entre otros</em></p>
        `
      }
    ]
  },
  {
    id: 4,
    titulo: "Unidad 4: Aspectos Administrativos",
    descripcion: "Planificación de recursos, tiempo y presupuesto necesarios para la investigación.",
    subtemas: [
      {
        id: "4-1",
        titulo: "4.1 Cronograma de actividades",
        contenido: `
          <h2>Cronograma de actividades</h2>
          <p>El cronograma es la planificación temporal de todas las actividades que se realizarán durante la investigación.</p>
          
          <h3>Elementos del cronograma:</h3>
          <ul>
            <li>Lista detallada de actividades</li>
            <li>Secuencia lógica de ejecución</li>
            <li>Tiempo estimado para cada actividad</li>
            <li>Responsables de cada tarea</li>
          </ul>

          <h3>Fases típicas de una investigación:</h3>
          <ol>
            <li><strong>Fase de planificación:</strong>
              <ul>
                <li>Selección del tema</li>
                <li>Revisión bibliográfica</li>
                <li>Elaboración del proyecto</li>
              </ul>
            </li>
            <li><strong>Fase de ejecución:</strong>
              <ul>
                <li>Recolección de datos</li>
                <li>Procesamiento de información</li>
                <li>Análisis de resultados</li>
              </ul>
            </li>
            <li><strong>Fase de comunicación:</strong>
              <ul>
                <li>Redacción del informe</li>
                <li>Revisión y corrección</li>
                <li>Presentación de resultados</li>
              </ul>
            </li>
          </ol>

          <h3>Herramientas de representación:</h3>
          <ul>
            <li>Diagrama de Gantt</li>
            <li>Tablas cronológicas</li>
            <li>Diagramas de flujo</li>
          </ul>
        `
      },
      {
        id: "4-2",
        titulo: "4.2 Recursos humanos y materiales",
        contenido: `
          <h2>Recursos humanos y materiales</h2>
          
          <h3>Recursos Humanos:</h3>
          <p>Personal que participará en la investigación:</p>
          <ul>
            <li><strong>Investigador principal:</strong> Responsable del proyecto</li>
            <li><strong>Co-investigadores:</strong> Investigadores colaboradores</li>
            <li><strong>Asesores:</strong> Expertos que guían el proceso</li>
            <li><strong>Personal de apoyo:</strong> Asistentes, encuestadores, digitadores</li>
          </ul>

          <h3>Recursos Materiales:</h3>
          <ul>
            <li><strong>Equipos:</strong>
              <ul>
                <li>Computadoras</li>
                <li>Impresoras</li>
                <li>Equipos de medición</li>
                <li>Grabadoras, cámaras</li>
              </ul>
            </li>
            <li><strong>Materiales:</strong>
              <ul>
                <li>Material de oficina</li>
                <li>Bibliografía</li>
                <li>Software especializado</li>
                <li>Insumos específicos</li>
              </ul>
            </li>
            <li><strong>Servicios:</strong>
              <ul>
                <li>Internet</li>
                <li>Transporte</li>
                <li>Impresiones</li>
                <li>Asesorías especializadas</li>
              </ul>
            </li>
          </ul>
        `
      },
      {
        id: "4-3",
        titulo: "4.3 Presupuesto",
        contenido: `
          <h2>Presupuesto</h2>
          <p>El presupuesto es la estimación detallada de los costos que generará la investigación.</p>
          
          <h3>Componentes del presupuesto:</h3>
          <ol>
            <li><strong>Recursos Humanos:</strong>
              <ul>
                <li>Honorarios de investigadores</li>
                <li>Pago a personal de apoyo</li>
                <li>Asesorías especializadas</li>
              </ul>
            </li>
            <li><strong>Recursos Materiales:</strong>
              <ul>
                <li>Equipos y tecnología</li>
                <li>Material bibliográfico</li>
                <li>Material de oficina</li>
                <li>Software y licencias</li>
              </ul>
            </li>
            <li><strong>Servicios:</strong>
              <ul>
                <li>Movilización y transporte</li>
                <li>Comunicaciones</li>
                <li>Impresiones y copias</li>
                <li>Servicios de laboratorio</li>
              </ul>
            </li>
            <li><strong>Otros gastos:</strong>
              <ul>
                <li>Imprevistos (10% del total)</li>
                <li>Difusión de resultados</li>
                <li>Publicaciones</li>
              </ul>
            </li>
          </ol>

          <h3>Presentación del presupuesto:</h3>
          <p>Se recomienda presentar en una tabla con las siguientes columnas:</p>
          <ul>
            <li>Rubro o ítem</li>
            <li>Cantidad</li>
            <li>Costo unitario</li>
            <li>Costo total</li>
          </ul>
        `
      },
      {
        id: "4-4",
        titulo: "4.4 Referencias bibliográficas",
        contenido: `
          <h2>Referencias bibliográficas</h2>
          <p>Las referencias bibliográficas son el listado de todas las fuentes consultadas y citadas en la investigación.</p>
          
          <h3>Normativa APA (7ª edición):</h3>
          
          <h4>Libro:</h4>
          <p><em>Apellido, A. A. (Año). Título del libro. Editorial.</em></p>
          
          <h4>Artículo de revista:</h4>
          <p><em>Apellido, A. A. (Año). Título del artículo. Nombre de la revista, volumen(número), páginas. DOI</em></p>
          
          <h4>Capítulo de libro:</h4>
          <p><em>Apellido, A. A. (Año). Título del capítulo. En A. Editor (Ed.), Título del libro (pp. xx-xx). Editorial.</em></p>
          
          <h4>Sitio web:</h4>
          <p><em>Apellido, A. A. (Año, día de mes). Título de la página. Nombre del sitio. URL</em></p>

          <h3>Recomendaciones:</h3>
          <ul>
            <li>Ordenar alfabéticamente por apellido del primer autor</li>
            <li>Usar sangría francesa</li>
            <li>Incluir solo las fuentes citadas en el texto</li>
            <li>Verificar la consistencia del formato</li>
            <li>Utilizar gestores bibliográficos (Zotero, Mendeley, EndNote)</li>
          </ul>

          <h3>Citas en el texto:</h3>
          <ul>
            <li><strong>Cita textual corta:</strong> "Texto citado" (Autor, año, p. xx)</li>
            <li><strong>Cita textual larga:</strong> Bloque independiente sin comillas</li>
            <li><strong>Paráfrasis:</strong> (Autor, año)</li>
            <li><strong>Varios autores:</strong> (Autor1 et al., año)</li>
          </ul>
        `
      }
    ]
  }
];

export function getUnidad(id: number): Unidad | undefined {
  return courseData.find(unidad => unidad.id === id);
}

export function getSubtema(unidadId: number, subtemaId: string): Subtema | undefined {
  const unidad = getUnidad(unidadId);
  return unidad?.subtemas.find(subtema => subtema.id === subtemaId);
}
