import React from "react";
import "./Header.module.css";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import {
    loginUserThunk, logoutThunk,
} from "../../redux/thunk";

export class LoginHeaderContainer extends React.Component<LoginHeaderContainerPropsType> {
    componentDidMount() {
        this.props.loginUserThunk();
    }
    render() {
        return (
            <Header {...this.props}  />
        );
    }
}

// type mapStateToPropsType = {
//     userData: UserDataType
//     isAuth: boolean,
// }
const mapStateToProps = (state: RootStateType) => {
    return {
        // userData: state.AuthReducer.userData,
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

