import React from 'react';
import { observer } from 'mobx-react';
import Edges from './edge/index';
import Customers from './customer/index';
import Services from './service/index';
import Chart from './chart/index';

import './index.less';

import store from './index.store';

@observer
class Distribution extends React.Component {
    componentDidMount(): void {
        store.init();
    }

    render(): React.ReactNode {
        return (
            <React.Fragment>
                <Edges />
                <Customers />
                <Services />
                <Chart />
            </React.Fragment>
        );
    }
}

export default Distribution;
