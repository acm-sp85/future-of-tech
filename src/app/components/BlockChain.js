import StatsBlockChain from "./StatsBlockChain";
import IllustrationBlockChain from "./IllustrationBlockChain";

function BlockChain() {
  return (
    <div
      className="grid h-auto grid-cols-1 md:grid-cols-2"
      id="block-chain"
    >
      <div className="relative md:h-[100vh] md:w-[50vw]">
        <p className="h3-style mx-auto mt-24 w-max md:ml-8">Block Chain</p>
        <p className="p-style m-6 text-justify md:ml-24 md:mr-24 md:mt-24">
          Blockchain is a decentralized, distributed ledger technology that
          records transactions in a secure and transparent manner. It consists
          of a chain of blocks, each containing a record of transactions. Once a
          block is added to the chain, it cannot be modified, ensuring data
          integrity and security.
        </p>
        <div className="bottom-50 absolute left-20 md:flex items-center justify-center hidden ">
          <IllustrationBlockChain />
        </div>
      </div>
      {/* <div className="h-[100vh] w-[1px] bg-green"></div> */}
      <div className="z-10 md:w-[50vw]">
        <StatsBlockChain />
      </div>
    </div>
  );
}

export default BlockChain;
