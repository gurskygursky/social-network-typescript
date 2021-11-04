import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {Dispatch} from "redux";
import {SelectUserProfile} from "../../redux/actions";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

export class ProfileUsersContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        const userID = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then(responce => {
                this.props.SelectUserProfile(<img src={responce.data.photos.small}/>)
                // this.props.SelectUserProfile(responce.data.aboutMe);
                // this.props.SelectUserProfile(responce.data.lookingForAJobDescription);
            })
    }
    render() {
        return (
            <>
                <Profile userProfile={this.props.userProfile} />
            </>
        )
    }
}
type mapStateToPropsType = {
    userProfile: Object,
}
type mapDispatchToPropsType = {
    SelectUserProfile: (userProfile: Object) => void,
}
type PathParamType = {
    userId: string,
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
        SelectUserProfile: (userProfile: Object) => {
            dispatch(SelectUserProfile(userProfile))
        },
    }
}

export const WithRouterProfileContainer = withRouter(ProfileUsersContainer)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouterProfileContainer)