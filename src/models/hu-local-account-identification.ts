import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HuLocalAccountIdentification = {
  /** The 24-digit bank account number, without separators or whitespace. */
  accountNumber: string;
  /** **huLocal** @default "huLocal" */
  type?: "huLocal";
};

export const huLocalAccountIdentificationSchema: Schema<HuLocalAccountIdentification> =
  s.object<HuLocalAccountIdentification>({
    accountNumber: s.string(),
    type: s.defaulted(s.literal("huLocal"), "huLocal"),
  });
