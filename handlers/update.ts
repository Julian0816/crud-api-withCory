import { Context } from "koa";

const updateHandler = (ctx: Context) => {
  console.log(ctx);
  ctx.status = 200;
  ctx.body = "Yo Cory!";
};

export default updateHandler;
