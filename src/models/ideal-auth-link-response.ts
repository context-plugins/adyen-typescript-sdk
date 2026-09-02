import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { href3Schema, type Href3 } from "./href3.js";

export type IdealAuthLinkResponse = {
  redirectUrl?: Href3;
};

export const idealAuthLinkResponseSchema: Schema<IdealAuthLinkResponse> = s.object<IdealAuthLinkResponse>({
  redirectUrl: s.optional(s.lazy(() => href3Schema)),
});
