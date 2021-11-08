import React from "react";

export class Status extends React.Component {
    state = {
        editMode: false,
    }
    activateEditTitle() {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditTitle() {
        this.setState({
            editMode: false,
        })
    }
    render() {
        return (
            <div>
                {
                    !this.state.editMode
                    && <span onClick={this.activateEditTitle.bind(this)}>xxxxSTATUSxxxx</span>
                }
                <div>
                    {this.state.editMode
                    && <input type={'text'}
                              autoFocus
                              onBlur={this.deactivateEditTitle.bind(this)}
                    />
                    }
                </div>
            </div>
        )
    }
}