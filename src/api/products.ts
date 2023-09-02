interface Products {
    id: number;
    name: string;
}
const URL_BASE = 'https://jsonplaceholder.typicode.com/users'
const headers = { 'Content-type': 'application/json' }

export const getProducts = async (): Promise<Products[]> => {
    return await (await fetch(URL_BASE)).json()
}

