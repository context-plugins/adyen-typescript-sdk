import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";

export type EventUrl = {
  eventLocalUrls?: Url[];
  eventPublicUrls?: Url[];
};

export const eventUrlSchema: Schema<EventUrl> = s.object<EventUrl>({
  eventLocalUrls: s.optional(s.array(s.lazy(() => urlSchema))),
  eventPublicUrls: s.optional(s.array(s.lazy(() => urlSchema))),
});
