import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoryDataSchema, type CategoryData } from "./unions/category-data.js";

export type TransferView2 = {
  categoryData?: CategoryData;
  id?: string;
  reference: string;
};

export const transferView2Schema: Schema<TransferView2> = s.object<TransferView2>({
  categoryData: s.optional(s.lazy(() => categoryDataSchema)),
  id: s.optional(s.string()),
  reference: s.string(),
});
