import React, { ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsType = {
    isAuth: boolean,
}
const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        isAuth: state.AuthReducer.isAuth,
    }
}

export function withAuthRedirect <T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: mapStateToPropsType) => {
        let {isAuth, ...restProps} = props;
            if (!isAuth) return <Redirect to = {'/login'}
            />
            return <Component {...restProps as T}/>
        }
        let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectRedirectComponent;
}