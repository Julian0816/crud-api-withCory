import { Context } from "koa";

const readHandler = (ctx: Context) => {
  console.log(ctx);
  ctx.status = 200;
  ctx.body = "Yo Cory!";
};

export default readHandler;
