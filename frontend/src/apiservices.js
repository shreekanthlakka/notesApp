const URL = "http://localhost:7000/api/v1";

export async function getAllNotes() {
    const res = await fetch(`${URL}/notes`);
    if (!res.ok) {
        throw new Error("Something went wrong");
    }
    const { data } = await res.json();

    return data; //returns [{} ,{} ...]
}

export async function createNewNotes(newNotes) {
    const res = await fetch(`${URL}/notes/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newNotes),
    });
    if (!res.ok) {
        throw new Error("Failed to create new Notes");
    }

    // console.log(res);
    const data = await res.json();
    // console.log(data);
    return data.data; //returns {}
}

export async function deleteNote(id) {
    const res = await fetch(`${URL}/notes/${id}`, {
        method: "DELETE",
    });
    if (!res.ok) {
        throw new Error("Could not delete Note");
    }
    const data = await res.json();
    return data.success;
}

export async function updateNote(id, updatedData) {
    const res = await fetch(`${URL}/notes/${id}`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ description: updatedData }),
    });

    if (!res.ok) {
        throw new Error("Not able to delete Note");
    }

    const data = await res.json();

    return data.data; //returns {}
}
