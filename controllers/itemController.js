const Item = require('../models/Item');

exports.getItems = (req, res) => {
   Item.find()
      .sort({ date: -1 })
      .then(items => res.status(200).json(items))
      .catch(err => console.log(err));
};

exports.postItem = (req, res) => {
   const name = req.body.name;

   const newItem = new Item({
      name: name
   });

   newItem.save()
      .then(item => res.status(200).json(item))
      .catch(err => console.log(err));
};

exports.deleteItem = (req, res) => {
   const id = req.params.id;

   Item.findById(id)
      .then((item) => {
         if (!item) {
            throw new Error();
         }
         else {
            Item
               .deleteOne({ _id: id })
               .then(() => res.status(200).json( {success: true } ));
         }
      })
      .catch(err => res.status(404).json({ success: false }));
}