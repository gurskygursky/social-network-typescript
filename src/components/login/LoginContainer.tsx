import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Login} from "./Login";
import {LoginUser, LoginUserForm} from "../../redux/actions";
import React from "react";
import {loginThunk} from "../../redux/thunk";
import {RootStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
isAuth: boolean
}
type MapDispatchToPropsType = {
    // sendMessage: () => void,
    // onChangeMessage: (newMessageText: string) => void,
    loginThunk: (email: string, password: string, rememberMe: boolean) => void
}
export type LoginFormPropsType = MapStateToPropsType & MapDispatchToPropsType;

const MapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.AuthReducer.isAuth
    }
}
// const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         // sendMessage: () => {
//         //     dispatch(SendMessage())
//         // },
//         // onChangeMessage: (newMessageText: string) => {
//         //     dispatch(InputNewMessageText(newMessageText))
//         // },
//         lo: (email: string, password: string, rememberMe: boolean) => {
//             // debugger
//             dispatch(loginThunk(email, password, rememberMe))
//         }
//     }
// }

export const LoginContainer = connect(MapStateToProps, {loginThunk})(Login);





