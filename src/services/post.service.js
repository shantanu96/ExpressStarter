import Post from "../models/post.model";

const main = {};

main.getAllPosts = async () => {
    return await Post.find().sort({ date: -1 });
}

main.createPost = async (data) => {
    const post = new Post(data);
    return await post.save();
}

export default main;