import React, {ChangeEvent} from "react";

type StatusPropsType = {
    statusText: string,
    changeStatus: (status: string) => void,
}

export class Status extends React.Component<StatusPropsType> {
    componentDidUpdate(prevProps: Readonly<StatusPropsType>, prevState: Readonly<{editMode: boolean, statusText: string}>, snapshot?: any) {
        if (prevProps.statusText !== this.props.statusText) {
            this.setState({
                status: this.props.statusText
            })
        }
    }
    state = {
        editMode: false,
        status: this.props.statusText,
    }

    activateEditTitle = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditTitle = () => {
        this.setState({
            editMode: false,
        })
        this.props.changeStatus(this.state.status)
    }

    onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
       this.setState({
           status: event.currentTarget.value
       })
    }

    render() {
        console.log(this.props.statusText)
        return (
            <div>
                {
                    !this.state.editMode
                        ? <span onClick={this.activateEditTitle}>{this.props.statusText ? this.props.statusText : "status text"}</span>
                        : <input onChange={this.onStatusChange}
                                value={this.state.status}
                                autoFocus
                                onBlur={this.deactivateEditTitle}
                        />
                }
            </div>
        )
    }
}