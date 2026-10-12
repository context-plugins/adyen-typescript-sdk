import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { store1Schema, type Store1 } from "./store1.js";

export type GetStoresUnderAccountResponse = {
  /**
   * Array that returns a list of all stores for the specified merchant account, or for all merchant
   * accounts under the company account.
   */
  stores?: Store1[];
};

export const getStoresUnderAccountResponseSchema: Schema<GetStoresUnderAccountResponse> =
  s.object<GetStoresUnderAccountResponse>({
    stores: s.optional(s.array(s.lazy(() => store1Schema))),
  });
