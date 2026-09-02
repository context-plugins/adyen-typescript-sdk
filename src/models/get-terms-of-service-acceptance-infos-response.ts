import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  termsOfServiceAcceptanceInfoSchema,
  type TermsOfServiceAcceptanceInfo,
} from "./terms-of-service-acceptance-info.js";

export type GetTermsOfServiceAcceptanceInfosResponse = {
  data?: TermsOfServiceAcceptanceInfo[];
};

export const getTermsOfServiceAcceptanceInfosResponseSchema: Schema<GetTermsOfServiceAcceptanceInfosResponse> =
  s.object<GetTermsOfServiceAcceptanceInfosResponse>({
    data: s.optional(s.array(s.lazy(() => termsOfServiceAcceptanceInfoSchema))),
  });
