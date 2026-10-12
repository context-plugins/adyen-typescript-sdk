import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountType2Schema, type AccountType2 } from "./account-type2.js";

/** All Of BankAccountIdentification, USLocalAccountIdentification1. */
export type UsLocalAccountIdentification1 = {
  /** **usLocal** @default "usLocal" */
  type?: string;
  /** The bank account number, without separators or whitespace. */
  accountNumber: string;
  /**
   * The bank account type.
   *
   * Possible values: **checking** or **savings**. Defaults to **checking**.
   */
  accountType?: AccountType2;
  /**
   * The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without
   * separators or whitespace.
   */
  routingNumber: string;
};

export const usLocalAccountIdentification1Schema: Schema<UsLocalAccountIdentification1> =
  s.object<UsLocalAccountIdentification1>({
    type: s.defaulted(s.string(), "usLocal"),
    accountNumber: s.string(),
    accountType: s.optional(s.lazy(() => accountType2Schema)),
    routingNumber: s.string(),
  });
