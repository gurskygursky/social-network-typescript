import {Dispatch} from "redux";
import {HeaderAPI, ProfileAPI, UsersAPI} from "../api/API";
import {
    FollowUser,
    LoginUser,
    SelectPage,
    SelectUserProfile,
    SetUsers,
    SetUsersTotalCount,
    ToggleFollowingInProgress,
    ToggleIsFetching,
    UnfollowUser,
} from "./actions";
import {UserDataType} from "./auth-reducer";

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(ToggleIsFetching(true));
    // this.props.setToggle(true)
    // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
    //     withCredentials: true,
    // })
        UsersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(ToggleIsFetching(false));
                // props.setToggle(false)
    dispatch(SetUsers(data.items));
    // this.props.setUsers(responce.data.items)
    dispatch(SetUsersTotalCount(data.totalCount));
    // this.props.setTotalUsersCount(responce.data.totalCount)
    });
}

export const selectPageThunkCreator = (numberPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(SelectPage(numberPage))
    // this.props.selectPage(numberPage);
    // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`, {
    //     withCredentials: true,
    // })
    UsersAPI.getUsers(numberPage, pageSize)
        .then(data => {
            dispatch(ToggleIsFetching(false));
            // this.props.setToggle(false)
            dispatch(SetUsers(data.items));
            // this.props.setUsers(responce.data.items)
        });
}
export const followUserThunk = (userID: number) => (dispatch: Dispatch) => {
    dispatch(ToggleFollowingInProgress(true, userID));
    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
    //     withCredentials: true,
    //     headers: {
    //         "API-KEY": "8c4a0698-b08e-4693-b5a1-2d3805a6e1dc"
    //     },
    // })
    UsersAPI.follow(userID)
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(FollowUser(userID));
            }
            dispatch(ToggleFollowingInProgress(false, userID));
        })
}
export const unfollowUserThunk = (userID: number) => (dispatch: Dispatch) => {
    dispatch(ToggleFollowingInProgress(true, userID));
    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
    //     withCredentials: true,
    //     headers: {
    //         "API-KEY": "8c4a0698-b08e-4693-b5a1-2d3805a6e1dc"
    //     },
    // })
    UsersAPI.unfollow(userID)
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(UnfollowUser(userID));
            }
            dispatch(ToggleFollowingInProgress(false, userID));
        });
}

export const loginUserThunk = () => (dispatch: Dispatch) => {
    HeaderAPI.authMe()
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(LoginUser(responce.data.data));
            }
        });
}

export const selectUserProfileThink = (userID: string) => (dispatch: Dispatch) => {
    ProfileAPI.selectUserProfile(userID)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
        .then(responce => {
            dispatch(SelectUserProfile(responce.data));
        })
}

