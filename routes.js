const routes = require('next-routes')();

routes
  .add('/campaigns/create', '/campaigns/create')
  .add('/campaigns/:address', '/campaigns/details')
  .add('/campaigns/:address/requests', '/campaigns/requests/index');

module.exports = routes;
