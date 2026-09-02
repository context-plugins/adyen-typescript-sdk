import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  additionalBankIdentificationRequirementSchema,
  type AdditionalBankIdentificationRequirement,
} from "../additional-bank-identification-requirement.js";
import { addressRequirementSchema, type AddressRequirement } from "../address-requirement.js";
import {
  amountMinMaxRequirementSchema,
  type AmountMinMaxRequirement,
} from "../amount-min-max-requirement.js";
import {
  amountNonZeroDecimalsRequirementSchema,
  type AmountNonZeroDecimalsRequirement,
} from "../amount-non-zero-decimals-requirement.js";
import {
  bankAccountIdentificationTypeRequirementSchema,
  type BankAccountIdentificationTypeRequirement,
} from "../bank-account-identification-type-requirement.js";
import {
  ibanAccountIdentificationRequirementSchema,
  type IbanAccountIdentificationRequirement,
} from "../iban-account-identification-requirement.js";
import {
  paymentInstrumentRequirementSchema,
  type PaymentInstrumentRequirement,
} from "../payment-instrument-requirement.js";
import {
  usInstantPayoutAddressRequirementSchema,
  type UsInstantPayoutAddressRequirement,
} from "../us-instant-payout-address-requirement.js";
import {
  usInternationalAchAddressRequirementSchema,
  type UsInternationalAchAddressRequirement,
} from "../us-international-ach-address-requirement.js";
import {
  usInternationalAchPriorityRequirementSchema,
  type UsInternationalAchPriorityRequirement,
} from "../us-international-ach-priority-requirement.js";

export type Requirement =
  | (AmountMinMaxRequirement & { type: "amountMinMaxRequirement" })
  | (AdditionalBankIdentificationRequirement & { type: "additionalBankIdentificationRequirement" })
  | (AddressRequirement & { type: "addressRequirement" })
  | (AmountNonZeroDecimalsRequirement & { type: "amountNonZeroDecimalsRequirement" })
  | (BankAccountIdentificationTypeRequirement & { type: "bankAccountIdentificationTypeRequirement" })
  | (IbanAccountIdentificationRequirement & { type: "ibanAccountIdentificationRequirement" })
  | (PaymentInstrumentRequirement & { type: "paymentInstrumentRequirement" })
  | (UsInternationalAchAddressRequirement & { type: "usInternationalAchAddressRequirement" })
  | (UsInstantPayoutAddressRequirement & { type: "usInstantPayoutAddressRequirement" })
  | (UsInternationalAchPriorityRequirement & { type: "usInternationalAchPriorityRequirement" });

export const requirementSchema: Schema<Requirement> = s.discriminatedUnion<Requirement>("type", {
  amountMinMaxRequirement: amountMinMaxRequirementSchema,
  additionalBankIdentificationRequirement: additionalBankIdentificationRequirementSchema,
  addressRequirement: addressRequirementSchema,
  amountNonZeroDecimalsRequirement: amountNonZeroDecimalsRequirementSchema,
  bankAccountIdentificationTypeRequirement: bankAccountIdentificationTypeRequirementSchema,
  ibanAccountIdentificationRequirement: ibanAccountIdentificationRequirementSchema,
  paymentInstrumentRequirement: paymentInstrumentRequirementSchema,
  usInternationalAchAddressRequirement: usInternationalAchAddressRequirementSchema,
  usInstantPayoutAddressRequirement: usInstantPayoutAddressRequirementSchema,
  usInternationalAchPriorityRequirement: usInternationalAchPriorityRequirementSchema,
});
