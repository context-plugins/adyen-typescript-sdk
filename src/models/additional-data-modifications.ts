import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataModifications = {
  installmentPaymentDataSelectedInstallmentOption?: string;
};

export const additionalDataModificationsSchema: Schema<AdditionalDataModifications> =
  s.object<AdditionalDataModifications>({
    installmentPaymentDataSelectedInstallmentOption: s.optional(s.string()),
    _keysMap: {
      installmentPaymentDataSelectedInstallmentOption: "installmentPaymentData.selectedInstallmentOption",
    },
  });
