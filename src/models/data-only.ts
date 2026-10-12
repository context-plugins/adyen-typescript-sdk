import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Required to trigger the [data-only
 * flow](https://docs.adyen.com/online-payments/3d-secure/data-only/). When set to **true**, forces
 * the 3D Secure 2 data-only flow for all transactions where it is possible.
 */
export const DataOnly = {
  False: "false",
  True: "true",
} as const;
export type DataOnly = (typeof DataOnly)[keyof typeof DataOnly] | (string & {});

export const dataOnlySchema: EnumSchema<DataOnly> = s.enumOf<DataOnly>(DataOnly);
