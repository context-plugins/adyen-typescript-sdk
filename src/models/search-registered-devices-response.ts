import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceSchema, type Device } from "./device.js";
import { link1Schema, type Link1 } from "./link1.js";

export type SearchRegisteredDevicesResponse = {
  data?: Device[];
  itemsTotal?: number;
  link?: Link1;
  pagesTotal?: number;
};

export const searchRegisteredDevicesResponseSchema: Schema<SearchRegisteredDevicesResponse> =
  s.object<SearchRegisteredDevicesResponse>({
    data: s.optional(s.array(s.lazy(() => deviceSchema))),
    itemsTotal: s.optional(s.number()),
    link: s.optional(s.lazy(() => link1Schema)),
    pagesTotal: s.optional(s.number()),
  });
