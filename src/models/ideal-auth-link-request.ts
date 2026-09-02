import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdealAuthLinkRequest = {
  accountHolderId: string;
};

export const idealAuthLinkRequestSchema: Schema<IdealAuthLinkRequest> = s.object<IdealAuthLinkRequest>({
  accountHolderId: s.string(),
});
