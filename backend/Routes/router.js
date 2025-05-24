const expess = require("express");
const route = require("../controller/Singup");

const router = expess.Router();
router.post("/send", route.register);
router.post("/recieve",route.login)
router.get("/get",route.labform)
module.exports = router;
