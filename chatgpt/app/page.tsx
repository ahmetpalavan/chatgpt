import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline";

const HomePage = () => {
  return (
    <div className="flex flex-col text-white md:h-screen sm:h-full px-2 items-center justify-center">
      <h1 className="text-5xl font-bold mb-20">Home Page</h1>
      <div className="flex md:flex-row sm:flex-col space-x-2 text-center ">
        <div>
          <div className="flex flex-col items-center justify-center mb-5 ">
            <SunIcon className="h-8 w-8" />
            <h2>Example</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain something to me</p>
            <p className="infoText">What is the difference between a dog adn a cat? </p>
            <p className="infoText ">What is the color of the sun?</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5 ">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Change the ChatGPT Model to use</p>
            <p className="infoText">Messages are stored in Firebase's Firestore </p>
            <p className="infoText ">Hot toast Notifications when ChatGPT is thinking! </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5 ">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">May occasionally generate incorrect information</p>
            <p className="infoText">May occasionally produce harmful instructions or biased content </p>
            <p className="infoText ">Limited knowledge of world and after 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
