import { z } from "zod";

export const createWorkspaceSchemas = z.object({
    name: z.string().trim().min(1, "Required"),
});