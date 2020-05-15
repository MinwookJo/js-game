import { matchPath } from "react-router-dom";
import express from "express";

import renderer from "./middleware/renderer";

/* eslint-disable import/prefer-default-export */
export const app = express();

app.use('/', (req, res) => {
    res.render('index.html');
})

// internal api endpoints
app.use(express.json());

// renderer
app.get("*", (req, res, next) => {
  const activeRoute =
    routes.find(route => matchPath(req.url, route)) || {};

  beforeRender
    .then((data) => renderer(storeHandler(data, req))(req, res, next))
    .catch(next);
});
