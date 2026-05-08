export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  tag?: "Populaire" | "Nouveau" | "Spicy";
  image: string;
};

export const categories = ["Tous", "Burgers", "Wraps", "Snacks", "Boissons"];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Le "BMF Classique"',
    description: "Steak haché pur bœuf, cheddar fondant, salade, tomate, oignons, sauce secrète BMF.",
    price: 3000,
    category: "Burgers",
    tag: "Populaire",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800",
  },
  {
    id: 2,
    name: 'Le "Double Black Burger"',
    description: "Double steak bœuf, double cheddar, bacon de bœuf croquant, sauce barbecue fumée, pain noir au charbon.",
    price: 4500,
    category: "Burgers",
    tag: "Nouveau",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=800",
  },
  {
    id: 3,
    name: 'Le "Crispy Chicken"',
    description: "Poulet croustillant mariné façon BMF, salade, sauce mayonnaise épicée.",
    price: 3500,
    category: "Burgers",
    tag: "Spicy",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=800",
  },
  {
    id: 4,
    name: "Chawarma Bœuf Libanais",
    description: "Émincé de bœuf rôti, frites intégrées, crudités, sauce sésame et piment doux.",
    price: 2500,
    category: "Wraps",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800",
  },
  {
    id: 5,
    name: "Wrap Poulet Tandoori",
    description: "Poulet tandoori grillé, avocat, coriandre, sauce blanche, pain tortilla souple.",
    price: 2800,
    category: "Wraps",
    tag: "Nouveau",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800",
  },
  {
    id: 6,
    name: "Frites Classiques BMF",
    description: "Frites dorées croustillantes, assaisonnées à la perfection.",
    price: 1000,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=800",
  },
  {
    id: 7,
    name: "Cheesy Fries",
    description: "Frites fondues au cheddar, sauce BBQ, herbes fraîches.",
    price: 1500,
    category: "Snacks",
    tag: "Populaire",
    image: "https://images.unsplash.com/photo-1630431341973-02e1b662ec35?q=80&w=800",
  },
  {
    id: 8,
    name: "Nuggets de Poulet (x6)",
    description: "Nuggets de poulet croustillants servis avec sauce de votre choix.",
    price: 1800,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800",
  },
  {
    id: 9,
    name: "Milkshake Vanille / Chocolat / Fraise",
    description: "Milkshake onctueux préparé avec de la vraie crème glacée.",
    price: 2500,
    category: "Boissons",
    tag: "Populaire",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800",
  },
  {
    id: 10,
    name: "Canettes (Coca, Fanta, Sprite, Gazelle)",
    description: "Boissons fraîches en canette pour accompagner votre repas.",
    price: 800,
    category: "Boissons",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800",
  },
  {
    id: 11,
    name: "Tiramisu BMF",
    description: "Notre tiramisu maison, léger et crémeux, la touche sucrée parfaite.",
    price: 2000,
    category: "Boissons",
    tag: "Nouveau",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800",
  },
];
