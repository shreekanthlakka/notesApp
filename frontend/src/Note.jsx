/*eslint-disable react/prop-types*/
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { deleteNote, updateNote } from "./apiservices";
import { useUpdateNote } from "./useUpdateNote";
import { useDeleteNote } from "./useDeleteNote";

const stylesClick = {
    cursor: "pointer",
};

function Note({ note }) {
    const { deletemutateNote } = useDeleteNote();
    const { updatemutateNote } = useUpdateNote();

    // const queryClient = useQueryClient();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [text, setText] = useState("");
    async function handleDeleteClick(id) {
        // await deleteNote(id);
        deletemutateNote(id);
    }

    async function handleUpdateClick() {
        const id = note._id;
        if (text === "" && !id) return;
        // const data = await updateNote(id, text);
        // queryClient.invalidateQueries({
        //     queryKey: ["notes"],
        // });
        updatemutateNote({ id, text });
        // console.log("updated data", data);
        setDialogOpen(false);
    }
    return (
        <div>
            <h2>{note.title}</h2>
            <p style={stylesClick} onClick={() => setDialogOpen(true)}>
                {note.description}
            </p>
            <button onClick={() => handleDeleteClick(note._id)}>Delete</button>
            <button onClick={() => setDialogOpen(true)}>Update</button>
            <dialog open={dialogOpen}>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={handleUpdateClick}>submit</button>
                <button onClick={() => setDialogOpen(false)}>Close</button>
            </dialog>
        </div>
    );
}

export default Note;
