import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ThirdPartyTokenRedundancyInfo = {
  requestParameters?: Record<string, string>;
  requestTemplateCode: string;
};

export const thirdPartyTokenRedundancyInfoSchema: Schema<ThirdPartyTokenRedundancyInfo> =
  s.object<ThirdPartyTokenRedundancyInfo>({
    requestParameters: s.optional(s.record(s.string(), s.string())),
    requestTemplateCode: s.string(),
  });
