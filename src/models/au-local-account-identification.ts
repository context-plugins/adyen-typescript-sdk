import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuLocalAccountIdentification = {
  accountNumber: string;
  bsbCode: string;
  type: "auLocal";
};

export const auLocalAccountIdentificationSchema: Schema<AuLocalAccountIdentification> =
  s.object<AuLocalAccountIdentification>({
    accountNumber: s.string(),
    bsbCode: s.string(),
    type: s.literal("auLocal"),
  });
