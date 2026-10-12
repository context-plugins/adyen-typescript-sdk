import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { saleData1Schema, type SaleData1 } from "./sale-data1.js";
import { storedValueDataSchema, type StoredValueData } from "./stored-value-data.js";

/** Content of the Stored Value Request message. */
export type StoredValueRequest2 = {
  /** Data related to the Sale System. */
  saleData: SaleData1;
  /** Data related to the stored value card. */
  storedValueData: StoredValueData[];
};

export const storedValueRequest2Schema: Schema<StoredValueRequest2> = s.object<StoredValueRequest2>({
  saleData: saleData1Schema,
  storedValueData: s.array(s.lazy(() => storedValueDataSchema)),
  _keysMap: {
    saleData: "SaleData",
    storedValueData: "StoredValueData",
  },
});
