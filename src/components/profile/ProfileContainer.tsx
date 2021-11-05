import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {Dispatch} from "redux";
import {SelectUserProfile} from "../../redux/actions";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {UserProfileType} from "../../redux/profile-reducer";

export class ProfileUsersContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        const userID = this.props.match.params.userID
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then(responce => {
                debugger
                this.props.SelectUserProfile(responce.data.data.userData)
            })
    }
    render() {
        return (
            <>
                <Profile {...this.props} userProfile={this.props.userProfile} />
            </>
        )
    }
}
type mapStateToPropsType = {
    userProfile: UserProfileType,
}
type mapDispatchToPropsType = {
    SelectUserProfile: (userProfile: UserProfileType) => void,
}
type PathParamType = {
    userID: string,
}

export type OwnProsType = mapStateToPropsType & mapDispatchToPropsType;
type ProfileContainerType = RouteComponentProps<PathParamType> & OwnProsType;

const mapStateToProps = (state: RootStateType):mapStateToPropsType => {
    return {
        userProfile: state.ProfileReducer.userProfile,
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        SelectUserProfile: (userProfile: UserProfileType) => {
            dispatch(SelectUserProfile(userProfile))
        },
    }
}

export const WithRouterProfileContainer = withRouter(ProfileUsersContainer)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouterProfileContainer)