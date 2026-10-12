import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CollectInformation = {
  /**
   * Indicates whether [bank account
   * details](https://docs.adyen.com/classic-platforms/verification-process/accepted-data-format/#bank-accounts)
   * must be collected. Default is **true**.
   */
  bankDetails?: boolean;
  /**
   * Indicates whether [business
   * details](https://docs.adyen.com/classic-platforms/verification-process/accepted-data-format/#organizations)
   * must be collected. Default is **true**.
   */
  businessDetails?: boolean;
  /**
   * Indicates whether [individual
   * details](https://docs.adyen.com/classic-platforms/verification-process/accepted-data-format/#individuals)
   * must be collected. Default is **true**.
   */
  individualDetails?: boolean;
  /**
   * Indicates whether [legal arrangement
   * details](https://docs.adyen.com/classic-platforms/verification-checks/legal-arrangements) must
   * be collected. Default is **true**.
   */
  legalArrangementDetails?: boolean;
  /**
   * Indicates whether answers to a [PCI
   * questionnaire](https://docs.adyen.com/classic-platforms/platforms-for-partners#onboard-partner-platform)
   * must be collected. Applies only to partner platforms. Default is **true**.
   */
  pciQuestionnaire?: boolean;
  /**
   * Indicates whether [shareholder
   * details](https://docs.adyen.com/classic-platforms/verification-process/accepted-data-format/#individuals)
   * must be collected. Defaults to **true**.
   */
  shareholderDetails?: boolean;
};

export const collectInformationSchema: Schema<CollectInformation> = s.object<CollectInformation>({
  bankDetails: s.optional(s.boolean()),
  businessDetails: s.optional(s.boolean()),
  individualDetails: s.optional(s.boolean()),
  legalArrangementDetails: s.optional(s.boolean()),
  pciQuestionnaire: s.optional(s.boolean()),
  shareholderDetails: s.optional(s.boolean()),
});
