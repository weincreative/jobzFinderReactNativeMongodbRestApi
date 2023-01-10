const express = require('express');
const Job = require('../models/Job')

const router = express.Router();

router.get('/', (req, res) => {
    Job.find()
    .then((jobs)=>{
        res.json(jobs);
    })
    .catch((error)=>{
        res.json(error);
    });
});

router.get('/:id', (req, res) => {
    Job.findById(req.params.id)
    .then((job)=>{
        res.json(job);
    })
    .catch((error)=>{
        res.json(error);
    });
});

router.post('/', (req, res) => {
    const job = new Job({ ...req.body, createUser: req.userId });
    job.save();
    res.json(job);
});

router.put('/:id', (req, res) => {
    Job.findByIdAndUpdate(req.params.id, req.body)
    .then((job)=>{
        res.json(job);
    })
    .catch((error)=>{
        res.json(error);
    });
});

router.delete('/:id', (req, res) => {
    Job.findByIdAndDelete(req.params.id)
    .then((job)=>{
        res.json(job);
    })
    .catch((error)=>{
        res.json(error);
    });
});

module.exports = router;