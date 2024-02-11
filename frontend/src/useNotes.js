import { useQuery } from "@tanstack/react-query";
import { getAllNotes } from "./apiservices";

function useNotes() {
    const {
        isLoading,
        data: notes,
        error,
    } = useQuery({
        queryKey: ["notes"],
        queryFn: getAllNotes,
    });
    return { isLoading, notes, error };
}

export { useNotes };
