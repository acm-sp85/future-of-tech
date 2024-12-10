import StatsBlockChain from "./StatsBlockChain";
import IllustrationBlockChain from "./IllustrationBlockChain";

function BlockChain() {
  return (
    <div
      className="grid h-auto w-[100vw] grid-cols-1 md:grid-cols-2"
      id="block-chain"
    >
      <div className="md:h-[100vh] md:w-[50vw] relative">
        <p className="h3-style mx-auto mt-24 w-max md:ml-8">Block Chain</p>
        <p className="p-style m-6 text-justify md:ml-24 md:mr-24 md:mt-24">
          Blockchain is a decentralized, distributed ledger technology that
          records transactions in a secure and transparent manner. It consists
          of a chain of blocks, each containing a record of transactions. Once a
          block is added to the chain, it cannot be modified, ensuring data
          integrity and security.
        </p>
        <div className="flex w-full items-center justify-center absolute bottom-50 left-20">
          <IllustrationBlockChain className="h-full w-full" />
        </div>
      </div>
      {/* <div className="h-[100vh] w-[1px] bg-green"></div> */}
      <div className="md:w-[50vw] z-10">
        <StatsBlockChain />
      </div>
    </div>
  );
}

export default BlockChain;
