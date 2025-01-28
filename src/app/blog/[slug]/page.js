import BlogTemplate from "@/components/blog-in-page";
import fs from 'fs';
import path from 'path';


export const metadata ={
    title:"Blog"
}

export default async function BlogPage({ params }) {
    const slug = await params.slug
    const filePath = path.join(process.cwd(), 'src/data/blog.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    const blog = data.find((item) => item.id === slug);

    return (<>
    
        <BlogTemplate data={blog} />

    </>)





}
