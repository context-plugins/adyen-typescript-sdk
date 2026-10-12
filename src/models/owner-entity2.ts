import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains information about the resource that owns the document. */
export type OwnerEntity2 = {
  /**
   * Unique identifier of the resource that owns the document. For `type` **legalEntity**, this
   * value is the unique identifier of the [legal
   * entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id).
   * For `type` **bankAccount**, this value is the unique identifier of the [transfer
   * instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id).
   */
  id: string;
  /**
   * Type of resource that owns the document.
   *
   * Possible values: **legalEntity**, **bankAccount**.
   */
  type: string;
};

export const ownerEntity2Schema: Schema<OwnerEntity2> = s.object<OwnerEntity2>({
  id: s.string(),
  type: s.string(),
});
