import React from 'react';
import { observer } from 'mobx-react';
import { withTranslation, WithTranslation } from 'react-i18next';
import Screen from './screen';
import Distribution from './distribution';
import Overview from './overview';
import Total from './total';
import Logo from './logo';

import './index.less';

@observer
class Home extends React.Component<WithTranslation> {
    render(): React.ReactNode {
        return (
            <div className="gs-home">
                <div>
                    <Screen>
                        <Distribution />
                        <Overview />
                    </Screen>
                    <Total />
                </div>
                <Logo />
            </div>
        );
    }
}

export default withTranslation()(Home);
