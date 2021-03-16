import React, {Suspense} from 'react';
import {withRouter, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {withSuspense} from './hoc/withSuspense';

import './App.css';
import 'antd/dist/antd.css';

import Preloader from './components/common/Preloader/Preloader';
import Feeds from './components/Feeds/Feeds';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';

import {Layout, Menu, Breadcrumb, Image, Avatar} from 'antd';
import {
    LoginOutlined,
    WechatOutlined,
    SettingOutlined,
    UserOutlined,
    ReadOutlined,
    EditOutlined,
    MessageOutlined,
    TeamOutlined,
    CustomerServiceOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import {logout} from './redux/auth-reducer';
import {setEditMode} from './redux/profileReducer';

const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({collapsed});
    };

    render() {
        if (!this.props.initialized) {
            return <Preloader/>;
        }
        const {collapsed} = this.state;

        const onEditMode = () => {
            this.props.setEditMode(true);
        };
        return (
            <Router>
                <Layout style={{minHeight: '100vh'}}>
                    <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <div className="logo"/>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            {!this.props.isAuth ? (
                                <Menu.Item key="1" icon={<LoginOutlined/>}>
                                    <Link to={'/login'}>Sign In</Link>
                                </Menu.Item>
                            ) : (
                                <SubMenu
                                    key="sub1"
                                    // icon={
                                    //     <Avatar
                                    //         src={
                                    //             <Image
                                    //                 src={this.props.profile.photos && this.props.profile.photos.large}/>
                                    //         }
                                    //     />
                                    // }
                                    title={this.props.login}>
                                    <Menu.Item key="1" icon={<UserOutlined/>}>
                                        <Link to={`/profile`}>My profile</Link>
                                    </Menu.Item>
                                    <Menu.Item key="2" icon={<EditOutlined/>}>
                                        <Link onClick={onEditMode} to={`/profile`}>
                                            Edit profile
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item onClick={this.props.logout} key="3" icon={<LogoutOutlined/>}>
                                        Logout
                                    </Menu.Item>
                                </SubMenu>
                            )}
                            <Menu.Item key="4" icon={<MessageOutlined/>}>
                                <Link to="/messages">Messages</Link>
                            </Menu.Item>
                            <Menu.Item key="5" icon={<TeamOutlined/>}>
                                <Link to="/users">Users</Link>
                            </Menu.Item>
                            <Menu.Item key="6" icon={<SettingOutlined/>}>
                                <Link to="/settings">Settings</Link>
                            </Menu.Item>
                            <Menu.Item key="7" icon={<ReadOutlined/>}>
                                <Link to="/feeds">Feeds</Link>
                            </Menu.Item>
                            <Menu.Item key="8" icon={<CustomerServiceOutlined/>}>
                                <Link to="/music">Music</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        {/*<Header className="site-layout-background" style={{padding: 0}}/>*/}
                        <Content style={{margin: '0 16px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                {/*<Breadcrumb.Item>User</Breadcrumb.Item>*/}
                                {/*<Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
                            </Breadcrumb>
                            <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                                <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                                <Route path="/feeds" render={() => <Feeds/>}/>
                                <Route path="/messages" render={withSuspense(MessagesContainer)}/>
                                <Route path="/music" render={() => <Music/>}/>
                                <Route path="/users" render={withSuspense(UsersContainer)}/>
                                <Route path="/settings" render={() => <Settings/>}/>
                                <Route path="/login" render={() => <Login/>}/>
                            </div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Hazard Design ©2021 Created by Home</Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    login: state.auth.login,
    editMode: state.profilePage.editMode,
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp, logout, setEditMode}),
)(App);
