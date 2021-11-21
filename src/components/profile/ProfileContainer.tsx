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
    updateProfileDataThunk,
    uploadUserPhotoThunk,
} from "../../redux/thunk";
import { compose } from "redux";
import {ACTIONS_TYPE} from "../../redux/actions";

export class ProfileUsersContainer extends React.Component<ProfileContainerType> {
    // componentDidMount() {
    //     let userID = this.props.match.params.userID;
    //     if (!userID) {
    //         // debugger
    //         // userID = '18933'
    //         console.log(this.props.authUserID)
    //         userID = String(this.props.authUserID);
    //     }
    //     this.props.selectUserProfileThunk(Number(userID));
    //     this.props.getUserStatusThunk(Number(userID));
    // }
    refreshProfile() {
            let userID = this.props.match.params.userID;
            if (!userID) {
                // debugger
                // userID = '18933'
                console.log(this.props.authUserID)
                userID = String(this.props.authUserID);
            }
            this.props.selectUserProfileThunk(Number(userID));
            this.props.getUserStatusThunk(Number(userID));
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.match.params.userID !== prevProps.match.params.userID) {
            this.refreshProfile()
        }

    }
    render() {
        // console.log(this.props.setErrorMessage)
        return (
            <>
                <Profile {...this.props}
                    isOwner={!this.props.match.params.userID}
                        changeStatus={this.props.changeUserStatusThunk}
                         userProfile={this.props.userProfile}
                         status={this.props.status}
                         uploadUserPhoto={this.props.uploadUserPhotoThunk}
                         onSubmitHandler={this.props.updateProfileDataThunk}
                         setErrorMessage={this.props.setErrorMessage}
                />
            </>
        )
    }
}

type mapStateToPropsType = {
    userProfile: UserProfileType,
    status: string,
    authUserID: number | null,
    setErrorMessage: string,
}
type PathParamType = {
    userID: string,
}

type ProfileContainerType = RouteComponentProps<PathParamType> & ProfileUsersContainerType;

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        userProfile: state.ProfileReducer.userProfile,
        status: state.ProfileReducer.status,
        authUserID: state.AuthReducer.id,
        setErrorMessage: state.ProfileReducer.setErrorMessage,
    }
}

// const WithAuthRedirectComponent = withAuthRedirect(ProfileUsersContainer)
// export const WithRouterProfileContainer = withRouter(ProfileUsersContainer)

const ConnectComponent = connect(mapStateToProps, {
    selectUserProfileThunk,
    getUserStatusThunk,
    changeUserStatusThunk,
    uploadUserPhotoThunk,
    updateProfileDataThunk,
})
export type ProfileUsersContainerType = ConnectedProps<typeof ConnectComponent>
// export const ProfileContainer = ConnectComponent(WithRouterProfileContainer)

export const ProfileContainer = compose<ComponentType>(
    ConnectComponent,
    // withAuthRedirect,
    withRouter,
)(ProfileUsersContainer)