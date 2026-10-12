import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invalidFieldSchema, type InvalidField } from "./invalid-field.js";

/** Standardized error response following RFC-7807 format */
export type DefaultErrorResponseEntity = {
  /** A human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /** Unique business error code. */
  errorCode?: string;
  /** A URI that identifies the specific occurrence of the problem if applicable. */
  instance?: string;
  /** Array of fields with validation errors when applicable. */
  invalidFields?: InvalidField[];
  /** The unique reference for the request. */
  requestId?: string;
  /** The HTTP status code. */
  status?: number;
  /** A short, human-readable summary of the problem type. */
  title?: string;
  /**
   * A URI that identifies the validation error type. It points to human-readable documentation for
   * the problem type.
   */
  type?: string;
};

export const defaultErrorResponseEntitySchema: Schema<DefaultErrorResponseEntity> =
  s.object<DefaultErrorResponseEntity>({
    detail: s.optional(s.string()),
    errorCode: s.optional(s.string()),
    instance: s.optional(s.string()),
    invalidFields: s.optional(s.array(s.lazy(() => invalidFieldSchema))),
    requestId: s.optional(s.string()),
    status: s.optional(s.int()),
    title: s.optional(s.string()),
    type: s.optional(s.string()),
  });
