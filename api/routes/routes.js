module.exports = function(app) {
  var apiController = require('../controllers/controller');

  // IOU Routes
  app.route('/api/example/me').get(apiController.me)
  app.route('/api/example/peers').get(apiController.peers)
  app.route('/api/example/create-iou').post(apiController.createIOU)
  app.route('/api/example/ious').get(apiController.getIOUs)
};