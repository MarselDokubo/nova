import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {[...images, ...images, ...images].map((image, index) => (
        <div key={index} className="flex h-48 w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <img
              src={image.url}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              alt=""
              //  alt={image.name}
            />
          </Link>
          {/* <div>{image.name}</div> */}
        </div>
      ))}
    </div>
  );
}
