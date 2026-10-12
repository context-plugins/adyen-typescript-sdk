import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information related to the software of the Sale System which manages the Sale to POI protocol.
 */
export type SaleSoftware1 = {
  /** Identification of the Manufacturer. */
  manufacturerId: string;
  /** Name of the software product. */
  applicationName: string;
  /** Version of the software product. */
  softwareVersion: string;
  /** Certification code of the software which manages the Sale to POI protocol. */
  certificationCode: string;
};

export const saleSoftware1Schema: Schema<SaleSoftware1> = s.object<SaleSoftware1>({
  manufacturerId: s.string(),
  applicationName: s.string(),
  softwareVersion: s.string(),
  certificationCode: s.string(),
  _keysMap: {
    manufacturerId: "ManufacturerID",
    applicationName: "ApplicationName",
    softwareVersion: "SoftwareVersion",
    certificationCode: "CertificationCode",
  },
});
