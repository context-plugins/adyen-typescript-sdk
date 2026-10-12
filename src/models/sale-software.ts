import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information related to the software of the Sale System which manages the NEXO Sale to POI
 * protocol.
 */
export type SaleSoftware = {
  /** Identification of the Manufacturer. */
  manufacturerId: string;
  /** Name of the software product. */
  applicationName: string;
  /** Version of the software product. */
  softwareVersion: string;
  /** Certification code of the software which manages the Sale to POI protocol. */
  certificationCode: string;
};

export const saleSoftwareSchema: Schema<SaleSoftware> = s.object<SaleSoftware>({
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
