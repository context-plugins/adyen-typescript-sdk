import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { type121Schema, type Type121 } from "./type121.js";

export type CashOutTransfer = {
  amount: Amount17;
  id: string;
  type: Type121;
};

export const cashOutTransferSchema: Schema<CashOutTransfer> = s.object<CashOutTransfer>({
  amount: amount17Schema,
  id: s.string(),
  type: type121Schema,
});
