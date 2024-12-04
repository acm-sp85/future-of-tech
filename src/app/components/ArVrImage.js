import Image from "next/image";

export default function ArVrImage() {
  return (
    <div className="flex h-full overflow-hidden opacity-70 md:mt-10 md:w-[50vw] md:translate-x-[10%]">
      <Image
        src="/drawing-of-a-planet-with-no-background.png"
        alt="planet-top-left"
        class="h-[150px] w-auto md:translate-x-[30px]"
        width={100}
        height={100}
      />
      <Image
        src="/an-ink-drawing-of-the-solar-system.png"
        alt="solar-system"
        class="h-[450px] w-auto -translate-x-[150px] md:-translate-x-[60px]"
        width={200}
        height={200}
      />
      <Image
        src="/a-three-tone-drawing-of-a-woman-wearing-a-vr-headset-20164142.png"
        alt="girl-VR"
        class="h-[300px] w-auto -translate-x-[500px] translate-y-[80px] md:h-[400px] md:-translate-x-[470px] md:translate-y-[20px]"
        width={300}
        height={300}
      />
      <Image
        src="/a-drawing-of-a-futuristic-spaceship- (1).png"
        alt="spaceship-top-right"
        class="h-[100px] w-auto -translate-x-[552px] -translate-y-[12px] rotate-180 md:h-[200px]"
        width={100}
        height={100}
      />
      <Image
        src="/drawing-of-a-planet-with-no-background (1).png"
        alt="planet-bottom-right "
        class="h-[120px] w-auto -translate-x-[680px] translate-y-[320px] md:h-[150px] md:-translate-x-[800px]"
        width={100}
        height={100}
      />
    </div>
  );
}
