import path from "path";
import { promises as fs} from "fs";
import { getPosts } from "./post";

export async function getPostDetail(postPath: string) {
    const filePath = path.join(process.cwd(), 'data', 'posts', postPath +'.md');
    const data = await fs.readFile(filePath, 'utf-8')

    return data;
}

