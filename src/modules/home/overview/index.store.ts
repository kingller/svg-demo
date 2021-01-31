import { observable, action } from 'mobx';
import _ from 'lodash';
import { IPersonCount } from './interface';
import ajax from 'ajax';

class OverViewStore {
    @observable personCountList: IPersonCount[] = [];
    // [
    //     {
    //         country: 'CN',
    //         count: 9032450,
    //     },
    //     {
    //         country: 'SG',
    //         count: 7003000,
    //     },
    //     {
    //         country: 'CA',
    //         count: 6020000,
    //     },
    //     {
    //         country: 'IN',
    //         count: 9032450,
    //     },
    //     {
    //         country: 'JP',
    //         count: 5032450,
    //     },
    //     {
    //         country: 'KR',
    //         count: 4032450,
    //     },
    //     {
    //         country: 'MM',
    //         count: 832450,
    //     },
    //     {
    //         country: 'TH',
    //         count: 3032450,
    //     },
    //     {
    //         country: 'VN',
    //         count: 2032450,
    //     },
    // ];

    @action
    init = (): void => {
        ajax.get<IPersonCount[]>('/panel/tenantInfo/countryPersonCount').then(
            action((data) => {
                this.personCountList = data;
            })
        );
    };
}

export default new OverViewStore();
