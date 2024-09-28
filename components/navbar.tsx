import { ArchiveIcon, PlusIcon } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <div className="w-full flex h-16 bg-[#313235]">
      <div className="w-16 flex mr-4 items-center justify-center h-full bg-[#EDEDED]">
        <ArchiveIcon size={32} />
      </div>

      <div className="flex justify-center flex-col items-center">
        <div className="text-[#EDEDED] text-sm">hifi.ng</div>
        <div className="text-[#EDEDED] font-semibold text-sm">
          Checking the price
        </div>
      </div>

      <div className="h-[80%] my-auto ml-4 w-[1px] bg-[#EDEDED]"></div>

      <Button
        variant={"ghost"}
        className="h-[90%] my-auto hover:bg-transparent flex  items-center justify-center"
      >
        <PlusIcon size={36} color="#EDEDED" />
      </Button>
    </div>
  );
}
