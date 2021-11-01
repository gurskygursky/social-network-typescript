import {AddPost, InputNewPostText} from "../../../redux/actions";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "../../../redux/redux-store";
import { PostType } from "../../../redux/profile-reducer";

type MapStateToPropsType = {
    posts: Array<PostType>,
    newPostText: string,
}
type MapDispatchToPropsType = {
    addPost: () => void,
    onChangePost: (newPostText: string) => void,
}

export type PostsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const MapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.ProfileReducer.posts,
        newPostText: state.ProfileReducer.newPostText,
    }
}
const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {dispatch(AddPost())},
        onChangePost: (newPostText: string) => {
            dispatch(InputNewPostText(newPostText))
        }
    }
}
export const PostsContainer = connect(MapStateToProps, MapDispatchToProps)(Posts);

