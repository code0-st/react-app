import React from 'react';
import style from '../../Body.module.css';

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }
    }

    onInputStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    diactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }

    render = () => {
        return (
            <div> 
                {
                    !this.state.editMode && <div className={style.status}
                    onClick={this.activateEditMode} >{this.props.status}</div>
                }
                {
                    this.state.editMode && <div className={style.status_inputArea}>
                        <input type="text" className={style.status_input} 
                        value={this.state.status} autoFocus={true} onChange={this.onInputStatusChange}/>
                        <button className={style.saveBtn}
                        onClick={this.diactivateEditMode}>Сохранить</button>
                    </div>
                }        
            </div>
        )
        
    }
}

export default Status;