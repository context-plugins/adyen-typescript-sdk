import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SaleCapability = {
  CashierStatus: "CashierStatus",
  CashierError: "CashierError",
  CashierDisplay: "CashierDisplay",
  PoiReplication: "POIReplication",
  CashierInput: "CashierInput",
  CustomerAssistance: "CustomerAssistance",
  CustomerDisplay: "CustomerDisplay",
  CustomerError: "CustomerError",
  CustomerInput: "CustomerInput",
  PrinterReceipt: "PrinterReceipt",
  PrinterDocument: "PrinterDocument",
  PrinterVoucher: "PrinterVoucher",
  MagStripe: "MagStripe",
  Icc: "ICC",
  EmvContactless: "EMVContactless",
} as const;
export type SaleCapability = (typeof SaleCapability)[keyof typeof SaleCapability] | (string & {});

export const saleCapabilitySchema: EnumSchema<SaleCapability> = s.enumOf<SaleCapability>(SaleCapability);
