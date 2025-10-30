export const serviciosData = [
    {
        categoriaId: "pintura",
        categoriaNombre: "Pintura profesional",
        subcategorias: [
            {
                id: "interiores",
                nombre: "Pintura de interiores",
                icono: "🏠",
                descripcion:
                    "Preparación de superficies, sellado y acabado profesional en salones, dormitorios y pasillos.",
                imagen: "/images/servicios/pintura/interiores.png",
                incluye: {
                    descripcion: "Servicio completo con materiales de primera calidad y protección total del espacio.",
                    items: [
                        { label: "Estancias", value: "Salón, dormitorios, pasillos" },
                        { label: "Acabado", value: "Mate o satinado" },
                        { label: "Tiempo estimado", value: "1–3 días" },
                        { label: "Garantía", value: "12 meses" },
                    ],
                },
                proceso: [
                    {
                        icono: "🛡️",
                        titulo: "Protección y preparación",
                        descripcion:
                            "Protegemos suelos y mobiliario, corregimos imperfecciones y aplicamos sellador para garantizar una base uniforme.",
                        incluido: true,
                    },
                    {
                        icono: "🎨",
                        titulo: "Aplicación de pintura",
                        descripcion:
                            "Aplicamos dos manos con pintura ecológica de alta cobertura, cuidando los acabados y la homogeneidad del color.",
                        incluido: true,
                    },
                    {
                        icono: "✨",
                        titulo: "Limpieza y entrega",
                        descripcion:
                            "Retiramos las protecciones, limpiamos la zona y realizamos una revisión final contigo para asegurar el mejor resultado.",
                        incluido: true,
                    },
                ],
                galeria: [
                    "/images/servicios/pintura/interior1.jpg",
                    "/images/servicios/pintura/interior2.jpg",
                    "/images/servicios/pintura/interior3.jpg",
                    "/images/servicios/pintura/interior4.jpg",
                    "/images/servicios/pintura/interior5.jpg",
                    "/images/servicios/pintura/interior6.jpg",
                ],
            }
            ,
            {
                id: "decorativos",
                nombre: "Decorativos",
                icono: "✨",
                descripcion:
                    "Efectos de textura, microcemento fino, estuco veneciano y muros artísticos.",
                imagen: "/images/servicios/pintura/decorativos.png",
                incluye: {
                    descripcion:
                        "Diseños personalizados para muros y acabados con alto impacto visual.",
                    items: [
                        { label: "Ambientes", value: "Salones, dormitorios, oficinas" },
                        { label: "Acabado", value: "Estuco / Microcemento / Textura" },
                        { label: "Tiempo estimado", value: "2–4 días" },
                        { label: "Garantía", value: "12 meses" },
                    ],
                },
                proceso: [
                    {
                        icono: "🖌️",
                        titulo: "Diseño y muestra",
                        descripcion:
                            "Preparamos pruebas de color y textura antes de la aplicación final.",
                        incluido: true,
                    },
                    {
                        icono: "🎨",
                        titulo: "Aplicación del acabado",
                        descripcion:
                            "Aplicación manual en capas con sellado protector transparente.",
                        incluido: true,
                    },
                ],
                galeria: [
                    "/images/servicios/pintura/decorativos1.jpg",
                    "/images/servicios/pintura/decorativos2.jpg",
                    "/images/servicios/pintura/decorativos3.jpg",
                    "/images/servicios/pintura/decorativos4.jpg",
                ],
            },
        ],
    },

    {
        categoriaId: "carpinteria",
        categoriaNombre: "Montaje y carpintería",
        subcategorias: [
            {
                id: "montaje-instalacion",
                nombre: "Montaje e instalación",
                icono: "🪛",
                descripcion:
                    "Instalación profesional de muebles, puertas, rodapiés y estructuras de madera o melamina con nivelado y acabados prolijos.",
                imagen: "/images/servicios/carpinteria/montaje-instalacion.png",
                incluye: {
                    descripcion:
                        "Montaje con herramientas profesionales, fijaciones seguras y limpieza final del área.",
                    items: [
                        { label: "Elementos", value: "Muebles, puertas, rodapiés" },
                        { label: "Tiempo estimado", value: "1–2 días" },
                        { label: "Garantía", value: "12 meses" },
                        { label: "Entrega", value: "Instalación inmediata" },
                    ],
                },
                proceso: [
                    {
                        icono: "📦",
                        titulo: "Recepción y revisión",
                        descripcion:
                            "Verificación de piezas, herrajes y medidas antes de comenzar el montaje.",
                        incluido: true,
                    },
                    {
                        icono: "🪚",
                        titulo: "Instalación y nivelado",
                        descripcion:
                            "Colocación precisa, anclajes reforzados y ajustes para un acabado alineado.",
                        incluido: true,
                    },
                    {
                        icono: "🧹",
                        titulo: "Limpieza y comprobación",
                        descripcion:
                            "Retiro de residuos, revisión de funcionamiento y limpieza del área.",
                        incluido: true,
                    },
                ],
                galeria: [
                    "/assets/servicios/carpinteria/montaje1.jpg",
                    "/assets/servicios/carpinteria/montaje2.jpg",
                    "/assets/servicios/carpinteria/montaje3.jpg",
                ],
            },

            {
                id: "fabricacion",
                nombre: "Fabricación a medida",
                icono: "🪵",
                descripcion:
                    "Diseño y fabricación de muebles personalizados adaptados a tus medidas y estilo.",
                imagen: "/images/servicios/carpinteria/fabricacion.png",
                incluye: {
                    descripcion:
                        "Materiales de alta calidad y acabados duraderos con instalación incluida.",
                    items: [
                        { label: "Materiales", value: "MDF, madera maciza, melamina" },
                        { label: "Tiempo estimado", value: "2–3 semanas" },
                        { label: "Garantía", value: "24 meses" },
                        { label: "Entrega", value: "Incluye transporte e instalación" },
                    ],
                },
                proceso: [
                    {
                        icono: "📐",
                        titulo: "Diseño y planificación",
                        descripcion:
                            "Toma de medidas, diseño 3D y selección de materiales con el cliente.",
                        incluido: true,
                    },
                    {
                        icono: "🪚",
                        titulo: "Corte y ensamblado",
                        descripcion:
                            "Fabricación con maquinaria de precisión y ensamblado manual controlado.",
                        incluido: true,
                    },
                    {
                        icono: "🧰",
                        titulo: "Instalación final",
                        descripcion:
                            "Montaje limpio y nivelado con revisión de funcionamiento.",
                        incluido: true,
                    },
                ],
                galeria: [
                    "/images/servicios/carpinteria/fabricacion1.jpg",
                    "/images/servicios/carpinteria/fabricacion2.jpg",
                    "/images/servicios/carpinteria/fabricacion3.jpg",
                    "/images/servicios/carpinteria/fabricacion4.jpg",
                    "/images/servicios/carpinteria/fabricacion5.jpg",
                ],
            },
            {
                id: "montaje",
                nombre: "Montaje y colocación",
                icono: "🧰",
                descripcion:
                    "Instalación y montaje profesional de tarimas, cocinas, baños, armarios y rodapiés, con acabados precisos y duraderos.",
                imagen: "/images/servicios/carpinteria/montaje.png",
                incluye: {
                    descripcion: "Montaje completo con herramientas profesionales y materiales de calidad.",
                    items: [
                        { label: "Trabajos habituales", value: "Tarimas, cocinas, baños, armarios, rodapiés" },
                        { label: "Acabado", value: "Preciso y limpio, sin restos ni imperfecciones" },
                        { label: "Tiempo estimado", value: "Según superficie y tipo de instalación" },
                    ],
                },
                proceso: [
                    {
                        icono: "📏",
                        titulo: "Medición y planificación",
                        descripcion:
                            "Revisamos el espacio, nivelamos superficies y planificamos el montaje para garantizar un encaje perfecto.",
                        incluido: true,
                    },
                    {
                        icono: "🪚",
                        titulo: "Instalación y ajuste",
                        descripcion:
                            "Montamos cada pieza con precisión, cuidando la alineación, los remates y el sellado en juntas o esquinas.",
                        incluido: true,
                    },
                    {
                        icono: "🧼",
                        titulo: "Revisión y limpieza",
                        descripcion:
                            "Comprobamos el funcionamiento y la estabilidad de cada elemento, retiramos restos y dejamos el área lista para su uso.",
                        incluido: true,
                    },
                ],
                galeria: [
                    "/images/servicios/carpinteria/montaje1.jpg",
                    "/images/servicios/carpinteria/montaje2.jpg",
                    "/images/servicios/carpinteria/montaje3.jpg",
                    "/images/servicios/carpinteria/montaje4.jpg",
                    "/images/servicios/carpinteria/montaje5.jpg",
                    "/images/servicios/carpinteria/montaje6.jpg",
                ],
            }

            ,
        ],
    },
    



    // ...añade la categoría "reparaciones" con sus 3 subcategorías
];
