import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: imgId },
}: {
  params: { id: string };
}) {
  const image = await getImage(+imgId);
  return (
    <div className="">
      <img src={image.url} alt="" className="w-96" />
    </div>
  );
}
