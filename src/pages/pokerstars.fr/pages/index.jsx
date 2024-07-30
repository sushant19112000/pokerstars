import { AutoMaticWithDrawalLimit } from "@/app/components/pokerstars/automaticWithDrawalLimit";
import { DepositLimit } from "@/app/components/pokerstars/depositLimit";
import { LimitCap } from "@/app/components/pokerstars/limitCap";
import { RangeSlider } from "@/app/components/pokerstars/RangeSlider";

export default function Index() {
  return (
    <div>
      {/* <Main/> */}

      {/* <DepositLimit /> */}
      {/* <LimitCap/> */}
      {/* <AutoMaticWithDrawalLimit/> */}
      <RangeSlider min={2} max={167} step={1}/>

    </div>
  );
}
