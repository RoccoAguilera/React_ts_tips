const db = [
  {
    "id": "1",
    "name": "Ensalada César",
    "price": "8.50",
    "description": "Ensalada clásica con lechuga romana, crutones y aderezo César."
  },
  {
    "id": "2",
    "name": "Pizza Margherita",
    "price": "12.00",
    "description": "Pizza con salsa de tomate, mozzarella y albahaca fresca."
  },
  {
    "id": "3",
    "name": "Sushi variado",
    "price": "15.00",
    "description": "Selección de sushi con pescado fresco y verduras."
  },
  {
    "id": "4",
    "name": "Hamburguesa con queso",
    "price": "10.50",
    "description": "Hamburguesa de carne de res con queso, lechuga y tomate."
  },
  {
    "id": "5",
    "name": "Spaghetti Bolognese",
    "price": "11.00",
    "description": "Pasta spaghetti con salsa de carne y tomate."
  },
  {
    "id": "6",
    "name": "Pollo al curry",
    "price": "13.00",
    "description": "Pechuga de pollo cocinada en salsa de curry con arroz."
  },
  {
    "id": "7",
    "name": "Tacos de carne",
    "price": "9.00",
    "description": "Tortillas de maíz rellenas de carne asada y guarniciones."
  },
  {
    "id": "8",
    "name": "Pescado a la parrilla",
    "price": "14.00",
    "description": "Filete de pescado fresco a la parrilla con verduras."
  },
  {
    "id": "9",
    "name": "Lasaña",
    "price": "12.50",
    "description": "Plato de pasta con capas de carne, salsa y queso."
  },
  {
    "id": "10",
    "name": "Enchiladas",
    "price": "10.00",
    "description": "Tortillas rellenas de pollo y bañadas en salsa de chile."
  },
  {
    "id": "11",
    "name": "Sopa de verduras",
    "price": "7.00",
    "description": "Sopa caliente con una variedad de verduras."
  },
  {
    "id": "12",
    "name": "Crepas dulces",
    "price": "8.00",
    "description": "Crepas rellenas de frutas y cubiertas con chocolate."
  },
  {
    "id": "13",
    "name": "Batido de fresa",
    "price": "5.00",
    "description": "Bebida fría de fresa, leche y helado."
  },
  {
    "id": "14",
    "name": "Cerveza",
    "price": "4.00",
    "description": "Bebida alcohólica fermentada a base de cebada."
  },
  {
    "id": "15",
    "name": "Vino tinto",
    "price": "6.00",
    "description": "Bebida alcohólica hecha de uvas fermentadas."
  },
  {
    "id": "16",
    "name": "Refresco de cola",
    "price": "2.00",
    "description": "Bebida carbonatada con sabor a cola."
  },
  {
    "id": "17",
    "name": "Agua mineral",
    "price": "1.50",
    "description": "Agua con gas o sin gas, embotellada."
  },
  {
    "id": "18",
    "name": "Tequila",
    "price": "5.00",
    "description": "Bebida alcohólica destilada del agave."
  },
  {
    "id": "19",
    "name": "Whisky",
    "price": "7.00",
    "description": "Bebida alcohólica destilada de granos fermentados."
  },
  {
    "id": "20",
    "name": "Cóctel de frutas",
    "price": "6.00",
    "description": "Mezcla de diferentes frutas en un vaso."
  },
  {
    "id": "21",
    "name": "Paella",
    "price": "15.00",
    "description": "Plato español de arroz con mariscos y verduras."
  },
  {
    "id": "22",
    "name": "Ramen",
    "price": "12.00",
    "description": "Sopa japonesa de fideos con caldo y carne."
  },
  {
    "id": "23",
    "name": "Falafel",
    "price": "9.00",
    "description": "Bolas fritas de garbanzos, típicas de la cocina árabe."
  },
  {
    "id": "24",
    "name": "Ceviche",
    "price": "13.00",
    "description": "Plato de pescado crudo marinado en jugo de limón."
  },
  {
    "id": "25",
    "name": "Biryani",
    "price": "11.00",
    "description": "Plato indio de arroz con especias y carne."
  },
  {
    "id": "26",
    "name": "Samosas",
    "price": "8.00",
    "description": "Empanadas fritas rellenas de verduras o carne."
  },
  {
    "id": "27",
    "name": "Tandoori chicken",
    "price": "14.00",
    "description": "Pollo marinado en yogur y especias, cocido en horno tandoor."
  },
  {
    "id": "28",
    "name": "Kebab",
    "price": "10.00",
    "description": "Brochetas de carne asada, típicas de la cocina turca."
  },
  {
    "id": "29",
    "name": "Moussaka",
    "price": "12.50",
    "description": "Plato griego de capas de berenjena, carne y salsa."
  },
  {
    "id": "30",
    "name": "Poutine",
    "price": "11.00",
    "description": "Plato canadiense de papas fritas con queso y salsa."
  },
  {
    "id": "31",
    "name": "Sushi vegetariano",
    "price": "13.00",
    "description": "Sushi hecho con verduras y arroz."
  },
  {
    "id": "32",
    "name": "Pizza pepperoni",
    "price": "12.50",
    "description": "Pizza con salsa de tomate, mozzarella y pepperoni."
  },
  {
    "id": "33",
    "name": "Ensalada de atún",
    "price": "9.50",
    "description": "Ensalada con atún, lechuga, tomate y huevo."
  },
  {
    "id": "34",
    "name": "Tortilla española",
    "price": "8.00",
    "description": "Tortilla de patatas y huevo, típica de España."
  },
  {
    "id": "35",
    "name": "Gnocchi",
    "price": "10.00",
    "description": "Pasta italiana hecha de patata, servida con salsa."
  },
  {
    "id": "36",
    "name": "Curry de verduras",
    "price": "11.00",
    "description": "Plato indio de verduras en salsa de curry."
  },
  {
    "id": "37",
    "name": "Pancakes",
    "price": "7.00",
    "description": "Tortitas dulces, típicas del desayuno."
  },
  {
    "id": "38",
    "name": "Sopa de miso",
    "price": "5.00",
    "description": "Sopa japonesa hecha con pasta de soja fermentada."
  },
  {
    "id": "39",
    "name": "Arroz frito",
    "price": "9.00",
    "description": "Arroz salteado con verduras y huevo."
  },
  {
    "id": "40",
    "name": "Baklava",
    "price": "6.00",
    "description": "Postre dulce de origen turco, hecho con masa filo y nueces."
  }
]

export default db