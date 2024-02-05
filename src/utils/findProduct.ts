import { IProduct } from './../data/products';
import { products } from "@/data/products"
export const findProduct = (slug: string): IProduct => {
	let foundProduct: IProduct | undefined


	foundProduct = products.find(prd => prd.slug == slug)

	if (!foundProduct) throw 'not found'

	return foundProduct
}