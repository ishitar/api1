module.exports = function(app, db) {
    app.post('/routes', (req, res) => {res.send('Hello')});
};
