import {InputNewMessageText, SendMessage} from "../../redux/actions";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {DialogType, MessageType} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type MapStateToPropsType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    newMessageText: string,
}
type MapDispatchToPropsType = {
    sendMessage: () => void,
    onChangeMessage: (newMessageText: string) => void,
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const MapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogs: state.DialogsReducer.dialogs,
        messages: state.DialogsReducer.messages,
        newMessageText: state.DialogsReducer.newMessageText,
    }
}
const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(SendMessage())
        },
        onChangeMessage: (newMessageText: string) => {
            dispatch(InputNewMessageText(newMessageText))
        },
    }
}

export const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs);




