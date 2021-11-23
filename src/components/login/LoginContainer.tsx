import {connect} from "react-redux";
import {Login} from "./Login";
import {loginThunk} from "../../redux/thunk";
import {RootStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    isAuth: boolean,
    setErrorMessage: string,
}
type MapDispatchToPropsType = {
    loginThunk: (email: string, password: string, rememberMe: boolean) => void,
}
export type LoginFormPropsType = MapStateToPropsType & MapDispatchToPropsType;

const MapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.AuthReducer.isAuth,
        setErrorMessage: state.AuthReducer.setErrorMessage,
    }
}

export const LoginContainer = connect(MapStateToProps, {loginThunk})(Login);





