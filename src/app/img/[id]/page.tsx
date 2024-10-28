export default function PhotoModal({
  params: { id: imgId },
}: {
  params: { id: string };
}) {
  return <div>{imgId}</div>;
}
