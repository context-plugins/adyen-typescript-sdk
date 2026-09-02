import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Reason = {
  AccountHierarchyNotActive: "accountHierarchyNotActive",
  AmountLimitExceeded: "amountLimitExceeded",
  Approved: "approved",
  CounterpartyAccountBlocked: "counterpartyAccountBlocked",
  CounterpartyAccountClosed: "counterpartyAccountClosed",
  CounterpartyAccountNotFound: "counterpartyAccountNotFound",
  CounterpartyAddressRequired: "counterpartyAddressRequired",
  CounterpartyBankTimedOut: "counterpartyBankTimedOut",
  CounterpartyBankUnavailable: "counterpartyBankUnavailable",
  DirectDebitNotSupported: "directDebitNotSupported",
  Error: "error",
  NotEnoughBalance: "notEnoughBalance",
  RefusedByCounterpartyBank: "refusedByCounterpartyBank",
  RouteNotFound: "routeNotFound",
  TransferInstrumentDoesNotExist: "transferInstrumentDoesNotExist",
  Unknown: "unknown",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
