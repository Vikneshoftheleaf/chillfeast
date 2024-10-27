import BlogTemplate from "@/components/blog-in-page";
import { promises as fs } from 'fs';

export default async function BlogPage({params})

{
    const file = await fs.readFile(process.cwd() + '/src/data/blog.json', 'utf8');
    const data = await JSON.parse(file);
    const project = data.find((item) => item.id === params.slug);
    return <BlogTemplate data={project}/>

    
}