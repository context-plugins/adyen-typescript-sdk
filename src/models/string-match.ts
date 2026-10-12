import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { operationSchema, type Operation } from "./operation.js";

export type StringMatch = {
  /**
   * The type of string matching operation. Possible values: **startsWith**, **endsWith**,
   * **isEqualTo**, **contains**,
   */
  operation?: Operation;
  /** The string to be matched. */
  value?: string;
};

export const stringMatchSchema: Schema<StringMatch> = s.object<StringMatch>({
  operation: s.optional(s.lazy(() => operationSchema)),
  value: s.optional(s.string()),
});
