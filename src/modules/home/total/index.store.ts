import { observable, action } from 'mobx';
import ajax from 'ajax';

/** 请求间隔时间 */
const intervalTime = 10000;

class TotalStore {
    @observable total = 0;

    @action
    init = (): void => {
        this.loadData();
    };

    loadDataTimeoutId: number;
    clearLoadDataTimeout = (): void => {
        if (this.loadDataTimeoutId) {
            clearTimeout(this.loadDataTimeoutId);
            this.loadDataTimeoutId = undefined;
        }
    };
    @action
    loadData = (): void => {
        ajax.get<number>('/panel/flipper/value')
            .then(
                action((data) => {
                    this.total = data;
                })
            )
            .finally(() => {
                this.clearLoadDataTimeout();
                this.loadDataTimeoutId = window.setTimeout(() => {
                    this.loadData();
                }, intervalTime);
            });
    };
    @action
    destroy = (): void => {
        this.total = 0;
        this.clearLoadDataTimeout();
    };
}

export default new TotalStore();
