export const getAddress = async (cep) => {
  const result = await Promise.any([
    fetch(`https://cep.awesomeapi.com.br/json/${cep}`),
    fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`),
  ]);
  const address = await result.json();
  const error1 = 404;
  const error2 = 400;
  if (address.status === error1 || address.status === error2) {
    throw new Error('CEP não encontrado');
  }
  return address;
};

export const searchCep = async () => {
  const spanAdress = document.querySelector('.cart__address');
  try {
    const data = await getAddress(document.querySelector('.cep-input').value);
    spanAdress.innerHTML = data.address_type
      ? `${data.address} - ${data.district} - ${data.city} - ${data.state}`
      : `${data.street} - ${data.neighborhood} - ${data.city} - ${data.state}`;
  } catch (error) {
    spanAdress.innerHTML = 'CEP não encontrado';
  }
};
