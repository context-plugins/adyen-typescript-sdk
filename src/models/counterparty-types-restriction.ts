import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./value.js";

export type CounterpartyTypesRestriction = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  /** The list of counterparty types to be evaluated. */
  value?: Value[];
};

export const counterpartyTypesRestrictionSchema: Schema<CounterpartyTypesRestriction> =
  s.object<CounterpartyTypesRestriction>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => valueSchema))),
  });
