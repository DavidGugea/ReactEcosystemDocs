import { useEffect } from "react";
import { createConnection } from "./chat";

export default function ChatRoom() {
    useEffect(() => {
        const connection = createConnection();
        connection.connect();

        return () => {
            connection.disconnect();
        };
    }, []);
}
