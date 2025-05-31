import Item from "../components/Item";

const product = [
      {
    "id": "1",
    "name": "Lápiz HB Clásico",
    "price": 1.5,
    "description": "Lápiz de grafito de alta calidad.",
    "stock": 15,
    "img": "https://i.postimg.cc/nrfSZf9h/lapicero-01.webp",
    "category": "Lápices"
  },
  {
    "id": "2",
    "name": "Lápiz de Colores Prismáticos",
    "price": 2.0,
    "description": "Colores vivos para tus dibujos.",
    "stock": 20,
    "img": "https://i.postimg.cc/NF8JjCR7/lapicero-02.webp",
    "category": "Lápices"
  },
  {
    "id": "3",
    "name": "Lápiz Negro Profesional",
    "price": 2.5,
    "description": "Ideal para bocetos y sombreado.",
    "stock": 12,
    "img": "https://i.postimg.cc/zDTP7v4b/lapicero-03.webp",
    "category": "Lápices"
  },
  {
    "id": "4",
    "name": "Lápiz Bicolor Escolar",
    "price": 1.2,
    "description": "Rojo y azul para correcciones.",
    "stock": 25,
    "img": "https://i.postimg.cc/PrhVRhk6/lapicero-04.webp",
    "category": "Lápices"
  },
  {
    "id": "5",
    "name": "Lápiz Decorado Kawaii",
    "price": 2.3,
    "description": "Diseños tiernos y funcionales.",
    "stock": 10,
    "img": "https://i.postimg.cc/DygpVDv7/lapicero-05.webp",
    "category": "Lápices"
  },
  {
    "id": "6",
    "name": "Set de Lápices Artísticos",
    "price": 5.0,
    "description": "Ideal para artistas profesionales.",
    "stock": 8,
    "img": "https://i.postimg.cc/CxxPwN5k/lapicero-06.webp",
    "category": "Lápices"
  },
  {
    "id": "7",
    "name": "Lápiz con Goma de Unicornio",
    "price": 1.8,
    "description": "Perfecto para escolares.",
    "stock": 18,
    "img": "https://i.postimg.cc/wj4WMmRP/lapicero-07.webp",
    "category": "Lápices"
  },
  {
    "id": "8",
    "name": "Lápiz Triangular Ergonómico",
    "price": 1.6,
    "description": "Mejor agarre para escribir.",
    "stock": 22,
    "img": "https://i.postimg.cc/q7t13v87/lapicero-08.webp",
    "category": "Lápices"
  },
  {
    "id": "9",
    "name": "Lápiz Vintage de Madera",
    "price": 3.0,
    "description": "Estilo retro, escritura suave.",
    "stock": 10,
    "img": "https://i.postimg.cc/VN3DBPRW/lapicero-09.webp",
    "category": "Lápices"
  },
  {
    "id": "10",
    "name": "Lápiz con Mensajes Positivos",
    "price": 2.1,
    "description": "Incluye frases motivadoras.",
    "stock": 14,
    "img": "https://i.postimg.cc/zBKpx22Z/lapicero-10.webp",
    "category": "Lápices"
  },
  // Marcadores (id 11–20)
  {
    "id": "11",
    "name": "Marcador Permanente Negro",
    "price": 3.5,
    "description": "Ideal para escribir sobre todo tipo de superficies.",
    "stock": 30,
    "img": "https://i.postimg.cc/2yYGMdgq/marcadores-01.webp",
    "category": "Marcadores"
  },
  {
    "id": "12",
    "name": "Set de Marcadores Fluorescentes",
    "price": 6.0,
    "description": "6 colores neón vibrantes.",
    "stock": 12,
    "img": "https://i.postimg.cc/kGysm6dT/marcadores-02.webp",
    "category": "Marcadores"
  },
  {
    "id": "13",
    "name": "Marcador de Pizarra Borrable",
    "price": 2.5,
    "description": "Perfecto para clases y oficinas.",
    "stock": 18,
    "img": "https://i.postimg.cc/sfPwS8Z5/marcadores-03.webp",
    "category": "Marcadores"
  },
  {
    "id": "14",
    "name": "Marcadores Pastel Kawaii",
    "price": 4.5,
    "description": "Colores suaves y adorables.",
    "stock": 9,
    "img": "https://i.postimg.cc/RVMGTRcy/marcadores-04.webp",
    "category": "Marcadores"
  },
  {
    "id": "15",
    "name": "Marcador con Doble Punta",
    "price": 4.0,
    "description": "Punta fina y gruesa en un solo marcador.",
    "stock": 10,
    "img": "https://i.postimg.cc/yYvjpZjd/marcadores-05.webp",
    "category": "Marcadores"
  },
  {
    "id": "16",
    "name": "Marcador a Base de Agua",
    "price": 3.5,
    "description": "No tóxico y lavable.",
    "stock": 20,
    "img": "https://i.postimg.cc/7ZhVFZtN/marcadores-06.webp",
    "category": "Marcadores"
  },
  {
    "id": "17",
    "name": "Marcador Metálico Dorado",
    "price": 3.0,
    "description": "Para detalles brillantes y elegantes.",
    "stock": 7,
    "img": "https://i.postimg.cc/3xqBYQPQ/marcadores-07.webp",
    "category": "Marcadores"
  },
  {
    "id": "18",
    "name": "Marcador Blanco para Carteles",
    "price": 3.0,
    "description": "Ideal para papel oscuro.",
    "stock": 10,
    "img": "https://i.postimg.cc/7LTNLQkG/marcadores-08.webp",
    "category": "Marcadores"
  },
  {
    "id": "19",
    "name": "Marcador Ecológico Recargable",
    "price": 4.0,
    "description": "Cuida el planeta mientras creas.",
    "stock": 6,
    "img": "https://i.postimg.cc/V6QW0Bf7/marcadores-09.webp",
    "category": "Marcadores"
  },
  {
    "id": "20",
    "name": "Marcador de Tela",
    "price": 5.0,
    "description": "Diseñado para decorar ropa y telas.",
    "stock": 5,
    "img": "https://i.postimg.cc/763M3Gbq/marcadores-10.webp",
    "category": "Marcadores"
  },
  // Portaminasyminas (id 21–30)
  {
    "id": "21",
    "name": "Portaminas 0.5mm Escolar",
    "price": 2.0,
    "description": "Escritura precisa para tareas diarias.",
    "stock": 15,
    "img": "https://i.postimg.cc/yx690LwT/portaminasyminas-01.webp",
    "category": "Portaminasyminas"
  },
  {
    "id": "22",
    "name": "Minas 0.5mm HB",
    "price": 1.0,
    "description": "Alta duración y suavidad.",
    "stock": 30,
    "img": "https://i.postimg.cc/SRZ9dW4b/portaminasyminas-02.webp",
    "category": "Portaminasyminas"
  },
  {
    "id": "23",
    "name": "Portaminas Profesional 0.7mm",
    "price": 3.0,
    "description": "Diseño metálico y ergonómico.",
    "stock": 10,
    "img": "https://i.postimg.cc/sfK53RhH/portaminasyminas-03.webp",
    "category": "Portaminasyminas"
  },
  {
    "id": "24",
    "name": "Minas 0.7mm 2B",
    "price": 1.2,
    "description": "Trazo más suave y oscuro.",
    "stock": 20,
    "img": "https://i.postimg.cc/DyMsbd5q/portaminasyminas-04.webp",
    "category": "Portaminasyminas"
  },
  {
    "id": "25",
    "name": "Set Portaminasyminas",
    "price": 5.5,
    "description": "Incluye estuche, minas y goma.",
    "stock": 8,
    "img": "https://i.postimg.cc/T35bjLHB/portaminasyminas-05.webp",
    "category": "Portaminasyminas"
  },
  {
    "id": "26",
    "name": "Portaminas con Grip Antideslizante",
    "price": 2.5,
    "description": "Cómodo para largas sesiones.",
    "stock": 17,
    "img": "https://i.postimg.cc/TP8Dtdz1/portaminasyminas-06.webp",
    "category": "Portaminasyminas"
  },
  {
    "id": "27",
    "name": "Minas de Colores",
    "price": 1.5,
    "description": "Minas decorativas para dibujos.",
    "stock": 10,
    "img": "https://i.postimg.cc/g0v6Q9pD/portaminasyminas-07.webp",
    "category": "Portaminasyminas"
  },
  {
    "id": "28",
    "name": "Portaminas Kawaii Animalitos",
    "price": 2.3,
    "description": "Diseño adorable y funcional.",
    "stock": 13,
    "img": "https://i.postimg.cc/ydsSzfYz/portaminasyminas-08.webp",
    "category": "Portaminasyminas"
  },
  {
    "id": "29",
    "name": "Minas Ecológicas",
    "price": 1.3,
    "description": "Hechas con materiales reciclables.",
    "stock": 25,
    "img": "https://i.postimg.cc/4dPH4zmH/portaminasyminas-09.webp",
    "category": "Portaminasyminas"
  },
  {
    "id": "30",
    "name": "Portaminas Técnico de Precisión",
    "price": 6.0,
    "description": "Para dibujo técnico y arquitectura.",
    "stock": 6,
    "img": "https://i.postimg.cc/1Xzn8fqC/portaminasyminas-10.webp",
    "category": "Portaminasyminas"
  },
    // Cuadernoskawaii (id 31–40)
  {
    "id": "31",
    "name": "Cuaderno Kawaii Gato",
    "price": 7.5,
    "description": "Cuaderno con diseño de gatito tierno.",
    "stock": 10,
    "img": "https://i.postimg.cc/DyLJ8kJK/cuadernoskawaii-01.webp",
    "category": "Cuadernoskawaii"
  },
  {
    "id": "32",
    "name": "Cuaderno Kawaii Panda",
    "price": 7.5,
    "description": "Cuaderno adorable con portada de panda.",
    "stock": 12,
    "img": "https://i.postimg.cc/QdDB741K/cuadernoskawaii-02.webp",
    "category": "Cuadernoskawaii"
  },
  {
    "id": "33",
    "name": "Cuaderno Arcoíris Pastel",
    "price": 8.0,
    "description": "Páginas decoradas con colores suaves.",
    "stock": 8,
    "img": "https://i.postimg.cc/k5XB12jn/cuadernoskawaii-03.webp",
    "category": "Cuadernoskawaii"
  },
  {
    "id": "34",
    "name": "Set de Cuadernos Mini",
    "price": 10.0,
    "description": "Incluye 3 cuadernos pequeños con diseños kawaii.",
    "stock": 6,
    "img": "https://i.postimg.cc/kgy2vQv1/cuadernoskawaii-04.webp",
    "category": "Cuadernoskawaii"
  },
  {
    "id": "35",
    "name": "Cuaderno Kawaii Unicornios",
    "price": 7.8,
    "description": "Ideal para escribir sueños y notas.",
    "stock": 9,
    "img": "https://i.postimg.cc/6QjTDBSC/cuadernoskawaii-05.webp",
    "category": "Cuadernoskawaii"
  },
  {
    "id": "36",
    "name": "Cuaderno Kawaii Helado",
    "price": 6.5,
    "description": "Diseño dulce para tus ideas.",
    "stock": 14,
    "img": "https://i.postimg.cc/50XjJZdT/cuadernoskawaii-06.webp",
    "category": "Cuadernoskawaii"
  },
  {
    "id": "37",
    "name": "Cuaderno de Estrellas",
    "price": 7.0,
    "description": "Tapa dura con diseño nocturno.",
    "stock": 10,
    "img": "https://i.postimg.cc/d1g3V4J1/cuadernoskawaii-07.webp",
    "category": "Cuadernoskawaii"
  },
  {
    "id": "38",
    "name": "Cuaderno Frutas Felices",
    "price": 6.8,
    "description": "Diseño fresco y divertido.",
    "stock": 13,
    "img": "https://i.postimg.cc/Hn5xcXLt/cuadernoskawaii-08.webp",
    "category": "Cuadernoskawaii"
  },
  {
    "id": "39",
    "name": "Cuaderno Kawaii Conejito",
    "price": 7.2,
    "description": "Portada con orejas sobresalientes.",
    "stock": 7,
    "img": "https://i.postimg.cc/CLTdyPvr/cuadernoskawaii-09.webp",
    "category": "Cuadernoskawaii"
  },
  {
    "id": "40",
    "name": "Cuaderno de Nubes Kawaii",
    "price": 7.4,
    "description": "Ideal para notas escolares.",
    "stock": 10,
    "img": "https://i.postimg.cc/44hnSk1h/cuadernoskawaii-10.webp",
    "category": "Cuadernoskawaii"
  },

  // Agendasyplanificadores (id 41–50)
  {
    "id": "41",
    "name": "Agenda 2025 Floral",
    "price": 15.0,
    "description": "Agenda con calendario mensual y semanal.",
    "stock": 10,
    "img": "https://i.postimg.cc/j2kWPt6s/agendasyplanificadores-01.webp",
    "category": "Agendasyplanificadores"
  },
  {
    "id": "42",
    "name": "Planificador Semanal Magnético",
    "price": 12.0,
    "description": "Ideal para pegar en la refrigeradora.",
    "stock": 8,
    "img": "https://i.postimg.cc/jq8nGQpG/agendasyplanificadores-02.webp",
    "category": "Agendasyplanificadores"
  },
  {
    "id": "43",
    "name": "Agenda de Bolsillo Kawaii",
    "price": 9.5,
    "description": "Compacta y portátil con diseño tierno.",
    "stock": 12,
    "img": "https://i.postimg.cc/L6ngRgRh/agendasyplanificadores-03.webp",
    "category": "Agendasyplanificadores"
  },
  {
    "id": "44",
    "name": "Agenda Académica",
    "price": 13.0,
    "description": "Pensada para el año escolar.",
    "stock": 10,
    "img": "https://i.postimg.cc/fTptbWTC/agendasyplanificadores-04.webp",
    "category": "Agendasyplanificadores"
  },
  {
    "id": "45",
    "name": "Planificador Diario Minimalista",
    "price": 11.0,
    "description": "Diseño limpio con secciones útiles.",
    "stock": 15,
    "img": "https://i.postimg.cc/TPXKrkbW/agendasyplanificadores-05.webp",
    "category": "Agendasyplanificadores"
  },
  {
    "id": "46",
    "name": "Agenda Unicornio 2025",
    "price": 14.0,
    "description": "Diseño kawaii con stickers incluidos.",
    "stock": 6,
    "img": "https://i.postimg.cc/nLYCTvKS/agendasyplanificadores-06.webp",
    "category": "Agendasyplanificadores"
  },
  {
    "id": "47",
    "name": "Planificador con Anillas",
    "price": 10.5,
    "description": "Puedes añadir y quitar hojas fácilmente.",
    "stock": 7,
    "img": "https://i.postimg.cc/W35tcTHM/agendasyplanificadores-07.webp",
    "category": "Agendasyplanificadores"
  },
  {
    "id": "48",
    "name": "Agenda Ejecutiva Negra",
    "price": 16.0,
    "description": "Diseño sobrio y elegante.",
    "stock": 10,
    "img": "https://i.postimg.cc/Y0j0pZ5T/agendasyplanificadores-08.webp",
    "category": "Agendasyplanificadores"
  },
  {
    "id": "49",
    "name": "Set de Stickers para Agendas",
    "price": 5.0,
    "description": "Dale color a tu planificación.",
    "stock": 25,
    "img": "https://i.postimg.cc/HnKxj3Hn/agendasyplanificadores-09.webp",
    "category": "Agendasyplanificadores"
  },
  {
    "id": "50",
    "name": "Agenda con Separadores",
    "price": 12.5,
    "description": "Cada mes con diseño diferente.",
    "stock": 8,
    "img": "https://i.postimg.cc/SQtjZQ84/agendasyplanificadores-10.webp",
    "category": "Agendasyplanificadores"
  },

  // Notebooks (id 51–60)
  {
    "id": "51",
    "name": "Notebook Clásico A5",
    "price": 8.0,
    "description": "Tamaño ideal para notas rápidas.",
    "stock": 20,
    "img": "https://i.postimg.cc/NFQ8psrm/notebooks-01.webp",
    "category": "Notebooks"
  },
  {
    "id": "52",
    "name": "Notebook Cuadrícula",
    "price": 8.5,
    "description": "Perfecto para matemáticas o diseño.",
    "stock": 15,
    "img": "https://i.postimg.cc/vTXrKJWj/notebooks-02.webp",
    "category": "Notebooks"
  },
  {
    "id": "53",
    "name": "Notebook de Cuero",
    "price": 18.0,
    "description": "Elegante y duradero.",
    "stock": 6,
    "img": "https://i.postimg.cc/RCTLqHjR/notebooks-03.webp",
    "category": "Notebooks"
  },
  {
    "id": "54",
    "name": "Notebook con Banda Elástica",
    "price": 9.0,
    "description": "Cierra fácilmente para llevar.",
    "stock": 12,
    "img": "https://i.postimg.cc/KvvrTYby/notebooks-04.webp",
    "category": "Notebooks"
  },
  {
    "id": "55",
    "name": "Notebook con Separadores",
    "price": 10.5,
    "description": "Organiza tus temas por colores.",
    "stock": 10,
    "img": "https://i.postimg.cc/65jVfN64/notebooks-05.webp",
    "category": "Notebooks"
  },
  {
    "id": "56",
    "name": "Notebook Liso Artístico",
    "price": 9.0,
    "description": "Ideal para dibujos o bocetos.",
    "stock": 10,
    "img": "https://i.postimg.cc/htXLC3hy/notebooks-06.webp",
    "category": "Notebooks"
  },
  {
    "id": "57",
    "name": "Notebook con Espiral",
    "price": 8.2,
    "description": "Fácil de abrir completamente.",
    "stock": 18,
    "img": "https://i.postimg.cc/0yhphdw8/notebooks-07.webp",
    "category": "Notebooks"
  },
  {
    "id": "58",
    "name": "Notebook Reutilizable",
    "price": 20.0,
    "description": "Escribe y borra con paño húmedo.",
    "stock": 5,
    "img": "https://i.postimg.cc/HL5Qmcwb/notebooks-08.webp",
    "category": "Notebooks"
  },
  {
    "id": "59",
    "name": "Notebook de Tapa Dura",
    "price": 11.0,
    "description": "Más resistencia para uso diario.",
    "stock": 14,
    "img": "https://i.postimg.cc/NMcRjsDS/notebooks-09.webp",
    "category": "Notebooks"
  },
  {
    "id": "60",
    "name": "Notebook Vintage",
    "price": 13.5,
    "description": "Estilo clásico y elegante.",
    "stock": 7,
    "img": "https://i.postimg.cc/mDyCcv6D/notebooks-10.webp",
    "category": "Notebooks"
  },
// Carpetasyarchivadores (id 61–70)
  {
    "id": "61",
    "name": "Carpeta de Cartón A4",
    "price": 4.5,
    "description": "Carpeta económica para documentos.",
    "stock": 20,
    "img": "https://i.postimg.cc/pXhr3NYF/carpetasyarchivadores-01.webp",
    "category": "Carpetasyarchivadores"
  },
  {
    "id": "62",
    "name": "Archivador de Palanca",
    "price": 9.0,
    "description": "Para archivar gran cantidad de hojas.",
    "stock": 10,
    "img": "https://i.postimg.cc/X7Rqb2QD/carpetasyarchivadores-02.webp",
    "category": "Carpetasyarchivadores"
  },
  {
    "id": "63",
    "name": "Carpeta Plástica Transparente",
    "price": 5.5,
    "description": "Ligera y resistente.",
    "stock": 18,
    "img": "https://i.postimg.cc/SxcsNWPQ/carpetasyarchivadores-03.webp",
    "category": "Carpetasyarchivadores"
  },
  {
    "id": "64",
    "name": "Carpeta con Broche Metálico",
    "price": 6.0,
    "description": "Para asegurar tus hojas.",
    "stock": 14,
    "img": "https://i.postimg.cc/mrRrcPxY/carpetasyarchivadores-04.webp",
    "category": "Carpetasyarchivadores"
  },
  {
    "id": "65",
    "name": "Archivador con Lomo Ancho",
    "price": 10.0,
    "description": "Ideal para oficina.",
    "stock": 8,
    "img": "https://i.postimg.cc/yNP807Bw/carpetasyarchivadores-05.webp",
    "category": "Carpetasyarchivadores"
  },
  {
    "id": "66",
    "name": "Carpeta Escolar Decorada",
    "price": 5.0,
    "description": "Diseños para niños y adolescentes.",
    "stock": 16,
    "img": "https://i.postimg.cc/j5SdXBSC/carpetasyarchivadores-06.webp",
    "category": "Carpetasyarchivadores"
  },
  {
    "id": "67",
    "name": "Carpeta con Elástico",
    "price": 4.8,
    "description": "Cierre seguro para transportar.",
    "stock": 12,
    "img": "https://i.postimg.cc/d1NQSnh6/carpetasyarchivadores-07.webp",
    "category": "Carpetasyarchivadores"
  },
  {
    "id": "68",
    "name": "Archivador de Tela",
    "price": 11.5,
    "description": "Durabilidad y estilo.",
    "stock": 6,
    "img": "https://i.postimg.cc/NFyGhTTc/carpetasyarchivadores-08.webp",
    "category": "Carpetasyarchivadores"
  },
  {
    "id": "69",
    "name": "Carpeta Tipo Sobre",
    "price": 3.5,
    "description": "Fácil para documentos sueltos.",
    "stock": 20,
    "img": "https://i.postimg.cc/tJLq9TtV/carpetasyarchivadores-09.webp",
    "category": "Carpetasyarchivadores"
  },
  {
    "id": "70",
    "name": "Carpeta con Fundas Internas",
    "price": 7.0,
    "description": "Ideal para organizar hojas sueltas.",
    "stock": 10,
    "img": "https://i.postimg.cc/MZ4K7P2K/carpetasyarchivadores-10.webp",
    "category": "Carpetasyarchivadores"
  },

  // Foldersysobres (id 71–80)
  {
    "id": "71",
    "name": "Folder Manila A4",
    "price": 2.0,
    "description": "Clásico para presentar trabajos.",
    "stock": 25,
    "img": "https://i.postimg.cc/VLqvzqpf/foldersysobres-01.webp",
    "category": "Foldersysobres"
  },
  {
    "id": "72",
    "name": "Folder de Cartón Reforzado",
    "price": 2.5,
    "description": "Mayor resistencia.",
    "stock": 20,
    "img": "https://i.postimg.cc/sg3XxBCp/foldersysobres-02.webp",
    "category": "Foldersysobres"
  },
  {
    "id": "73",
    "name": "Sobre Manila Grande",
    "price": 1.8,
    "description": "Para transportar documentos A4.",
    "stock": 30,
    "img": "https://i.postimg.cc/3wRxjPRN/foldersysobres-03.webp",
    "category": "Foldersysobres"
  },
  {
    "id": "74",
    "name": "Folder con Broche Metálico",
    "price": 3.0,
    "description": "Para sujetar documentos.",
    "stock": 12,
    "img": "https://i.postimg.cc/Xvz7sQG8/foldersysobres-04.webp",
    "category": "Foldersysobres"
  },
  {
    "id": "75",
    "name": "Sobre Plástico con Botón",
    "price": 2.2,
    "description": "Cierre seguro.",
    "stock": 18,
    "img": "https://i.postimg.cc/Kz3cwBty/foldersysobres-05.webp",
    "category": "Foldersysobres"
  },
  {
    "id": "76",
    "name": "Folder con Ventana",
    "price": 2.6,
    "description": "Muestra el contenido.",
    "stock": 14,
    "img": "https://i.postimg.cc/kgJZBC1V/foldersysobres-06.webp",
    "category": "Foldersysobres"
  },
  {
    "id": "77",
    "name": "Sobre Plástico A5",
    "price": 1.5,
    "description": "Ideal para recibos o tarjetas.",
    "stock": 30,
    "img": "https://i.postimg.cc/mgmn9nJm/foldersysobres-07.webp",
    "category": "Foldersysobres"
  },
  {
    "id": "78",
    "name": "Folder Escolar Decorado",
    "price": 2.8,
    "description": "Diseños infantiles.",
    "stock": 15,
    "img": "https://i.postimg.cc/G2ygZm2f/foldersysobres-08.webp",
    "category": "Folders y sobres"
  },
  {
    "id": "79",
    "name": "Sobre Kraft",
    "price": 1.6,
    "description": "Resistente y reciclable.",
    "stock": 25,
    "img": "https://i.postimg.cc/PqNRQ4kT/foldersysobres-09.webp",
    "category": "Foldersysobres"
  },
  {
    "id": "80",
    "name": "Sobre con Cierre Zip",
    "price": 3.2,
    "description": "Protección extra contra humedad.",
    "stock": 10,
    "img": "https://i.postimg.cc/3w6bSvKp/foldersysobres-10.webp",
    "category": "Foldersysobres"
  },

  // Cartucheras (id 81–90)
  {
    "id": "81",
    "name": "Cartuchera Kawaii Panda",
    "price": 7.5,
    "description": "Suave y tierna.",
    "stock": 12,
    "img": "https://i.postimg.cc/pXFVqfRQ/cartucheras-01.webp",
    "category": "Cartucheras"
  },
  {
    "id": "82",
    "name": "Cartuchera Transparente",
    "price": 6.0,
    "description": "Permite ver su contenido.",
    "stock": 15,
    "img": "https://i.postimg.cc/7ZrHc5ZF/cartucheras-02.webp",
    "category": "Cartucheras"
  },
  {
    "id": "83",
    "name": "Cartuchera de Tela",
    "price": 5.5,
    "description": "Resistente y lavable.",
    "stock": 20,
    "img": "https://i.postimg.cc/mg3LGTct/cartucheras-03.webp",
    "category": "Cartucheras"
  },
  {
    "id": "84",
    "name": "Cartuchera Doble Compartimiento",
    "price": 8.0,
    "description": "Más espacio para tus útiles.",
    "stock": 10,
    "img": "https://i.postimg.cc/YSpprTg8/cartucheras-04.webp",
    "category": "Cartucheras"
  },
  {
    "id": "85",
    "name": "Cartuchera Cilíndrica",
    "price": 6.8,
    "description": "Diseño moderno y compacto.",
    "stock": 16,
    "img": "https://i.postimg.cc/hGpKfM1n/cartucheras-05.webp",
    "category": "Cartucheras"
  },
  {
    "id": "86",
    "name": "Cartuchera con Estuche Rígido",
    "price": 9.0,
    "description": "Protección extra.",
    "stock": 8,
    "img": "https://i.postimg.cc/RFY9TFYb/cartucheras-06.webp",
    "category": "Cartucheras"
  },
  {
    "id": "87",
    "name": "Cartuchera Licencia (Hello Kitty)",
    "price": 10.5,
    "description": "Diseño oficial.",
    "stock": 7,
    "img": "https://i.postimg.cc/gj6ptpFc/cartucheras-07.webp",
    "category": "Cartucheras"
  },
  {
    "id": "88",
    "name": "Cartuchera con Asa",
    "price": 7.2,
    "description": "Fácil de transportar.",
    "stock": 12,
    "img": "https://i.postimg.cc/CdTgW2SG/cartucheras-08.webp",
    "category": "Cartucheras"
  },
  {
    "id": "89",
    "name": "Cartuchera Animal Print",
    "price": 7.0,
    "description": "Estilo único.",
    "stock": 10,
    "img": "https://i.postimg.cc/zDLRYRqv/cartucheras-09.webp",
    "category": "Cartucheras"
  },
  {
    "id": "90",
    "name": "Cartuchera Multifunción",
    "price": 9.5,
    "description": "Espacios internos organizadores.",
    "stock": 9,
    "img": "https://i.postimg.cc/c1Vtx4Jm/cartucheras-10.webp",
    "category": "Cartucheras"
  }

];

let error = false;

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!error) {
                resolve(product);
            } else {
                reject('Hubo un error, intente más tarde');
            }
        }, 300);
    });
};

export const getOneProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!error) {
                const oneProduct = product.find((item) => item.id === id);
                resolve(oneProduct);
            } else {
                reject('Hubo un error, intente más tarde');
            }
        }, 1000);
    });
};