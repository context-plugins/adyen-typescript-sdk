import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ThreeDs2CardRangeDetail = {
  /**
   * Provides additional information to the 3DS Server. Possible values:
   * - 01 (Authentication is available at ACS)
   * - 02 (Attempts supported by ACS or DS)
   * - 03 (Decoupled authentication supported)
   * - 04 (Whitelisting supported)
   */
  acsInfoInd?: string[];
  /** Card brand. */
  brandCode?: string;
  /** BIN end range. */
  endRange?: string;
  /** BIN start range. */
  startRange?: string;
  /** Supported 3D Secure protocol versions */
  threeDs2Versions?: string[];
  /**
   * In a 3D Secure 2 browser-based flow, this is the URL where you should send the device
   * fingerprint to.
   */
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
