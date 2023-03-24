const today = new Date();

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

const formatDate = (date) => {
    return new Intl.DateTimeFormat(
        "en-US",
        { weekday: "long" }
    ).format(date);
};

export default function TodoList() {
    const name = "Some Name";

    return (
        <div style={person.theme}>
            <h1>{person.name}'s To Do List</h1>
            <p>To Do List for {formatDate(today)}</p>

            <ul style={{
                backgroundColor: 'black',
                color: 'pink'
            }}>
                <li>To Do 1</li>
                <li>To Do 2</li>
                <li>To Do 3</li>
            </ul>
        </div>
    );
}