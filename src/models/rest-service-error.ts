import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invalidFieldSchema, type InvalidField } from "./invalid-field.js";

export type RestServiceError = {
  detail: string;
  errorCode: string;
  instance?: string;
  invalidFields?: InvalidField[];
  requestId?: string;
  response?: Record<string, unknown>;
  status: number;
  title: string;
  type: string;
};

export const restServiceErrorSchema: Schema<RestServiceError> = s.object<RestServiceError>({
  detail: s.string(),
  errorCode: s.string(),
  instance: s.optional(s.string()),
  invalidFields: s.optional(s.array(s.lazy(() => invalidFieldSchema))),
  requestId: s.optional(s.string()),
  response: s.optional(s.record(s.string(), s.unknown())),
  status: s.number(),
  title: s.string(),
  type: s.string(),
});
