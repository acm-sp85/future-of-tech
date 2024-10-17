import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-darkGrey h-screen">
      The Future of Tech
      <div className=" w-16 h-16 bg-green font-inter font-bold">GREEN</div>
      <div className=" w-16 h-16 bg-yellow font-jura">YELLOW</div>
      <div className=" w-16 h-16 bg-red">Red</div>
      <div className=" w-16 h-16 bg-blue">Blue</div>
      <div className=" w-16 h-16 bg-offWhite font-italiana">Off White</div>
    </div>
  );
}
