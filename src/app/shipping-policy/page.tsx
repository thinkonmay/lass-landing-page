import Image from 'next/image';

import './shipping-policy.scss';
import Breadcrumb from '../../components/breadcrumb/Breadcumb';
import Policy from '@/components/policy/policy';

export default function ShippingPolicy() {
    return (
        <>
            <Breadcrumb></Breadcrumb>
            <Policy></Policy>
        </>
    );
}
