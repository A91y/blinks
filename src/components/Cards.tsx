import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { blinks } from "@/utils/data";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
      {blinks.map((blink, index) => (
        <Card key={index} className="max-w-[600px] w-full">
          <CardHeader className="flex gap-3">
            <Image
              alt={`${blink.title} logo`}
              height={60}
              radius="sm"
              src={blink.imageUrl}
              width={60}
            />
            <div className="flex flex-col">
              <p className="text-lg font-semibold">{blink.title}</p>
              <a href={blink.liveUrl} className="text-small text-default-600">
                {blink.liveUrl}
              </a>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-lg">{blink.description}</p>
            {blink.moreDescription && (
              <p className="text-sm mt-2 text-default-500">
                {blink.moreDescription}
              </p>
            )}
          </CardBody>
          <Divider />
          <CardFooter className="flex justify-between">
            <Link isExternal showAnchorIcon href={blink.liveUrl} className="text-[#f9ff55]">
              Live
            </Link>
            <Link isExternal href={blink.githubUrl}>
              <Image
                aria-hidden
                src="https://nextjs.org/icons/github.svg"
                alt="GitHub"
                width={20}
                height={20}
              />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
