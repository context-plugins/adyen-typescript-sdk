import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";

/** The list of local and public URLs to send notifications to when using local integrations. */
export type EventUrl3 = {
  /** One or more local URLs to send event notifications to when using Terminal API. */
  eventLocalUrls?: Url[];
  /** One or more public URLs to send event notifications to when using Terminal API. */
  eventPublicUrls?: Url[];
};

export const eventUrl3Schema: Schema<EventUrl3> = s.object<EventUrl3>({
  eventLocalUrls: s.optional(s.array(s.lazy(() => urlSchema))),
  eventPublicUrls: s.optional(s.array(s.lazy(() => urlSchema))),
});
