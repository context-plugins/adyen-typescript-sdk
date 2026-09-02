import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invalidFieldSchema, type InvalidField } from "./invalid-field.js";
import { routingDetailsSchema, type RoutingDetails } from "./routing-details.js";

export type TransferServiceRestServiceErrorError = {
  detail: string;
  errorCode: string;
  instance?: string;
  invalidFields?: InvalidField[];
  requestId?: string;
  response?: Record<string, unknown>;
  routingDetails?: RoutingDetails[];
  status: number;
  title: string;
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
    status: s.number(),
    title: s.string(),
    type: s.string(),
  });
