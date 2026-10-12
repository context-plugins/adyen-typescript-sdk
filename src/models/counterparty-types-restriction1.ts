import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./value.js";

/**
 * Contains a list of counterparty types and how they must be evaluated.
 *
 * Supported operations: **anyMatch**, **noneMatch**.
 *
 * Supported value inputs:
 * - **balanceAccount**
 * - **bankAccount**
 * - **card**
 * - **transferInstrument**
 */
export type CounterpartyTypesRestriction1 = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  /** The list of counterparty types to be evaluated. */
  value?: Value[];
};

export const counterpartyTypesRestriction1Schema: Schema<CounterpartyTypesRestriction1> =
  s.object<CounterpartyTypesRestriction1>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => valueSchema))),
  });
