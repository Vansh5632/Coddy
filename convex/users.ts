import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const syncUser = mutation({
  args: {
    userId: v.string(),
    email: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    /**
     * Retrieves the first user from the "users" table that matches the provided userId.
     *
     * @param ctx - The context object containing the database connection.
     * @param args - An object containing the userId to filter the users by.
     * @returns A promise that resolves to the first user object that matches the userId, or null if no user is found.
     */
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .first();

    if (!existingUser) {
      await ctx.db.insert("users", {
        userId: args.userId,
        email: args.email,
        name: args.name,
        isPro: false,
      });
    }
  },
});
