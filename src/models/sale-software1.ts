import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SaleSoftware1 = {
  manufacturerId: string;
  applicationName: string;
  softwareVersion: string;
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
