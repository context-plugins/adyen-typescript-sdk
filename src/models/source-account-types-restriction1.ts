import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value5Schema, type Value5 } from "./value5.js";

/**
 * Contains a list of source account types and how they must be evaluated.
 *
 * Supported operations: **anyMatch**, **noneMatch**.
 *
 * Supported value inputs:
 * - **balanceAccount**
 * - **businessAccount**.
 */
export type SourceAccountTypesRestriction1 = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  /** The list of source account types to be evaluated. */
  value?: Value5[];
};

export const sourceAccountTypesRestriction1Schema: Schema<SourceAccountTypesRestriction1> =
  s.object<SourceAccountTypesRestriction1>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => value5Schema))),
  });
