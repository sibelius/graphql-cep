// @flow

export default async function getAddress(cep: string) {
  if (!cep) {
    return {
      error: 'CEP inválido',
    };
  }

  const response = await fetch(`http://api.postmon.com.br/v1/cep/${cep}`);

  if (!response.ok) {
    return {
      error: 'Erro ao pesquisar CEP',
    };
  }

  const address = await response.json();

  return {
    neighborhood: address.bairro,
    city: address.cidade,
    state: address.estado,
    street: address.logradouro,
  };
}
