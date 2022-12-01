import React, { Suspense } from "react";
import { useLazyLoadQuery } from "react-relay/hooks";
import PostsQuery from "../../src/queries/posts.query";
import { postsQuery } from "../../src/queries/__generated__/postsQuery.graphql";

const PostsIndexPage = () => {
  const { posts } = useLazyLoadQuery<postsQuery>(PostsQuery, {});
  console.log(posts);
  return (
    <>
      <Suspense fallback="Loading...">
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <p>id: {post.id}</p>
              <p>content: {post.content}</p>
              <p>likes: {post.likeCount}</p>
            </div>
          );
        })}
      </Suspense>
    </>
  );
};

export default PostsIndexPage;
