const router = require('express').Router();

// basic middleware logging
router.use((req, res, next) => {
    console.log(new Date().toUTCString(), req.path);
    next();
});

module.exports = router;
