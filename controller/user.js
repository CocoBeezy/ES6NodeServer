const mongoose = require('mongoose');
const Router = require('express').Router;
const User = require('../model/user');

module.exports = ({ config, db }) => {
  let api = Router();

  /********
   * CRUD *
   ********/
  // '/v1/user/add' - Create
  api.post('/', (req, res, next) => {
    let newUser = new User();
    newUser.name = req.body.name;

    newUser.save(err => {
      if (err) res.send(err);
      res.json({ message: 'User saved successfully' });
    });
  });

  // '/v1/user' - Read
  api.get('/', (req, res, next) => {
    User.find({}, (err, users) => {
      if(err) res.send(err);
      res.json(users);
    });
  });

  // '/v1/user/:id' - Read 1
  api.get('/:id', (req, res, next) => {
    User.findById(req.params.id, (err, user) => {
      if(err) res.send(err);
      res.json(user);
    });
  });

  // '/v1/user/:id' - Update
  api.put('/:id', (req, res, next) => {
    User.findById(req.params.id, (err, user) => {
      if(err) res.send(err);
      user.name = req.body.name;
      user.save(err => {
        if(err) res.send(err);
        res.json({ message: 'User info updated' });
      });
    });
  });

  // '/v1/user/:id' - Delete
  api.delete('/:id', (req, res, next) => {
    User.remove({ _id: req.params.id }, (err, user) => {
      if(err) res.send(err);
      res.json({ message: 'Restaurant was successfully removed' });
    });
  });

  return api;
}