const foods = [Apple Banana, Carrot, Beets, Eggplant, Fig, Grapes, Honeydew Melon, Iceberg Lettuce, Jalepeno, Kale, Lentils, Mango, Nectarine, Olive,]








const printFood = (food, i) =>{
  console.log('${i+1}. ${food}');
};

foods.forEach(printFood)
foods.forEach((food, i) => {
  console.log ('${i+1}. ${food}');
});