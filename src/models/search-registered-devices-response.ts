import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceSchema, type Device } from "./device.js";
import { link1Schema, type Link1 } from "./link1.js";

export type SearchRegisteredDevicesResponse = {
  /** Contains a list of registered SCA devices and their corresponding details. */
  data?: Device[];
  /** The total amount of registered SCA devices that match the query parameters. */
  itemsTotal?: number;
  /** Contains links to the list pages. */
  link?: Link1;
  /** The total amount of list pages. */
  pagesTotal?: number;
};

export const searchRegisteredDevicesResponseSchema: Schema<SearchRegisteredDevicesResponse> =
  s.object<SearchRegisteredDevicesResponse>({
    data: s.optional(s.array(s.lazy(() => deviceSchema))),
    itemsTotal: s.optional(s.int()),
    link: s.optional(s.lazy(() => link1Schema)),
    pagesTotal: s.optional(s.int()),
  });
