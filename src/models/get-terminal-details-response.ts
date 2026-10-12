import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { store11Schema, type Store11 } from "./store11.js";
import { terminalStatusSchema, type TerminalStatus } from "./terminal-status.js";

export type GetTerminalDetailsResponse = {
  /** The Bluetooth IP address of the terminal. */
  bluetoothIp?: string;
  /** The Bluetooth MAC address of the terminal. */
  bluetoothMac?: string;
  /**
   * The company account that the terminal is associated with. If this is the only account level
   * shown in the response, the terminal is assigned to the inventory of the company account.
   */
  companyAccount: string;
  /** The country where the terminal is used. */
  country?: string;
  /** The model name of the terminal. */
  deviceModel?: string;
  /** Indicates whether assigning IP addresses through a DHCP server is enabled on the terminal. */
  dhcpEnabled?: boolean;
  /**
   * The label shown on the status bar of the display. This label (if any) is specified in your
   * Customer Area.
   */
  displayLabel?: string | null;
  /** The terminal's IP address in your Ethernet network. */
  ethernetIp?: string | null;
  /** The terminal's MAC address in your Ethernet network. */
  ethernetMac?: string | null;
  /** The software release currently in use on the terminal. */
  firmwareVersion?: string;
  /** The integrated circuit card identifier (ICCID) of the SIM card in the terminal. */
  iccid?: string | null;
  /**
   * Date and time of the last activity on the terminal. Not included when the last activity was
   * more than 14 days ago.
   */
  lastActivityDateTime?: Date | null;
  /**
   * Date and time of the last transaction on the terminal. Not included when the last transaction
   * was more than 14 days ago.
   */
  lastTransactionDateTime?: Date | null;
  /**
   * The Ethernet link negotiation that the terminal uses:
   *
   * - `auto`: Auto-negotiation
   *
   * - `100full`: 100 Mbps full duplex
   */
  linkNegotiation?: string | null;
  /**
   * The merchant account that the terminal is associated with. If the response doesn't contain a
   * `store` the terminal is assigned to this merchant account.
   */
  merchantAccount?: string;
  /**
   * Boolean that indicates if the terminal is assigned to the merchant inventory. This is returned
   * when the terminal is assigned to a merchant account.
   *
   * - If **true**, this indicates that the terminal is in the merchant inventory. This also means
   *   that the terminal cannot be boarded.
   *
   * - If **false**, this indicates that the terminal is assigned to the merchant account as an
   *   in-store terminal. This means that the terminal is ready to be boarded, or is already
   *   boarded.
   */
  merchantInventory?: boolean;
  /** The permanent terminal ID. */
  permanentTerminalId?: string;
  /** The serial number of the terminal. */
  serialNumber?: string;
  /**
   * On a terminal that supports 3G or 4G connectivity, indicates the status of the SIM card in the
   * terminal: ACTIVE or INVENTORY.
   */
  simStatus?: string | null;
  /** The store code of the store that the terminal is assigned to. */
  store?: string;
  /** The store that the terminal is assigned to. */
  storeDetails?: Store11;
  /** The unique terminal ID. */
  terminal: string;
  /**
   * The status of the terminal:
   *
   * - `OnlineToday`, `OnlineLast1Day`, `OnlineLast2Days` etcetera to `OnlineLast7Days`: Indicates
   *   when in the past week the terminal was last online.
   *
   * - `SwitchedOff`: Indicates it was more than a week ago that the terminal was last online.
   *
   * - `ReAssignToInventoryPending`, `ReAssignToStorePending`, `ReAssignToMerchantInventoryPending`:
   *   Indicates the terminal is scheduled to be reassigned.
   */
  terminalStatus?: TerminalStatus;
  /** The terminal's IP address in your Wi-Fi network. */
  wifiIp?: string;
  /** The terminal's MAC address in your Wi-Fi network. */
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
