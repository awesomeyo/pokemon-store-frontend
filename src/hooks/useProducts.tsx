import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/products';

const key = 'users'

export const useGetProducts = () => {
    return useQuery([key], getProducts);
}