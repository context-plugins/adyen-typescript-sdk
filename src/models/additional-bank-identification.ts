import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type611Schema, type Type611 } from "./type611.js";

export type AdditionalBankIdentification = {
  code?: string;
  type?: Type611;
};

export const additionalBankIdentificationSchema: Schema<AdditionalBankIdentification> =
  s.object<AdditionalBankIdentification>({
    code: s.optional(s.string()),
    type: s.optional(s.lazy(() => type611Schema)),
  });
