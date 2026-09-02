import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SaleSoftware = {
  manufacturerId: string;
  applicationName: string;
  softwareVersion: string;
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
