import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links21Schema, type Links21 } from "./links21.js";
import { transferDataSchema, type TransferData } from "./transfer-data.js";

export type FindTransfersResponse = {
  /** Contains links to the next and previous page whenever applicable. */
  links?: Links21;
  /** Contains the transfers that match the query parameters. */
  data?: TransferData[];
};

export const findTransfersResponseSchema: Schema<FindTransfersResponse> = s.object<FindTransfersResponse>({
  links: s.optional(s.lazy(() => links21Schema)),
  data: s.optional(s.array(s.lazy(() => transferDataSchema))),
  _keysMap: {
    links: "_links",
  },
});
