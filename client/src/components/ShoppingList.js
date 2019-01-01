import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';

class ShoppingList extends Component {

   componentDidMount() {
      this.props.getItems();
   }

   addItemHandler = () => {
      // const name = prompt('Enter Item');

      // if (name) {
      //    this.setState({
      //       items: this.state.items.concat([{
      //          id: uuid(),
      //          name: name
      //       }])
      //    });
      // }
   }

   deleteItemHandler = id => {
      this.props.deleteItem(id);
   }

   render() {
      const { items } = this.props.item;
      return (
         <div>
            <Container>
               <ListGroup>
                  <TransitionGroup className="shopping-list">
                     {
                        items.map( ({_id, name}) => {
                           return (
                              <CSSTransition key={_id} timeout={500} classNames="fade">
                                 <ListGroupItem>
                                    <Button 
                                       className="mr-3"
                                       color="danger"
                                       size="sm"
                                       onClick={this.deleteItemHandler.bind(this, _id)}
                                    >
                                       &times;
                                    </Button>
                                    {name}
                                 </ListGroupItem>
                              </CSSTransition>
                           )
                        })
                     }
                  </TransitionGroup>
               </ListGroup>
            </Container>
         </div>
      );
   }
}

ShoppingList.propTypes = {
   getItems: PropTypes.func.isRequired,
   item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
   return {
      item: state.item
   }
}

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);