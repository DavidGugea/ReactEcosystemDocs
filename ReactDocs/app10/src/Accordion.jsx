import { useState } from "react";

function Panel({ title, children, isActive, onShow }) {
    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={onShow}>Show</button>
            )}
        </section>
    );
}

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <h2>Almaty, Kazahstan</h2>
            <Panel
                title="About"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                nam reiciendis sint nostrum perferendis mollitia ullam
                doloremque repellat enim modi!
            </Panel>
            <Panel
                title="Etymology"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem, corrupti?
            </Panel>
        </>
    );
}
