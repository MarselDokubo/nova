import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/V2uZaaFRHKJT15DuRGKDCdx4O9iTLG3PIykaHz5Q6YNtw7KX",
  "https://utfs.io/f/V2uZaaFRHKJTVlXiGkdFRHKJTyp9hAgw2D0t16oO5BQmlSnf",
  "https://utfs.io/f/V2uZaaFRHKJT4RMhSaAD8aZY90xITgzQn75HGAKwtoBPNWEi",
  "https://utfs.io/f/V2uZaaFRHKJT15DuRGKDCdx4O9iTLG3PIykaHz5Q6YNtw7KX",
  "https://utfs.io/f/V2uZaaFRHKJTVlXiGkdFRHKJTyp9hAgw2D0t16oO5BQmlSnf",
  "https://utfs.io/f/V2uZaaFRHKJT4RMhSaAD8aZY90xITgzQn75HGAKwtoBPNWEi",
  "https://utfs.io/f/V2uZaaFRHKJT15DuRGKDCdx4O9iTLG3PIykaHz5Q6YNtw7KX",
  "https://utfs.io/f/V2uZaaFRHKJTVlXiGkdFRHKJTyp9hAgw2D0t16oO5BQmlSnf",
  "https://utfs.io/f/V2uZaaFRHKJT4RMhSaAD8aZY90xITgzQn75HGAKwtoBPNWEi",
  "https://utfs.io/f/V2uZaaFRHKJT15DuRGKDCdx4O9iTLG3PIykaHz5Q6YNtw7KX",
  "https://utfs.io/f/V2uZaaFRHKJTVlXiGkdFRHKJTyp9hAgw2D0t16oO5BQmlSnf",
  "https://utfs.io/f/V2uZaaFRHKJT4RMhSaAD8aZY90xITgzQn75HGAKwtoBPNWEi",
  "https://utfs.io/f/V2uZaaFRHKJT15DuRGKDCdx4O9iTLG3PIykaHz5Q6YNtw7KX",
  "https://utfs.io/f/V2uZaaFRHKJTVlXiGkdFRHKJTyp9hAgw2D0t16oO5BQmlSnf",
  "https://utfs.io/f/V2uZaaFRHKJT4RMhSaAD8aZY90xITgzQn75HGAKwtoBPNWEi",
];
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {mockImages.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
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
