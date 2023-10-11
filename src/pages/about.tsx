import NavBar from "~/components/NavBar";
import TechStack, {
  TechStackProps,
  TechViewProps,
} from "~/components/TechStack";

const frontEndTechStack: TechStackProps = {
  title: "Front-End",
  techList: [
    { imgSrc: "logos/front-end/react.svg", alt: "ReactJS" },
    { imgSrc: "logos/front-end/tailwind.svg", alt: "TailWind" },
    { imgSrc: "logos/front-end/javascript.svg", alt: "Javascript" },
    { imgSrc: "logos/front-end/css.svg", alt: "CSS3" },
    { imgSrc: "logos/front-end/html.svg", alt: "html5" },
  ],
};

const designTechStack: TechStackProps = {
    title: "Design",
    techList: [
      { imgSrc: "logos/design/figma.svg", alt: "Figma" },
      { imgSrc: "logos/design/gimp.svg", alt: "Gimp" },
      { imgSrc: "logos/design/inkscape.svg", alt: "Inkscape" },
    ],
  };

const backEndTechStack: TechStackProps = {
  title: "Back-End",
  techList: [
    { imgSrc: "logos/backend/nodejs.svg", alt: "NodeJs" },
    { imgSrc: "logos/backend/nestjs.svg", alt: "NestJs" },
    { imgSrc: "logos/backend/vercel.svg", alt: "Vercel" },
    { imgSrc: "logos/backend/typescript.svg", alt: "TypeScript" },
    { imgSrc: "logos/backend/aws.svg", alt: "AWS" },
    { imgSrc: "logos/backend/prisma.svg", alt: "Prisma" },
    { imgSrc: "logos/backend/nextjs.svg", alt: "Nextjs" },
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
    {/* <NavBar/> */}
    <div className={"pb-[50px] min-w-screen flex flex-col items-center justify-center bg-[#262525] text-white flex-wrap p-20px gap-12"}>
      <span className="m-[15px] p-[12px]">
        here are all the tech and skills that I&apos;ve aquired over the years
      </span>
        <TechStack {...frontEndTechStack} />
        <TechStack {...backEndTechStack} />
        <TechStack {...web3TechStack} />
        <TechStack {...mobileTechStack} />
        <TechStack {...aiTechStack} />
        <TechStack {...designTechStack} />
    </div>
    {/* <div className="dotted-menu-background-pattern"></div> */}
    </>
  );
}
