import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, fetchPosts, selectPostById, selectPostIds } from "./postsSlice";
import { Link } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";
import classnames from 'classnames';

import { useGetPostsQuery } from "../api/apiSlice";

let PostExcerpt = ({ post }) => {
    return (
        <article className="post-excerpt">
            <h3>{post.title}</h3>
            <div>
                <PostAuthor userId={post.user} />
                <TimeAgo timestamp={post.date} />
            </div>

            <p className="post-content">{post.content.substring(0, 100)}</p>
            <ReactionButtons post={post}/>
            <Link to={`/posts/${post.id}`} className="button muted-button">
                View Post
            </Link>
        </article>
    )
}

PostExcerpt = React.memo(PostExcerpt);

export const PostsList = () => {
    const {
        data: posts = [],
        isLoading,
        isSuccess,
        isError,
        isFetching,
        error,
        refetch
    } = useGetPostsQuery();

    const sortedPosts = useMemo(() => {
        const sortedPosts = posts.slice();
        // Sort posts in descneding chronological order
        sortedPosts.sort((a, b) => b.date.localeCompare(a.date))
        return sortedPosts
    }, [posts]);

    const dispatch = useDispatch();
    const postStatus = useSelector(state => state.posts.status);

    useEffect(
        () => {
            if (postStatus === 'idle') {
                dispatch(fetchPosts());
            }
        },
        [postStatus, dispatch]
    );

    let content;

    if (isLoading) {
        content = <Spinner text="Loading..." />
    } else if (isSuccess) {
        const renderedPosts = sortedPosts.map(post => <PostExcerpt key={post.id} post={post} />)

        const containerClassname = classnames('posts-container', {
            disabled: isFetching
        });

        content = <div className={containerClassname}>{renderedPosts}</div>
    } else if (isError) {
        content = <div>{error.toString()}</div>
    }

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            <button onClick={refetch}>Refetch Posts</button>
            {content}
        </section>
    );
}
