import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { saleData1Schema, type SaleData1 } from "./sale-data1.js";
import { storedValueDataSchema, type StoredValueData } from "./stored-value-data.js";

export type StoredValueRequest = {
  saleData: SaleData1;
  storedValueData: StoredValueData[];
};

export const storedValueRequestSchema: Schema<StoredValueRequest> = s.object<StoredValueRequest>({
  saleData: saleData1Schema,
  storedValueData: s.array(s.lazy(() => storedValueDataSchema)),
  _keysMap: {
    saleData: "SaleData",
    storedValueData: "StoredValueData",
  },
});
