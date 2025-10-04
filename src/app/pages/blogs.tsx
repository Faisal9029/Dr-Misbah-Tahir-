import { sanityClient } from "@/src/sanity/lib/sanityClient";

export default function Blogs({ blogs }: { blogs: any[] }) {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id} className="mb-3">
            <h2 className="font-semibold">{blog.title}</h2>
            <p>{blog.body[0].children[0].text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const blogs = await sanityClient.fetch(`*[_type == "blog"]`);
  return { props: { blogs } };
}
