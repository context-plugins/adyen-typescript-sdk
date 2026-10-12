import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status61Schema, type Status61 } from "./status61.js";

export type CardOrder = {
  /** The date when the card order is created. */
  beginDate?: Date;
  /** The unique identifier of the card manufacturer profile. */
  cardManufacturingProfileId?: string;
  /** The date when the card order processing ends. */
  closedDate?: Date;
  /**
   * The date when you manually closed the card order.
   *
   * Card orders are automatically closed by the end of the day it was created. If you manually
   * closed it beforehand, the closing date is shown as the `endDate`.
   */
  endDate?: Date;
  /** The unique identifier of the card order. */
  id?: string;
  /** The date when the card order processing begins. */
  lockDate?: Date;
  /** The service center. */
  serviceCenter?: string;
  /**
   * The status of the card order.
   *
   * Possible values: **Open**, **Closed**.
   */
  status?: Status61;
};

export const cardOrderSchema: Schema<CardOrder> = s.object<CardOrder>({
  beginDate: s.optional(s.dateTime()),
  cardManufacturingProfileId: s.optional(s.string()),
  closedDate: s.optional(s.dateTime()),
  endDate: s.optional(s.dateTime()),
  id: s.optional(s.string()),
  lockDate: s.optional(s.dateTime()),
  serviceCenter: s.optional(s.string()),
  status: s.optional(s.lazy(() => status61Schema)),
});
