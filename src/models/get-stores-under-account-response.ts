import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { store1Schema, type Store1 } from "./store1.js";

export type GetStoresUnderAccountResponse = {
  stores?: Store1[];
};

export const getStoresUnderAccountResponseSchema: Schema<GetStoresUnderAccountResponse> =
  s.object<GetStoresUnderAccountResponse>({
    stores: s.optional(s.array(s.lazy(() => store1Schema))),
  });
