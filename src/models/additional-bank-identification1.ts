import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type510Schema, type Type510 } from "./type510.js";

export type AdditionalBankIdentification1 = {
  code?: string;
  type?: Type510;
};

export const additionalBankIdentification1Schema: Schema<AdditionalBankIdentification1> =
  s.object<AdditionalBankIdentification1>({
    code: s.optional(s.string()),
    type: s.optional(s.lazy(() => type510Schema)),
  });
