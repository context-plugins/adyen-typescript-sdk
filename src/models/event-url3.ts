import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";

export type EventUrl3 = {
  eventLocalUrls?: Url[];
  eventPublicUrls?: Url[];
};

export const eventUrl3Schema: Schema<EventUrl3> = s.object<EventUrl3>({
  eventLocalUrls: s.optional(s.array(s.lazy(() => urlSchema))),
  eventPublicUrls: s.optional(s.array(s.lazy(() => urlSchema))),
});
