import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ThreeDs2CardRangeDetail = {
  acsInfoInd?: string[];
  brandCode?: string;
  endRange?: string;
  startRange?: string;
  threeDs2Versions?: string[];
  threeDsMethodUrl?: string;
};

export const threeDs2CardRangeDetailSchema: Schema<ThreeDs2CardRangeDetail> =
  s.object<ThreeDs2CardRangeDetail>({
    acsInfoInd: s.optional(s.array(s.string())),
    brandCode: s.optional(s.string()),
    endRange: s.optional(s.string()),
    startRange: s.optional(s.string()),
    threeDs2Versions: s.optional(s.array(s.string())),
    threeDsMethodUrl: s.optional(s.string()),
    _keysMap: {
      threeDs2Versions: "threeDS2Versions",
      threeDsMethodUrl: "threeDSMethodURL",
    },
  });
