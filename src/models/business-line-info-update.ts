import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sourceOfFunds11Schema, type SourceOfFunds11 } from "./source-of-funds11.js";
import { webDataExemption1Schema, type WebDataExemption1 } from "./web-data-exemption1.js";
import { webDataSchema, type WebData } from "./web-data.js";

export type BusinessLineInfoUpdate = {
  /**
   * A code that represents the industry of your legal entity. For example, **4431A** for computer
   * software stores.
   */
  industryCode?: string;
  /** The description of the industry code. */
  industryCodeDescription?: string;
  /**
   * A list of channels where goods or services are sold.
   *
   * Possible values: **pos**, **posMoto**, **eCommerce**, **ecomMoto**, **payByLink**.
   *
   * Required only in combination with the `service` **paymentProcessing**.
   */
  salesChannels?: string[];
  /**
   * Contains information about the source of your user's funds. Required only if the `service` is
   * **banking** or **issuing**.
   */
  sourceOfFunds?: SourceOfFunds11;
  /**
   * List of website URLs where your user's goods or services are sold. When this is required for a
   * service but your user does not have an online presence, provide the reason in the
   * `webDataExemption` object.
   */
  webData?: WebData[];
  /** The reason why the web data is not provided. */
  webDataExemption?: WebDataExemption1;
};

export const businessLineInfoUpdateSchema: Schema<BusinessLineInfoUpdate> = s.object<BusinessLineInfoUpdate>({
  industryCode: s.optional(s.string()),
  industryCodeDescription: s.optional(s.string()),
  salesChannels: s.optional(s.array(s.string())),
  sourceOfFunds: s.optional(s.lazy(() => sourceOfFunds11Schema)),
  webData: s.optional(s.array(s.lazy(() => webDataSchema))),
  webDataExemption: s.optional(s.lazy(() => webDataExemption1Schema)),
});
