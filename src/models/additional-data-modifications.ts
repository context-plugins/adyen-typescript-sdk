import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataModifications = {
  /**
   * This is the installment option selected by the shopper. It is required only if specified by the
   * user.
   */
  installmentPaymentDataSelectedInstallmentOption?: string;
};

export const additionalDataModificationsSchema: Schema<AdditionalDataModifications> =
  s.object<AdditionalDataModifications>({
    installmentPaymentDataSelectedInstallmentOption: s.optional(s.string()),
    _keysMap: {
      installmentPaymentDataSelectedInstallmentOption: "installmentPaymentData.selectedInstallmentOption",
    },
  });
