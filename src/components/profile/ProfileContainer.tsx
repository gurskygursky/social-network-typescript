import React from "react";
import {Profile} from "./Profile";
import {connect, ConnectedProps} from "react-redux";
import axios from "axios";
import {Dispatch} from "redux";
import {SelectUserProfile} from "../../redux/actions";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {UserProfileType} from "../../redux/profile-reducer";
import {ProfileAPI} from "../../api/API";
import {
    followUserThunk,
    getUsersThunkCreator,
    selectPageThunkCreator,
    selectUserProfileThink,
    unfollowUserThunk
} from "../../redux/thunk";
import {ClassUsersContainer} from "../users/UsersContainer";

export class ProfileUsersContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        // const userID = this.props.match.params.userID
        this.props.selectUserProfileThink(this.props.match.params.userID);
        // ProfileAPI.selectUserProfile(this.props.match.params.userID)
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
        //     .then(responce => {
        //             this.props.SelectUserProfile(responce.data)
        //     })
    }
    render() {
        return (
            <>
                <Profile {...this.props} />
            </>
        )
    }
}
type mapStateToPropsType = {
    userProfile: UserProfileType,
}
// type mapDispatchToPropsType = {
//     SelectUserProfile: (userProfile: UserProfileType) => void,
// }
type PathParamType = {
    userID: string,
}

// export type OwnProsType = mapStateToPropsType & mapDispatchToPropsType;
type ProfileContainerType = RouteComponentProps<PathParamType> & ProfileUsersContainerType;

const mapStateToProps = (state: RootStateType):mapStateToPropsType => {
    return {
        userProfile: state.ProfileReducer.userProfile,
    }
}
// const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
//     return {
//         SelectUserProfile: (userProfile: UserProfileType) => {
//             dispatch(SelectUserProfile(userProfile))
//         },
//     }
// }

export const WithRouterProfileContainer = withRouter(ProfileUsersContainer)

const ConnectComponent = connect(mapStateToProps, {
    selectUserProfileThink,
})
export type ProfileUsersContainerType = ConnectedProps<typeof ConnectComponent>
export const ProfileContainer = ConnectComponent(WithRouterProfileContainer)

// export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouterProfileContainer)