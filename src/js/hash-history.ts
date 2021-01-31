import { createHashHistory, History } from 'history';
import i18next from 'i18next';

interface IHistory extends History {
    onPrevent?: () => void;
}

const history: IHistory = createHashHistory({
    // getUserConfirmation(message, callback): void {
    //     window.$confirm(
    //         i18next.t('alert.title'),
    //         message,
    //         function(): void {
    //             callback(true);
    //         },
    //         function(): void {
    //             callback(false);
    //             history.onPrevent();
    //         }
    //     );
    // },
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const warp = function(path: { [name: string]: any }): void {
    if (typeof path === 'object' && path.params) {
        const params = path.params;
        const res = [];
        for (const k in params) {
            res.push(k + '=' + encodeURIComponent(params[k]));
        }
        path.search = '?' + res.join('&');
        delete path.params;
    }
};
// history.push = history.push.before(warp);
// history.replace = history.replace.before(warp);

// eslint-disable-next-line @typescript-eslint/no-empty-function
history.onPrevent = function(): void {};

export default history;
