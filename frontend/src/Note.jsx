/*eslint-disable react/prop-types*/

import { useState } from "react";
import { deleteNote, updateNote } from "./apiservices";

const stylesClick = {
    cursor: "pointer",
};

function Note({ note }) {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [text, setText] = useState("");
    async function handleDeleteClick(id) {
        await deleteNote(id);
    }

    async function handleUpdateClick() {
        const id = note._id;
        if (text === "" && !id) return;
        const data = await updateNote(id, text);
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
