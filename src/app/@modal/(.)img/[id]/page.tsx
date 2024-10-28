import { getImage } from "~/server/queries";
import { Modal } from "./modal";
import FullImagePageView from "~/app/_components/full-image-page";

export default function PhotoModal({
  params: { id: imgId },
}: {
  params: { id: string };
}) {
  const id = +imgId;
  return (
    <Modal>
      <FullImagePageView id={id} />
    </Modal>
  );
}
