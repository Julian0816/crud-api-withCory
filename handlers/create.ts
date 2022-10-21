import { Context } from "koa";

const createHandler = (ctx: Context) => {
  console.log(ctx);
  ctx.status = 200;
  ctx.body = "Yo Cory!";
};

export default createHandler;
