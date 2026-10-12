import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invalidFieldSchema, type InvalidField } from "./invalid-field.js";
import { routingDetailsSchema, type RoutingDetails } from "./routing-details.js";

export type TransferServiceRestServiceErrorError = {
  /** A human-readable explanation specific to this occurrence of the problem. */
  detail: string;
  /** A code that identifies the problem type. */
  errorCode: string;
  /** A unique URI that identifies the specific occurrence of the problem. */
  instance?: string;
  /** Detailed explanation of each validation error, when applicable. */
  invalidFields?: InvalidField[];
  /** A unique reference for the request, essentially the same as `pspReference`. */
  requestId?: string;
  /** JSON response payload. */
  response?: Record<string, unknown>;
  /**
   * Detailed explanation of each attempt to route the transfer with the priorities from the
   * request.
   */
  routingDetails?: RoutingDetails[];
  /** The HTTP status code. */
  status: number;
  /** A short, human-readable summary of the problem type. */
  title: string;
  /**
   * A URI that identifies the problem type, pointing to human-readable documentation on this
   * problem type.
   */
  type: string;
};

export const transferServiceRestServiceErrorErrorSchema: Schema<TransferServiceRestServiceErrorError> =
  s.object<TransferServiceRestServiceErrorError>({
    detail: s.string(),
    errorCode: s.string(),
    instance: s.optional(s.string()),
    invalidFields: s.optional(s.array(s.lazy(() => invalidFieldSchema))),
    requestId: s.optional(s.string()),
    response: s.optional(s.record(s.string(), s.unknown())),
    routingDetails: s.optional(s.array(s.lazy(() => routingDetailsSchema))),
    status: s.int(),
    title: s.string(),
    type: s.string(),
  });
