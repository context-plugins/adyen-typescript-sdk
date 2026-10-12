import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { threeDs2ResultSchema, type ThreeDs2Result } from "./three-ds2-result.js";

export type ThreeDs2ResultResponse = {
  /** The result of the 3D Secure 2 authentication. */
  threeDs2Result?: ThreeDs2Result;
};

export const threeDs2ResultResponseSchema: Schema<ThreeDs2ResultResponse> = s.object<ThreeDs2ResultResponse>({
  threeDs2Result: s.optional(s.lazy(() => threeDs2ResultSchema)),
  _keysMap: {
    threeDs2Result: "threeDS2Result",
  },
});
