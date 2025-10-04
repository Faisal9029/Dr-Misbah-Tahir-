import { sanityClient } from "@/sanity/sanityClient";

export default function Reviews({ reviews }: { reviews: any[] }) {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Patient Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review._id} className="mb-3">
            <p className="font-semibold">{review.name}</p>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const reviews = await sanityClient.fetch(`*[_type == "review"]`);
  return { props: { reviews } };
}
