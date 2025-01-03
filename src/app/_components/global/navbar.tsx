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
    <div className="container flex items-center justify-between">
      <div>
        {tabData.map((tab, i) => (
          <div className="font-bold" key={i}>
            {tab.label}
          </div>
        ))}
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
