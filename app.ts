import Koa, { Context } from "koa"; // Koa on uppercase
import Router from "koa-router";

import readHandler from "./handlers/read";
import createHandler from "./handlers/create";
import updateHandler from "./handlers/update";
import deleteHandler from "./handlers/delete";

const app = new Koa(); // To create Web Server
const router = new Router(); // To create Router

// ctx = Context is the information related to the request and the response, so anything we want to do with request or response
// we put it in the context.
const hello = (ctx: Context) => {
  console.log(ctx);
  ctx.status = 200;
  ctx.body = "Yo Cory!";
};

// Routes
router.post("/", createHandler);
router.put("/", updateHandler);
router.get("/", readHandler);
router.delete("/", deleteHandler);

// Now we tell the app we created to use the routes and the handleres
app.use(router.routes());

// Lister
app.listen(3000);
