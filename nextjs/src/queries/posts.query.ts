import { graphql } from "react-relay";

const PostsQuery = graphql`
  query postsQuery {
    posts {
      id
      content
      likeCount
    }
  }
`;

export default PostsQuery;
