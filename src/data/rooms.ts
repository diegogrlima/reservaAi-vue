export interface Room {
  id: number;
  roomNumber: string;
  roomType: string;
  dailyRate: number;
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  capacity: number;
  amenities: string[];
}

export const mockRooms: Room[] = [
  {
    id: 1,
    roomNumber: "101",
    roomType: "STANDARD",
    name: "Quarto Standard",
    description: "Quarto aconchegante com cama de casal e vista para o jardim.",
    fullDescription:
      "Nosso Quarto Standard oferece o conforto ideal para sua estadia. Com uma cama de casal de alta qualidade, roupas de cama premium e uma vista relaxante para o jardim interno do hotel. O quarto possui ar-condicionado split, TV de tela plana de 42 polegadas com canais por assinatura, frigobar abastecido e banheiro moderno com chuveiro de alta pressão. A decoração clean e funcional cria um ambiente perfeito para descansar após um dia de viagens ou trabalho.",
    dailyRate: 199.9,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800",
      "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf8?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    ],
    capacity: 2,
    amenities: [
      "Wi-Fi gratuito",
      "Ar-condicionado",
      "TV 42\"",
      "Frigobar",
      "Cama de casal",
    ],
  },
  {
    id: 2,
    roomNumber: "205",
    roomType: "SUPERIOR",
    name: "Quarto Superior",
    description: "Espaço amplo com varanda privativa e vista parcial do mar.",
    fullDescription:
      "O Quarto Superior é perfeito para quem busca mais espaço e conforto. Com uma área generosa, este quarto conta com uma varanda privativa onde você pode apreciar a vista parcial do mar. A mobília inclui uma cama king-size, área de estar com poltrona e mesa de trabalho, TV de 50 polegadas e um banheiro espaçoso com amenidades premium. A iluminação natural abundante e os tons neutros criam uma atmosfera sofisticada e acolhedora.",
    dailyRate: 349.9,
    image:
      "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=687&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a096?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
    ],
    capacity: 2,
    amenities: [
      "Wi-Fi gratuito",
      "Ar-condicionado",
      "TV 50\"",
      "Varanda privativa",
      "Cama king-size",
      "Frigobar",
    ],
  },
  {
    id: 3,
    roomNumber: "310",
    roomType: "DELUXE",
    name: "Suíte Deluxe",
    description: "Suíte luxuosa com sala de estar e vista panorâmica.",
    fullDescription:
      "A Suíte Deluxe redefine o conceito de luxo e conforto. Com uma sala de estar separada do quarto, você terá espaço de sobra para relaxar ou receber visitas. A vista panorâmica de 180 graus oferece uma experiência visual inesquecível. O quarto principal conta com cama king-size e colchão de alta densidade, enquanto o banheiro dispõe de banheira de hidromassagem, ducha dupla e amenidades importadas. A suíte também inclui um closet e uma área de jantar privativa.",
    dailyRate: 599.9,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f584?w=800",
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800",
      "https://images.unsplash.com/photo-1590490360182-c33d57733425?w=800",
    ],
    capacity: 3,
    amenities: [
      "Wi-Fi gratuito",
      "Ar-condicionado",
      "TV 55\"",
      "Sala de estar",
      "Banheira",
      "Cama king-size",
      "Closet",
      "Frigobar",
    ],
  },
  {
    id: 4,
    roomNumber: "402",
    roomType: "PRESIDENTIAL",
    name: "Suíte Presidencial",
    description:
      "A experiência definitiva com jacuzzi privativa e serviço premium.",
    fullDescription:
      "A Suíte Presidencial representa o ápice da hospitalidade. Com mais de 80m², esta suíte oferece uma experiência incomparável de luxo. A jacuzzi privativa com vista para a cidade, o serviço de mordomo 24 horas e os acabamentos em mármore italiano criam um ambiente de sofisticação absoluta. O quarto principal possui cama super king-size, enquanto o segundo quarto pode ser usado como escritório ou quarto adicional. A sala de jantar acomoda até 6 pessoas, perfeita para jantares especiais.",
    dailyRate: 899.9,
    image:
      "https://images.unsplash.com/photo-1642703168632-5a711d91b043?q=80&w=735&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1642703168632-5a711d91b043?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f584?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    ],
    capacity: 4,
    amenities: [
      "Wi-Fi gratuito",
      "Ar-condicionado",
      "TV 65\"",
      "Jacuzzi privativa",
      "2 quartos",
      "Sala de jantar",
      "Mordomo 24h",
      "Frigobar premium",
    ],
  },
  {
    id: 5,
    roomNumber: "108",
    roomType: "TWIN",
    name: "Quarto Twin",
    description: "Duas camas de solteiro, ideal para amigos ou colegas.",
    fullDescription:
      "O Quarto Twin foi projetado pensando em quem viaja a negócios ou com amigos. Com duas camas de solteiro confortáveis e separadas, cada hóspede terá seu espaço pessoal. O quarto inclui duas mesas de cabeceira individuais, área de trabalho compartilhada, TV de 42 polegadas e banheiro moderno. A iluminação pode ser ajustada individualmente em cada cama, garantindo o conforto de todos os ocupantes.",
    dailyRate: 249.9,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
      "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf8?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    ],
    capacity: 2,
    amenities: [
      "Wi-Fi gratuito",
      "Ar-condicionado",
      "TV 42\"",
      "2 camas de solteiro",
      "Frigobar",
      "Área de trabalho",
    ],
  },
  {
    id: 6,
    roomNumber: "501",
    roomType: "VIP",
    name: "Cobertura VIP",
    description: "Cobertura exclusiva com terraço panorâmico e bar privativo.",
    fullDescription:
      "A Cobertura VIP é a joia do nosso hotel. Localizada no último andar, esta cobertura oferece um terraço panorâmico de 60m² com vista 360 graus da cidade. O bar privativo, equipado com as melhores bebidas, é perfeito para momentos de descontração. O interior da cobertura conta com dois quartos suíte, sala de estar ampla com lareira decorativa, cozinha gourmet equipada e uma sala de jantar formal. O acabamento em materiais nobres e a decoração de autor criam um ambiente verdadeiramente exclusivo.",
    dailyRate: 1299.9,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
      "https://images.unsplash.com/photo-1642703168632-5a711d91b043?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f584?w=800",
    ],
    capacity: 4,
    amenities: [
      "Wi-Fi gratuito",
      "Ar-condicionado",
      "TV 75\"",
      "Terraço panorâmico",
      "Bar privativo",
      "2 quartos suíte",
      "Cozinha gourmet",
      "Lareira",
      "Mordomo 24h",
    ],
  },
];
