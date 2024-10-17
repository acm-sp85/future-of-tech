import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-darkGrey h-screen">
      The Future of Tech
      <div className=" w-16 h-16 bg-green">Green</div>
      <div className=" w-16 h-16 bg-yellow">Yellow</div>
      <div className=" w-16 h-16 bg-red">Red</div>
      <div className=" w-16 h-16 bg-blue">Blue</div>
      <div className=" w-16 h-16 bg-offWhite">Off White</div>
    </div>
  );
}
