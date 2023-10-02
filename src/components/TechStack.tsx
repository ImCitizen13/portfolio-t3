import Image from "next/image";

export type TechStackProps = {
  techList: TechViewProps[];
  title: string;
};

export type TechViewProps = {
  imgSrc: string;
  alt: string;
};

function TechView({ imgSrc, alt }: TechViewProps) {
  const boxSize = 128;
  const imageSize = boxSize / 1.25;
  return (
    <div
      className={`flex h-[${boxSize}px] w-[${boxSize}px] items-center justify-center rounded-[15px] bg-[#D9D9D9]`}
    >
      <Image
        className={`h-[${imageSize}px] w-[${imageSize}px]`}
        height={imageSize}
        width={imageSize}
        src={imgSrc}
        alt={alt}
      />
    </div>
  );
}

export default function TechStack({ techList, title }: TechStackProps) {
  return (
    <div className=" m-16 flex flex-col  items-center justify-center">
      <h1 className=" font-Ibarra mb-8 text-6xl">{title}</h1>
      <div className="flex flex-row gap-4">
        {techList.map((tech) => {
          return <TechView {...tech} />;
        })}
      </div>
    </div>
  );
}
