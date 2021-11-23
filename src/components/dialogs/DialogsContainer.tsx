import {SendMessage} from "../../redux/actions";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {DialogType, MessageType} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

type MapStateToPropsType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    isAuth: boolean,
}
type MapDispatchToPropsType = {
    sendMessage: (message: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const MapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogs: state.DialogsReducer.dialogs,
        messages: state.DialogsReducer.messages,
        isAuth: state.AuthReducer.isAuth,
    }
}
const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (message) => {
            dispatch(SendMessage(message))
        }
    }
}

const WithAuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(WithAuthRedirectComponent);





