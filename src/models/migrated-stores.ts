import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MigratedStores = {
  /**
   * The unique identifier of the business line associated with the migrated account holder in the
   * balance platform.
   */
  businessLineId?: string;
  /**
   * The unique identifier of the store associated with the migrated account holder in the classic
   * integration.
   */
  storeCode?: string;
  /**
   * The unique identifier of the store associated with the migrated account holder in the balance
   * platform.
   */
  storeId?: string;
  /**
   * Your reference for the store in the classic integration. The [Customer
   * Area](https://ca-test.adyen.com/) uses this value for the store description.
   */
  storeReference?: string;
};

export const migratedStoresSchema: Schema<MigratedStores> = s.object<MigratedStores>({
  businessLineId: s.optional(s.string()),
  storeCode: s.optional(s.string()),
  storeId: s.optional(s.string()),
  storeReference: s.optional(s.string()),
});
