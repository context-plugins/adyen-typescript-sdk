import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companyLinks2Schema, type CompanyLinks2 } from "./company-links2.js";
import { dataCenterSchema, type DataCenter } from "./data-center.js";

export type Company2 = {
  /** References to resources connected with this company. */
  links?: CompanyLinks2;
  /**
   * List of available data centers.
   *
   * Adyen has several data centers around the world.In the URL that you use for making API
   * requests, we recommend you use the live URL prefix from the data center closest to your
   * shoppers.
   */
  dataCenters?: DataCenter[];
  /** Your description for the company account, maximum 300 characters */
  description?: string;
  /** The unique identifier of the company account. */
  id?: string;
  /** The legal or trading name of the company. */
  name?: string;
  /** Your reference to the account */
  reference?: string;
  /**
   * The status of the company account.
   *
   * Possible values:
   *
   * * **Active**: Users can log in. Processing and payout capabilities depend on the status of the
   *   merchant account.
   * * **Inactive**: Users can log in. Payment processing and payouts are disabled.
   * * **Closed**: The company account is closed and this cannot be reversed. Users cannot log in.
   *   Payment processing and payouts are disabled.
   */
  status?: string;
};

export const company2Schema: Schema<Company2> = s.object<Company2>({
  links: s.optional(s.lazy(() => companyLinks2Schema)),
  dataCenters: s.optional(s.array(s.lazy(() => dataCenterSchema))),
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  reference: s.optional(s.string()),
  status: s.optional(s.string()),
  _keysMap: {
    links: "_links",
  },
});
