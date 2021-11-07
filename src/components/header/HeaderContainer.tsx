import React from "react";
import "./Header.module.css";
import {connect, ConnectedProps} from "react-redux";
import {Dispatch} from "redux";
import {UserDataType} from "../../redux/auth-reducer";
import {LoginUser} from "../../redux/actions";
import {RootStateType} from "../../redux/redux-store";
import axios from "axios";
import {Header} from "./Header";
import {HeaderAPI} from "../../api/API";
import {followUserThunk, getUsersThunkCreator, loginUserThunk, selectPageThunkCreator, unfollowUserThunk} from "../../redux/thunk";
import {ClassUsersContainer} from "../users/UsersContainer";

export class LoginHeaderContainer extends React.Component<LoginHeaderContainerPropsType> {
    componentDidMount() {
        this.props.loginUserThunk();
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // })
        // HeaderAPI.authMe()
        //     .then(responce => {
        //         if (responce.data.resultCode === 0) {
        //             this.props.LoginUser(responce.data.data)
        //         }
        //     })
    }

    render() {
        return (
            <Header {...this.props}  />
        );
    }
}

type mapStateToPropsType = {
    userData: UserDataType
    isAuth: boolean,
}
// type mapDispatchToPropsType = {
//     LoginUser: (userData: UserDataType) => void,
// }
// type LoginHeaderContainerType = mapStateToPropsType & mapDispatchToPropsType;
const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        userData: state.AuthReducer.userData,
        isAuth: state.AuthReducer.isAuth,
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         LoginUser: (userData: UserDataType) => {
//             dispatch(LoginUser(userData))
//         }
//     }
// }

const ConnectComponent = connect(mapStateToProps, {
loginUserThunk,
})

export type LoginHeaderContainerPropsType = ConnectedProps<typeof ConnectComponent>
export const HeaderContainer = ConnectComponent(LoginHeaderContainer)

// export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(LoginHeaderContainer)

