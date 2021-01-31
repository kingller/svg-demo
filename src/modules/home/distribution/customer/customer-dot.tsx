import React from 'react';
import { observer } from 'mobx-react';

import { ICustomer } from '../interface';

interface ServiceProps {
    data: ICustomer;
}

@observer
class CustomerDot extends React.Component<ServiceProps> {
    render(): React.ReactNode {
        const { data } = this.props;
        const { x, y } = data.position;
        return <circle id={data.id} className="gs-customer-dot" cx={x} cy={y} r={8} fill="#48F6FF" />;
    }
}

export default CustomerDot;
