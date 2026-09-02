import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { priority1Schema, type Priority1 } from "./priority1.js";

export type RoutingDetails = {
  detail?: string;
  errorCode?: string;
  priority?: Priority1;
  title?: string;
};

export const routingDetailsSchema: Schema<RoutingDetails> = s.object<RoutingDetails>({
  detail: s.optional(s.string()),
  errorCode: s.optional(s.string()),
  priority: s.optional(s.lazy(() => priority1Schema)),
  title: s.optional(s.string()),
});
