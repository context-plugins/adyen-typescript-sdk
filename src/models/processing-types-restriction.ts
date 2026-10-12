import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value4Schema, type Value4 } from "./value4.js";

export type ProcessingTypesRestriction = {
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

export const processingTypesRestrictionSchema: Schema<ProcessingTypesRestriction> =
  s.object<ProcessingTypesRestriction>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => value4Schema))),
  });
