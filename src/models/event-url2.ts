import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";

export type EventUrl2 = {
  eventLocalUrls?: Url[];
  eventPublicUrls?: Url[];
};

export const eventUrl2Schema: Schema<EventUrl2> = s.object<EventUrl2>({
  eventLocalUrls: s.optional(s.array(s.lazy(() => urlSchema))),
  eventPublicUrls: s.optional(s.array(s.lazy(() => urlSchema))),
});
