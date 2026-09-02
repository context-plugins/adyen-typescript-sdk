import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoryDataSchema, type CategoryData } from "./unions/category-data.js";

export type TransferView = {
  categoryData?: CategoryData;
  id?: string;
  reference: string;
};

export const transferViewSchema: Schema<TransferView> = s.object<TransferView>({
  categoryData: s.optional(s.lazy(() => categoryDataSchema)),
  id: s.optional(s.string()),
  reference: s.string(),
});
