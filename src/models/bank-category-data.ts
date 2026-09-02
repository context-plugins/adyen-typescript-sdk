import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { category3Schema, type Category3 } from "./category3.js";
import { priority1Schema, type Priority1 } from "./priority1.js";

export type BankCategoryData = {
  priority?: Priority1;
  type?: Category3;
};

export const bankCategoryDataSchema: Schema<BankCategoryData> = s.object<BankCategoryData>({
  priority: s.optional(s.lazy(() => priority1Schema)),
  type: s.optional(s.lazy(() => category3Schema)),
});
