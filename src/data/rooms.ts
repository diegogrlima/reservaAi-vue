export interface Room {
  id: number;
  number: string;
  name: string;
  description: string;
  price: number;
  image: string;
  capacity: number;
}

export const rooms: Room[] = [
  {
    id: 1,
    number: "101",
    name: "Quarto Standard",
    description: "Quarto aconchegante com cama de casal e vista para o jardim.",
    price: 199.9,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
    capacity: 2,
  },
  {
    id: 2,
    number: "205",
    name: "Quarto Superior",
    description: "Espaço amplo com varanda privativa e vista parcial do mar.",
    price: 349.9,
    image:
      "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    capacity: 2,
  },
  {
    id: 3,
    number: "310",
    name: "Suíte Deluxe",
    description: "Suíte luxuosa com sala de estar e vista panorâmica.",
    price: 599.9,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    capacity: 3,
  },
  {
    id: 4,
    number: "402",
    name: "Suíte Presidencial",
    description:
      "A experiência definitiva com jacuzzi privativa e serviço premium.",
    price: 899.9,
    image:
      "https://images.unsplash.com/photo-1642703168632-5a711d91b043?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    capacity: 4,
  },
  {
    id: 5,
    number: "108",
    name: "Quarto Twin",
    description: "Duas camas de solteiro, ideal para amigos ou colegas.",
    price: 249.9,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
    capacity: 2,
  },
  {
    id: 6,
    number: "501",
    name: "Cobertura VIP",
    description: "Cobertura exclusiva com terraço panorâmico e bar privativo.",
    price: 1299.9,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
    capacity: 4,
  },
];
