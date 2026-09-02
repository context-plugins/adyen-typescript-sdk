import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectInformation1Schema, type CollectInformation1 } from "./collect-information1.js";
import { showPages2Schema, type ShowPages2 } from "./show-pages2.js";

export type GetOnboardingUrlRequest = {
  accountHolderCode: string;
  collectInformation?: CollectInformation1;
  editMode?: boolean;
  mobileOAuthCallbackUrl?: string;
  platformName?: string;
  returnUrl?: string;
  shopperLocale?: string;
  showPages?: ShowPages2;
};

export const getOnboardingUrlRequestSchema: Schema<GetOnboardingUrlRequest> =
  s.object<GetOnboardingUrlRequest>({
    accountHolderCode: s.string(),
    collectInformation: s.optional(s.lazy(() => collectInformation1Schema)),
    editMode: s.optional(s.boolean()),
    mobileOAuthCallbackUrl: s.optional(s.string()),
    platformName: s.optional(s.string()),
    returnUrl: s.optional(s.string()),
    shopperLocale: s.optional(s.string()),
    showPages: s.optional(s.lazy(() => showPages2Schema)),
  });
