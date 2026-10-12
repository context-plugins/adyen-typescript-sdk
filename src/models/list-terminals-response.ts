import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";
import { terminalSchema, type Terminal } from "./terminal.js";

export type ListTerminalsResponse = {
  /** Pagination references. */
  links?: PaginationLinks1;
  /** The list of terminals and their details. */
  data?: Terminal[];
  /** Total number of items. */
  itemsTotal: number;
  /** Total number of pages. */
  pagesTotal: number;
};

export const listTerminalsResponseSchema: Schema<ListTerminalsResponse> = s.object<ListTerminalsResponse>({
  links: s.optional(s.lazy(() => paginationLinks1Schema)),
  data: s.optional(s.array(s.lazy(() => terminalSchema))),
  itemsTotal: s.int(),
  pagesTotal: s.int(),
  _keysMap: {
    links: "_links",
  },
});
