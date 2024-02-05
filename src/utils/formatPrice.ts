export function formatPrice(num: number) {
	let fmt = new Intl.NumberFormat()
	console.log(fmt, num);
	return fmt.format(num)
}

