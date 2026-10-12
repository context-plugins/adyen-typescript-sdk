import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { forceRebootDetailsSchema, type ForceRebootDetails } from "../force-reboot-details.js";
import {
  installAndroidAppDetailsSchema,
  type InstallAndroidAppDetails,
} from "../install-android-app-details.js";
import {
  installAndroidCertificateDetailsSchema,
  type InstallAndroidCertificateDetails,
} from "../install-android-certificate-details.js";
import { releaseUpdateDetailsSchema, type ReleaseUpdateDetails } from "../release-update-details.js";
import {
  uninstallAndroidAppDetailsSchema,
  type UninstallAndroidAppDetails,
} from "../uninstall-android-app-details.js";
import {
  uninstallAndroidCertificateDetailsSchema,
  type UninstallAndroidCertificateDetails,
} from "../uninstall-android-certificate-details.js";

/** Information about the action to take. */
export type ActionDetails =
  | (InstallAndroidAppDetails & { type: "InstallAndroidApp" })
  | (InstallAndroidCertificateDetails & { type: "InstallAndroidCertificate" })
  | (ReleaseUpdateDetails & { type: "ReleaseUpdate" })
  | (UninstallAndroidAppDetails & { type: "UninstallAndroidApp" })
  | (UninstallAndroidCertificateDetails & { type: "UninstallAndroidCertificate" })
  | (ForceRebootDetails & { type: "ForceReboot" });

export const actionDetailsSchema: Schema<ActionDetails> = s.discriminatedUnion<ActionDetails>("type", {
  InstallAndroidApp: installAndroidAppDetailsSchema,
  InstallAndroidCertificate: installAndroidCertificateDetailsSchema,
  ReleaseUpdate: releaseUpdateDetailsSchema,
  UninstallAndroidApp: uninstallAndroidAppDetailsSchema,
  UninstallAndroidCertificate: uninstallAndroidCertificateDetailsSchema,
  ForceReboot: forceRebootDetailsSchema,
});
