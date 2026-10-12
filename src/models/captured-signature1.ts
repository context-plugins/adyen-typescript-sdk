import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { areaSize1Schema, type AreaSize1 } from "./area-size1.js";
import { pointSchema, type Point } from "./point.js";

/**
 * Numeric value of a handwritten signature. Contains the value of a handwritten signature, e.g. the
 * signature of a cardholder on the merchant payment receipt. Only one format of the signature is
 * allowed:
 *   * The size of the pad area where the signature is written, given with the maximum abscissa and
 *     ordinate values.
 *   * The sequence of coordinates where the pen changes direction or lift.
 */
export type CapturedSignature1 = {
  /**
   * Size of an area. Contain the size of the pad area where the signature is written, given with
   * the maximum abscissa and ordinate values (X and Y). The maximum value is FFFF.
   */
  areaSize?: AreaSize1;
  /**
   * Coordinates of a point where the pen changes direction or lift. Contain the Coordinates of a
   * point of the written signature where the pen changes direction or lift where (X and Y). When
   * the signer lifts the pen, both X and Y have the value FFFF.
   */
  signaturePoint?: Point[];
};

export const capturedSignature1Schema: Schema<CapturedSignature1> = s.object<CapturedSignature1>({
  areaSize: s.optional(s.lazy(() => areaSize1Schema)),
  signaturePoint: s.optional(s.array(s.lazy(() => pointSchema))),
  _keysMap: {
    areaSize: "AreaSize",
    signaturePoint: "SignaturePoint",
  },
});
