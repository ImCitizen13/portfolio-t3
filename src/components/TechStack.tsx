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
  const divStyle = "flex h-[128px] w-[128px] items-center justify-center rounded-[15px] bg-[#D9D9D9]" //dark:bg-[#FFFFFF]"
  const imageStyle = "h-102.4px w-102.4px"
  return (
    <div
      className={divStyle}
    >
      <Image
        className={imageStyle}
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
          return <TechView key={tech.alt} {...tech} />;
        })}
      </div>
    </div>
  );
}
