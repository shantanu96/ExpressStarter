import postService from "../services/post.service";
import resJson from "../utils/responseJson";
const main = {};

main.getAllPosts = async (req, res) => {
    const posts = await postService.getAllPosts();

    resJson.code = 1;
    resJson.success = true;
    resJson.body = posts;
    res.status(200).json(resJson);
}

main.createPost = async (req, res) => {
    const data = {
        title: req.body.title,
        body: req.body.body,
    }

    await postService.createPost(data);

    resJson.code = 1;
    resJson.success = true;
    resJson.body = "Post Created";
    res.status(200).json(resJson);
}

export default main;