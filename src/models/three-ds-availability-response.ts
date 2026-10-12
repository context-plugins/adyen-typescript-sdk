import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { binDetail1Schema, type BinDetail1 } from "./bin-detail1.js";
import { dsPublicKeyDetailSchema, type DsPublicKeyDetail } from "./ds-public-key-detail.js";
import {
  threeDs2CardRangeDetailSchema,
  type ThreeDs2CardRangeDetail,
} from "./three-ds2-card-range-detail.js";

export type ThreeDsAvailabilityResponse = {
  /** Bin Group Details */
  binDetails?: BinDetail1;
  /** List of Directory Server (DS) public keys. */
  dsPublicKeys?: DsPublicKeyDetail[];
  /** Indicator if 3D Secure 1 is supported. */
  threeDs1Supported?: boolean;
  /** List of brand and card range pairs. */
  threeDs2CardRangeDetails?: ThreeDs2CardRangeDetail[];
  /** Indicator if 3D Secure 2 is supported. */
  threeDs2Supported?: boolean;
};

export const threeDsAvailabilityResponseSchema: Schema<ThreeDsAvailabilityResponse> =
  s.object<ThreeDsAvailabilityResponse>({
    binDetails: s.optional(s.lazy(() => binDetail1Schema)),
    dsPublicKeys: s.optional(s.array(s.lazy(() => dsPublicKeyDetailSchema))),
    threeDs1Supported: s.optional(s.boolean()),
    threeDs2CardRangeDetails: s.optional(s.array(s.lazy(() => threeDs2CardRangeDetailSchema))),
    threeDs2Supported: s.optional(s.boolean()),
    _keysMap: {
      threeDs1Supported: "threeDS1Supported",
      threeDs2CardRangeDetails: "threeDS2CardRangeDetails",
      threeDs2Supported: "threeDS2supported",
    },
  });
