import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ThirdPartyTokenRedundancyInfo1 = {
  requestParameters?: Record<string, string>;
  requestTemplateCode: string;
};

export const thirdPartyTokenRedundancyInfo1Schema: Schema<ThirdPartyTokenRedundancyInfo1> =
  s.object<ThirdPartyTokenRedundancyInfo1>({
    requestParameters: s.optional(s.record(s.string(), s.string())),
    requestTemplateCode: s.string(),
  });
