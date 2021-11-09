import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {UserProfileType} from "../../redux/profile-reducer";
import {
    changeUserStatusThunk,
    getUserStatusThunk,
    selectUserProfileThunk,
} from "../../redux/thunk";
import { compose } from "redux";

export class ProfileUsersContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        let userID =this.props.match.params.userID;
        if (!userID) {
            userID = '18933'
        }
        this.props.selectUserProfileThunk(Number(userID));
        this.props.getUserStatusThunk(Number(userID));
    }
    render() {
        return (
            <>
                <Profile {...this.props}
                        changeStatus={this.props.changeUserStatusThunk}
                         userProfile={this.props.userProfile}
                         status={this.props.status} />
            </>
        )
    }
}

type mapStateToPropsType = {
    userProfile: UserProfileType,
    status: string,
}
type PathParamType = {
    userID: string,
}

type ProfileContainerType = RouteComponentProps<PathParamType> & ProfileUsersContainerType;

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        userProfile: state.ProfileReducer.userProfile,
        status: state.ProfileReducer.status,
    }
}

// export const WithRouterProfileContainer = withRouter(ProfileUsersContainer)

const ConnectComponent = connect(mapStateToProps, {
    selectUserProfileThunk,
    getUserStatusThunk,
    changeUserStatusThunk,
})
export type ProfileUsersContainerType = ConnectedProps<typeof ConnectComponent>
// export const ProfileContainer = ConnectComponent(WithRouterProfileContainer)

export const ProfileContainer = compose<ComponentType>(
    ConnectComponent,
    withRouter,
)(ProfileUsersContainer)