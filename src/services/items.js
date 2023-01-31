import { checkError, client } from './client.js';

export async function getListItems() {
  const response = await client.from('todos').select();

  return checkError(response);
}

export async function createListItem(name) {
  const response = await client.from('todos').insert([{ name }]);

  return checkError(response);
}
