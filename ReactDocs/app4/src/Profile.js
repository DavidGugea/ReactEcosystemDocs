import Avatar from "./Avatar";

export default function Profile() {
    return (
        <div>
            <Avatar
                person={{ name: 'Test name1', imageId: '1bX5QH6' }}
                size={100}
            />
            <Avatar
                person={{ name: 'Test name 2', imageId: '1bX5QH6' }}
                size={100}
            />
        </div>
    );
}
