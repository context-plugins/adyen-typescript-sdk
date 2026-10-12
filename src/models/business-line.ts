import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilityProblem1Schema, type CapabilityProblem1 } from "./capability-problem1.js";
import { serviceSchema, type Service } from "./service.js";
import { sourceOfFunds11Schema, type SourceOfFunds11 } from "./source-of-funds11.js";
import { webDataExemption1Schema, type WebDataExemption1 } from "./web-data-exemption1.js";
import { webDataSchema, type WebData } from "./web-data.js";

export type BusinessLine = {
  /** The unique identifier of the business line. */
  id: string;
  /**
   * A code that represents the industry of the legal entity for
   * [marketplaces](https://docs.adyen.com/marketplaces/verification-requirements/reference-additional-products/#list-industry-codes)
   * or
   * [platforms](https://docs.adyen.com/platforms/verification-requirements/reference-additional-products/#list-industry-codes).
   * For example, **4431A** for computer software stores.
   */
  industryCode: string;
  /** The description of the industry code. */
  industryCodeDescription?: string;
  /**
   * Unique identifier of the [legal
   * entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id)
   * that owns the business line.
   */
  legalEntityId: string;
  /** The verification errors related to capabilities for this supporting entity. */
  problems?: CapabilityProblem1[];
  /**
   * A list of channels where goods or services are sold.
   *
   * Possible values: **pos**, **posMoto**, **eCommerce**, **ecomMoto**, **payByLink**.
   *
   * Required only in combination with the `service` **paymentProcessing**.
   */
  salesChannels?: string[];
  /**
   * The service for which you are creating the business line.
   *
   *
   *
   * Possible values:
   * * **paymentProcessing**
   * * **issuing**
   * * **banking**
   */
  service: Service;
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

export const businessLineSchema: Schema<BusinessLine> = s.object<BusinessLine>({
  id: s.string(),
  industryCode: s.string(),
  industryCodeDescription: s.optional(s.string()),
  legalEntityId: s.string(),
  problems: s.optional(s.array(s.lazy(() => capabilityProblem1Schema))),
  salesChannels: s.optional(s.array(s.string())),
  service: serviceSchema,
  sourceOfFunds: s.optional(s.lazy(() => sourceOfFunds11Schema)),
  webData: s.optional(s.array(s.lazy(() => webDataSchema))),
  webDataExemption: s.optional(s.lazy(() => webDataExemption1Schema)),
});
