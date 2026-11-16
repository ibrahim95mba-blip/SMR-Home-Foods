import type { ComponentType } from 'react';
import { UtensilsCrossed, Hotel, Coffee, Drumstick } from 'lucide-react';

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  qty: string;
  image: string;
};

export type Category = {
  id: string;
  label: string;
  items: MenuItem[];
};
export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snacks' ;
export type ShopCategoryType = 'homefoods' | 'hotel' | 'coffee' | 'meat';

export type Shop = {
  id: string;
  categoryType: ShopCategoryType;
  name: string;
  tagline: string;
  address: string;
  rating: number;
  coverImage: string;
  deliveryNote: string;
  categories: Category[];
};

export type ShopCategory = {
  type: ShopCategoryType;
  label: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  iconBg: string;
  iconColor: string;
  gradient: string;
  description: string;
};

export const SHOP_CATEGORIES: ShopCategory[] = [
  {
    type: 'homefoods',
    label: 'Home Foods',
    icon: UtensilsCrossed as any,
    iconBg: 'bg-yellow-400',
    iconColor: 'text-black',
    gradient: 'from-yellow-400 to-amber-500',
    description: 'Homestyle South Indian meals',
  },
  {
    type: 'hotel',
    label: 'Hotels',
    icon: Hotel as any,
    iconBg: 'bg-orange-500',
    iconColor: 'text-white',
    gradient: 'from-orange-500 to-red-500',
    description: 'Restaurant-style dining',
  },
  {
    type: 'coffee',
    label: 'Coffee Shops',
    icon: Coffee as any,
    iconBg: 'bg-amber-700',
    iconColor: 'text-white',
    gradient: 'from-amber-700 to-amber-900',
    description: 'Freshly brewed beverages',
  },
  {
    type: 'meat',
    label: 'Meat Shops',
    icon: Drumstick as any,
    iconBg: 'bg-red-600',
    iconColor: 'text-white',
    gradient: 'from-red-600 to-rose-700',
    description: 'Fresh raw meat & seafood',
  },
];

const px = (id: string) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&h=400&w=400`;
const pxL = (id: string) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&h=300&w=800`;

export const SHOPS: Shop[] = [
  // ============ HOME FOODS ============
  {
    id: 'smr-home-foods',
    categoryType: 'homefoods',
    name: 'SMR Home Foods',
    tagline: 'South Indian Kitchen',
    address: 'Main Road, Tamil Nadu',
    rating: 4.8,
    coverImage: '/smrhomefoods-logo.png',
    deliveryNote: 'Order 3 hours before delivery time',
    categories: [
      {
        id: 'breakfast',
        label: 'Breakfast',
        items: [
          { id: 'hf-b1', name: 'Idli', description: '3 Nos (Chutney + Sambar)', price: 40, qty: '3 Nos', image: px('31199041') },
          { id: 'hf-b2', name: 'Dosa', description: '2 Nos Medium Size (Chutney + Sambar)', price: 50, qty: '2 Nos', image: px('20422123') },
          { id: 'hf-b3', name: 'Onion Dosa', description: '2 Nos (Chutney + Sambar)', price: 60, qty: '2 Nos', image: px('20422133') },
          { id: 'hf-b4', name: 'Poori', description: '2 Nos (Poori Masal)', price: 50, qty: '2 Nos', image: '/poori.png' },
          { id: 'hf-b5', name: 'Pongal', description: '1 Pcs (Chutney + Sambar)', price: 50, qty: '1 Pcs', image: '/pongal.png' },
          { id: 'hf-b6', name: 'Upma', description: '1 Pcs (Chutney + Sambar)', price: 50, qty: '1 Pcs', image: '/upma.png' },
        ],
      },
      {
        id: 'lunch',
        label: 'Lunch',
        items: [
          { id: 'hf-l1', name: 'Chicken Biryani', description: '1 Pcs (Raita + Dalcha)', price: 120, qty: '1 Pcs', image: '/chickenbriyani.png' },
          { id: 'hf-l2', name: 'Mutton Biryani', description: '1 Pcs (Raita + Dalcha)', price: 160, qty: '1 Pcs', image: '/muttonbriyani.png' },
          { id: 'hf-l3', name: 'Chilli Chicken', description: '100 Gram', price: 90, qty: '100 Gram', image: '/chickenchilli.png' },
          { id: 'hf-l4', name: 'Chicken Gravy', description: '1 Pcs', price: 80, qty: '1 Pcs', image: 'chickengravy.png' },
          { id: 'hf-l5', name: 'Egg Gravy', description: '2 Pcs', price: 50, qty: '2 Pcs', image: '/egggravy.png' },
          { id: 'hf-l6', name: 'Meals', description: 'Full South Indian Meals', price: 100, qty: '1 Plate', image: '/meals.png' },
        ],
      },
      {
        id: 'dinner',
        label: 'Dinner',
        items: [
          { id: 'hf-d1', name: 'Idli', description: '3 Nos (Chutney + Sambar)', price: 40, qty: '3 Nos', image: px('37867687') },
          { id: 'hf-d2', name: 'Dosa', description: '2 Nos Medium Size (Chutney + Sambar)', price: 50, qty: '2 Nos', image: px('20422121') },
          { id: 'hf-d3', name: 'Onion Dosa', description: '2 Nos (Chutney + Sambar)', price: 60, qty: '2 Nos', image: px('20422133') },
          { id: 'hf-d4', name: 'Chapathi', description: '2 Nos (Veg Kuruma)', price: 50, qty: '2 Nos', image: '/sappathi.png' },
          { id: 'hf-d5', name: 'Parotta', description: '2 Nos (Veg Kuruma)', price: 50, qty: '2 Nos', image: '/parotta.png' },
        ],
      },
    ],
  },


  // ============ HOTELS ============
  {
    id: 'LALA-BRIYANI-HOTEL-ANAIMALAI',
    categoryType: 'hotel',
    name: 'Lala Briyani Hotel',
    tagline: 'Authentic Briyani & Fast Food',
    address: 'State Bank Opposite , Anaimalai',
    rating: 4.7,
    coverImage: '/lalabriyani-Logo.jpg',
    deliveryNote: 'Hot & fresh food delivered within 30 min',
    categories: [
      {
        id: 'briyani',
        label: 'Briyani & Rice Specials',
        items: [
          { id: 'lb-b1', name: 'Chicken Briyani', description: 'Chicken Curry,Righta,Boild Egg', price: 175, qty: '1 Plate', image: '/chickenbriyani.png' },
          { id: 'lb-b2', name: 'Egg Briyani', description: 'Briyani served with boiled egg', price: 140, qty: '1 Plate', image: px('35071825') },
          { id: 'lb-b3', name: 'Empty Briyani', description: 'Plain aromatic briyani rice', price: 115, qty: '1 Plate', image: px('3926133') },
          { id: 'lb-b4', name: 'Chilli Briyani', description: 'Spicy chicken chilli mixed briyani', price: 185, qty: '1 Plate', image: px('32825916') },
          { id: 'lb-b5', name: 'Chicken Chilli Briyani', description: 'Special style chicken china briyani', price: 185, qty: '1 Plate', image: px('32825916') },
          { id: 'lb-b6', name: 'Egg Chilli Briyani', description: 'Special egg china briyani', price: 140, qty: '1 Plate', image: px('31150262') },
          { id: 'lb-b7', name: 'Mutton Briyani (Only Sunday)', description: 'Special tender mutton briyani', price: 290, qty: '1 Plate', image:  px('17650172') }
        ]
      },
      {
        id: 'side-dish',
        label: 'Side Dish & Starters',
        items: [
          { id: 'lb-sd1', name: 'Chilly Chicken (Bone)', description: 'Crispy bone chicken chilli', price: 115, qty: '1 Plate', image:  px('7353388') },
          { id: 'lb-sd2', name: 'Chilly Chicken (Boneless)', description: 'Spicy boneless chicken chilli', price: 150, qty: '1 Plate', image: px('35071824') },
          { id: 'lb-sd3', name: 'Chicken Manchurian', description: 'Tossed in Manchurian sauce', price: 196, qty: '1 Plate', image: px('35071815')  },
          { id: 'lb-sd4', name: 'Pepper Chicken (Gravy)', description: 'Spicy pepper chicken gravy', price: 173, qty: '1 Plate', image: px('35532826')  },
          { id: 'lb-sd5', name: 'Pepper Chicken (Dry)', description: 'Dry pepper roasted chicken', price: 173, qty: '1 Plate', image: px('8408994') },
          { id: 'lb-sd6', name: 'Hot Pepper Chicken (Boneless)', description: 'Extremely hot pepper boneless chicken', price: 196, qty: '1 Plate', image: px('8174278') },
          { id: 'lb-sd7', name: 'Alpaham Chicken (Half)', description: 'Juicy roasted alpham chicken half', price: 288, qty: '1 Pcs', image: px('30271609') },
          { id: 'lb-sd8', name: 'Alpaham Chicken (Full)', description: 'Juicy roasted alpham chicken full', price: 575, qty: '1 Full', image: px('30271609') },
          { id: 'lb-sd9', name: 'Grill Chicken (Half)', description: 'Tender grilled chicken half', price: 299, qty: '1 Pcs', image: px('25391590') },
          { id: 'lb-sd10', name: 'Grill Chicken (Full)', description: 'Tender grilled chicken full', price: 575, qty: '1 Full', image: px('25391590') },
          { id: 'lb-sd11', name: 'Egg Gravy', description: 'Flavorful egg gravy curry', price: 115, qty: '1 Bowl', image: '/egggravy.png' },
          { id: 'lb-sd12', name: 'Shawarma (Evening)', description: 'Special evening chicken shawarma', price: 92, qty: '1 Plate', image: px('37322775') },
          { id: 'lb-sd13', name: 'Gobi 65', description: 'Crispy fried cauliflower', price: 81, qty: '1 Plate', image: px('28674543') },
          { id: 'lb-sd14', name: 'Mushroom 65', description: 'Crispy fried mushroom', price: 104, qty: '1 Plate', image: px('18698224') },
          { id: 'lb-sd15', name: 'Paneer 65', description: 'Crispy spiced paneer fry', price: 104, qty: '1 Plate', image: px('29631468') },
          { id: 'lb-sd16', name: 'Gobi Manchurian', description: 'Gobi tossed in Manchurian sauce', price: 161, qty: '1 Plate', image: px('35071828') },
          { id: 'lb-sd17', name: 'Mushroom Manchurian', description: 'Mushroom tossed in Manchurian sauce', price: 115, qty: '1 Plate', image: px('35066808') },
          { id: 'lb-sd18', name: 'Paneer Manchurian', description: 'Paneer tossed in Manchurian sauce', price: 138, qty: '1 Plate', image: px('31783383') },
          { id: 'lb-sd19', name: 'Mushroom 65 / Masala', description: 'Special mushroom starter', price: 173, qty: '1 Plate', image: px('38807025') }
        ]
      },
      {
        id: 'parotta-breads',
        label: 'Parotta & Breads',
        items: [
          { id: 'lb-pb1', name: 'Parotta (2 Pcs)', description: 'Soft layered Kerala parotta', price: 58, qty: '2 Pcs', image: '/parotta.png' },
          { id: 'lb-pb2', name: 'Ellai Parotta', description: 'Banana leaf wrapped special parotta', price: 150, qty: '1 Pc', image: px('8859972') },
          { id: 'lb-pb3', name: 'Kothu Parotta', description: 'Shredded parotta tossed with spices', price: 115, qty: '1 Plate', image: px('35071814') },
          { id: 'lb-pb4', name: 'Chicken Kothu Parotta', description: 'Kothu parotta loaded with chicken chunks', price: 150, qty: '1 Plate', image: '/chickenkothuparotta.png' },
          { id: 'lb-pb5', name: 'Chapati (2 Pcs)', description: 'Soft wheat chapathi', price: 58, qty: '2 Pcs', image: px('40262787') },
          { id: 'lb-pb6', name: 'Egg Chapati (2 Pcs)', description: 'Chapathi cooked with egg layer', price: 81, qty: '2 Pcs', image: px('31150262') },
          { id: 'lb-pb7', name: 'Chicken Salna / Gravy', description: 'Extra chicken gravy', price: 150, qty: '1 Bowl', image: px('38400477') },
          { id: 'lb-pb8', name: 'Egg Salna', description: 'Extra egg gravy', price: 115, qty: '1 Bowl', image: px('35066815') },
        ]
      },
      {
        id: 'dosa-tiffin',
        label: 'Dosa Varieties',
        items: [
          { id: 'lb-ds1', name: 'Plain Dosa', description: 'Crispy classic dosa', price: 58, qty: '1 Pc', image: '/dosa.png' },
          { id: 'lb-ds2', name: 'Roast', description: 'Crispy butter roast dosa', price: 69, qty: '1 Pc', image: px('20422133') },
          { id: 'lb-ds3', name: 'Egg Roast', description: 'Dosa layered with egg', price: 92, qty: '1 Pc', image: px('31150262') },
          { id: 'lb-ds4', name: 'Onion Roast', description: 'Crispy dosa with onion topping', price: 92, qty: '1 Pc', image: px('20422123') },
          { id: 'lb-ds5', name: 'Podi Roast', description: 'Dosa sprinkled with spicy gun podi', price: 92, qty: '1 Pc', image: px('20422129') },
          { id: 'lb-ds6', name: 'Onion Ghee Podi Roast', description: 'Rich ghee podi onion roast', price: 115, qty: '1 Pc', image: px('28107046') },
          { id: 'lb-ds7', name: 'Chicken Roast', description: 'Dosa stuffed with spicy chicken masala', price: 150, qty: '1 Pc', image: px('5560763') }
        ]
      },
      {
        id: 'rice-noodles',
        label: 'Rice & Noodles',
        items: [
          { id: 'lb-rn1', name: 'Chicken Rice', description: 'Flavorful chicken fried rice', price: 138, qty: '1 Plate', image: px('7758253') },
          { id: 'lb-rn2', name: 'Chicken Noodles', description: 'Stir-fried chicken noodles', price: 138, qty: '1 Plate', image: px('8983416') },
          { id: 'lb-rn3', name: 'Veg Rice', description: 'Classic vegetable fried rice', price: 104, qty: '1 Plate', image: px('3926124') },
          { id: 'lb-rn4', name: 'Mushroom Rice', description: 'Fried rice with fresh mushrooms', price: 115, qty: '1 Plate', image: px('34341985') },
          { id: 'lb-rn5', name: 'Cauliflower Rice', description: 'Fried rice with spiced cauliflower', price: 115, qty: '1 Plate', image: px('10695968') },
          { id: 'lb-rn6', name: 'Veg Noodles', description: 'Classic stir-fried veg noodles', price: 104, qty: '1 Plate', image: px('37165674') },
          { id: 'lb-rn7', name: 'Mushroom Noodles', description: 'Noodles tossed with mushrooms', price: 115, qty: '1 Plate', image: px('40262812') },
          { id: 'lb-rn8', name: 'Gobi Noodles', description: 'Noodles tossed with gobi pieces', price: 115, qty: '1 Plate', image: px('17848654') }
        ]
      },
      {
        id: 'tandoori-gravies',
        label: 'Tandoori Breads & Gravies',
        items: [
          { id: 'lb-tg1', name: 'Naan', description: 'Tandoor baked plain naan', price: 69, qty: '1 Pc', image: px('16851842') },
          { id: 'lb-tg2', name: 'Roti', description: 'Traditional tandoori wheat roti', price: 69, qty: '1 Pc', image: px('12427834') },
          { id: 'lb-tg3', name: 'Butter Naan', description: 'Soft naan brushed with butter', price: 81, qty: '1 Pc', image: px('15119269') },
          { id: 'lb-tg4', name: 'Butter Chicken Gravy', description: 'Rich and creamy butter chicken', price: 196, qty: '1 Plate', image: px('7625056') },
          { id: 'lb-tg5', name: 'Kadai Chicken Gravy', description: 'Spiced kadai chicken masala', price: 196, qty: '1 Plate', image: px('25884470') },
          { id: 'lb-tg6', name: 'Paneer Butter Masala Gravy', description: 'Creamy paneer butter masala', price: 196, qty: '1 Plate', image: px('9609838') },
          { id: 'lb-tg7', name: 'Mushroom Masala Gravy', description: 'Spiced mushroom gravy', price: 196, qty: '1 Plate', image: px('35267278') }
        ]
      }
    ]
  },

  // ============ COFFEE SHOPS ============
  
  {
    id: 'malva-cafe',
    categoryType: 'coffee',
    name: 'Malva Cafe Shop',
    tagline: 'Advertisement Menu · 20% extra except Tea & Coffee',
    address: 'Anaimalai',
    rating: 4.6,
    coverImage: '/Malva-Logo.png',
    deliveryNote: 'Freshly prepared delivery in 45 mins',
    categories: [
      
      {
        id: 'fresh-juices',
        label: 'Fresh Juices',
        items: [
          { id: 'mc-j1', name: 'Fresh Lime', description: 'Fresh lime juice', price: 30, qty: '1 Glass', image: '/freshlime.jpg' },
          { id: 'mc-j2', name: 'Mint Lime', description: 'Refreshing mint lime', price: 35, qty: '1 Glass', image: '/mintlime.png' },
          { id: 'mc-j3', name: 'Watermelon', description: 'Fresh watermelon juice', price: 60, qty: '1 Glass', image: '/watermelon.png' },
          { id: 'mc-j4', name: 'Pineapple', description: 'Fresh pineapple juice', price: 60, qty: '1 Glass', image: '/pineapple.png' },
          { id: 'mc-j5', name: 'Grapes', description: 'Fresh grape juice', price: 60, qty: '1 Glass', image: '/grapes.png' },
          { id: 'mc-j6', name: 'Musambi', description: 'Fresh sweet lime juice', price: 70, qty: '1 Glass', image: '/musambi.png' },
          { id: 'mc-j7', name: 'Orange', description: 'Fresh orange juice', price: 70, qty: '1 Glass', image: '/orange.png' },
          { id: 'mc-j8', name: 'Anar', description: 'Fresh pomegranate juice', price: 70, qty: '1 Glass', image: '/anar.png' },
        ],
      },
      {
        id: 'shakes',
        label: 'Shakes',
        items: [
          { id: 'mc-sh1', name: 'Mango Shake', description: 'Creamy mango shake', price: 90, qty: '1 Glass', image: '/mangoshake.png' },
          { id: 'mc-sh2', name: 'Chickoo Shake', description: 'Fresh chikoo shake', price: 90, qty: '1 Glass', image:'/chickoshake.png' },
          { id: 'mc-sh3', name: 'Apple Shake', description: 'Fresh apple shake', price: 90, qty: '1 Glass', image: '/aplleshake.png' },
          { id: 'mc-sh4', name: 'Dragon Fruit Shake', description: 'Dragon fruit shake', price: 90, qty: '1 Glass', image: '/draganfruitshake.png' },
          { id: 'mc-sh5', name: 'Anar Shake', description: 'Pomegranate shake', price: 90, qty: '1 Glass', image: '/anarshake.png' },
          { id: 'mc-sh6', name: 'Tender Coconut Shake', description: 'Tender coconut shake', price: 90, qty: '1 Glass', image: '/coconutshake.png' },
          { id: 'mc-sh7', name: 'Kiwi Shake', description: 'Fresh kiwi shake', price: 100, qty: '1 Glass', image: '/kuwishake.png' },
          { id: 'mc-sh8', name: 'Cold Coffee', description: 'Chilled creamy coffee', price: 100, qty: '1 Glass', image: '/coldcoffee.png' },
          { id: 'mc-sh9', name: 'Cold Chocolate', description: 'Chilled chocolate drink', price: 100, qty: '1 Glass', image: '/coldchoclate.png' },
          { id: 'mc-sh10', name: 'Cold Boost', description: 'Chilled malt drink', price: 100, qty: '1 Glass', image: '/boostshake.png' },
          { id: 'mc-sh11', name: 'Cold Horlicks', description: 'Chilled malt drink', price: 100, qty: '1 Glass', image: '/harlicksshake.png' },
          { id: 'mc-sh12', name: 'Oreo Shake', description: 'Cookies and cream shake', price: 100, qty: '1 Glass', image: '/oreoshake.png' },
          { id: 'mc-sh13', name: 'Chocolate Shake', description: 'Rich chocolate shake', price: 100, qty: '1 Glass', image: '/cholateshake.png' },
          { id: 'mc-sh14', name: 'Strawberry Shake', description: 'Creamy strawberry shake', price: 100, qty: '1 Glass', image: '/strawberryshake.png' },
          { id: 'mc-sh15', name: 'Avocado Shake', description: 'Fresh avocado shake', price: 110, qty: '1 Glass', image: '/awacadoshake.png' },
          { id: 'mc-sh16', name: 'Tender Cashew Shake', description: 'Tender cashew shake', price: 120, qty: '1 Glass', image: '/tendercashewshake.png' },
        ],
      },
      {
        id: 'avil-milk',
        label: 'Avil Milk',
        items: [
          { id: 'mc-am1', name: 'Avil Milk', description: 'Traditional Kerala-style drink', price: 70, qty: '1 Glass', image: '/avilmilk.png' },
          { id: 'mc-am2', name: 'Avil Milk Special', description: 'Special avil milk with toppings', price: 100, qty: '1 Glass', image: '/avilmilkspecial.png' },
        ],
      },
      {
        id: 'soda',
        label: 'Soda',
        items: [
          { id: 'mc-so1', name: 'Lime Soda', description: 'Fresh lime soda', price: 50, qty: '1 Glass', image: '/limesoda.png' },
          { id: 'mc-so2', name: 'Mint Lime Soda', description: 'Mint and lime soda', price: 70, qty: '1 Glass', image: '/mintlime.png' },
          { id: 'mc-so3', name: 'Ginger Soda', description: 'Ginger-flavored soda', price: 70, qty: '1 Glass', image: '/gingersoda.jpg' },
          { id: 'mc-so4', name: 'Blue Lime Soda', description: 'Blue lime soda', price: 70, qty: '1 Glass', image: '/bluelimesoda.png' },
          { id: 'mc-so5', name: 'Chilly Soda', description: 'Spicy chilly soda', price: 70, qty: '1 Glass', image: '/chillysoda.jpeg' },
          { id: 'mc-so6', name: 'Masala Soda', description: 'Spiced soda', price: 70, qty: '1 Glass', image: '/masalasoda.png' },
        ],
      },
      {
        id: 'falooda',
        label: 'Falooda',
        items: [
          { id: 'mc-f1', name: 'Strawberry Falooda', description: 'Strawberry falooda', price: 150, qty: '1 Glass', image: '/strawberryfalooda.jpeg' },
          { id: 'mc-f2', name: 'Chocolate Falooda', description: 'Chocolate falooda', price: 150, qty: '1 Glass', image: '/chocolatefalooda.png' },
          { id: 'mc-f3', name: 'Mango Falooda', description: 'Mango falooda', price: 150, qty: '1 Glass', image: '/mangofalooda.jpeg' },
          { id: 'mc-f4', name: 'Pista Falooda', description: 'Pista falooda', price: 150, qty: '1 Glass', image: '/pistafalooda.jpg' },
          { id: 'mc-f5', name: 'Oreo Falooda', description: 'Oreo falooda', price: 150, qty: '1 Glass', image: '/oreofalooda.png' },
        ],
      },
      {
        id: 'falooda-special',
        label: 'Falooda Special',
        items: [
          { id: 'mc-fs1', name: 'Fruit Salad with Ice Cream', description: 'Fruit salad topped with ice cream', price: 120, qty: '1 Bowl', image: '/fruitsaladwithicecream.png' },
          { id: 'mc-fs2', name: 'Malwa Special Falooda', description: 'Cafe special falooda', price: 170, qty: '1 Glass', image: '/malwaspecialfalooda.png' },
          { id: 'mc-fs3', name: 'Royal Falooda', description: 'Loaded royal falooda', price: 190, qty: '1 Glass', image: '/royalfalooda.png' },
          { id: 'mc-fs4', name: 'Dry Fruit Falooda', description: 'Falooda with dry fruits', price: 200, qty: '1 Glass', image: '/dryfruitfalooda.png' },
          { id: 'mc-fs5', name: 'Kunafa Falooda', description: 'Falooda with kunafa topping', price: 220, qty: '1 Glass', image: '/kunafafalooda.png' },
        ],
      },
      {
        id: 'mojito',
        label: 'Mojito',
        items: [
          { id: 'mc-mj1', name: 'Mint Mojito', description: 'Refreshing mint mojito', price: 90, qty: '1 Glass', image: '/mintmojito.jpg' },
          { id: 'mc-mj2', name: 'Watermelon Mojito', description: 'Watermelon mojito', price: 90, qty: '1 Glass', image: '/watermelonmojito.png' },
          { id: 'mc-mj3', name: 'Green Apple Mojito', description: 'Green apple mojito', price: 100, qty: '1 Glass', image: '/greenapplemojito.jpg' },
          { id: 'mc-mj4', name: 'Blueberry Mojito', description: 'Blueberry mojito', price: 100, qty: '1 Glass', image: '/bluberrymojito.jpg' },
          { id: 'mc-mj5', name: 'Strawberry Mojito', description: 'Strawberry mojito', price: 100, qty: '1 Glass', image: '/straberrymojito.jpg' },
        ],
      },
      {
        id: 'lassi',
        label: 'Lassi',
        items: [
          { id: 'mc-la1', name: 'Lassi', description: 'Chilled sweet lassi', price: 70, qty: '1 Glass', image: '/lassi.png' },
          { id: 'mc-la2', name: 'Special Lassi', description: 'Thick special lassi', price: 90, qty: '1 Glass', image: '/speciallassi.png' },
        ],
      },
      {
        id: 'ice-cream',
        label: 'Ice Cream Scoops',
        items: [
          { id: 'mc-ic1', name: 'Vanilla', description: 'One ice cream scoop', price: 60, qty: '1 Scoop', image: '/vanilla.jpg' },
          { id: 'mc-ic2', name: 'Strawberry', description: 'One ice cream scoop', price: 60, qty: '1 Scoop', image: '/strawberry.jpg' },
          { id: 'mc-ic3', name: 'Pista', description: 'One ice cream scoop', price: 70, qty: '1 Scoop', image: '/pista.jpg' },
          { id: 'mc-ic4', name: 'Butter Scotch', description: 'One ice cream scoop', price: 70, qty: '1 Scoop', image: '/butterscotch.jpg' },
          { id: 'mc-ic5', name: 'Chocolate', description: 'One ice cream scoop', price: 70, qty: '1 Scoop', image: '/chocolate.jpg' },
        ],
      },
      {
        id: 'arabian-special',
        label: 'Arabian Special',
        items: [
          { id: 'mc-ar1', name: 'Falafel Veg Roll', description: 'Falafel and fresh vegetables', price: 90, qty: '1 Roll', image: '/falafelvegroll.jpg' },
          { id: 'mc-ar2', name: 'Falafel Egg Roll', description: 'Falafel and egg roll', price: 100, qty: '1 Roll', image: '/falafeleggroll.jpg' },
          { id: 'mc-ar3', name: 'Falafel Chicken Roll', description: 'Falafel and chicken roll', price: 108, qty: '1 Roll', image: '/falafelchickenroll.jpg' },

        ],
      },
      {
        id: 'omelet',
        label: 'Omelet',
        items: [
          { id: 'mc-om1', name: 'Omelet', description: 'Classic omelet', price: 50, qty: '1 Plate', image: '/omlet.jpg' },
          { id: 'mc-om2', name: 'Bread Omelet', description: 'Omelet with bread', price: 70, qty: '1 Plate', image: '/breadomlet.jpg' },
          { id: 'mc-om3', name: 'Cheese Bread Omelet', description: 'Cheese omelet with bread', price: 80, qty: '1 Plate', image: '/cheesbreadomlet.jpg' },
        ],
      },
      {
        id: 'jumbo-sandwich',
        label: 'Jumbo Sandwich',
        items: [
          { id: 'mc-js1', name: 'Veg Sandwich', description: 'Fresh vegetable sandwich', price: 90, qty: '1 Sandwich', image: '/vegsandwich.jpg' },
          { id: 'mc-js2', name: 'Cheese Sandwich', description: 'Cheesy grilled sandwich', price: 100, qty: '1 Sandwich', image: '/vegcheessandwich.jpg' },
          { id: 'mc-js3', name: 'Paneer Sandwich', description: 'Paneer-filled sandwich', price: 110, qty: '1 Sandwich', image: '/paneersandwich.jpg' },
          { id: 'mc-js4', name: 'Chicken Sandwich', description: 'Chicken-filled sandwich', price: 110, qty: '1 Sandwich', image: '/chickensandwich.jpg' },
          { id: 'mc-js5', name: 'Chicken with Cheese Sandwich', description: 'Chicken and cheese sandwich', price: 120, qty: '1 Sandwich', image: '/chickencheessandwich.jpg' },
        ],
      },
      {
        id: 'burgers',
        label: 'Burgers',
        items: [
          { id: 'mc-bg1', name: 'Veg Burger', description: 'Crispy veg burger', price: 90, qty: '1 Burger', image: '/vegburger.jpg' },
          { id: 'mc-bg2', name: 'Veg Cheese Burger', description: 'Veg burger with cheese', price: 110, qty: '1 Burger', image: '/vegcheesburger.jpg' },
          { id: 'mc-bg3', name: 'Chicken Burger', description: 'Crispy chicken burger', price: 110, qty: '1 Burger', image: '/chickenburger.jpg' },
          { id: 'mc-bg4', name: 'Chicken Cheese Burger', description: 'Chicken burger with cheese', price: 120, qty: '1 Burger', image: '/chickencheesburger.jpg' },
        ],
      },
      {
        id: 'porotta-roll',
        label: 'Porotta Roll',
        items: [
          { id: 'mc-pr1', name: 'Veg Roll', description: 'Vegetable porotta roll', price: 80, qty: '1 Roll', image: '/vegroll.jpg' },
          { id: 'mc-pr2', name: 'Egg Roll', description: 'Egg porotta roll', price: 90, qty: '1 Roll', image: '/eggroll.jpg' },
          { id: 'mc-pr3', name: 'Chicken Roll', description: 'Chicken porotta roll', price: 100, qty: '1 Roll', image: '/chickenroll.jpg' },
          { id: 'mc-pr4', name: 'Mushroom Roll', description: 'Mushroom porotta roll', price: 100, qty: '1 Roll', image: '/mushroomroll.jpg' },
          { id: 'mc-pr5', name: 'Paneer Roll', description: 'Paneer porotta roll', price: 100, qty: '1 Roll', image: '/paneerroll.jpg' },
        ],
      },
      {
        id: 'snacks',
        label: 'Snacks',
        items: [
          { id: 'mc-sn1', name: 'French Fries', description: 'Crispy french fries', price: 90, qty: '1 Plate', image: '/ff.jpg' },
          { id: 'mc-sn2', name: 'Peri Peri Fries', description: 'Fries with peri peri seasoning', price: 100, qty: '1 Plate', image: '/ppf.jpg' },
          { id: 'mc-sn3', name: 'Chicken Nuggets', description: 'Crispy chicken nuggets', price: 120, qty: '1 Plate', image: '/cn.jpg' },
          { id: 'mc-sn4', name: 'Chicken Popcorn', description: 'Bite-size crispy chicken', price: 120, qty: '1 Plate', image: '/cp.jpg' },
          { id: 'mc-sn5', name: 'Chicken Wings', description: 'Crispy chicken wings', price: 150, qty: '1 Plate', image: '/cw.jpg' },
          { id: 'mc-sn6', name: 'Chicken Strips', description: 'Crispy chicken strips', price: 150, qty: '1 Plate', image: '/cs.jpg' },
          { id: 'mc-sn7', name: 'Chicken Crispy', description: 'Crispy fried chicken', price: 150, qty: '1 Plate', image: '/cc.jpg' },
          { id: 'mc-sn8', name: 'Chicken Loaded Fries', description: 'Fries loaded with chicken', price: 170, qty: '1 Plate', image: '/clf.jpg' },
        ],
      },
    ],
  },
  {
    id: 'MIST-TEA',
    categoryType: 'coffee',
    name: 'Mist Tea',
    tagline: 'Aesthetic Tea Shop',
    address: 'Anaimalai',
    rating: 4.8,
    coverImage: '/mittea.jpg',
    deliveryNote: 'Fresh items delivered within 30 min',
    categories: [
        
      {
        id: 'milo',
        label: 'Milo & Bournvita',
        items: [
          { id: 'mt-ml1', name: 'Hot Milo', description: 'Hot chocolate malt drink', price: 60, qty: '1 Cup', image: '/hotmilo.jpg' },
          { id: 'mt-ml2', name: 'Cold Milo', description: 'Chilled Milo drink', price: 90, qty: '1 Glass', image: '/coldmilo.jpg' },
          { id: 'mt-ml3', name: 'Bournvita', description: 'Health malt drink', price: 60, qty: '1 Cup', image: '/bournvita.jpg' }
        ]
      },
      {
        id: 'cold-beverages',
        label: 'Cold Beverages',
        items: [
          { id: 'mt-cb1', name: 'Cold Coffee', description: 'Chilled creamy cold coffee', price: 90, qty: '1 Glass', image: '/coldcoffee.jpg' },
          { id: 'mt-cb2', name: 'Cold Boost', description: 'Chilled boost drink', price: 90, qty: '1 Glass', image: '/coldboost.jpg' }
        ]
      },
      {
        id: 'mojitos',
        label: 'Mojitos',
        items: [
          { id: 'mt-mj1', name: 'Lime & Mint Mojito', description: 'Refreshing lime and mint cooler', price: 90, qty: '1 Glass', image: '/mintlime.png' },
          { id: 'mt-mj2', name: 'Green Apple Mojito', description: 'Crisp green apple mocktail', price: 90, qty: '1 Glass', image: '/greenapplemojito.jpg' },
          { id: 'mt-mj3', name: 'Water Melon Mojito', description: 'Fresh watermelon cooler', price: 90, qty: '1 Glass', image: '/watermelonmojito.png' },
          { id: 'mt-mj4', name: 'Pineapple Mojito', description: 'Tropical pineapple cooler', price: 90, qty: '1 Glass', image: '/pineapplemojito.jpg' },
          { id: 'mt-mj5', name: 'Kiwi Mojito', description: 'Sweet kiwi fruit mocktail', price: 90, qty: '1 Glass', image: '/kiwimojito.jpg' },
          { id: 'mt-mj6', name: 'Lychee Mojito', description: 'Delicate lychee cooler', price: 100, qty: '1 Glass', image: '/lycheemojito.jpg' },
          { id: 'mt-mj7', name: 'Blue Curacao Mojito', description: 'Vibrant blue curacao mocktail', price: 100, qty: '1 Glass', image: '/bluecuracaomojito.jpg' }
        ]
      },
      {
        id: 'milk-shakes',
        label: 'Milk Shakes',
        items: [
          { id: 'mt-ms1', name: 'Vanilla Milkshake', description: 'Classic vanilla shake', price: 140, qty: '1 Glass', image: '/vanillamilkshake.jpg' },
          { id: 'mt-ms2', name: 'Strawberry Milkshake', description: 'Sweet strawberry shake', price: 140, qty: '1 Glass', image: '/strawberryshake.png' },
          { id: 'mt-ms3', name: 'Mango Milkshake', description: 'Rich mango shake', price: 140, qty: '1 Glass', image: '/mangoshake.png' },
          { id: 'mt-ms4', name: 'Butterscotch Milkshake', description: 'Crunchy butterscotch shake', price: 150, qty: '1 Glass', image: '/butterscotchmilkshake.jpg' },
          { id: 'mt-ms5', name: 'Blue Berry Milkshake', description: 'Fruity blueberry shake', price: 150, qty: '1 Glass', image: '/blueberrymilkshake.jpg' },
          { id: 'mt-ms6', name: 'Black Currant Milkshake', description: 'Rich black currant shake', price: 150, qty: '1 Glass', image: '/blackcurrantmilkshake.jpg' },
          { id: 'mt-ms7', name: 'Chocolate Milkshake', description: 'Chocolaty thick shake', price: 160, qty: '1 Glass', image: '/cholateshake.png' },
          { id: 'mt-ms8', name: 'Oreo Shake', description: 'Crushed oreo cookie shake', price: 170, qty: '1 Glass', image: '/oreoshake.png' },
          { id: 'mt-ms9', name: 'KitKat Shake', description: 'Crunchy kitkat chocolate shake', price: 185, qty: '1 Glass', image: '/kitkatshake.jpg' }
        ]
      },
      {
        id: 'fresh-lime',
        label: 'Fresh Lime',
        items: [
          { id: 'mt-fl1', name: 'Mint & Lime', description: 'Fresh lime with mint flavor', price: 60, qty: '1 Glass', image: '/mintlime.png' },
          { id: 'mt-fl2', name: 'Ginger & Lime', description: 'Spiced ginger lime juice', price: 70, qty: '1 Glass', image: '/gingersoda.jpg' },
          { id: 'mt-fl3', name: 'Masala & Lime', description: 'Tangy masala lime juice', price: 80, qty: '1 Glass', image: '/masalasoda.png' }
        ]
      },
      {
        id: 'deserts',
        label: 'Deserts & Specials',
        items: [
          { id: 'mt-ds1', name: 'Fruit Custard', description: 'Creamy fruit custard dessert', price: 70, qty: '1 Bowl', image: '/fruitcustard.jpeg' },
          { id: 'mt-ds2', name: 'Classic Brownie', description: 'Rich chocolate brownie', price: 80, qty: '1 Pc', image: '/classicbrownie.jpg' },
          { id: 'mt-ds3', name: 'Nuts Brownie', description: 'Brownie loaded with nuts', price: 105, qty: '1 Pc', image: '/nutsbrownie.jpg' },
          { id: 'mt-ds4', name: 'Brownie with Ice Cream', description: 'Sizzling brownie served with ice cream', price: 140, qty: '1 Plate', image: '/brownieicecream.jpg' },
          { id: 'mt-ds5', name: 'Rose Milk Tres Leches', description: 'Rose flavored three milk cake', price: 175, qty: '1 Pc', image: '/rosemilkcake.jpg' },
          { id: 'mt-ds6', name: 'Ras Malai Tres Leches', description: 'Rasmalai flavored fusion milk cake', price: 200, qty: '1 Pc', image: '/rasmalaicake.jpg' }
        ]
      },
      {
        id: 'fries',
        label: 'Fries',
        items: [
          { id: 'mt-fr1', name: 'French Fries', description: 'Crispy salted potato fries', price: 115, qty: '1 Plate', image: '/ff.jpg' },
          { id: 'mt-fr2', name: 'Peri Peri Fries', description: 'Spicy peri peri seasoned fries', price: 140, qty: '1 Plate', image: '/ppf.jpg' },
          { id: 'mt-fr3', name: 'Schezwan Fries', description: 'Tossed in spicy schezwan sauce', price: 160, qty: '1 Plate', image: '/schezwanfries.jpeg' },
          { id: 'mt-fr4', name: 'Chicken Loaded Fries', description: 'Fries topped with chicken chunks & sauce', price: 210, qty: '1 Plate', image: '/clf.jpg' }
        ]
      },
      {
        id: 'fried-chicken',
        label: 'Fried Chicken',
        items: [
          { id: 'mt-fc1', name: 'Crispy Chicken Wings', description: 'Crispy fried chicken wings (6 pcs)', price: 210, qty: '6 Pcs', image: '/cw.jpg' },
          { id: 'mt-fc2', name: 'Crispy Chicken Popcorn', description: 'Bite-sized crispy chicken popcorn (16 pcs)', price: 230, qty: '16 Pcs', image: '/cp.jpg' },
          { id: 'mt-fc3', name: 'Crispy Chicken Strips', description: 'Boneless crunchy chicken strips (6 pcs)', price: 230, qty: '6 Pcs', image: '/cs.jpg' },
          { id: 'mt-fc4', name: 'Crispy Chicken Lolipop', description: 'Juicy chicken lollipops (6 pcs)', price: 255, qty: '6 Pcs', image: '/clp.jpg' }
        ]
      },
      {
        id: 'spicy-chicken',
        label: 'Spicy Chicken',
        items: [
          { id: 'mt-sc1', name: 'Schezwan Chicken Wings', description: 'Wings tossed in schezwan sauce', price: 210, qty: '6 Pcs', image: '/schezwanwings.jpeg' },
          { id: 'mt-sc2', name: 'Schezwan Chicken Lollipop', description: 'Lollipops tossed in schezwan sauce', price: 230, qty: '6 Pcs', image: '/schezwanlolipop.jpeg' }
        ]
      },
      {
        id: 'burger',
        label: 'Burger',
        items: [
          { id: 'mt-bg1', name: 'Veg Burger', description: 'Crispy veg patty burger', price: 95, qty: '1 Pc', image: '/vegburger.jpg' },
          { id: 'mt-bg2', name: 'Veg Cheese Burger', description: 'Veg burger loaded with cheese', price: 115, qty: '1 Pc', image: '/vegcheesburger.jpg' },
          { id: 'mt-bg3', name: 'Double Decker Veg Burger', description: 'Double patty veg burger', price: 150, qty: '1 Pc', image: '/doublevegburger.jpg' },
          { id: 'mt-bg4', name: 'Chicken Burger', description: 'Juicy chicken patty burger', price: 130, qty: '1 Pc', image: '/chickenburger.jpg' },
          { id: 'mt-bg5', name: 'Chicken Cheese Burger', description: 'Chicken burger with extra cheese', price: 150, qty: '1 Pc', image: '/chickencheesburger.jpg' },
          { id: 'mt-bg6', name: 'Chicken Jumbo Burger', description: 'Extra large loaded chicken burger', price: 210, qty: '1 Pc', image: '/chickenjumboburger.jpg' }
        ]
      },
      {
        id: 'sandwich',
        label: 'Sandwich',
        items: [
          { id: 'mt-sw1', name: 'Veg Sandwich', description: 'Fresh vegetable sandwich', price: 95, qty: '1 Pc', image: '/vegsandwich.jpg' },
          { id: 'mt-sw2', name: 'Corn Cheese Sandwich', description: 'Sweet corn and cheese filling', price: 115, qty: '1 Pc', image: '/vegcheessandwich.jpg' },
          { id: 'mt-sw3', name: 'Paneer Tikka Sandwich', description: 'Spiced paneer tikka sandwich', price: 150, qty: '1 Pc', image: '/paneersandwich.jpg' },
          { id: 'mt-sw4', name: 'Chicken Sandwich', description: 'Savory chicken filled sandwich', price: 140, qty: '1 Pc', image: '/chickensandwich.jpg' }
        ]
      },
      {
        id: 'bread-omlette',
        label: 'Bread Omlette',
        items: [
          { id: 'mt-bo1', name: 'Bread Omlette', description: 'Classic street style bread omelette', price: 70, qty: '1 Plate', image: '/breadomlet.jpg' },
          { id: 'mt-bo2', name: 'Special Bread Omlette', description: 'Loaded special bread omelette', price: 105, qty: '1 Plate', image: '/cheesbreadomlet.jpg' },
          { id: 'mt-bo3', name: 'Chicken Bread Omlette', description: 'Bread omelette stuffed with chicken', price: 140, qty: '1 Plate', image: '/chickenbreadomlatte.jpeg' }
        ]
      },
      {
        id: 'pasta',
        label: 'Pasta',
        items: [
          { id: 'mt-ps1', name: 'White Souce Veg Pasta', description: 'Creamy white sauce pasta', price: 175, qty: '1 Plate', image: '/whitepastad.jpeg' },
          { id: 'mt-ps2', name: 'Red Sauce Chicken Pasta', description: 'Tangy red sauce pasta with chicken', price: 210, qty: '1 Plate', image: '/redpasta.jpeg' }
        ]
      },
      {
        id: 'momos',
        label: 'Momos',
        items: [
          { id: 'mt-mm1', name: 'Steamed Momos (Veg)', description: 'Soft steamed veg momos', price: 115, qty: '1 Plate', image: '/steamedvegmomos.jpeg' },
          { id: 'mt-mm2', name: 'Steamed Momos (Panner)', description: 'Soft steamed paneer momos', price: 140, qty: '1 Plate', image: '/steamedpaneermomos.jpeg' },
          { id: 'mt-mm3', name: 'Steamed Momos (Chicken)', description: 'Soft steamed chicken momos', price: 150, qty: '1 Plate', image: '/steamedchickenmomos.jpeg' },
          { id: 'mt-mm4', name: 'Fried Momos (Veg)', description: 'Crispy fried veg momos', price: 130, qty: '1 Plate', image: '/friedvegmomos.jpeg' },
          { id: 'mt-mm5', name: 'Fried Momos (Panner)', description: 'Crispy fried paneer momos', price: 150, qty: '1 Plate', image: '/friedpannermomos.jpeg' },
          { id: 'mt-mm6', name: 'Fried Momos (Chicken)', description: 'Crispy fried chicken momos', price: 160, qty: '1 Plate', image: '/friedchickenmomos.jpeg' },
          { id: 'mt-mm7', name: 'Peri Peri Momos (Veg)', description: 'Tossed in peri peri spice', price: 140, qty: '1 Plate', image: '/periperivegmomos.jpeg' },
          { id: 'mt-mm8', name: 'Peri Peri Momos (Panner)', description: 'Paneer momos with peri peri flavor', price: 160, qty: '1 Plate', image: '/periperipannermomos.jpeg' },
          { id: 'mt-mm9', name: 'Peri Peri Momos (Chicken)', description: 'Chicken momos with peri peri flavor', price: 175, qty: '1 Plate', image: '/periperichickenmomos.jpg' },
          { id: 'mt-mm10', name: 'Sezwan Momos (Veg)', description: 'Schezwan tossed veg momos', price: 140, qty: '1 Plate', image: '/schezwanvegmomos.jpeg' },
          { id: 'mt-mm11', name: 'Sezwan Momos (Panner)', description: 'Schezwan tossed paneer momos', price: 160, qty: '1 Plate', image: '/schezwanpaneermomos.jpeg' },
          { id: 'mt-mm12', name: 'Sezwan Momos (Chicken)', description: 'Schezwan tossed chicken momos', price: 175, qty: '1 Plate', image: '/schezwanchickenmomos.jpeg' },
          { id: 'mt-mm13', name: 'Cheese Gravy Momos (Veg)', description: 'Veg momos dipped in rich cheese gravy', price: 175, qty: '1 Plate', image: '/cheesgravyvegmomos.jpeg' },
          { id: 'mt-mm14', name: 'Cheese Gravy Momos (Panner)', description: 'Paneer momos in cheese gravy', price: 185, qty: '1 Plate', image: '/cheesgravypaneermomos.jpeg' },
          { id: 'mt-mm15', name: 'Cheese Gravy Momos (Chicken)', description: 'Chicken momos in cheese gravy', price: 200, qty: '1 Plate', image: '/cheesgravychickenmomos.jpeg' }
        ]
      },
      {
        id: 'wrap',
        label: 'Wrap',
        items: [
          { id: 'mt-wr1', name: 'Veg Wrap', description: 'Fresh veggie wrap', price: 92, qty: '1 Pc', image: '/vegwrap.jpeg' },
          { id: 'mt-wr2', name: 'Paneer Tikka Wrap', description: 'Spiced paneer wrap', price: 138, qty: '1 Pc', image: '/paneerwrap.jpg' },
          { id: 'mt-wr3', name: 'Chicken Wrap', description: 'Savory chicken wrap', price: 138, qty: '1 Pc', image: '/chickenwrap.jpeg' },
          { id: 'mt-wr4', name: 'Crispy Chicken Wrap', description: 'Crispy fried chicken wrap', price: 173, qty: '1 Pc', image: '/crispychickenwrap.jpeg' }
        ]
      },
      {
        id: 'chinese-noodles',
        label: 'Chinese Noodles',
        items: [
          { id: 'mt-cn1', name: 'Veg Noodles', description: 'Classic stir-fried veg noodles', price: 115, qty: '1 Plate', image: '/vegnoodls.jpg' },
          { id: 'mt-cn2', name: 'Schezwan Veg Noodles', description: 'Spicy schezwan veg noodles', price: 140, qty: '1 Plate', image: '/schezwanvegnoodls.jpg' },
          { id: 'mt-cn3', name: 'Chicken Noodles', description: 'Stir-fried noodles with chicken', price: 175, qty: '1 Plate', image: '/chickennoodls.jpeg' },
          { id: 'mt-cn4', name: 'Schezwan Chicken Noodles', description: 'Spicy schezwan chicken noodles', price: 185, qty: '1 Plate', image: '/schezwanchickennoolds.png' },
          { id: 'mt-cn5', name: 'Paneer Noodles', description: 'Noodles tossed with paneer cubes', price: 200, qty: '1 Plate', image: '/pannernoodls.jpeg' },
          { id: 'mt-cn6', name: 'Schezwan Paneer Noodles', description: 'Spicy schezwan paneer noodles', price: 220, qty: '1 Plate', image: '/schezwanpannernoodls.jpg' }
        ]
      },
      {
        id: 'fried-rice',
        label: 'Fried Rice',
        items: [
          { id: 'mt-frs1', name: 'Veg Fried Rice', description: 'Classic veggie fried rice', price: 115, qty: '1 Plate', image: '/vegfriedrice.jpg' },
          { id: 'mt-frs2', name: 'Schezwan Veg Fried Rice', description: 'Spicy schezwan veg rice', price: 140, qty: '1 Plate', image: '/schezwanvegfriedrice.jpg' },
          { id: 'mt-frs3', name: 'Chicken Fried Rice', description: 'Flavorful chicken fried rice', price: 160, qty: '1 Plate', image: '/chickenfriedrice.jpg' },
          { id: 'mt-frs4', name: 'Schezwan Chicken Fried Rice', description: 'Spicy schezwan chicken rice', price: 185, qty: '1 Plate', image: '/schezwanchickenfriedrice.jpg' },
          { id: 'mt-frs5', name: 'Paneer Fried Rice', description: 'Fried rice with paneer chunks', price: 200, qty: '1 Plate', image: '/paneerfriedrice.jpg' },
          { id: 'mt-frs6', name: 'Schezwan Paneer Fried Rice', description: 'Spicy schezwan paneer rice', price: 220, qty: '1 Plate', image: '/schezwanpaneerfriedrice.jpg' }
        ]
      }
    ]
  
  },
  // ============ MEAT SHOPS ============
  {
    id: 'BISMILLAH CHICKEN ANAIMALAI-SHOP',
    categoryType: 'meat',
    name: 'Bismillah Chicken Shop',
    tagline: 'Premium Meat Shop',
    address: 'Pollachi Main Road ,Oxford School opposite ,Anaimalai',
    rating: 4.6,
    coverImage: '/Bismillah-Logo.png',
    deliveryNote: 'Fresh meat delivered within 30 min ',
    categories: [
      {
        id: 'chicken',
        label: 'Chicken',
        items: [
          { id: 'fm-c1', name: 'Chicken With Bone', description: 'With bone, Any Time Order, qty:1kg', price: 300, qty: '1 kg / 1/2 kg (150)', image: '/chickenwithbone.png' },
          { id: 'fm-c2', name: 'Chicken Boneless', description: 'Any Time Order, qty:1kg', price: 450, qty: '1 Kg', image: '/boneless.png' },
          { id: 'fm-c3', name: 'Chicken legpices', description: 'Must order One Day Before, qty:1kg', price: 330, qty: '1 Kg', image: '/legpcs.png' },
          { id: 'fm-c4', name: 'Chicken Lolipap', description: 'Must order one Day Before, qty:1kg', price: 330, qty: '1 Kg', image: '/lolipap.png' },
          { id: 'fm-c5', name: 'Chicken Wings', description: 'Must order one Day Before, qty:1kg', price: 320, qty: '1 Kg', image: '/wings.png' },
          { id: 'fm-c6', name: 'Chicken Liver', description: 'Any Time Order, qty:1kg', price: 150, qty: '1 Kg', image: '/liver.png' },
          { id: 'fm-c7', name: 'Naattukkoali Chicken', description: 'Live, Any Time Order, qty:1kg', price: 450, qty: '1 Kg', image: '/nadukkoli.png'},
        ],
      },
      
      {
        id: 'seafood',
        label: 'Seafood',
        items: [
          { id: 'fm-s1', name: 'Cutla Fish', description: 'Any Time Order, cleaned and packed, qty:1kg', price: 240, qty: '1 Kg', image: '/katla.jpg' },
          { id: 'fm-s2', name: 'Roku Fish', description: 'Any Time Order, cleaned and Packed, qty:1kg', price: 240, qty: '1 Kg', image: '/rogu.jpeg' },
          { id: 'fm-s3', name: 'Paarai Fish', description: 'Any Time Order, cleaned and Packed, qty:1kg', price: 220, qty: '1 Kg', image: '/para.jpg' },
        ],
      },
    ],
  },
  {
    id: 'BISMI MUTTON STALL ANAIMALAI-SHOP',
    categoryType: 'meat',
    name: 'Bismi Mutton Stall Shop',
    tagline: 'Premium Meat Shop',
    address: 'Pollachi Main Road ,Nellukutthiparai ,Anaimalai',
    rating: 4.6,
    coverImage: '/Bismi Mutton Stall-Logo.png',
    deliveryNote: 'Fresh meat delivered within 30 min ',
    categories: [
      {
        id: 'Mutton',
        label: 'Mutton',
        items: [
          { id: 'fm-c1', name: 'Mutton With Bone', description: 'With bone, Any Time Order, qty:1kg', price: 900, qty: '1 kg', image: '/muttonwithbone.png' },
          { id: 'fm-c2', name: 'Mutton With Bone', description: 'With bone, Any Time Order, qty:1/2 kg', price: 450, qty: '1/2 kg', image: '/muttonwithbone.png' },
          { id: 'fm-c3', name: 'Mutton Boneless', description: 'Any Time Order, qty:1kg', price: 1300, qty: '1 Kg', image: '/Muttonboneless.png' },
          { id: 'fm-c4', name: 'Mutton Boneless', description: 'Any Time Order, qty:1/2 kg', price: 650, qty: '1/2 Kg', image: '/Muttonboneless.png' },
          { id: 'fm-c5', name: 'Mutton Intestine', description: 'Any Time Order, qty:1kg', price: 700, qty: '1 Kg', image: '/muttonintestine.png' },
          { id: 'fm-c6', name: 'Mutton Intestine', description: 'Any Time Order, qty:1/2 kg', price: 350, qty: '1/2 Kg', image: '/muttonintestine.png' },
          { id: 'fm-c7', name: 'Mutton Liver', description: 'Any Time Order, qty:1kg', price: 1300, qty: '1 Kg', image: '/muttonliver.png' },
          { id: 'fm-c8', name: 'Mutton Liver', description: 'Any Time Order, qty:1/2 kg', price: 650, qty: '1/2 Kg', image: '/muttonliver.png' },
        ],
      },
      
    ],
  }, 
  
];

export function getShopsByCategory(type: ShopCategoryType): Shop[] {
  return SHOPS.filter((s) => s.categoryType === type);
}

export function getShopById(id: string): Shop | undefined {
  return SHOPS.find((s) => s.id === id);
}

export function getShopName(id: string): string {
  const shop = SHOPS.find((s) => s.id === id);
  return shop?.name ?? id;
}
