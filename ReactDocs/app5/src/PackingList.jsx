function Item({ name, isPacked }) {
    if (isPacked) {
        return <li className="item">{name} ✔</li>;
    }

    return <li className="item">{name} ❌</li>;
}

export default function PackingList() {
    return (
        <section>
            <h1>Packing List Test</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Item 1"
                />
                <Item
                    isPacked={true}
                    name="Item 2"
                />
                <Item
                    isPacked={false}
                    name="Item 3"
                />
            </ul>
        </section>
    );
}