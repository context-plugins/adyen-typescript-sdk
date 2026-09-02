import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AdditionalSalesChannel = {
  ECommerce: "eCommerce",
  EcomMoto: "ecomMoto",
  Pos: "pos",
  PosMoto: "posMoto",
} as const;
export type AdditionalSalesChannel =
  | (typeof AdditionalSalesChannel)[keyof typeof AdditionalSalesChannel]
  | (string & {});

export const additionalSalesChannelSchema: EnumSchema<AdditionalSalesChannel> =
  s.enumOf<AdditionalSalesChannel>(AdditionalSalesChannel);
