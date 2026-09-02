import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountInfo1Schema, type BankAccountInfo1 } from "./bank-account-info1.js";
import { type361Schema, type Type361 } from "./type361.js";

export type TransferInstrumentInfo = {
  bankAccount: BankAccountInfo1;
  legalEntityId: string;
  type: Type361;
};

export const transferInstrumentInfoSchema: Schema<TransferInstrumentInfo> = s.object<TransferInstrumentInfo>({
  bankAccount: bankAccountInfo1Schema,
  legalEntityId: s.string(),
  type: type361Schema,
});
