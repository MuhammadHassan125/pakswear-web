
const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    title: {type: String, required:true},
    desc: {type: String, required:true},
    img: {type: String, required:true},
    category: {type: String, required:true},
    size: {type: String, required:true},
    color: {type: String, required:true},
    prize: {type: String, required:true},
    availableQty: {type: String, required:true},


  }, {timestamps: true});

  export default mongoose.model("Product", ProductSchema);
  