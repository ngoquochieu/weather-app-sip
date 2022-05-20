const locationRouter = require('./location');

function router(app) {
    app.use('/api/v1/location', locationRouter);
    app.use('/api/v1/test', locationRouter);
}

module.exports = router;