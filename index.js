const express = require("express");
const { postgraphile } = require("postgraphile");
const ConnectionFilterPlugin = require("postgraphile-plugin-connection-filter");

const app = express();

/* Example middleware you might want to put in front of PostGraphile */
// app.use(require('morgan')(...));
// app.use(require('compression')({...}));
// app.use(require('helmet')({...}));

app.use(postgraphile(process.env.DATABASE || "postgres:///", {
  appendPlugins: [ConnectionFilterPlugin],
  graphiql: true
}));

app.listen(process.env.PORT || 3000);