import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceInfo1Schema, type DeviceInfo1 } from "./device-info1.js";
import { itemSchema, type Item } from "./item.js";
import { status91Schema, type Status91 } from "./status91.js";

/** The details of the network token. */
export type NetworkToken2 = {
  /**
   * The card brand variant of the payment instrument associated with the network token. For
   * example, **mc_prepaid_mrw**.
   */
  brandVariant?: string;
  /**
   * Date and time when the network token was created, in [ISO
   * 8601](https://www.iso.org/iso-8601-date-and-time-format.html) extended format. For example,
   * **2025-03-19T10:15:30+01:00**..
   */
  creationDate?: Date;
  /** Contains information about the device used to provision the network token. */
  device?: DeviceInfo1;
  /** The unique identifier of the network token. */
  id?: string;
  /** The unique identifier of the payment instrument to which this network token belongs to. */
  paymentInstrumentId?: string;
  /**
   * The status of the network token. Possible values: **active**, **inactive**, **suspended**,
   * **closed**.
   */
  status?: Status91;
  /** The last four digits of the network token `id`. */
  tokenLastFour?: string;
  /**
   * The token requestor is an entity who requested tokenization of the card for secure payments.
   */
  tokenRequestor?: Item;
  /** The type of network token. For example, **wallet**, **cof**. */
  type?: string;
};

export const networkToken2Schema: Schema<NetworkToken2> = s.object<NetworkToken2>({
  brandVariant: s.optional(s.string()),
  creationDate: s.optional(s.dateTime()),
  device: s.optional(s.lazy(() => deviceInfo1Schema)),
  id: s.optional(s.string()),
  paymentInstrumentId: s.optional(s.string()),
  status: s.optional(s.lazy(() => status91Schema)),
  tokenLastFour: s.optional(s.string()),
  tokenRequestor: s.optional(s.lazy(() => itemSchema)),
  type: s.optional(s.string()),
});
