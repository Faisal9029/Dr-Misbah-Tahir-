import { sanityClient } from "@/src/sanity/lib/sanityClient";

export default function Videos({ videos }: { videos: any[] }) {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">YouTube Videos</h1>
      <ul>
        {videos.map((video) => (
          <li key={video._id} className="mb-3">
            <h2 className="font-semibold">{video.title}</h2>
            <p>{video.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const videos = await sanityClient.fetch(`*[_type == "video"]`);
  return { props: { videos } };
}
