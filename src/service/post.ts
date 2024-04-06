import path from "path";
import { promises as fs} from "fs";

export type Post = {
    title: string;
    description: string;
    date: string;
    category: string;
    image: string;
    path: string;
    featured: boolean;
}

export async function getPosts(): Promise<Post[]> {
    const filePath = path.join(process.cwd(), 'data', 'posts.json');
    const data = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(data);
}

export async function getPost(postPath: string): Promise<Post | undefined> {
    const posts = await getPosts();
    console.log(posts);
    return posts.find(item => item.path === postPath)
}

export async function getFeaturedPosts(): Promise<Post[]> {
    const posts = await getPosts();
    const featuredPosts = posts.filter(item => item.featured === true);

    return featuredPosts;
}

export async function getOtherPosts(): Promise<Post[]> {
    const posts = await getPosts();
    const otherPosts = posts.filter(item => item.featured !== true);
    return otherPosts;
}
