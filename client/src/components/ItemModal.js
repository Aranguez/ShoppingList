import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
 
class ItemModal extends Component {

    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const newItem = {
            name: this.state.name
        }

        this.props.addItem(newItem)
        this.toggle()
    }

    render() {
        return (
            <div>
                <Button color="dark"
                        style={{marginBottom: '2rem'}}
                        onClick={this.toggle}
                >Add Item</Button>

                <Modal  isOpen={this.state.modal}
                        >
                        <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={e => this.onSubmit(e)}>
                                <FormGroup>
                                    <Label for="item">Item</Label>
                                    <Input  placeholder="name"
                                            name="name"
                                            id="item"
                                            onChange={event => this.onChange(event)}></Input>
                                    <Button color="black"
                                            style={{marginTop: '2rem'}}
                                            block>Add Item</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                </Modal>
            </div>
        );
    }
}

ItemModal.propTypes = {
    addItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);