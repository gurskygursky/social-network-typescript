import React, {ComponentType} from "react";
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {ProfileContainer} from "./components/profile/ProfileContainer";
import {HeaderContainer} from "./components/header/HeaderContainer";
import {LoginContainer} from "./components/login/LoginContainer";
import {UserContainer} from "./components/users/UsersContainer";
import {connect, ConnectedProps} from "react-redux";
import {
    appInitializingThunk,
} from "./redux/thunk";
import {compose} from "redux";
import {RootStateType} from "./redux/redux-store";

export class App extends React.Component<AppContainerType> {
    componentDidMount() {
        this.props.appInitializingThunk(this.props.initialized);
    }

    render() {
        return (
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route exact path={'/login'} render={() => <LoginContainer/>}/>
                    <Route exact path={'/profile/:userID?'} render={() => <ProfileContainer/>}/>
                    <Route exact path={'/messages'} render={() => <DialogsContainer/>}/>
                    <Route exact path={'/users'} render={() => <UserContainer/>}/>
                </div>
            </div>
        );
    }
}

type mapStateToPropsType = {
    initialized: boolean,
}
type AppContainerType = AppConnectContainerType & mapStateToPropsType;

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        initialized: state.AppReducer.initialized,
    }
}


const ConnectComponent = connect(mapStateToProps, {
    appInitializingThunk,
})

export type AppConnectContainerType = ConnectedProps<typeof ConnectComponent>

export const AppContainer = compose<ComponentType>(
    ConnectComponent,
    withRouter,
)(App)