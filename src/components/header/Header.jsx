import Image from "next/image";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <div className="flex w-full items-center justify-center border-b border-black/10 bg-secondary py-2 pr-3">
      <div className="flex w-full max-w-7xl items-center justify-between gap-5">
        <div className="flex items-center">
          <Image src="/logo.png" width={80} height={80} />
          <h1 className="text-lg font-bold sm:text-2xl">
            Instant Appliances Repairs
          </h1>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
