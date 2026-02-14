# Propuesta de Investigación - UNEMI

Sitio web educativo desarrollado para la asignatura **Propuesta de Investigación** de la Universidad Estatal de Milagro (UNEMI).

## 📚 Descripción

Este proyecto es una plataforma educativa que proporciona material de estudio estructurado en 4 unidades principales, cada una con subtemas específicos que guían a los estudiantes a través del proceso de desarrollo de una propuesta de investigación científica.

## 🎯 Contenido del Curso

### Unidad 1: El Problema de Investigación
- Planteamiento del problema
- Formulación del problema
- Objetivos de la investigación
- Justificación de la investigación

### Unidad 2: Marco Teórico
- Antecedentes de la investigación
- Bases teóricas
- Marco conceptual
- Hipótesis y variables

### Unidad 3: Marco Metodológico
- Tipo y diseño de investigación
- Población y muestra
- Técnicas e instrumentos de recolección de datos
- Procesamiento y análisis de datos

### Unidad 4: Aspectos Administrativos
- Cronograma de actividades
- Recursos humanos y materiales
- Presupuesto
- Referencias bibliográficas

## 🚀 Comenzar

### Prerrequisitos
- Node.js 18+ instalado
- npm, yarn, pnpm o bun

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/almacenero/unemi-educacion.git

# Navegar al directorio
cd unemi-educacion

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el sitio.

## 🛠️ Tecnologías Utilizadas

- **Next.js 16** - Framework de React para producción
- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS 4** - Framework de CSS utilitario
- **ESLint** - Linter de código

## 📁 Estructura del Proyecto

```
├── app/
│   ├── components/      # Componentes reutilizables
│   ├── data/           # Datos del curso y estructura
│   ├── unidad-1/       # Páginas de la Unidad 1
│   ├── unidad-2/       # Páginas de la Unidad 2
│   ├── unidad-3/       # Páginas de la Unidad 3
│   ├── unidad-4/       # Páginas de la Unidad 4
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página de inicio
├── public/             # Archivos estáticos
└── documents/          # Documentos de referencia
```

## 🌐 Despliegue

El proyecto puede ser desplegado fácilmente en Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/almacenero/unemi-educacion)

## 📝 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

## 👥 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu funcionalidad (`git checkout -b feature/NuevaFuncionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/NuevaFuncionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📧 Contacto

Universidad Estatal de Milagro (UNEMI)  
Proyecto educativo - Propuesta de Investigación

---

Desarrollado con ❤️ para estudiantes de UNEMI
