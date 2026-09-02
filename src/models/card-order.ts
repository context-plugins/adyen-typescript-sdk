import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status61Schema, type Status61 } from "./status61.js";

export type CardOrder = {
  beginDate?: Date;
  cardManufacturingProfileId?: string;
  closedDate?: Date;
  endDate?: Date;
  id?: string;
  lockDate?: Date;
  serviceCenter?: string;
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
