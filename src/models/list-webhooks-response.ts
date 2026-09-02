import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";
import { webhookSchema, type Webhook } from "./webhook.js";

export type ListWebhooksResponse = {
  links?: PaginationLinks1;
  accountReference?: string;
  data?: Webhook[];
  itemsTotal: number;
  pagesTotal: number;
};

export const listWebhooksResponseSchema: Schema<ListWebhooksResponse> = s.object<ListWebhooksResponse>({
  links: s.optional(s.lazy(() => paginationLinks1Schema)),
  accountReference: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => webhookSchema))),
  itemsTotal: s.number(),
  pagesTotal: s.number(),
  _keysMap: {
    links: "_links",
  },
});
