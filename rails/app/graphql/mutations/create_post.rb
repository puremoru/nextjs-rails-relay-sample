module Mutations
  class CreatePost < BaseMutation
    field :post, Types::PostType, null: false

    argument :content, String, required: true

    def resolve(content:)
      post = Post.create(content: content, like_count: 0)
      { post: post }
    end
  end
end
