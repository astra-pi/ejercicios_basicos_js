const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (let key in alien) {
  console.log("La propiedad " + key + " tiene cómo valor: " + alien[key]);
}
