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
    /*
bounce2
swing
wobble
*/
    <div 
      className={divStyle + " bounce2"}
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
    <div className="flex flex-col items-center justify-center gap-10">
      <span className=" font-Ibarra text-6xl">{title}</span>
      <div className="flex flex-row gap-4 flex-wrap">
        {techList.map((tech) => {
          return <TechView key={tech.alt} {...tech} />;
        })}
      </div>
    </div>
  );
}
