import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateNote } from "./apiservices";

export function useUpdateNote() {
    const queryClient = useQueryClient();
    const { isLoading: isUpdating, mutate: updatemutateNote } = useMutation({
        mutationFn: ({ id, text }) => updateNote(id, text),
        onSuccess: () => {
            console.log("updated sucessfully");
            queryClient.invalidateQueries({
                queryKey: ["notes"],
            });
        },
        onError: (err) => console.log(err.message),
    });
    return { isUpdating, updatemutateNote };
}
