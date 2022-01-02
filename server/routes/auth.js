const express = require("express");
const router = express.Router();

const {signup,signin} = require("../handlers/auth");

//router.post("/signup", signup);
router.post("/signin", signin);

/*router.route('/signup')
    .post((req, res) => {
       signup;
    });*/

router.route('/signup')
    .get((req, res) => {
       res.send("hello");
    });

module.exports = router;