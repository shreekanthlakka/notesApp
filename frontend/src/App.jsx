import { useEffect, useState } from "react";
import Note from "./Note";
import NewNote from "./NewNote";
import { getAllNotes } from "./apiservices";

function App() {
    const [notes, setNotes] = useState([]);
    // const [data, setData] = useState([]);
    useEffect(() => {
        getAllNotes().then((data) => {
            // console.log(data);
            setNotes(data);
        });
    }, []);

    return (
        <div>
            <h1>List of Notes</h1>
            <NewNote />
            {notes.map((ele) => (
                <Note key={ele._id} note={ele} />
            ))}
        </div>
    );
}

export default App;
