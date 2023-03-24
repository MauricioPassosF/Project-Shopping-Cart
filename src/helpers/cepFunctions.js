const spanAdress = document.querySelector('.cart__address');
// const fetchAddress = async (URL) => {
//   const result = await fetch(URL);
//   const data = await result.json();
//   return data;
// };

export const getAddress = async (cep) => {
  // let address;
  try {
    const result = await Promise.any([
      fetch(`https://cep.awesomeapi.com.br/json/${cep}`),
      fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`),
    ]);
    const address = await result.json();
    console.log('try cima');
    console.log(address);
    return address;
  } catch (error) {
  // const error1 = 404;
  // const error2 = 400;
  // if (address.status === error1 || address.status === error2) {
    console.log('catch cima');
    spanAdress.innerHTML = 'CEP não';
    // address = 'CEP não encontrado';
  // } finally {
  //   return address
  // }
  // } catch (error) {
  //   return error;
  }
};

export const searchCep = async () => {
  try {
    const data = await getAddress(document.querySelector('.cep-input').value);
    spanAdress.innerHTML = data.address_type
      ? `${data.address} - ${data.district} - ${data.city} - ${data.state}`
      : `${data.street} - ${data.neighborhood} - ${data.city} - ${data.state}`;
  } catch (error) {
    console.log('catch baixo');
    spanAdress.innerHTML = 'CEP não encontrado';
  }
};
