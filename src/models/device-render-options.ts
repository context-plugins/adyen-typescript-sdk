import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { SdkInterface, sdkInterfaceSchema } from "./sdk-interface.js";
import { sdkUiTypeSchema, type SdkUiType } from "./sdk-ui-type.js";

/** Display options for the 3D Secure 2 SDK. Optional and only for `deviceChannel` **app**. */
export type DeviceRenderOptions = {
  /**
   * Supported SDK interface types. Allowed values:
   * * native
   * * html
   * * both
   *
   * @default SdkInterface.Both
   */
  sdkInterface?: SdkInterface;
  /**
   * UI types supported for displaying specific challenges. Allowed values:
   * * text
   * * singleSelect
   * * outOfBand
   * * otherHtml
   * * multiSelect
   */
  sdkUiType?: SdkUiType[];
};

export const deviceRenderOptionsSchema: Schema<DeviceRenderOptions> = s.object<DeviceRenderOptions>({
  sdkInterface: s.defaulted(sdkInterfaceSchema, SdkInterface.Both),
  sdkUiType: s.optional(s.array(s.lazy(() => sdkUiTypeSchema))),
});
