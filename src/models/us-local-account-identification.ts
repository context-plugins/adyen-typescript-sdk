import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { AccountType2, accountType2Schema } from "./account-type2.js";

export type UsLocalAccountIdentification = {
  /** The bank account number, without separators or whitespace. */
  accountNumber: string;
  /**
   * The bank account type.
   *
   * Possible values: **checking** or **savings**. Defaults to **checking**.
   *
   * @default AccountType2.Checking
   */
  accountType?: AccountType2;
  /**
   * The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without
   * separators or whitespace.
   */
  routingNumber: string;
  /** **usLocal** @default "usLocal" */
  type?: "usLocal";
};

export const usLocalAccountIdentificationSchema: Schema<UsLocalAccountIdentification> =
  s.object<UsLocalAccountIdentification>({
    accountNumber: s.string(),
    accountType: s.defaulted(accountType2Schema, AccountType2.Checking),
    routingNumber: s.string(),
    type: s.defaulted(s.literal("usLocal"), "usLocal"),
  });
