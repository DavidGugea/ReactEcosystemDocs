import { useSelector } from "react-redux";
import { selectUserById } from "./usersSlice";
import { Link } from "react-router-dom";
import { selectAllPosts } from "../posts/postsSlice";

export const UserPage = ({ match }) => {
    const { userId } = match.params;

    const user = useSelector(state => selectUserById(state, userId));

    const postsForUser = useSelector(state => {
        const allPosts = selectAllPosts(state)
        return allPosts.filter(post => post.user === userId)
    });

    const postTitles = postsForUser.map(
        post => (
            <li key={post.id}>
                <Link to={`/posts/${user.id}`}>{post.title}</Link>
            </li>
        )
    );

    return (
        <section>
            <h2>{user.name}</h2>

            <ul>{postTitles}</ul>
        </section>
    );
}