export const serviciosData = [
    {
        categoriaId: "pintura",
        categoriaNombre: "Pintura profesional",
        subcategorias: [
            {
                id: "interiores",
                nombre: "Interiores",
                icono: "🏠",
                descripcion:
                    "Preparación de superficies, sellado y terminación prolija en livings, dormitorios y pasillos.",
                imagen: "/assets/servicios/pintura/interiores.jpg",
                incluye: {
                    descripcion: "Servicio completo con materiales y protección del espacio.",
                    items: [
                        { label: "Ambientes", value: "Living, dormitorios" },
                        { label: "Acabado", value: "Mate / Satinado" },
                        { label: "Tiempo estimado", value: "1–3 días" },
                        { label: "Garantía", value: "12 meses" },
                    ],
                },
                proceso: [
                    {
                        icono: "🛡️",
                        titulo: "Protección y preparación",
                        descripcion:
                            "Cubrimos muebles y suelos, retiramos imperfecciones, sellamos con fijador y reparamos zonas dañadas para una base perfecta.",
                        incluido: true,
                    },
                    {
                        icono: "🎨",
                        titulo: "Aplicación de pintura",
                        descripcion:
                            "Dos manos con pintura de baja emisión, cortes prolijos en esquinas y uniformidad de color en muros y cielos.",
                        incluido: true,
                    },
                    {
                        icono: "✨",
                        titulo: "Limpieza y entrega",
                        descripcion:
                            "Retiro de protecciones, limpieza del área y revisión final junto a ti para asegurar el resultado.",
                        incluido: true,
                    },
                ],
                galeria: [
                    "/assets/servicios/pintura/interior1.jpg",
                    "/assets/servicios/pintura/interior2.jpg",
                    "/assets/servicios/pintura/interior3.jpg",
                ],
            },
            {
                id: "exteriores",
                nombre: "Exteriores",
                icono: "🏡",
                descripcion:
                    "Pintura de fachadas, muros y terrazas con materiales impermeables y resistentes al clima.",
                imagen: "/assets/servicios/pintura/exteriores.jpg",
                incluye: {
                    descripcion:
                        "Revestimientos elásticos, sellado de grietas y protección UV para un acabado duradero.",
                    items: [
                        { label: "Superficies", value: "Fachadas, terrazas, muros" },
                        { label: "Acabado", value: "Revestimiento elástico / Piedra" },
                        { label: "Tiempo estimado", value: "3–5 días" },
                        { label: "Garantía", value: "24 meses" },
                    ],
                },
                proceso: [
                    {
                        icono: "🧱",
                        titulo: "Limpieza y preparación",
                        descripcion:
                            "Retiramos polvo, hongos y pinturas viejas para garantizar adherencia.",
                        incluido: true,
                    },
                    {
                        icono: "🌤️",
                        titulo: "Revestimiento exterior",
                        descripcion:
                            "Aplicación de pintura o revestimiento impermeable en dos capas con sellado UV.",
                        incluido: true,
                    },
                    {
                        icono: "🧹",
                        titulo: "Entrega y revisión",
                        descripcion:
                            "Limpieza del área, comprobación de juntas y verificación del acabado.",
                        incluido: true,
                    },
                ],
                galeria: [
                    "/assets/servicios/pintura/exterior1.jpg",
                    "/assets/servicios/pintura/exterior2.jpg",
                ],
            },
            {
                id: "decorativos",
                nombre: "Decorativos",
                icono: "✨",
                descripcion:
                    "Efectos de textura, microcemento fino, estuco veneciano y muros artísticos.",
                imagen: "/assets/servicios/pintura/decorativos.jpg",
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
                    "/assets/servicios/pintura/decorativo1.jpg",
                    "/assets/servicios/pintura/decorativo2.jpg",
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
                imagen: "/assets/servicios/carpinteria/montaje-instalacion.jpg",
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
                imagen: "/assets/servicios/carpinteria/fabricacion.jpg",
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
                    "/assets/servicios/carpinteria/fabricacion1.jpg",
                    "/assets/servicios/carpinteria/fabricacion2.jpg",
                    "/assets/servicios/carpinteria/fabricacion3.jpg",
                ],
            },

            {
                id: "reparaciones",
                nombre: "Reparaciones y ajustes",
                icono: "🔧",
                descripcion:
                    "Solución de problemas comunes en carpintería: bisagras flojas, hinchazones, roturas o deformaciones.",
                imagen: "/assets/servicios/carpinteria/reparaciones.jpg",
                incluye: {
                    descripcion:
                        "Atención rápida y precisa para extender la vida útil de tus muebles o estructuras.",
                    items: [
                        { label: "Tipo de reparación", value: "Puertas, armarios, muebles" },
                        { label: "Tiempo estimado", value: "1 día" },
                        { label: "Garantía", value: "6 meses" },
                        { label: "Materiales", value: "Incluidos según tipo de reparación" },
                    ],
                },
                proceso: [
                    {
                        icono: "🔍",
                        titulo: "Diagnóstico",
                        descripcion:
                            "Evaluamos el daño y definimos si requiere ajuste, reemplazo o refuerzo.",
                        incluido: true,
                    },
                    {
                        icono: "🪚",
                        titulo: "Reparación",
                        descripcion:
                            "Desmontaje parcial, ajuste de piezas o reemplazo con materiales equivalentes.",
                        incluido: true,
                    },
                    {
                        icono: "🧼",
                        titulo: "Finalización y limpieza",
                        descripcion:
                            "Comprobación del funcionamiento y limpieza del área intervenida.",
                        incluido: true,
                    },
                ],
                galeria: [
                    "/assets/servicios/carpinteria/reparacion1.jpg",
                    "/assets/servicios/carpinteria/reparacion2.jpg",
                ],
            },
        ],
    },
    {
        categoriaId: "reparaciones",
        categoriaNombre: "Reparaciones de techos y paredes",
        subcategorias: [
            {
                id: "grietas-fisuras",
                nombre: "Grietas y fisuras",
                icono: "🧱",
                descripcion:
                    "Reparación de grietas, fisuras y desprendimientos en paredes y techos para evitar filtraciones o daños estructurales.",
                imagen: "/assets/servicios/reparaciones/grietas-fisuras.jpg",
                incluye: {
                    descripcion:
                        "Refuerzo y sellado profesional con masillas y mallas de fibra para asegurar un acabado duradero.",
                    items: [
                        { label: "Superficies", value: "Paredes y techos interiores" },
                        { label: "Materiales", value: "Masillas, mallas, selladores" },
                        { label: "Tiempo estimado", value: "1–2 días" },
                        { label: "Garantía", value: "12 meses" },
                    ],
                },
                proceso: [
                    {
                        icono: "🔎",
                        titulo: "Evaluación y limpieza",
                        descripcion:
                            "Identificamos el tipo de fisura y preparamos la superficie eliminando polvo y restos sueltos.",
                        incluido: true,
                    },
                    {
                        icono: "🪚",
                        titulo: "Sellado y refuerzo",
                        descripcion:
                            "Aplicamos masilla reforzada con malla y nivelamos la superficie para una base uniforme.",
                        incluido: true,
                    },
                    {
                        icono: "🎨",
                        titulo: "Acabado final",
                        descripcion:
                            "Lijado, imprimación y repintado para que el área quede como nueva.",
                        incluido: true,
                    },
                ],
                galeria: [
                    "/assets/servicios/reparaciones/grietas1.jpg",
                    "/assets/servicios/reparaciones/grietas2.jpg",
                    "/assets/servicios/reparaciones/grietas3.jpg",
                ],
            },

            {
                id: "humedades-filtraciones",
                nombre: "Humedades y filtraciones",
                icono: "💧",
                descripcion:
                    "Tratamiento de humedad por condensación, capilaridad o filtraciones con productos específicos impermeabilizantes.",
                imagen: "/assets/servicios/reparaciones/humedades-filtraciones.jpg",
                incluye: {
                    descripcion:
                        "Reparación de origen, secado, sellado y protección con productos antihumedad de alta eficacia.",
                    items: [
                        { label: "Causas tratadas", value: "Filtraciones, condensación, capilaridad" },
                        { label: "Materiales", value: "Resinas, morteros impermeables" },
                        { label: "Tiempo estimado", value: "2–4 días" },
                        { label: "Garantía", value: "24 meses" },
                    ],
                },
                proceso: [
                    {
                        icono: "🔍",
                        titulo: "Diagnóstico de origen",
                        descripcion:
                            "Detectamos la fuente de humedad (filtración, condensación o capilaridad).",
                        incluido: true,
                    },
                    {
                        icono: "💦",
                        titulo: "Secado y sellado",
                        descripcion:
                            "Secado completo del área y aplicación de selladores o morteros impermeables.",
                        incluido: true,
                    },
                    {
                        icono: "🏠",
                        titulo: "Protección final",
                        descripcion:
                            "Aplicación de pintura transpirable o revestimiento protector antihumedad.",
                        incluido: true,
                    },
                ],
                galeria: [
                    "/assets/servicios/reparaciones/humedad1.jpg",
                    "/assets/servicios/reparaciones/humedad2.jpg",
                    "/assets/servicios/reparaciones/humedad3.jpg",
                ],
            },

            {
                id: "acabados-revestimientos",
                nombre: "Acabados y revestimientos",
                icono: "🎨",
                descripcion:
                    "Aplicación de revestimientos decorativos o técnicos en techos y paredes para renovar el aspecto y mejorar la protección.",
                imagen: "/assets/servicios/reparaciones/acabados-revestimientos.jpg",
                incluye: {
                    descripcion:
                        "Acabados lisos, texturados o impermeables según el tipo de espacio y estilo deseado.",
                    items: [
                        { label: "Tipos", value: "Liso, estuco, microcemento, piedra" },
                        { label: "Tiempo estimado", value: "2–5 días" },
                        { label: "Garantía", value: "12 meses" },
                        { label: "Aplicaciones", value: "Baños, cocinas, fachadas" },
                    ],
                },
                proceso: [
                    {
                        icono: "🧱",
                        titulo: "Preparación del soporte",
                        descripcion:
                            "Revisión de superficie, reparación de juntas y limpieza para una correcta adherencia.",
                        incluido: true,
                    },
                    {
                        icono: "🎨",
                        titulo: "Aplicación del revestimiento",
                        descripcion:
                            "Aplicamos el revestimiento seleccionado con herramientas y técnicas adecuadas.",
                        incluido: true,
                    },
                    {
                        icono: "✨",
                        titulo: "Sellado y acabado final",
                        descripcion:
                            "Protegemos el acabado con barnices o selladores según el tipo de revestimiento.",
                        incluido: true,
                    },
                ],
                galeria: [
                    "/assets/servicios/reparaciones/acabado1.jpg",
                    "/assets/servicios/reparaciones/acabado2.jpg",
                    "/assets/servicios/reparaciones/acabado3.jpg",
                ],
            },
        ],
    }



    // ...añade la categoría "reparaciones" con sus 3 subcategorías
];
