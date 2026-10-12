import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourceSchema, type Resource } from "./unions/resource.js";

export type Policy = {
  /**
   * An object containing the type and the unique identifier of the user of the component.
   *
   * For [Onboarding components](https://docs.adyen.com/platforms/onboard-users/components), this is
   * the ID of the legal entity that has a contractual relationship with your platform. For sole
   * proprietorships, use the ID of the legal entity of the individual owner.
   *
   * For [Platform Experience components](https://docs.adyen.com/platforms/build-user-dashboards),
   * this is the ID of the account holder that is associated with the balance account shown in the
   * component.
   */
  resources?: Resource[];
  /** The name of the role required to use the component. */
  roles?: string[];
};

export const policySchema: Schema<Policy> = s.object<Policy>({
  resources: s.optional(s.array(s.lazy(() => resourceSchema))),
  roles: s.optional(s.array(s.string())),
});
