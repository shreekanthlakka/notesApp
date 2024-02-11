import { createNewNotes } from "./apiservices";
import { useCreateNote } from "./useCreateNote";

function NewNote() {
    const { createNotes, isCreating } = useCreateNote();
    async function handleSubmit(e) {
        e.preventDefault();
        const newNotes = {
            title: e.target[0].value,
            description: e.target[1].value,
        };
        // await createNewNotes(newNotes);
        createNotes(newNotes);
        e.target[0].value = "";
        e.target[1].value = "";
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
            <br />
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" />
            <br />
            <button type="submit">Create Note</button>
        </form>
    );
}

export default NewNote;
