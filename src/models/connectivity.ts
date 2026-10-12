import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventUrl3Schema, type EventUrl3 } from "./event-url3.js";
import { simcardStatusSchema, type SimcardStatus } from "./simcard-status.js";

export type Connectivity = {
  /**
   * Indicates the status of the SIM card in the payment terminal. Can be updated and received only
   * at terminal level, and only for models that support cellular connectivity.
   *
   * Possible values:
   * * **ACTIVATED**: the SIM card is activated. Cellular connectivity may still need to be enabled
   *   on the terminal itself, in the **Network** settings.
   * * **INVENTORY**: the SIM card is not activated. The terminal can't use cellular connectivity.
   */
  simcardStatus?: SimcardStatus;
  /** The list of local and public URLs to send notifications to when using local integrations. */
  terminalIpAddressUrl?: EventUrl3;
};

export const connectivitySchema: Schema<Connectivity> = s.object<Connectivity>({
  simcardStatus: s.optional(s.lazy(() => simcardStatusSchema)),
  terminalIpAddressUrl: s.optional(s.lazy(() => eventUrl3Schema)),
  _keysMap: {
    terminalIpAddressUrl: "terminalIPAddressURL",
  },
});
