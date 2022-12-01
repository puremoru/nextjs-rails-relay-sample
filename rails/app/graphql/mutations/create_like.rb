module Mutations
  class CreateLike < BaseMutation
    field :post, Types::PostType, null: false

    argument :post_id, ID, required: true

    def resolve(post_id:)
      post = Post.find(post_id)
      post.update!(like_count: post.like_count + 1)
      { post: post }
    end
  end
end
