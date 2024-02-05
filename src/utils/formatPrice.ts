export function formatPrice(num: number) {
	let fmt = new Intl.NumberFormat()
	return fmt.format(num)
}

