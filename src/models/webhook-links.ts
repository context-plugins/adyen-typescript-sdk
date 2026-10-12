import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linksElement15Schema, type LinksElement15 } from "./links-element15.js";
import { linksElement16Schema, type LinksElement16 } from "./links-element16.js";
import { linksElement17Schema, type LinksElement17 } from "./links-element17.js";
import { linksElement19Schema, type LinksElement19 } from "./links-element19.js";
import { linksElement6Schema, type LinksElement6 } from "./links-element6.js";

export type WebhookLinks = {
  /**
   * The company account that the webhook is configured for. Only present for company-level
   * webhooks.
   */
  company?: LinksElement15;
  /** Generate an HMAC key. */
  generateHmac: LinksElement16;
  /**
   * The merchant account that the webhook is configured for. Only present for merchant-level
   * webhooks.
   */
  merchant?: LinksElement17;
  /** Link to the resource itself. */
  self: LinksElement6;
  /** Test the webhook setup. */
  testWebhook: LinksElement19;
};

export const webhookLinksSchema: Schema<WebhookLinks> = s.object<WebhookLinks>({
  company: s.optional(s.lazy(() => linksElement15Schema)),
  generateHmac: linksElement16Schema,
  merchant: s.optional(s.lazy(() => linksElement17Schema)),
  self: linksElement6Schema,
  testWebhook: linksElement19Schema,
});
