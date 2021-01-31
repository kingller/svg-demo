import React from 'react';
import PropTypes from 'prop-types';
import { Route, Router, Switch as RouterSwitch, Redirect, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import hashHistory from './js/hash-history';

import ModuleWrapper from './components/module-wrapper';

import Home from './modules/home/index';
import Line from './modules/line/Line';
import Rect from './modules/rect/Rect';
import Circle from './modules/circle/Circle';
import CircleAnimation from './modules/circle-animation/CircleAnimation';
import Bezier from './modules/bezier/Bezier';
import BezierAnimation from './modules/bezier-animation/BezierAnimation';

const MainWithRouter = withRouter(
    class Main extends React.Component<RouteComponentProps> {
        static childContextTypes = {
            //获取当前页面的地址
            location: PropTypes.object,
        };

        getChildContext(): {} {
            return {
                //获取当前页面的地址
                location: this.props.location,
            };
        }

        componentDidMount(): void {
            // //获取账户里设置好的日期格式并且在所有 DatePicker  DateRangePicker 组件上呈现出来
            // utils.setDateFormat(InitData.dateFormat);
            // //格式化时间格式
            // utils.setTimeFormat(InitData.timeFormat);
        }

        render(): React.ReactNode {
            const location = this.props.location;
            const module = 'module' + location.pathname.replace(/\//g, '-');

            return (
                <div className="hr1-framework">
                    <div className="page-sidebar">
                        <a href="#/line">Line</a>
                        <a href="#/rect">Rect</a>
                        <a href="#/circle">Circle</a>
                        <a href="#/circle-animation">Circle Animation</a>
                        <a href="#/bezier">Bezier</a>
                        <a href="#/bezier-animation">Bezier Animation</a>
                    </div>
                    <div className="layout-responsive-left-fixed page-container">
                        <div className="page-content">
                            <div className={`page-body ${module}`}>
                                <ModuleWrapper>
                                    <RouterSwitch>
                                        <Route key="line" exact={true} component={Line} path="/line" />
                                        <Route key="rect" exact={true} component={Rect} path="/rect" />
                                        <Route key="circle" exact={true} component={Circle} path="/circle" />
                                        <Route
                                            key="circle-animation"
                                            exact={true}
                                            component={CircleAnimation}
                                            path="/circle-animation"
                                        />
                                        <Route key="bezier" exact={true} component={Bezier} path="/bezier" />
                                        <Route
                                            key="bezier-animation"
                                            exact={true}
                                            component={BezierAnimation}
                                            path="/bezier-animation"
                                        />
                                        <Route key="home" exact={true} component={Home} path="/home" />
                                        <Redirect to="/line" />
                                    </RouterSwitch>
                                </ModuleWrapper>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
);

export default (
    <Router history={hashHistory}>
        <MainWithRouter />
    </Router>
);
