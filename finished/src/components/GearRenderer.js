import React from "react";
// cards
import { parts } from "../parts/parts";
import _r1 from "../assets/images/rarity/_rarity_1.png";
import _r2 from "../assets/images/rarity/_rarity_2.png";
import _r3 from "../assets/images/rarity/_rarity_3.png";

const GearRenderer = ({ Gear = null, size = 200, style }) => {
  if (!Gear) {
    return null;
  }
  let rarity = _r1;

  if (Gear.rarity >= 80) {
    rarity = _r2;
  }
  if (Gear.rarity >= 95) {
    rarity = _r3;
  }

  let dnaStr = String(Gear.dna);

  while (dnaStr.length < 16) dnaStr = "0" + dnaStr;

  let GearDeatils = {
    bg: dnaStr.substring(0, 2) % 5,
    mask: dnaStr.substring(2, 4) % 5,
    line: dnaStr.substring(4, 6) % 5,
    addon: dnaStr.substring(6, 8) % 5,
    addonMouth1: dnaStr.substring(8, 10) % 5,
    addonMouth2: dnaStr.substring(10, 12) % 5,
    addonMouth3: dnaStr.substring(12, 14) % 5,
    name: Gear.name,
  };

  const GearStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
  };

  return (
    <div
      style={{
        minWidth: size,
        minHeight: size,
        background: "blue",
        position: "relative",
        ...style,
      }}
    >
      <img alt={"bg"} src={parts.bg[GearDeatils.bg]} style={GearStyle} />
      <img alt={"mask"} src={parts.mask[GearDeatils.mask]} style={GearStyle} />
      <img alt={"line"} src={parts.line[GearDeatils.line]} style={GearStyle} />
      <img alt={"addon"} src={parts.addon[GearDeatils.addon]} style={GearStyle} />
      <img
        alt={"addon_mouth"}
        src={parts.addonMouth1[GearDeatils.addonMouth1]}
        style={GearStyle}
      />
      <img
        alt={"addon_mouth"}
        src={parts.addonMouth2[GearDeatils.addonMouth2]}
        style={GearStyle}
      />
      <img
        alt={"addon_mouth"}
        src={parts.addonMouth3[GearDeatils.addonMouth3]}
        style={GearStyle}
      />
      <img alt={"rarity"} src={rarity} style={GearStyle} />
    </div>
  );
};

export default GearRenderer;
