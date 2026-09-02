import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type17Schema, type Type17 } from "./type17.js";

export type Cellulant = {
  checkoutAttemptId?: string;
  issuer?: string;
  sdkData?: string;
  type?: Type17;
};

export const cellulantSchema: Schema<Cellulant> = s.object<Cellulant>({
  checkoutAttemptId: s.optional(s.string()),
  issuer: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: s.optional(s.lazy(() => type17Schema)),
});
