import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventUrl3Schema, type EventUrl3 } from "./event-url3.js";
import { simcardStatusSchema, type SimcardStatus } from "./simcard-status.js";

export type Connectivity1 = {
  simcardStatus?: SimcardStatus;
  terminalIpAddressUrl?: EventUrl3;
};

export const connectivity1Schema: Schema<Connectivity1> = s.object<Connectivity1>({
  simcardStatus: s.optional(s.lazy(() => simcardStatusSchema)),
  terminalIpAddressUrl: s.optional(s.lazy(() => eventUrl3Schema)),
  _keysMap: {
    terminalIpAddressUrl: "terminalIPAddressURL",
  },
});
