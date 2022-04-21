const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
let student = require("../models/Student");

// CREATE Student
router.post('/create-student', (req, res, next) => {
    student.create( req.body, (error, data) => {
        if (error) {
            return next(error)
        }
        else {
            console.log(data)
            res.json(data)
        }
    })
})

// READ Students
router.get('/', (req, res) => {
    student.find( (error, data) => {
        if (error) {
            return next(error);
          } else {
            res.json(data);
          }
    })
})

// UPDATE student

// First find student with particular id
router.route('./update-student/:id')
.get((req, res) => {
    student.findById( req.params.id, (error, data) => {
        if (error) {
            return next(error)
        }
        else {
            res.json(data)
        }
    })
})

// Then update student with particular id
.put((req, res, next) => {
    student.findByIdAndUpdate( req.params.id, 
        {
            $set: req.body
        }),
        ( error, data ) => {
            if (error) {
                return next(error);
                console.log(error);
            }
            else {
                res.json(data);
                console.log("Student updated successfully !");
              }
        }
})

// DELETE STUDENT
router.delete('/delete-student/:id', ( req, res, next) => {
    student.findByIdAndDelete( req.params.id, (error, data) => {
        if (error) {
            return next(error);
          } else {
            res.status(200).json({
              msg: data,
            });
          }
    })
})

module.exports = router ;




