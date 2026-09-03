import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UkLocalAccountIdentification = {
  accountNumber: string;
  sortCode: string;
  type: "ukLocal";
};

export const ukLocalAccountIdentificationSchema: Schema<UkLocalAccountIdentification> =
  s.object<UkLocalAccountIdentification>({
    accountNumber: s.string(),
    sortCode: s.string(),
    type: s.literal("ukLocal"),
  });
