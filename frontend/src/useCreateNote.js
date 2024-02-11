import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewNotes } from "./apiservices";

function useCreateNote() {
    const queryClient = useQueryClient();
    const { mutate: createNotes, isLoading: isCreating } = useMutation({
        mutationFn: createNewNotes,
        onSuccess: () => {
            console.log(" new notes ctrated sucessfuly ");
            queryClient.invalidateQueries({
                queryKey: ["notes"],
            });
        },
        onError: (err) => console.log("err", err.message),
    });
    return { createNotes, isCreating };
}

export { useCreateNote };
