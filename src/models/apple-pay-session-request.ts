import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApplePaySessionRequest = {
  displayName: string;
  domainName: string;
  merchantIdentifier: string;
};

export const applePaySessionRequestSchema: Schema<ApplePaySessionRequest> = s.object<ApplePaySessionRequest>({
  displayName: s.string(),
  domainName: s.string(),
  merchantIdentifier: s.string(),
});
