import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferInstrumentReference = {
  /** The masked IBAN or bank account number. */
  accountIdentifier: string;
  /** The unique identifier of the resource. */
  id: string;
  /**
   * Four last digits of the bank account number. If the transfer instrument is created using
   * [instant bank account
   * verification](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-08-hosted-onboarding),
   * and it is a virtual bank account, these digits may be different from the last four digits of
   * the masked account number.
   */
  realLastFour?: string;
  /**
   * Identifies if the bank account was created through [instant bank
   * verification](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-08-hosted-onboarding).
   */
  trustedSource?: boolean;
};

export const transferInstrumentReferenceSchema: Schema<TransferInstrumentReference> =
  s.object<TransferInstrumentReference>({
    accountIdentifier: s.string(),
    id: s.string(),
    realLastFour: s.optional(s.string()),
    trustedSource: s.optional(s.boolean()),
  });
