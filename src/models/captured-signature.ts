import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { areaSize1Schema, type AreaSize1 } from "./area-size1.js";
import { pointSchema, type Point } from "./point.js";

export type CapturedSignature = {
  areaSize?: AreaSize1;
  signaturePoint?: Point[];
};

export const capturedSignatureSchema: Schema<CapturedSignature> = s.object<CapturedSignature>({
  areaSize: s.optional(s.lazy(() => areaSize1Schema)),
  signaturePoint: s.optional(s.array(s.lazy(() => pointSchema))),
  _keysMap: {
    areaSize: "AreaSize",
    signaturePoint: "SignaturePoint",
  },
});
