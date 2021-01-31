import React from 'react';
import { observer } from 'mobx-react';

import { ScreenSize } from '../../utils/enums';
import CustomerDot from './customer-dot';
import store from '../index.store';

@observer
class Customer extends React.Component {
    render(): React.ReactNode {
        const { customers } = store;
        return (
            <svg
                id="customers"
                data-name="customers"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${ScreenSize.width} ${ScreenSize.height}`}
                width="100%"
                height="100%">
                <defs>
                    <style>{`.gs-customer-dot{animation:opacityDot 2s;}
                    @keyframes opacityDot {
                        0%{opacity: 0;}
                        100%{opacity: 1;}
                    }`}</style>
                </defs>
                <title>Customers</title>
                {Array.from(customers, (customer) => {
                    return <CustomerDot key={customer.id} data={customer} />;
                })}
            </svg>
        );
    }
}

export default Customer;
