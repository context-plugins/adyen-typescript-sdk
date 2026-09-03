import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type510Schema, type Type510 } from "./type510.js";

export type AdditionalBankIdentification = {
  code?: string;
  type?: Type510;
};

export const additionalBankIdentificationSchema: Schema<AdditionalBankIdentification> =
  s.object<AdditionalBankIdentification>({
    code: s.optional(s.string()),
    type: s.optional(s.lazy(() => type510Schema)),
  });
