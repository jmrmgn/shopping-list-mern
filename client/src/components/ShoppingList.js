import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
   state = {
      items: [
         { id: uuid(), name: 'Eggs' },
         { id: uuid(), name: 'Milk' },
         { id: uuid(), name: 'Steak' },
         { id: uuid(), name: 'Water' }
      ]
   }

   addItemHandler = () => {
      const name = prompt('Enter Item');

      if (name) {
         this.setState({
            items: this.state.items.concat([{
               id: uuid(),
               name: name
            }])
         });
      }
   }

   deleteItemHandler = (id) => {
      this.setState({
         items: this.state.items.filter(item => item.id !== id)
      });
      console.log("TEst");
   }

   render() {
      const { items } = this.state;
      return (
         <div>
            <Container>
               <Button
                  color="dark"
                  className="mb-3"
                  onClick={this.addItemHandler.bind(this)}
               >
                  Add Item
               </Button>
               <ListGroup>
                  <TransitionGroup className="shopping-list">
                     {
                        items.map( ({id, name}) => {
                           return (
                              <CSSTransition key={id} timeout={500} classNames="fade">
                                 <ListGroupItem>
                                    <Button 
                                       className="mr-3"
                                       color="danger"
                                       size="sm"
                                       onClick={this.deleteItemHandler.bind(this, id)}
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

export default ShoppingList;