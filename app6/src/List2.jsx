import { people } from "./data";
import { getImageUrl } from "./utils";

export default function List2() {
    const chemists = people.filter(
        person => person.profession==='chemist'
    );

    const listItems = chemists.map(
        person =>
            <li key={person.id}>
                <img
                    src={getImageUrl(person)}
                    alt={person.name}
                />
                <p>
                    <b>{person.name}:</b>
                    {' ' + person.profession + ' '}
                    known for {person.accomplishment}
                </p>
            </li>
    );

    return <ul>{listItems}</ul>;
}