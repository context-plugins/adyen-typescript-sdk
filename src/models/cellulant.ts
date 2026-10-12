import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type17, type17Schema } from "./type17.js";

export type Cellulant = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The Cellulant issuer. */
  issuer?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** **Cellulant** @default Type17.Cellulant */
  type?: Type17;
};

export const cellulantSchema: Schema<Cellulant> = s.object<Cellulant>({
  checkoutAttemptId: s.optional(s.string()),
  issuer: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: s.defaulted(type17Schema, Type17.Cellulant),
});
