import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bulkAddress1Schema, type BulkAddress1 } from "./bulk-address1.js";

export type CardConfiguration2 = {
  activation?: string;
  activationUrl?: string;
  bulkAddress?: BulkAddress1;
  cardImageId?: string;
  carrier?: string;
  carrierImageId?: string;
  configurationProfileId: string;
  currency?: string;
  envelope?: string;
  insert?: string;
  language?: string;
  logoImageId?: string;
  pinMailer?: string;
  printLine?: string;
  shipmentMethod?: string;
};

export const cardConfiguration2Schema: Schema<CardConfiguration2> = s.object<CardConfiguration2>({
  activation: s.optional(s.string()),
  activationUrl: s.optional(s.string()),
  bulkAddress: s.optional(s.lazy(() => bulkAddress1Schema)),
  cardImageId: s.optional(s.string()),
  carrier: s.optional(s.string()),
  carrierImageId: s.optional(s.string()),
  configurationProfileId: s.string(),
  currency: s.optional(s.string()),
  envelope: s.optional(s.string()),
  insert: s.optional(s.string()),
  language: s.optional(s.string()),
  logoImageId: s.optional(s.string()),
  pinMailer: s.optional(s.string()),
  printLine: s.optional(s.string()),
  shipmentMethod: s.optional(s.string()),
});
