import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sdkInterfaceSchema, type SdkInterface } from "./sdk-interface.js";
import { sdkUiTypeSchema, type SdkUiType } from "./sdk-ui-type.js";

export type DeviceRenderOptions = {
  sdkInterface?: SdkInterface;
  sdkUiType?: SdkUiType[];
};

export const deviceRenderOptionsSchema: Schema<DeviceRenderOptions> = s.object<DeviceRenderOptions>({
  sdkInterface: s.optional(s.lazy(() => sdkInterfaceSchema)),
  sdkUiType: s.optional(s.array(s.lazy(() => sdkUiTypeSchema))),
});
