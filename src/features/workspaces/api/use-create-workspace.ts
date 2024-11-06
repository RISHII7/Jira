import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type ResponseType = InferResponseType<typeof client.api.workspaces["$post"]>;
type RequestType = InferRequestType<typeof client.api.workspaces["$post"]>;

export const useCreateWorkspace = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
    ResponseType, 
    Error, 
    RequestType>({
        mutationFn: async ({ json }) => {
            const response = await client.api.workspaces["$post"]({ json });

            if (!response.ok) {
                throw new Error("Failed to create workspace")
            };
            
            return await response.json();
        },
        onSuccess: () => {
            toast.success("Workspace Created");
            queryClient.invalidateQueries({ queryKey: ["workspaces"] });
        },
        onError: () => {
            toast.error("Failed to create workspace");
        }
    });

    return mutation;
};