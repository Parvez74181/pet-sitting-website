import { Divider } from "@heroui/react";
import { GitCompareArrows } from "lucide-react";
import AvatarUI from "./Avatar";

const StatsSection = () => {
  return (
    <>
      <div className="flex justify-around items-center gap-5 w-full mt-5">
        <div className="flex justify-center items-center flex-col gap-1 *:text-center">
          <AvatarUI />
          <p>
            <span className="block font-sofia-bold text-3xl text-blue-500">100+</span> Trusted & insured
            <br /> pet sitters
          </p>
        </div>
        <Divider orientation="vertical" className="w-0.5 h-full bg-blue-500" />
        <div className="flex justify-center items-center flex-col gap-1 *:text-center">
          <GitCompareArrows className="text-blue-500" size={28} />
          <p>
            <span className="block font-sofia-bold text-3xl text-blue-500">24/7</span> Dedicated <br />
            customer support
          </p>
        </div>
      </div>
    </>
  );
};

export default StatsSection;
