import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorCondition1Schema, type ErrorCondition1 } from "./error-condition1.js";
import { result11Schema, type Result11 } from "./result11.js";

export type Response1 = {
  result: Result11;
  errorCondition?: ErrorCondition1;
  additionalResponse?: string;
};

export const response1Schema: Schema<Response1> = s.object<Response1>({
  result: result11Schema,
  errorCondition: s.optional(s.lazy(() => errorCondition1Schema)),
  additionalResponse: s.optional(s.string()),
  _keysMap: {
    result: "Result",
    errorCondition: "ErrorCondition",
    additionalResponse: "AdditionalResponse",
  },
});
