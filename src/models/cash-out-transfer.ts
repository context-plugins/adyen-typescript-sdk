import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { type352Schema, type Type352 } from "./type352.js";

export type CashOutTransfer = {
  amount: Amount17;
  id: string;
  type: Type352;
};

export const cashOutTransferSchema: Schema<CashOutTransfer> = s.object<CashOutTransfer>({
  amount: amount17Schema,
  id: s.string(),
  type: type352Schema,
});
