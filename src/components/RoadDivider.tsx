const CURVE =
  "M 0,96.8 C 14.4,95.2 57.6,92.6 86.4,87.2 C 115.2,81.8 144,71.5 172.8,64.2 " +
  "C 201.6,56.9 230.4,49 259.2,43.1 C 288,37.2 316.8,32.3 345.6,28.7 " +
  "C 374.4,25.1 403.2,22.9 432,21.5 C 460.8,20.1 489.6,20.2 518.4,20 " +
  "C 547.2,19.8 576,19.1 604.8,20 C 633.6,20.9 662.4,21.1 691.2,25.3 " +
  "C 720,29.5 748.8,37.3 777.6,45 C 806.4,52.7 835.2,61.2 864,71.4 " +
  "C 892.8,81.6 921.6,93.5 950.4,106 C 979.2,118.5 1008,133.8 1036.8,146.3 " +
  "C 1065.6,158.9 1094.4,171 1123.2,181.3 C 1152,191.6 1180.8,200.4 1209.6,208.2 " +
  "C 1238.4,216 1267.2,222.5 1296,227.9 C 1324.8,233.3 1353.6,237.4 1382.4,240.4 " +
  "C 1411.2,243.4 1440,245.1 1468.8,246.1 C 1497.6,247.1 1526.4,246.5 1555.2,246.6 " +
  "C 1584,246.7 1612.8,248.3 1641.6,246.6 C 1670.4,244.9 1699.2,241.4 1728,236.5 " +
  "C 1756.8,231.6 1785.6,223.8 1814.4,217.3 C 1843.2,210.8 1883.2,201.8 1900.8,197.6 " +
  "C 1918.4,193.4 1916.8,193.3 1920,192.4";

const FILL = `${CURVE} L 1920,280 L 0,280 Z`;

// Centers, on-curve y and local tangent angle sampled directly from the
// traced curve data, then nudged down onto the white road surface (the
// dashes are navy, so they'd vanish against the navy sky above the curve).
// Deriving them from the real path keeps every dash glued to the curve
// regardless of viewport width.
const dashes = [
  { x: 110, y: 83.3, rot: -9.4 },
  { x: 260, y: 43.0, rot: -11.2 },
  { x: 420, y: 22.1, rot: -2.8 },
  { x: 600, y: 20.0, rot: 0 },
  { x: 780, y: 45.7, rot: 15.3 },
  { x: 960, y: 110.5, rot: 25.0 },
  { x: 1140, y: 187.3, rot: 19.7 },
  { x: 1320, y: 232.4, rot: 10.4 },
  { x: 1500, y: 247.0, rot: -0.2 },
  { x: 1680, y: 243.7, rot: -6.9 },
  { x: 1850, y: 209.3, rot: -12.5 },
].map((d) => ({ ...d, y: d.y + 16, w: 34 }));

export function RoadDivider() {
  return (
    <div className="relative z-10 -mb-1">
      <svg
        viewBox="0 0 1920 280"
        className="block h-auto w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d={FILL} fill="white" />
        <path d={CURVE} transform="translate(0,11)" fill="none" stroke="#0b2241" strokeWidth="3" />
        <path d={CURVE} fill="none" stroke="#e81a33" strokeWidth="7" strokeLinecap="round" />
        {dashes.map((d, i) => (
          <rect
            key={i}
            x={d.x - d.w / 2}
            y={d.y - 4.5}
            width={d.w}
            height="9"
            rx="4.5"
            fill="#0b2241"
            transform={`rotate(${d.rot} ${d.x} ${d.y})`}
          />
        ))}
      </svg>
    </div>
  );
}
