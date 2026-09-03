import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NoLocalAccountIdentification = {
  accountNumber: string;
  type: "noLocal";
};

export const noLocalAccountIdentificationSchema: Schema<NoLocalAccountIdentification> =
  s.object<NoLocalAccountIdentification>({
    accountNumber: s.string(),
    type: s.literal("noLocal"),
  });
