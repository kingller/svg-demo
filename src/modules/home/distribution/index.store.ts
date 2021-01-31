import { observable, computed, action } from 'mobx';
import _ from 'lodash';
import { IService, ICustomer, IConnection, IEdge, IServiceChartItem } from './interface';
import ajax from 'ajax';

class DistributionStore {
    constructor() {
        // const connections: IConnection[] = [];
        // for (let i = 0; i < this.customers.length; i++) {
        //     const customer = this.customers[i];
        //     if (i <= 17 || i === 21 || i === 23 || i === 25) {
        //         connections.push({
        //             sourceId: this.services[0].id,
        //             targetId: customer.id,
        //         });
        //     }
        //     if (i === 7 || i === 10 || (i >= 17 && i < 21)) {
        //         connections.push({
        //             sourceId: this.services[1].id,
        //             targetId: customer.id,
        //         });
        //     }
        //     if (i >= 21 && i < 29) {
        //         connections.push({
        //             sourceId: this.services[2].id,
        //             targetId: customer.id,
        //         });
        //     }
        //     if (i >= 29) {
        //         connections.push({
        //             sourceId: this.services[3].id,
        //             targetId: customer.id,
        //         });
        //     }
        // }
        // this.connections = connections;
    }
    @observable services: IService[] = [];
    // [
    //     {
    //         id: '1',
    //         name: '中国',
    //         count: 1290,
    //         position: {
    //             x: 1670,
    //             y: 320,
    //         },
    //     },
    //     {
    //         id: '2',
    //         name: '新加坡',
    //         count: 540,
    //         position: {
    //             x: 1670,
    //             y: 690,
    //         },
    //     },
    //     {
    //         id: '3',
    //         name: '俄罗斯',
    //         count: 876,
    //         position: {
    //             x: 2450,
    //             y: 150,
    //         },
    //     },
    //     {
    //         id: '4',
    //         name: '美国',
    //         count: 876,
    //         position: {
    //             x: 2700,
    //             y: 700,
    //         },
    //     },
    // ];

    @observable customers: ICustomer[] = [];
    // [
    //     {
    //         id: '1',
    //         position: {
    //             x: 1300,
    //             y: 100,
    //         },
    //     },
    //     {
    //         id: '2',
    //         position: {
    //             x: 1450,
    //             y: 120,
    //         },
    //     },
    //     {
    //         id: '3',
    //         position: {
    //             x: 1700,
    //             y: 180,
    //         },
    //     },
    //     {
    //         id: '4',
    //         position: {
    //             x: 1860,
    //             y: 200,
    //         },
    //     },
    //     {
    //         id: '5',
    //         position: {
    //             x: 1100,
    //             y: 360,
    //         },
    //     },
    //     {
    //         id: '6',
    //         position: {
    //             x: 1100,
    //             y: 560,
    //         },
    //     },
    //     {
    //         id: '7',
    //         position: {
    //             x: 1350,
    //             y: 300,
    //         },
    //     },
    //     {
    //         id: '8',
    //         position: {
    //             x: 1420,
    //             y: 400,
    //         },
    //     },
    //     {
    //         id: '9',
    //         position: {
    //             x: 1500,
    //             y: 320,
    //         },
    //     },
    //     {
    //         id: '10',
    //         position: {
    //             x: 1570,
    //             y: 320,
    //         },
    //     },
    //     {
    //         id: '11',
    //         position: {
    //             x: 1530,
    //             y: 270,
    //         },
    //     },
    //     {
    //         id: '12',
    //         position: {
    //             x: 1600,
    //             y: 250,
    //         },
    //     },
    //     {
    //         id: '13',
    //         position: {
    //             x: 1770,
    //             y: 265,
    //         },
    //     },
    //     {
    //         id: '14',
    //         position: {
    //             x: 1870,
    //             y: 265,
    //         },
    //     },
    //     {
    //         id: '15',
    //         position: {
    //             x: 1600,
    //             y: 420,
    //         },
    //     },
    //     {
    //         id: '16',
    //         position: {
    //             x: 1600,
    //             y: 470,
    //         },
    //     },
    //     {
    //         id: '17',
    //         position: {
    //             x: 1660,
    //             y: 490,
    //         },
    //     },
    //     {
    //         id: '18',
    //         position: {
    //             x: 1595,
    //             y: 600,
    //         },
    //     },
    //     {
    //         id: '19',
    //         position: {
    //             x: 1940,
    //             y: 655,
    //         },
    //     },
    //     {
    //         id: '20',
    //         position: {
    //             x: 1970,
    //             y: 820,
    //         },
    //     },
    //     {
    //         id: '21',
    //         position: {
    //             x: 1850,
    //             y: 870,
    //         },
    //     },
    //     {
    //         id: '22',
    //         position: {
    //             x: 2340,
    //             y: 85,
    //         },
    //     },
    //     {
    //         id: '23',
    //         position: {
    //             x: 2540,
    //             y: 80,
    //         },
    //     },
    //     {
    //         id: '24',
    //         position: {
    //             x: 2330,
    //             y: 240,
    //         },
    //     },
    //     {
    //         id: '25',
    //         position: {
    //             x: 2400,
    //             y: 200,
    //         },
    //     },
    //     {
    //         id: '26',
    //         position: {
    //             x: 2430,
    //             y: 230,
    //         },
    //     },
    //     {
    //         id: '27',
    //         position: {
    //             x: 2480,
    //             y: 290,
    //         },
    //     },
    //     {
    //         id: '28',
    //         position: {
    //             x: 2520,
    //             y: 180,
    //         },
    //     },
    //     {
    //         id: '29',
    //         position: {
    //             x: 2420,
    //             y: 410,
    //         },
    //     },
    //     {
    //         id: '30',
    //         position: {
    //             x: 2700,
    //             y: 600,
    //         },
    //     },
    //     {
    //         id: '31',
    //         position: {
    //             x: 2780,
    //             y: 620,
    //         },
    //     },
    //     {
    //         id: '32',
    //         position: {
    //             x: 2700,
    //             y: 780,
    //         },
    //     },
    //     {
    //         id: '33',
    //         position: {
    //             x: 2820,
    //             y: 860,
    //         },
    //     },
    // ];

    @observable connections: IConnection[] = [];

    @computed get edges(): IEdge[] {
        const serviceMap = _.keyBy(this.services, 'id');
        const customerMap = _.keyBy(this.customers, 'id');
        const edges: IEdge[] = [];
        _.forEach(this.connections, (connection) => {
            if (serviceMap[connection.sourceId] && customerMap[connection.targetId]) {
                edges.push({
                    sourceId: connection.sourceId,
                    sourcePosition: serviceMap[connection.sourceId].position,
                    targetId: connection.targetId,
                    targetPosition: customerMap[connection.targetId].position,
                });
            }
        });
        return edges;
    }

    @computed get serviceRadius(): { [name: string]: number } {
        const maxCount = _.max(_.map(this.services, 'count'));
        const radiusMap: { [name: string]: number } = {};
        _.forEach(this.services, (service) => {
            radiusMap[service.id] = Math.max(Math.ceil((service.count / maxCount) * 25), 15);
        });
        return radiusMap;
    }

    @computed get servicePlacement(): { [name: string]: 'leftTop' | 'leftBottom' | 'rightTop' } {
        const services = _.sortBy(this.services, function(service) {
            return service.position.x;
        });
        const placementMap: { [name: string]: 'leftTop' | 'leftBottom' | 'rightTop' } = {};
        for (let i = 0; i < services.length; i = i + 2) {
            const sortYPlacements = _.sortBy(services.slice(i, i + 2), function(service) {
                return service.position.y;
            });
            placementMap[sortYPlacements[0].id] = i === 0 ? 'leftTop' : 'rightTop';
            if (sortYPlacements.length > 1) {
                placementMap[sortYPlacements[1].id] = i === 0 ? 'leftBottom' : 'rightTop';
            }
        }
        return placementMap;
    }

    servicePlacementCategory = {
        leftTop: '东亚区DC',
        leftBottom: '南亚区DC',
        rightTop: '北美区DC',
    };

    @computed get serviceTotal(): number {
        return _.sumBy(this.services, 'count');
    }

    @computed get serviceChart(): IServiceChartItem[] {
        const total = this.serviceTotal;
        const serviceChartList: IServiceChartItem[] = [];
        if (total > 0) {
            const services = _.sortBy(this.services, 'count');
            let usedPercent = 0;
            let usedDegree = 0;
            for (let index = 0; index < services.length; index++) {
                const service = services[index];
                let percent = 0;
                let degree = 0;
                if (index === services.length - 1) {
                    percent = 100 - usedPercent;
                    degree = 360 - usedDegree;
                } else {
                    percent = Math.round((100 * service.count) / total);
                    // 数量不多，这里就取整了
                    degree = Math.round((360 * percent) / 100);
                }
                const serviceChatItem: IServiceChartItem = Object.assign(
                    {
                        percent,
                        degree,
                        usedDegree,
                    },
                    _.pick(service, ['id', 'name', 'count'])
                );
                serviceChartList.push(serviceChatItem);
                usedPercent += percent;
                usedDegree += degree;
            }
        }
        return serviceChartList;
    }

    @action
    init = (): void => {
        ajax.get<{
            services: IService[];
            customers: ICustomer[];
            connections: IConnection[];
        }>('/panel/tenantInfo/flowService').then(
            action((data): void => {
                this.services = data.services;
                this.customers = data.customers;
                this.connections = data.connections;
            })
        );
    };
}

export default new DistributionStore();
