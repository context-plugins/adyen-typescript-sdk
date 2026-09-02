import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invalidFieldSchema, type InvalidField } from "./invalid-field.js";

export type DefaultErrorResponseEntity = {
  detail?: string;
  errorCode?: string;
  instance?: string;
  invalidFields?: InvalidField[];
  requestId?: string;
  status?: number;
  title?: string;
  type?: string;
};

export const defaultErrorResponseEntitySchema: Schema<DefaultErrorResponseEntity> =
  s.object<DefaultErrorResponseEntity>({
    detail: s.optional(s.string()),
    errorCode: s.optional(s.string()),
    instance: s.optional(s.string()),
    invalidFields: s.optional(s.array(s.lazy(() => invalidFieldSchema))),
    requestId: s.optional(s.string()),
    status: s.optional(s.number()),
    title: s.optional(s.string()),
    type: s.optional(s.string()),
  });
