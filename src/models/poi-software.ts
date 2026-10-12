import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information related to the software of the POI System which manages the Sale to POI protocol. In
 * a session allows identifying the product features of a POI System.
 */
export type PoiSoftware = {
  /**
   * Identification of the Manufacturer. Sent in the Login Request (Response) to identify the Sale
   * System (POI System) manufacturer during the session.
   */
  manufacturerId: string;
  /**
   * Name of the software product. Sent in the Login Request (Response) to identify the Sale System
   * (POI System) product name during the session.
   */
  applicationName: string;
  /**
   * Version of the software product. Sent in the Login Request (Response) to identify the version
   * of the Sale System (POI System) product software during the session.
   */
  softwareVersion: string;
  /**
   * Certification code of the software which manages the Sale to POI protocol. Sent in the Login
   * Request (Response) to get the certification code of the Sale System (POI System) product
   * software. This code can be a software checksum or any number associated with the software.
   */
  certificationCode: string;
};

export const poiSoftwareSchema: Schema<PoiSoftware> = s.object<PoiSoftware>({
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
