import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PoiSoftware = {
  manufacturerId: string;
  applicationName: string;
  softwareVersion: string;
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
