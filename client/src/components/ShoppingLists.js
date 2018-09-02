import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { getItems, deleteItem } from '../actions/itemActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class ShoppingLists extends Component {

    componentDidMount(){
        this.props.getItems()
    }

    onDelete = id => {
        console.log('delete item ' + id)
        this.props.deleteItem(id)
    }

    render(){
        const { items } = this.props.item
        items.forEach(item => {
            console.log(item._id)
        });

        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        { items.length > 0 && items.map( ({ _id, name }) => (
                            <CSSTransition key={_id} timeout={300} classNames="fade">
                                <ListGroupItem>
                                    <Button className="removeBtn mr-2" color="danger" size="sm"
                                            onClick={ this.onDelete.bind(this, _id) }>&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ) )}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ShoppingLists.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingLists);