import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BankAccountDetail = {
  accountNumber?: string;
  accountType?: string;
  bankAccountName?: string;
  bankAccountReference?: string;
  bankAccountUuid?: string;
  bankBicSwift?: string;
  bankCity?: string;
  bankCode?: string;
  bankName?: string;
  branchCode?: string;
  checkCode?: string;
  countryCode?: string;
  currencyCode?: string;
  iban?: string;
  ownerCity?: string;
  ownerCountryCode?: string;
  ownerDateOfBirth?: string;
  ownerHouseNumberOrName?: string;
  ownerName?: string;
  ownerNationality?: string;
  ownerPostalCode?: string;
  ownerState?: string;
  ownerStreet?: string;
  primaryAccount?: boolean;
  taxId?: string;
  urlForVerification?: string;
};

export const bankAccountDetailSchema: Schema<BankAccountDetail> = s.object<BankAccountDetail>({
  accountNumber: s.optional(s.string()),
  accountType: s.optional(s.string()),
  bankAccountName: s.optional(s.string()),
  bankAccountReference: s.optional(s.string()),
  bankAccountUuid: s.optional(s.string()),
  bankBicSwift: s.optional(s.string()),
  bankCity: s.optional(s.string()),
  bankCode: s.optional(s.string()),
  bankName: s.optional(s.string()),
  branchCode: s.optional(s.string()),
  checkCode: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
  iban: s.optional(s.string()),
  ownerCity: s.optional(s.string()),
  ownerCountryCode: s.optional(s.string()),
  ownerDateOfBirth: s.optional(s.string()),
  ownerHouseNumberOrName: s.optional(s.string()),
  ownerName: s.optional(s.string()),
  ownerNationality: s.optional(s.string()),
  ownerPostalCode: s.optional(s.string()),
  ownerState: s.optional(s.string()),
  ownerStreet: s.optional(s.string()),
  primaryAccount: s.optional(s.boolean()),
  taxId: s.optional(s.string()),
  urlForVerification: s.optional(s.string()),
  _keysMap: {
    bankAccountUuid: "bankAccountUUID",
  },
});
