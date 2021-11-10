import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Login} from "./Login";
import {LoginUser, LoginUserForm} from "../../redux/actions";
import React from "react";
import {loginThunk} from "../../redux/thunk";


type MapStateToPropsType = {

}
type MapDispatchToPropsType = {
    // sendMessage: () => void,
    // onChangeMessage: (newMessageText: string) => void,
    loginThunk: (email: string, password: string, rememberMe: boolean) => void
}
export type LoginFormPropsType = MapStateToPropsType & MapDispatchToPropsType;

const MapStateToProps = (): MapStateToPropsType => {
    return {
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





