import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HttpMethod = {
  Post: "post",
  Put: "put",
  Patch: "patch",
} as const;
export type HttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod] | (string & {});

export const httpMethodSchema: EnumSchema<HttpMethod> = s.enumOf<HttpMethod>(HttpMethod);
