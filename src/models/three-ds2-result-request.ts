import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ThreeDs2ResultRequest = {
  merchantAccount: string;
  pspReference: string;
};

export const threeDs2ResultRequestSchema: Schema<ThreeDs2ResultRequest> = s.object<ThreeDs2ResultRequest>({
  merchantAccount: s.string(),
  pspReference: s.string(),
});
