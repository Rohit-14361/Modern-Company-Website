const express=require('express');
const router=express.Router();
const {createContact} =require('../controllers/contactController');

router.post("/api/contact", createContact)
router.get("/api/health", (req, res) => res.json({ status: "ok" }));

module.exports=router;