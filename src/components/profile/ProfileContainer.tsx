import React from "react";
import {Profile} from "./Profile";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {UserProfileType} from "../../redux/profile-reducer";
import {
    selectUserProfileThink,
} from "../../redux/thunk";

export class ProfileUsersContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        this.props.selectUserProfileThink(this.props.match.params.userID);
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
type PathParamType = {
    userID: string,
}

type ProfileContainerType = RouteComponentProps<PathParamType> & ProfileUsersContainerType;

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        userProfile: state.ProfileReducer.userProfile,
    }
}

export const WithRouterProfileContainer = withRouter(ProfileUsersContainer)

const ConnectComponent = connect(mapStateToProps, {
    selectUserProfileThink,
})
export type ProfileUsersContainerType = ConnectedProps<typeof ConnectComponent>
export const ProfileContainer = ConnectComponent(WithRouterProfileContainer)