import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "./apiservices";

export function useDeleteNote() {
    const queryClient = useQueryClient();
    const { mutate: deletemutateNote, isLoading: isDeleating } = useMutation({
        mutationFn: deleteNote,
        onSuccess: () => {
            console.log("Deleted note");
            queryClient.invalidateQueries({
                queryKey: ["notes"],
            });
        },
        onError: (err) => console.log("ERROR", err.message),
    });
    return { deletemutateNote, isDeleating };
}
