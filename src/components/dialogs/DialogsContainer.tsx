import { SendMessage} from "../../redux/actions";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {DialogType, MessageType} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

type MapStateToPropsType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    // newMessageText: string,
    isAuth: boolean,
}
type MapDispatchToPropsType = {
    // sendMessage: () => void,
    // onChangeMessage: (newMessageText: string) => void,
    sendMessage: (message: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const MapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogs: state.DialogsReducer.dialogs,
        messages: state.DialogsReducer.messages,
        // newMessageText: state.DialogsReducer.newMessageText,
        isAuth: state.AuthReducer.isAuth,
    }
}
const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        // sendMessage: () => {
        //     dispatch(SendMessage())
        // },
        // onChangeMessage: (newMessageText: string) => {
        //     dispatch(InputNewMessageText(newMessageText))
        // },
        sendMessage: (message) => {
            dispatch(SendMessage(message))
        }
    }
}

const WithAuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(WithAuthRedirectComponent);





