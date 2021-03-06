import React from "react";
import "./Header.module.css";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import {
    loginUserThunk,
    logoutThunk,
} from "../../redux/thunk";

export class LoginHeaderContainer extends React.Component<LoginHeaderContainerPropsType> {
    render() {
        return (
            <Header {...this.props}  />
        );
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        id: state.AuthReducer.id,
        email: state.AuthReducer.email,
        login: state.AuthReducer.login,
        isAuth: state.AuthReducer.isAuth,
    }
}

const ConnectComponent = connect(mapStateToProps, {
    loginUserThunk, logoutThunk
})

export type LoginHeaderContainerPropsType = ConnectedProps<typeof ConnectComponent>
export const HeaderContainer = ConnectComponent(LoginHeaderContainer)

