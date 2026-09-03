import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type82Schema, type Type82 } from "./type82.js";

export type SgLocalAccountIdentification = {
  accountNumber: string;
  bic: string;
  type?: Type82;
};

export const sgLocalAccountIdentificationSchema: Schema<SgLocalAccountIdentification> =
  s.object<SgLocalAccountIdentification>({
    accountNumber: s.string(),
    bic: s.string(),
    type: s.optional(s.lazy(() => type82Schema)),
  });
