import TechStack, {
  TechStackProps,
  TechViewProps,
} from "~/components/TechStack";

const frontEndTechStack: TechStackProps = {
  title: "Front-End",
  techList: [
    { imgSrc: "logos/FrontEnd/react.svg", alt: "ReactJS" },
    { imgSrc: "logos/FrontEnd/tailwind.svg", alt: "TailWind" },
    { imgSrc: "logos/FrontEnd/javascript.svg", alt: "Javascript" },
    { imgSrc: "logos/FrontEnd/css.svg", alt: "CSS3" },
    { imgSrc: "logos/FrontEnd/html.svg", alt: "html5" },
  ],
};

const backEndTechStack: TechStackProps = {
  title: "Back-End",
  techList: [
    { imgSrc: "logos/BackEnd/nodejs.svg", alt: "NodeJs" },
    { imgSrc: "logos/BackEnd/nestjs.svg", alt: "NestJs" },
    { imgSrc: "logos/BackEnd/vercel.svg", alt: "Vercel" },
    { imgSrc: "logos/BackEnd/typescript.svg", alt: "TypeScript" },
    { imgSrc: "logos/BackEnd/prisma.svg", alt: "Prisma" },
    { imgSrc: "logos/BackEnd/nextjs.svg", alt: "Nextjs" },
  ],
};

const web3TechStack: TechStackProps = {
    title: "Crypto/Web3",
    techList: [
      { imgSrc: "logos/web3/ethers.svg", alt: "ethers" },
      { imgSrc: "logos/web3/wagmi.svg", alt: "WAGMI" },
      { imgSrc: "logos/web3/moralis.svg", alt: "Moralis" },
      { imgSrc: "logos/web3/alchemy.svg", alt: "Alchemy" },
      { imgSrc: "logos/web3/viem.svg", alt: "Viem" },
      { imgSrc: "logos/web3/web3js.svg", alt: "Web3js" },
    ],
  };

  const mobileTechStack: TechStackProps = {
    title: "Mobile",
    techList: [
      { imgSrc: "logos/mobile/reactnative.svg", alt: "React Native" },
      { imgSrc: "logos/mobile/ios.svg", alt: "IOS" },
      { imgSrc: "logos/mobile/android.svg", alt: "Android" },
      { imgSrc: "logos/mobile/swift.svg", alt: "Swift" },
      { imgSrc: "logos/mobile/java.svg", alt: "Java" },
    ],
  };

  const aiTechStack: TechStackProps = {
    title: "Machine Learning/AI",
    techList: [
      { imgSrc: "logos/ai/python.svg", alt: "Python" },
      { imgSrc: "logos/ai/tensorflow.svg", alt: "TensorFlow" },
      { imgSrc: "logos/ai/pytorch.svg", alt: "Pytorch" },
      { imgSrc: "logos/ai/pandas.svg", alt: "Pandas" },
      { imgSrc: "logos/ai/matplotlib.svg", alt: "MatPlotLib" },
      { imgSrc: "logos/ai/scikitlearn.svg", alt: "ScikitLearn" },
      { imgSrc: "logos/ai/numpy.svg", alt: "Numpy" },
    ],
  };

export default function About() {
    const backGroundColor = "262525"
  return (
    <>
    <div className={`pb-[50px] min-w-screen flex min-h-screen flex-col items-center justify-center bg-[#${backGroundColor}] text-white`}>
      <span className="m-[15px] p-[12px]">
        here are all the tech and skills that I've aquired over the years
      </span>
        <TechStack {...frontEndTechStack} />
        <TechStack {...backEndTechStack} />
        <TechStack {...web3TechStack} />
        <TechStack {...mobileTechStack} />
        <TechStack {...aiTechStack} />
    </div>
    <div className="dotted-menu-background-pattern"></div>
    </>
  );
}
