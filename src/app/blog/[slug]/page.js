import BlogTemplate from "@/components/blog-in-page";
import { promises as fs } from 'fs';

export default async function BlogPage({params})

{
    const file = await fs.readFile(process.cwd() + '/src/data/blog.json', 'utf8');
    const data = await JSON.parse(file);
    const project = await data.find((item) => item.id === params.slug);

    if(project.author){
        return <BlogTemplate data={project}/>
    }


    
}