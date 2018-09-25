import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class PopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                <h1>React-Modal Examples</h1>
                <input type="button" value="Open" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="90%" height="90%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h1>{this.props.Title}</h1>
                        <p>{this.props.description}</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}