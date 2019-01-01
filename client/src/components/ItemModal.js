import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
   state = {
      modal: false,
      name: ''
   }

   toggle = () => {
      this.setState({
         modal: !this.state.modal
      });
   }

   addItemHandler = e => {
      e.preventDefault();
      
      const newItem = {
         name: this.state.name
      };

      // Add item via addItem action
      this.props.addItem(newItem);

      // Close modal
      this.toggle();
   }

   onChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      });
   }

   render() {
      return(
         <div>
            <Container>
               <Button
                  color="dark"
                  className="mb-3"
                  onClick={this.toggle}
               >
                  Add Item
               </Button>
            </Container>
            <Modal
               isOpen={this.state.modal}
               toggle={this.toggle}
            >
               <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
               <ModalBody>
                  <Form onSubmit={this.addItemHandler.bind(this)}>
                     <FormGroup>
                        <Label for="item">Item</Label>
                        <Input
                           type="text"
                           name="name"
                           id="name"
                           placeholder="Add shopping item"
                           onChange={this.onChange}
                        />
                     </FormGroup>
                     <Button
                        className="mt-3"
                        color="dark"
                        block
                     >
                        Add Item
                     </Button>
                  </Form>
               </ModalBody>
            </Modal>
         </div>
      );
   }
}

const mapStateToProps = state => ({
   item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);