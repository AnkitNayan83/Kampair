import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

const tabData = [
  {
    label: "Cab",
    color: "#008080",
    link: "/",
  },
  {
    label: "Flight",
    color: "#bb99ff",
    link: "/flight",
  },
  {
    label: "Trip",
    color: "#bb99ff",
    link: "/trip",
  },
];

export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {tabData.map((tab, i) => (
          <div className="font-bold" key={i}>
            {tab.label}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Image src={"/logo.png"} alt="logo" width={30} height={30} />
        <h1 className="text-xl font-bold">Kampair😊</h1>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
