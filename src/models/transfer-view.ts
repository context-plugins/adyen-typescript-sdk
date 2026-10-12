import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoryDataSchema, type CategoryData } from "./unions/category-data.js";

export type TransferView = {
  /** The relevant data according to the transfer category. */
  categoryData?: CategoryData;
  /** The ID of the resource. */
  id?: string;
  /**
   * The
   * [`reference`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_reference)
   * from the `/transfers` request. If you haven't provided any, Adyen generates a unique reference.
   */
  reference: string;
};

export const transferViewSchema: Schema<TransferView> = s.object<TransferView>({
  categoryData: s.optional(s.lazy(() => categoryDataSchema)),
  id: s.optional(s.string()),
  reference: s.string(),
});
