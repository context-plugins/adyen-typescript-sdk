import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method to use for the request Adyen makes on your behalf to the third party. */
export const HttpMethodEnum = {
  Post: "post",
  Put: "put",
  Patch: "patch",
} as const;
export type HttpMethodEnum = (typeof HttpMethodEnum)[keyof typeof HttpMethodEnum] | (string & {});

export const httpMethodEnumSchema: EnumSchema<HttpMethodEnum> = s.enumOf<HttpMethodEnum>(HttpMethodEnum);
