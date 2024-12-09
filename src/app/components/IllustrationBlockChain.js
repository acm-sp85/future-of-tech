import Image from "next/image";

function IllustrationBlockChain() {
  return (
    <div className="mr-24 mt-24 flex h-[300px] w-[300px] justify-center opacity-70">
      <Image
        src="/an-ink-drawing-of-an-old-computer-clean-background-(1)-copy.png"
        alt="robot-L"
        class="mt-[150px] h-32 w-auto"
        width={100}
        height={100}
      />

      <Image
        src="/an-ink-drawing-of-the-blockchain-copy-02.png"
        alt="middle-image"
        class="h-128 w-auto object-contain"
        width={300}
        height={300}
      />
      <Image
        src="/an-ink-drawing-of-an-old-computer-clean-background-copy.png"
        alt="robot-R"
        class="ml-5 h-32 w-auto -translate-x-6 translate-y-40 scale-x-[-1] object-contain"
        width={100}
        height={100}
      />
    </div>
  );
}

export default IllustrationBlockChain;
