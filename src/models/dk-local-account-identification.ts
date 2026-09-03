import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DkLocalAccountIdentification = {
  accountNumber: string;
  bankCode: string;
  type: "dkLocal";
};

export const dkLocalAccountIdentificationSchema: Schema<DkLocalAccountIdentification> =
  s.object<DkLocalAccountIdentification>({
    accountNumber: s.string(),
    bankCode: s.string(),
    type: s.literal("dkLocal"),
  });
