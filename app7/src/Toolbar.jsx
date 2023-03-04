function Button({ onClick, children }) {
    return (
        <button onClick={
            e => {
                onClick();
            }
        } capture={true}>
            {children}
        </button>
    );
}

export default function Toolbar() {
    return (
        <div className="Toolbar" onClick={() => {
            console.log("You've clicked on the toolbar.");
        }}>
            <Button onClick={() => console.log("Playing!")}>
                Play Movie
            </Button>

            <Button onClick={() => console.log("Uploading!")}>
                Upload Image
            </Button>
        </div>
    );
}