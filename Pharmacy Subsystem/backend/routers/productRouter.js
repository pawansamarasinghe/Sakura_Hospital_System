import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';

import {isAdmin,isAuth, isSeller} from '../utils.js';


const productRouter =express.Router();
//list of products
productRouter.get(
    '/',
    expressAsyncHandler(async (req,res) =>{
    const name =req.query.name || '';
    const category =req.query.category || '';
    const seller =req.query.seller || '';
    const min =req.query.min && Number(req.query.min) !== 0 ? Number(req.query.min) : 0;
    const max =req.query.max && Number(req.query.max) !== 0 ? Number(req.query.max) : 0;
  
    const nameFilter =name?{name :{$regex :name,$options :'i'}}:{};
    const sellerFilter =seller?{ seller}: {};
    const categoryFilter = category ? { category } : {};
    const priceFilter = min && max ? { price: { $gte: min, $lte: max } } : {};
   
    const products =await Product.find({...sellerFilter,...nameFilter,...categoryFilter,...priceFilter,}).populate('seller','seller.name seller.logo');
    res.send(products);
}));
productRouter.get(
  '/categories',
  expressAsyncHandler(async (req, res) => {
    const categories = await Product.find().distinct('category');
    res.send(categories);
  })
);
productRouter.get('/seed',expressAsyncHandler(async(req,res) =>{
    //await Product.remove({});
    const createdProducts =await Product.insertMany(data.products);
    res.send({createdProducts});

})
);

//product details
productRouter.get('/:id',expressAsyncHandler(async(req,res)=>{
    const product =await Product.findById(req.params.id).populate(
      'seller',
      'seller.name seller.logo seller.rating seller.numReviews'
    );
     if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message:'Product Not Found'})

    }

}));

productRouter.post(
'/',
isAuth,
isSeller,

expressAsyncHandler(async(req,res)=>{
    const product =new Product({
        name:'sample name' + Date.now(),
        seller:req.user._id,
        image:'https://cdn.shopify.com/s/files/1/0368/8785/5243/products/64054_039ec651-fc21-4196-8d0b-fd2b0c73e5e4.png?v=1617173844',
        price:0,
        category:'sample category',
        brand:'sample brand',
        countInStock:0,
        rating:0,
        numReviews:0,
        description:'sample description',
     });
    
    const createdProduct = await product.save();
    res.send({message:'Product Created',product: createdProduct});
})
);
//product update
productRouter.put(
    '/:id',
    isAuth,
    isSeller,
  
    expressAsyncHandler(async (req, res) => {
      const productId = req.params.id;
      const product = await Product.findById(productId);
      if (product) {
        product.name = req.body.name;
        product.price = req.body.price;
        product.image = req.body.image;
        product.category = req.body.category;
        product.brand = req.body.brand;
        product.countInStock = req.body.countInStock;
        product.description = req.body.description;
        const updatedProduct = await product.save();
        res.send({ message: 'Product Updated', product: updatedProduct });
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );

  productRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      if (product) {
        const deleteProduct = await product.remove();
        res.send({ message: 'Product Deleted', product: deleteProduct });
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );
  
  
  productRouter.post(
    '/:id/reviews',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const productId = req.params.id;
      const product = await Product.findById(productId);
      if (product) {
       
       if (product.reviews.find((x) => x.name === req.user.name)) {
        return res
          .status(400)
          .send({ message: 'You already submitted a review' });
      }
       const review ={
         name:req.user.name,
         rating:Number(req.body.rating),
         comment:req.body.comment
        };
        product.reviews.push(review);
        product.numReviews =product.reviews.length;
        product.rating =product.reviews.reduce((a,c) =>c.rating + a , 0) / product.reviews.length;
        const updatedProduct =await product.save();
        res.status(201).send({ message: 'Review Created' , review: updatedProduct.reviews[updatedProduct.reviews.length -1] });
      } else {
        res.status(404).send({ message: 'Review Not Found' });
      }
    })
  );

 
 
  

  export default productRouter;