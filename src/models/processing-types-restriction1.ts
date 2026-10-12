import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value4Schema, type Value4 } from "./value4.js";

/**
 * List of processing types and the operation.
 *
 * Supported operations: **anyMatch**, **noneMatch**.
 */
export type ProcessingTypesRestriction1 = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  /**
   * List of processing types.
   *
   * Possible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**,
   * **recurring**, **token**.
   */
  value?: Value4[];
};

export const processingTypesRestriction1Schema: Schema<ProcessingTypesRestriction1> =
  s.object<ProcessingTypesRestriction1>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => value4Schema))),
  });
