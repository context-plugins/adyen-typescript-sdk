import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountInfo1Schema, type BankAccountInfo1 } from "./bank-account-info1.js";
import { type221Schema, type Type221 } from "./type221.js";

export type TransferInstrumentInfo = {
  /** Contains information about the legal entity's bank account. */
  bankAccount: BankAccountInfo1;
  /**
   * The unique identifier of the [legal
   * entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id)
   * that owns the transfer instrument.
   */
  legalEntityId: string;
  /**
   * The type of transfer instrument.
   *
   * Possible value: **bankAccount**.
   */
  type: Type221;
};

export const transferInstrumentInfoSchema: Schema<TransferInstrumentInfo> = s.object<TransferInstrumentInfo>({
  bankAccount: bankAccountInfo1Schema,
  legalEntityId: s.string(),
  type: type221Schema,
});
