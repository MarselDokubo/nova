import { getImage } from "~/server/queries";
import FullImagePageView from "~/app/_components/full-image-page";

export default function PhotoPage({
  params: { id: imgId },
}: {
  params: { id: string };
}) {
  const id = +imgId;
  return <FullImagePageView id={id} />;
}
