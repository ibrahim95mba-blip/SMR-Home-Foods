export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  qty: string;
  image: string;
};

export type MealType = 'breakfast' | 'lunch' | 'dinner';

export type MealMenu = {
  type: MealType;
  label: string;
  slot: string;
  items: MenuItem[];
};

export const MEAL_MENUS: MealMenu[] = [
  {
    type: 'breakfast',
    label: 'Breakfast',
    slot: '8:00 AM – 8:30 AM',
    items: [
      {
        id: 'b1',
        name: 'Idli',
        description: '3 Nos (Chutney + Sambar)',
        price: 40,
        qty: '3 Nos',
        image: 'https://images.pexels.com/photos/36854501/pexels-photo-36854501.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      },
      {
        id: 'b2',
        name: 'Dosa',
        description: '2 Nos Medium Size (Chutney + Sambar)',
        price: 50,
        qty: '2 Nos',
        image: 'https://images.pexels.com/photos/20422129/pexels-photo-20422129.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      },
      {
        id: 'b3',
        name: 'Onion Dosa',
        description: '2 Nos (Chutney + Sambar)',
        price: 60,
        qty: '2 Nos',
        image: 'https://images.pexels.com/photos/20422126/pexels-photo-20422126.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      },
      {
        id: 'b4',
        name: 'Poori',
        description: '2 Nos (Poori Masal)',
        price: 50,
        qty: '2 Nos',
        image: 'https://images.pexels.com/photos/8617361/pexels-photo-8617361.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      },
      {
        id: 'b5',
        name: 'Pongal',
        description: '1 Pcs (Chutney + Sambar)',
        price: 50,
        qty: '1 Pcs',
        image: 'https://images.pexels.com/photos/20689161/pexels-photo-20689161.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      },
      {
        id: 'b6',
        name: 'Upma',
        description: '1 Pcs (Chutney + Sambar)',
        price: 50,
        qty: '1 Pcs',
        image: 'https://images.pexels.com/photos/9148225/pexels-photo-9148225.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      },
    ],
  },
  {
    type: 'lunch',
    label: 'Lunch',
    slot: '1:00 PM – 1:30 PM',
    items: [
      {
        id: 'l1',
        name: 'Chicken Biryani',
        description: '1 Pcs (Raita + Dalcha)',
        price: 120,
        qty: '1 Pcs',
        image: 'https://images.pexels.com/photos/16020573/pexels-photo-16020573.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      },
      {
        id: 'l2',
        name: 'Mutton Biryani',
        description: '1 Pcs (Raita + Dalcha)',
        price: 180,
        qty: '1 Pcs',
        image: 'https://images.pexels.com/photos/33947401/pexels-photo-33947401.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      },
      {
        id: 'l3',
        name: 'Chilli Chicken',
        description: '100 Gram',
        price: 90,
        qty: '100 Gram',
        image: 'https://images.pexels.com/photos/7353388/pexels-photo-7353388.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      },
      {
        id: 'l4',
        name: 'Chicken Gravy',
        description: '1 Cup',
        price: 80,
        qty: '1 Cup',
        image: 'https://images.pexels.com/photos/7353487/pexels-photo-7353487.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      },
      {
        id: 'l5',
        name: 'Egg Gravy',
        description: '2 Pcs',
        price: 50,
        qty: '2 Pcs',
        image: 'https://images.pexels.com/photos/35066815/pexels-photo-35066815.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      },
      {
        id: 'l6',
        name: 'Meals',
        description: 'Full South Indian Meals',
        price: 100,
        qty: '1 Plate',
        image: 'https://images.pexels.com/photos/13243817/pexels-photo-13243817.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      },
    ],
  },
  {
    type: 'dinner',
    label: 'Dinner',
    slot: '8:00 PM – 8:30 PM',
    items: [
      {
        id: 'd1',
        name: 'Idli',
        description: '3 Nos (Chutney + Sambar)',
        price: 40,
        qty: '3 Nos',
        image: 'https://images.pexels.com/photos/36854501/pexels-photo-36854501.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      },
      {
        id: 'd2',
        name: 'Dosa',
        description: '2 Nos Medium Size (Chutney + Sambar)',
        price: 50,
        qty: '2 Nos',
        image: 'https://images.pexels.com/photos/20422129/pexels-photo-20422129.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      },
      {
        id: 'd3',
        name: 'Onion Dosa',
        description: '2 Nos (Chutney + Sambar)',
        price: 60,
        qty: '2 Nos',
        image: 'https://images.pexels.com/photos/20422126/pexels-photo-20422126.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      },
      {
        id: 'd4',
        name: 'Chapathi',
        description: '2 Nos (Veg Kuruma)',
        price: 50,
        qty: '2 Nos',
        image: 'https://images.pexels.com/photos/29066704/pexels-photo-29066704.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      },
      {
        id: 'd5',
        name: 'Parotta',
        description: '2 Nos (Veg Kuruma)',
        price: 50,
        qty: '2 Nos',
        image: 'https://images.pexels.com/photos/10810650/pexels-photo-10810650.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      },
    ],
  },
];

export const DELIVERY_SLOTS: Record<MealType, string> = {
  breakfast: '8:00 AM – 8:30 AM',
  lunch: '1:00 PM – 1:30 PM',
  dinner: '8:00 PM – 8:30 PM',
};
