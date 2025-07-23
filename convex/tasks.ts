import { query } from "./_generated/server";

type Todo = { _id: string; isCompleted: boolean; text: string };

export const get = query({
  args: {},
  handler: async (ctx) => {
    return (await ctx.db.query("tasks").collect()) as Todo[];
  },
});
