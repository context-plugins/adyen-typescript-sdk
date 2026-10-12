import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { threeDs1Result2Schema, type ThreeDs1Result2 } from "./three-ds1-result2.js";
import { threeDs2ResultSchema, type ThreeDs2Result } from "./three-ds2-result.js";

export type AuthenticationResultResponse = {
  /** The result of the 3D Secure authentication. */
  threeDs1Result?: ThreeDs1Result2;
  /** The result of the 3D Secure 2 authentication. */
  threeDs2Result?: ThreeDs2Result;
};

export const authenticationResultResponseSchema: Schema<AuthenticationResultResponse> =
  s.object<AuthenticationResultResponse>({
    threeDs1Result: s.optional(s.lazy(() => threeDs1Result2Schema)),
    threeDs2Result: s.optional(s.lazy(() => threeDs2ResultSchema)),
    _keysMap: {
      threeDs1Result: "threeDS1Result",
      threeDs2Result: "threeDS2Result",
    },
  });
