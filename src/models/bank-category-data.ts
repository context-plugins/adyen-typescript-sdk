import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { priority1Schema, type Priority1 } from "./priority1.js";
import { type310Schema, type Type310 } from "./type310.js";

export type BankCategoryData = {
  priority?: Priority1;
  type?: Type310;
};

export const bankCategoryDataSchema: Schema<BankCategoryData> = s.object<BankCategoryData>({
  priority: s.optional(s.lazy(() => priority1Schema)),
  type: s.optional(s.lazy(() => type310Schema)),
});
