import Image from 'next/image'

import './warranty-policy.scss'
import Icon from '../../components/icon'
import Breadcrumb from '../../components/breadcrumb/Breadcumb'
import Warranty from '@/components/warranty/warranty'


export default function WarrantyPolicy() {
	return (

		<>
			<Breadcrumb></Breadcrumb>
			<Warranty></Warranty>
		</>
	)


}