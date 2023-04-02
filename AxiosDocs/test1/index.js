import axios from "axios";

axios.get(
    "https://jsonplaceholder.typicode.com/todos/1",
)
    .then(
        response => console.log(response.data)
    )
    .catch(
        error => console.error(error)
    )
    .finally(
        () => console.log("done making the request")
    );


(
    async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
)();