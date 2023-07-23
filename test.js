const data = {
  title: 'Limpar o quarto urgentemente!!!!!!!!',
  description: 'nananananann',
};
for (const key in data) {
  if (!data[key]) {
    delete data[key];
  }
}
