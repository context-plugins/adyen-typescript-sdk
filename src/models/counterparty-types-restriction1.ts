import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./value.js";

export type CounterpartyTypesRestriction1 = {
  operation: string;
  value?: Value[];
};

export const counterpartyTypesRestriction1Schema: Schema<CounterpartyTypesRestriction1> =
  s.object<CounterpartyTypesRestriction1>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => valueSchema))),
  });
