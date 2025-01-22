import { ConvexError } from "convex/values";
import {mutation,query} from "./_generated/server";
import { paginationOptsValidator } from "convex/server";

export const saveExecution = mutation({
    args:{
        language:v.string(),
        code:v.string(),
        output:v.optional(v.string()),
        error:v.optional(v.string()),
    },
    handler:async(ctx ,args)=>{
        const identity = await ctx.auth.getUserIdentity();
        if(!identiy) throw new ConvexError("User not authenticated");

        const user = await ctx.db.query("users").withIndex("by_user_id").filter((q)=>q.eq(q.field("userId"),identity.subject))
    }
})