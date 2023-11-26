import Lottie from "lottie-react";
import dot from "../assets/dot.json";
import { useNavigation } from "react-router-dom";
import LoadingPage from "./LoadingPage";
const About = () => {
  const state = useNavigation()
  if(state.state==='loading')
  {
      return <LoadingPage/>;
  }
  return (
    <div className="px-3 lg:px-10 text-black">
      <div className="w-full lg:w-[50%] flex m-auto justify-center flex-col">
        <h1 className="flex relative justify-center py-10 m-auto text-black text-5xl font-bold text-center ">
          <Lottie
            className="h-24 absolute left-0 top-0 -ml-20"
            animationData={dot}
          ></Lottie>
          A reader lives a thousand lives before he dies
        </h1>
        <p className="text-lg text-center">
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man who
          does not read good books is no better than the man who can’t.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 py-10 gap-7" >
        <div>
          <h1 className="text-xl font-bold pb-3">Books are a uniquely portable magic.</h1>
          <p className="pb-5">
            Space, the final frontier. These are the voyages of the Starship
            Enterprise. Its five-year mission: to explore strange new worlds.
            Many say exploration is part of our destiny, but it’s actually our
            duty to future generations.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold pb-3">The first mate and his Skipper too will do?</h1>
          <p className="pb-5">
            Well, the way they make shows is, they make one show. That show's
            called a pilot. Then they show that show to the people who make
            shows, and on the strength of that one show they decide if they're
            going to make more shows. Some pilots get picked and become
            television programs.Some don't, become nothing. She starred in one
            of the ones that became nothing.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold pb-3">Is the Space Pope reptilian!?</h1>
          <p className="pb-5">
            A flower in my garden, a mystery in my panties. Heart attack never
            stopped old Big Bear. I didn't even know we were calling him Big
            Bear.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold pb-3">How much money you got on you?</h1>
          <p className="pb-5">
            The first mate and his Skipper too will do their very best to make
            the others comfortable in their tropic island nest. Michael Knight a
            young loner on a crusade to champion the cause of the innocent. The
            helpless. The powerless in a world of criminals who operate above
            the law. Here he comes Here comes Speed Racer. He's a demon on
            wheels.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold pb-3">Galaxies Orion's sword globular star cluster?</h1>
          <p className="pb-5">
            A business big enough that it could be listed on the NASDAQ goes
            belly up. Disappears! It ceases to exist without me. No, you clearly
            don't know who you're talking to, so let me clue you in.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold pb-3">When has justice ever been as simple as a rule book?</h1>
          <p className="pb-5">
            This is not about revenge. This is about justice. A lot of things
            can change in twelve years, Admiral. Well, that's certainly good to
            know. About four years. I got tired of hearing how young I looked.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
