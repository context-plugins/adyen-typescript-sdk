import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";

export type AccountEvent = {
  event?: Event;
  executionDate?: Date;
  reason?: string;
};

export const accountEventSchema: Schema<AccountEvent> = s.object<AccountEvent>({
  event: s.optional(s.lazy(() => eventSchema)),
  executionDate: s.optional(s.dateTime()),
  reason: s.optional(s.string()),
});
