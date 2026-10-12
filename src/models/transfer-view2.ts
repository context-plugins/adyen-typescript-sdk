import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoryDataSchema, type CategoryData } from "./unions/category-data.js";

/** Contains information about the transfer related to the transaction. */
export type TransferView2 = {
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

export const transferView2Schema: Schema<TransferView2> = s.object<TransferView2>({
  categoryData: s.optional(s.lazy(() => categoryDataSchema)),
  id: s.optional(s.string()),
  reference: s.string(),
});
