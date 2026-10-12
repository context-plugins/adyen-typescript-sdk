import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ThreeDs2ResultRequest = {
  /** The merchant account identifier, with which you want to process the transaction. */
  merchantAccount: string;
  /** The pspReference returned in the /authorise call. */
  pspReference: string;
};

export const threeDs2ResultRequestSchema: Schema<ThreeDs2ResultRequest> = s.object<ThreeDs2ResultRequest>({
  merchantAccount: s.string(),
  pspReference: s.string(),
});
