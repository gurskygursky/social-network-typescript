import React from "react";
import "./Header.module.css";
import {connect, ConnectedProps} from "react-redux";
import {UserDataType} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import {
    loginUserThunk,
} from "../../redux/thunk";

export class LoginHeaderContainer extends React.Component<LoginHeaderContainerPropsType> {
    componentDidMount() {
        this.props.loginUserThunk();
    }
    render() {
        return (
            <Header {...this.props} />
        );
    }
}

type mapStateToPropsType = {
    userData: UserDataType
    isAuth: boolean,
}
const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        userData: state.AuthReducer.userData,
        isAuth: state.AuthReducer.isAuth,
    }
}

const ConnectComponent = connect(mapStateToProps, {
    loginUserThunk,
})

export type LoginHeaderContainerPropsType = ConnectedProps<typeof ConnectComponent>
export const HeaderContainer = ConnectComponent(LoginHeaderContainer)

