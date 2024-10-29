import { getImage } from "~/server/queries";

export default async function FullImagePageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full min-w-0 bg-black text-white">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} alt="" className="w-96 object-contain" />;
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
