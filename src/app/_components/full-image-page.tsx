import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { deleteImage, getImage } from "~/server/queries";

export default async function FullImagePageView(props: { id: string }) {
  const image = await getImage(+props.id);
  const uploaderInfo = await (await clerkClient()).users.getUser(image.userId);
  return (
    <div className="flex h-full w-full min-w-0 bg-black text-white">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} alt="" className="w-96 object-contain" />;
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-xl font-bold">{image.name}</div>
        <div className="flex flex-col p-2">
          <span className="">Uploaded by</span>
          <span className="">{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span className="">Created on</span>
          <span className="">
            {new Date(image.createdAt).toLocaleDateString()}
          </span>
        </div>
        <div className="p-2">
          <form
            action={async () => {
              "use server";

              await deleteImage(+props.id);
            }}
          >
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
