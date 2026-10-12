import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The purpose of a digital wallet transaction. */
export const WalletPurpose = {
  IdentifiedBoleto: "identifiedBoleto",
  TransferDifferentWallet: "transferDifferentWallet",
  TransferOwnWallet: "transferOwnWallet",
  TransferSameWallet: "transferSameWallet",
  UnidentifiedBoleto: "unidentifiedBoleto",
} as const;
export type WalletPurpose = (typeof WalletPurpose)[keyof typeof WalletPurpose] | (string & {});

export const walletPurposeSchema: EnumSchema<WalletPurpose> = s.enumOf<WalletPurpose>(WalletPurpose);
