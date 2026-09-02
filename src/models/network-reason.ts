import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { namespaceSchema, type Namespace } from "./namespace.js";

export type NetworkReason = {
  code?: string;
  description?: string;
  namespace?: Namespace;
};

export const networkReasonSchema: Schema<NetworkReason> = s.object<NetworkReason>({
  code: s.optional(s.string()),
  description: s.optional(s.string()),
  namespace: s.optional(s.lazy(() => namespaceSchema)),
});
