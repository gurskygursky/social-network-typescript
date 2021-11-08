import React, {ChangeEvent} from "react";

type StatusPropsType = {
    status: string,
    changeStatus: (status: string) => void,
}

export class Status extends React.Component<StatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status,
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
    }

    onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
       this.setState({
           status: event.currentTarget.value
       })
        debugger
        this.props.changeStatus(this.state.status)
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                    && <span onClick={this.activateEditTitle}>{this.props.status}</span>
                }
                <div>
                    {this.state.editMode
                    && <input type={'text'}
                              onChange={this.onStatusChange}
                              value={this.state.status }
                              autoFocus
                              onBlur={this.deactivateEditTitle}
                    />
                    }
                </div>
            </div>
        )
    }
}