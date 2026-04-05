import vanitoryImg from "@/assets/products/producto-vanitory.png";
import aparadorImg from "@/assets/products/producto-aparador.png";
import cocinaGrisImg from "@/assets/products/producto-cocina-gris.png";
import deckImg from "@/assets/products/producto-deck.png";
import cocinaMaderaImg from "@/assets/products/producto-cocina-madera.png";
import cocinaCelesteImg from "@/assets/products/producto-cocina-celeste.png";
import comoditaImg from "@/assets/products/producto-comodita.png";
import vitrinaImg from "@/assets/products/producto-vitrina.png";
import panelTvImg from "@/assets/products/producto-panel-tv.png";
import aparador2Img from "@/assets/products/aparador2.png";
import armarioRusticoImg from "@/assets/products/armarioRustico.png";
import bajoMesadaImg from "@/assets/products/bajoMesada.png";
import banquetasImg from "@/assets/products/banquetas.png";
import biblioteca3Img from "@/assets/products/biblioteca3.png";
import bibliotecaOrganizadorImg from "@/assets/products/bibliotecaOrganizador.png";
import camaComodaImg from "@/assets/products/cama-comoda.png";
import cama1Img from "@/assets/products/cama1.png";
import cama2Img from "@/assets/products/cama2.png";
import opti17Img from "@/assets/products/opti17.png";
import opti18Img from "@/assets/products/opti18.png";
import opti19Img from "@/assets/products/opti19.png";
import opti20Img from "@/assets/products/opti20.png";
import opti21Img from "@/assets/products/opti21.png";
import opti22Img from "@/assets/products/opti22.png";
import opti23Img from "@/assets/products/opti23.png";
import opti24Img from "@/assets/products/opti24.png";
import opti25Img from "@/assets/products/opti25.png";
import opti26Img from "@/assets/products/opti26.png";
import opti27Img from "@/assets/products/opti27.png";
import opti28Img from "@/assets/products/opti28.png";
import opti29Img from "@/assets/products/opti29.png";
import opti30Img from "@/assets/products/opti30.png";
import opti31Img from "@/assets/products/opti31.png";
import opti32Img from "@/assets/products/opti32.png";
import opti33Img from "@/assets/products/opti33.png";
import opti34Img from "@/assets/products/opti34.png";

export interface Product {
  id: string;
  images: string[];
  title: string;
  category: string;
  description: string;
  materials: string[];
  dimensions: string;
}

export const products: Product[] = [
  {
    id: "vanitory-moderno",
    images: [vanitoryImg],
    title: "Vanitory Moderno",
    category: "Baño",
    description: "Mueble de baño con diseño contemporáneo en acabado blanco brillante. Incluye cajones amplios con guías suaves y espacio optimizado para almacenamiento.",
    materials: ["MDF laqueado", "Herrajes de acero inoxidable"],
    dimensions: "80 x 45 x 85 cm",
  },
  {
    id: "aparador-bicolor",
    images: [aparadorImg],
    title: "Aparador Bicolor",
    category: "Almacenamiento",
    description: "Elegante aparador con combinación de madera natural y acabado blanco. Puertas con vidrio y cajones inferiores para organización versátil.",
    materials: ["Madera maciza", "Vidrio templado", "Herrajes de bronce"],
    dimensions: "100 x 40 x 90 cm",
  },
  {
    id: "cocina-integral-gris",
    images: [cocinaGrisImg],
    title: "Mueble de Cocina Integral Gris",
    category: "Cocinas",
    description: "Cocina integral con diseño minimalista en tono gris topo. Muebles superiores e inferiores con amplio espacio de almacenamiento y mesada resistente.",
    materials: ["Melamina premium", "Mesada de cuarzo"],
    dimensions: "A medida",
  },
  {
    id: "deck-exterior",
    images: [deckImg],
    title: "Deck de Madera",
    category: "Exterior",
    description: "Deck de madera para exterior ideal para piscinas y jardines. Tratamiento especial para resistir la intemperie y rayos UV.",
    materials: ["Madera tratada para exterior"],
    dimensions: "A medida",
  },
  {
    id: "cocina-madera-natural",
    images: [cocinaMaderaImg],
    title: "Mueble de Cocina Madera Natural",
    category: "Cocinas",
    description: "Cocina completa en madera natural con acabado cálido y elegante. Diseño funcional con múltiples cajones, alacenas y bodeguero integrado.",
    materials: ["Madera maciza", "Mesada de granito"],
    dimensions: "A medida",
  },
  {
    id: "cocina-celeste",
    images: [cocinaCelesteImg],
    title: "Mueble de Cocina Estilo Campo",
    category: "Cocinas",
    description: "Cocina con encanto rústico en color celeste. Puertas con molduras clásicas y herrajes de estilo vintage para un ambiente acogedor.",
    materials: ["Madera laqueada", "Herrajes de hierro forjado"],
    dimensions: "A medida",
  },
  {
    id: "comodita-rustica",
    images: [comoditaImg],
    title: "Cómoda Rústica",
    category: "Dormitorio",
    description: "Cómoda de seis cajones en madera maciza con acabado natural. Herrajes clásicos y construcción robusta con detalles artesanales.",
    materials: ["Pino macizo", "Herrajes de bronce antiguo"],
    dimensions: "90 x 45 x 120 cm",
  },
  {
    id: "vitrina-clasica",
    images: [vitrinaImg],
    title: "Vitrina Clásica",
    category: "Almacenamiento",
    description: "Vitrina tradicional con puertas de vidrio en la parte superior y almacenamiento cerrado debajo. Perfecta para exhibir vajilla y objetos decorativos.",
    materials: ["Madera de cedro", "Vidrio biselado"],
    dimensions: "140 x 45 x 200 cm",
  },
  {
    id: "panel-tv-moderno",
    images: [panelTvImg],
    title: "Panel para TV",
    category: "Living",
    description: "Centro de entretenimiento moderno con panel para TV, módulo bajo flotante y estantería lateral. Diseño contemporáneo que maximiza el espacio.",
    materials: ["MDF laqueado", "Estructura de metal"],
    dimensions: "180 x 35 x 150 cm",
  },
  // NUEVOS PRODUCTOS
  {
    id: "cama-moderna-duo",
    images: [cama2Img, cama1Img],
    title: "Cama Moderna Premium",
    category: "Dormitorio",
    description: "Estructura de cama con diseño contemporáneo en madera natural. Versátil y robusta, ideal para un descanso reparador con estilo.",
    materials: ["Madera maciza", "Acabado protector mate"],
    dimensions: "2 1/2 plazas / Queen",
  },
  {
    id: "aparador-rustico-cristal",
    images: [aparador2Img],
    title: "Aparador Rústico con Cristalera",
    category: "Almacenamiento",
    description: "Mueble multifunción con puertas de vidrio repartido y cajonera central. Acabado bitono que resalta la veta natural de la madera.",
    materials: ["Pino seleccionado", "Vidrio", "Herrajes artesanales"],
    dimensions: "120 x 40 x 180 cm",
  },
  {
    id: "armario-rustico-negro",
    images: [armarioRusticoImg],
    title: "Ropero Rústico",
    category: "Dormitorio",
    description: "Ropero robusto con detalles en negro y madera natural. Combinación perfecta de almacenamiento cerrado y exhibición.",
    materials: ["Madera maciza", "Detalles en hierro negro"],
    dimensions: "110 x 50 x 190 cm",
  },
  {
    id: "bajo-mesada-blanco",
    images: [bajoMesadaImg],
    title: "Bajo Mesada Minimalista",
    category: "Cocinas",
    description: "Mueble de cocina inferior con diseño limpio y tiradores integrados. Máxima funcionalidad para tu cocina.",
    materials: ["Melamina de alta densidad", "Perfiles de aluminio"],
    dimensions: "A medida",
  },
  {
    id: "banquetas-madera-par",
    images: [banquetasImg],
    title: "Banquetas de Roble",
    category: "Comedor",
    description: "Juego de dos banquetas de diferentes alturas con diseño minimalista y construcción sólida.",
    materials: ["Madera maciza de roble"],
    dimensions: "Standard",
  },
  {
    id: "biblioteca-gran-formato",
    images: [biblioteca3Img],
    title: "Biblioteca Roble Clásica",
    category: "Almacenamiento",
    description: "Biblioteca de cinco niveles amplios para libros y decoración. Estilo atemporal que jerarquiza cualquier ambiente.",
    materials: ["Madera maciza", "Lustre natural"],
    dimensions: "100 x 30 x 200 cm",
  },
  {
    id: "biblioteca-organizador-living",
    images: [bibliotecaOrganizadorImg],
    title: "Biblioteca Organizador Living",
    category: "Almacenamiento",
    description: "Estantería abierta con diseño asimétrico equilibrado. Ideal para separar ambientes o contra pared.",
    materials: ["Madera de pino tratada"],
    dimensions: "90 x 35 x 150 cm",
  },
  {
    id: "cama-comoda-infantil",
    images: [camaComodaImg],
    title: "Juego de Dormitorio Juvenil",
    category: "Dormitorio",
    description: "Conjunto coordinado de cama de una plaza y cómoda alta de 5 cajones en acabado nogal.",
    materials: ["Pino macizo", "Lustre protector"],
    dimensions: "Cama 1 plaza + Cómoda 60cm",
  },
  {
    id: "ropero-pino-grande",
    images: [opti17Img],
    title: "Placard Familiar con Baulera",
    category: "Dormitorio",
    description: "Gran placard de 3 puertas con baulera superior independiente. Incluye cajonera externa.",
    materials: ["Pino macizo seleccionado"],
    dimensions: "150 x 55 x 240 cm",
  },
  {
    id: "mesa-luz-hierro",
    images: [opti18Img],
    title: "Mesa de Luz Hierro y Madera",
    category: "Dormitorio",
    description: "Diseño industrial con herrajes de hierro forjado y espacio de guardado abierto.",
    materials: ["Pino macizo", "Hierro forjado"],
    dimensions: "45 x 35 x 65 cm",
  },
  {
    id: "armario-corredizo-pared",
    images: [opti19Img],
    title: "Armario de Pared Corredizo",
    category: "Almacenamiento",
    description: "Mueble suspendido o de apoyo con puerta tipo establo corrediza. Ahorra espacio de apertura.",
    materials: ["Madera maciza", "Guía de acero"],
    dimensions: "80 x 30 x 120 cm",
  },
  {
    id: "mesa-luz-nordica",
    images: [opti20Img],
    title: "Mesa de Luz Escandinava",
    category: "Dormitorio",
    description: "Mesa de luz con patas inclinadas estilo retro y cajón superior con calado.",
    materials: ["Pino natural"],
    dimensions: "40 x 35 x 60 cm",
  },
  {
    id: "mesa-luz-minimal",
    images: [opti21Img],
    title: "Mesa de Luz Cubo",
    category: "Dormitorio",
    description: "Diseño minimalista de líneas rectas con cajón y estante inferior.",
    materials: ["Pino premium"],
    dimensions: "40 x 40 x 55 cm",
  },
  // Agregando el resto con descripciones refinadas
  {
    id: "mesa-luz-ruedas",
    images: [opti27Img],
    title: "Mesa de Luz Móvil Rústica",
    category: "Dormitorio",
    description: "Mesa de luz de madera con cajón, estante y ruedas para facilitar su movimiento. Ideal para dormitorios versátiles.",
    materials: ["Pino macizo", "Ruedas de alta resistencia"],
    dimensions: "45 x 35 x 70 cm",
  },
  {
    id: "cocina-integral-pino-completa",
    images: [opti23Img],
    title: "Mueble de Cocina Integral Pino Natural",
    category: "Cocinas",
    description: "Amoblamiento de cocina completo en pino natural. Incluye alacenas superiores con vidrio y bajo mesada espacioso.",
    materials: ["Pino seleccionado", "Mesada de granito (opcional)"],
    dimensions: "A medida",
  },
  {
    id: "biblioteca-baja-doble",
    images: [opti24Img],
    title: "Biblioteca Baja Organizadora",
    category: "Almacenamiento",
    description: "Estantería doble de altura media, ideal para libros, objetos de colección o como separador de ambientes.",
    materials: ["Madera maciza"],
    dimensions: "160 x 30 x 90 cm",
  },
  {
    id: "cuna-funcional-pino",
    images: [opti25Img],
    title: "Cuna Funcional Premium",
    category: "Infantil",
    description: "Cuna funcional convertible en cama de una plaza. Incluye cajonera y estantes integrados que luego sirven como mesa de luz.",
    materials: ["Pino macizo", "Acabado no tóxico"],
    dimensions: "Para colchón de 140x80 / 190x80 cm",
  },
  {
    id: "ropero-pino-4p",
    images: [opti26Img],
    title: "Ropero Gigante 4 Puertas",
    category: "Dormitorio",
    description: "Máxima capacidad de guardado. Ropero con 4 puertas, baulera superior y 4 cajones externos.",
    materials: ["Pino macizo seleccionado"],
    dimensions: "200 x 55 x 240 cm",
  },
  {
    id: "mesa-luz-retro-blanco",
    images: [opti28Img],
    title: "Mesa de Luz Escandinava Bi-color",
    category: "Dormitorio",
    description: "Diseño nórdico con frente de cajones en blanco y estructura de madera natural. Patas inclinadas.",
    materials: ["Pino natural", "Detalles en blanco mate"],
    dimensions: "40 x 35 x 65 cm",
  },
  {
    id: "banqueta-alta-respaldo",
    images: [opti29Img],
    title: "Banqueta Alta con Respaldo",
    category: "Comedor",
    description: "Banqueta para barra con respaldo ergonómico y terminación de alta calidad.",
    materials: ["Madera maciza lustrada"],
    dimensions: "Asiento a 75 cm",
  },
  {
    id: "vajillero-pino-2p",
    images: [opti30Img],
    title: "Vajillero Organizador Rústico",
    category: "Almacenamiento",
    description: "Mueble multifunción con dos puertas inferiores y cajones superiores. Ideal para comedor o cocina.",
    materials: ["Pino macizo", "Frentes blancos"],
    dimensions: "80 x 40 x 120 cm",
  },
  {
    id: "mesa-luz-clasica-pino",
    images: [opti31Img],
    title: "Mesa de Luz Rústica con Cajón, Puerta y Ruedas",
    category: "Dormitorio",
    description: "Diseño rústico en madera maciza con acabado natural miel. Nicho superior abierto, cajón central con tirador de hierro forjado y puerta inferior con moldura en relieve. Ruedas con freno para fácil movilidad.",
    materials: ["Pino macizo", "Herrajes forjados", "Ruedas con freno"],
    dimensions: "45 x 35 x 65 cm",
  },
  {
    id: "isla-cocina-blanca",
    images: [opti32Img],
    title: "Isla de Cocina Moderna",
    category: "Cocinas",
    description: "Isla central con bacha integrada y amplio espacio de guardado. Diseño minimalista en blanco.",
    materials: ["Melamina premium", "Mesada de madera"],
    dimensions: "150 x 90 cm",
  },
  {
    id: "cocina-blanca-completa",
    images: [opti34Img],
    title: "Mueble de Cocina Integral White Loft",
    category: "Cocinas",
    description: "Diseño moderno y luminoso. Alacenas con sectores abiertos para especias y vinos. Terminación blanco satinado.",
    materials: ["MDF laqueado", "Mesada de granito"],
    dimensions: "A medida",
  },
  {
    id: "mesa-luz-clasica",
    images: [opti22Img],
    title: "Mesa de Luz Clásica con Cajón y Estante",
    category: "Dormitorio",
    description: "Diseño clásico en madera maciza con acabado laqueado color cerezo. Cajón central con tirador integrado y estante inferior abierto para mayor almacenamiento. Patas macizas de perfil cuadrado.",
    materials: ["Madera maciza", "Lustre color cerezo"],
    dimensions: "45 x 35 x 65 cm",
  },
  {
    id: "mesa-luz-colonial",
    images: [opti33Img],
    title: "Mesa de Luz Colonial con Cajón y Puerta",
    category: "Dormitorio",
    description: "Diseño colonial en madera maciza con acabado laqueado color nogal. Cajón superior con perilla negra y puerta inferior con moldura en relieve. Base con patas tipo bloque redondeado que aportan solidez y carácter artesanal.",
    materials: ["Madera maciza", "Lustre color nogal"],
    dimensions: "45 x 35 x 65 cm",
  },
  
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

