import { Context } from "koa";

const deleteHandler = (ctx: Context) => {
  console.log(ctx);
  ctx.status = 200;
  ctx.body = "Yo Cory!";
};

export default deleteHandler;
