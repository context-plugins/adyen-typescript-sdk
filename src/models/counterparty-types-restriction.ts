import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./value.js";

export type CounterpartyTypesRestriction = {
  operation: string;
  value?: Value[];
};

export const counterpartyTypesRestrictionSchema: Schema<CounterpartyTypesRestriction> =
  s.object<CounterpartyTypesRestriction>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => valueSchema))),
  });
