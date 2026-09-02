import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { store11Schema, type Store11 } from "./store11.js";
import { terminalStatusSchema, type TerminalStatus } from "./terminal-status.js";

export type GetTerminalDetailsResponse = {
  bluetoothIp?: string;
  bluetoothMac?: string;
  companyAccount: string;
  country?: string;
  deviceModel?: string;
  dhcpEnabled?: boolean;
  displayLabel?: string | null;
  ethernetIp?: string | null;
  ethernetMac?: string | null;
  firmwareVersion?: string;
  iccid?: string | null;
  lastActivityDateTime?: Date | null;
  lastTransactionDateTime?: Date | null;
  linkNegotiation?: string | null;
  merchantAccount?: string;
  merchantInventory?: boolean;
  permanentTerminalId?: string;
  serialNumber?: string;
  simStatus?: string | null;
  store?: string;
  storeDetails?: Store11;
  terminal: string;
  terminalStatus?: TerminalStatus;
  wifiIp?: string;
  wifiMac?: string;
};

export const getTerminalDetailsResponseSchema: Schema<GetTerminalDetailsResponse> =
  s.object<GetTerminalDetailsResponse>({
    bluetoothIp: s.optional(s.string()),
    bluetoothMac: s.optional(s.string()),
    companyAccount: s.string(),
    country: s.optional(s.string()),
    deviceModel: s.optional(s.string()),
    dhcpEnabled: s.optional(s.boolean()),
    displayLabel: s.optionalNullable(s.string()),
    ethernetIp: s.optionalNullable(s.string()),
    ethernetMac: s.optionalNullable(s.string()),
    firmwareVersion: s.optional(s.string()),
    iccid: s.optionalNullable(s.string()),
    lastActivityDateTime: s.optionalNullable(s.dateTime()),
    lastTransactionDateTime: s.optionalNullable(s.dateTime()),
    linkNegotiation: s.optionalNullable(s.string()),
    merchantAccount: s.optional(s.string()),
    merchantInventory: s.optional(s.boolean()),
    permanentTerminalId: s.optional(s.string()),
    serialNumber: s.optional(s.string()),
    simStatus: s.optionalNullable(s.string()),
    store: s.optional(s.string()),
    storeDetails: s.optional(s.lazy(() => store11Schema)),
    terminal: s.string(),
    terminalStatus: s.optional(s.lazy(() => terminalStatusSchema)),
    wifiIp: s.optional(s.string()),
    wifiMac: s.optional(s.string()),
  });
