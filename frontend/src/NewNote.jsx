import { createNewNotes } from "./apiservices";

function NewNote() {
    async function handleSubmit(e) {
        e.preventDefault();
        const newNotes = {
            title: e.target[0].value,
            description: e.target[1].value,
        };
        await createNewNotes(newNotes);
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
