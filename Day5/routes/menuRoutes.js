const express=require('express');
const router=express.Router();
const MenuItem=require('../models/menu')

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newItem = new MenuItem(data);
        const saveItem = await newItem.save();
        console.log("Food item data stored successfully");
        res.status(200).json(saveItem);
    } catch (err) {
        console.log('Sorry, ' + err);
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.get('/', async (req, res) => {
    try {
        const menuList = await MenuItem.find();
        if (menuList) {
            res.status(200).json(menuList);
        } else {
            res.status(200).json({ empty: 'No record found' });
        }
    } catch (err) {
        console.log('Sorry, ' + err);
        res.status(500).json({ error: 'Internal server error' })
    }
});

router.get('/:taste',async(req,res)=>{
    try {
        const tastType=req.params.taste;
        const ItemsBasedOnTaste=await MenuItem.find({taste:tastType});
        console.log("responce fatched")
        res.status(200).json(ItemsBasedOnTaste);
    } catch (error) {
        console.log('Sorry, ' + err);
        res.status(500).json({ error: 'Internal server error' })
    }
});

router.put('/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const updatedItemData=req.body;
        const updatedItem=await MenuItem.findByIdAndUpdate(id,updatedItemData,{
            new:true,
            runValidators:true
        })
        if(!updatedItem){
            console.log("Can not found Item");
            return res.status(404).json({ error: "Item not found" });
        }
        console.log("data updated sucessfully");
        res.status(200).json(updatedItem);
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const deletedItem= await MenuItem.findByIdAndDelete(id);
        if(!deletedItem){
            console.log("No record found");
            return res.status(404).json({error:"Item not found"})
        }
        console.log("data updated sucessfully");
        res.status(200).json({sucess:"Your data is deleted."});
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router;