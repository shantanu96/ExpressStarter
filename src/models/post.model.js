import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    body: String,
    date: { type: Date, default: Date.now }
})

const Post = mongoose.model('Post', postSchema);

export default Post;