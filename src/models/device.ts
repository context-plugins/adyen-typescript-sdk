import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type101Schema, type Type101 } from "./type101.js";

export type Device = {
  /** The unique identifier of the SCA device. */
  id?: string;
  /**
   * The name of the SCA device. You can show this name to your user to help them identify the
   * device.
   */
  name?: string;
  /** The unique identifier of the payment instrument that is associated with the SCA device. */
  paymentInstrumentId?: string;
  /**
   * The type of device.
   *
   * Possible values: **ios**, **android**, **browser**.
   */
  type?: Type101;
};

export const deviceSchema: Schema<Device> = s.object<Device>({
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  paymentInstrumentId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type101Schema)),
});
