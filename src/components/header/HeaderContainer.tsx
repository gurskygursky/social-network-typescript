import React from "react";
import "./Header.module.css";
import classes from "./Header.module.css"
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {UserDataType} from "../../redux/auth-reducer";
import {LoginUser} from "../../redux/actions";
import {RootStateType} from "../../redux/redux-store";
import axios from "axios";
import {Header} from "./Header";

export class LoginHeaderContainer extends React.Component<LoginHeaderContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(responce => {
                debugger;
                if (responce.data.resultCode === 0) {
                    this.props.LoginUser(responce.data.data)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}  />
        );
    }
}

type mapStateToPropsType = {
    userData: UserDataType,
    isAuth: boolean,
}
type mapDispatchToPropsType = {
    LoginUser: (userData: UserDataType) => void,

}
type LoginHeaderContainerType = mapStateToPropsType & mapDispatchToPropsType;
const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        userData: state.AuthReducer.userData,
        isAuth: state.AuthReducer.isAuth,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        LoginUser: (userData: UserDataType) => {
            dispatch(LoginUser(userData))
        }
    }

}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(LoginHeaderContainer)

