import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of BankAccountIdentification, HULocalAccountIdentification1. */
export type HuLocalAccountIdentification1 = {
  /** **huLocal** @default "huLocal" */
  type?: string;
  /** The 24-digit bank account number, without separators or whitespace. */
  accountNumber: string;
};

export const huLocalAccountIdentification1Schema: Schema<HuLocalAccountIdentification1> =
  s.object<HuLocalAccountIdentification1>({
    type: s.defaulted(s.string(), "huLocal"),
    accountNumber: s.string(),
  });
