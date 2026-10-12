import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";
import { webhookSchema, type Webhook } from "./webhook.js";

export type ListWebhooksResponse = {
  /** Pagination references. */
  links?: PaginationLinks1;
  /** Reference to the account. */
  accountReference?: string;
  /** The list of webhooks configured for this account. */
  data?: Webhook[];
  /** Total number of items. */
  itemsTotal: number;
  /** Total number of pages. */
  pagesTotal: number;
};

export const listWebhooksResponseSchema: Schema<ListWebhooksResponse> = s.object<ListWebhooksResponse>({
  links: s.optional(s.lazy(() => paginationLinks1Schema)),
  accountReference: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => webhookSchema))),
  itemsTotal: s.int(),
  pagesTotal: s.int(),
  _keysMap: {
    links: "_links",
  },
});
