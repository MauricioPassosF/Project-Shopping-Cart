export const fetchProduct = () => {
  // seu código aqu
};

export const fetchProductsList = (product) => {
  const BASE_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';
  if (!product) {
    throw new Error('Termo de busca não informado');
  }
  try {
   

  } catch (error) {
    return error.message
  }
};
