import Note from "./Note";
import NewNote from "./NewNote";
import { useNotes } from "./useNotes";

function App() {
    // const [notes, setNotes] = useState([]);
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     getAllNotes().then((data) => {
    //         console.log(data);
    //         setNotes(data);
    //     });
    // }, []);

    const { notes } = useNotes();

    return (
        <div>
            <h1>List of Notes</h1>
            <NewNote />
            {notes?.map((ele) => (
                <Note key={ele._id} note={ele} />
            ))}
        </div>
    );
}

export default App;
