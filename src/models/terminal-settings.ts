import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardholderReceipt1Schema, type CardholderReceipt1 } from "./cardholder-receipt1.js";
import { connectivity1Schema, type Connectivity1 } from "./connectivity1.js";
import { dcc1Schema, type Dcc1 } from "./dcc1.js";
import { gratuitySchema, type Gratuity } from "./gratuity.js";
import { hardware1Schema, type Hardware1 } from "./hardware1.js";
import { homeScreenSettings1Schema, type HomeScreenSettings1 } from "./home-screen-settings1.js";
import { kioskModeSettings1Schema, type KioskModeSettings1 } from "./kiosk-mode-settings1.js";
import { localization1Schema, type Localization1 } from "./localization1.js";
import { moto1Schema, type Moto1 } from "./moto1.js";
import { nexo1Schema, type Nexo1 } from "./nexo1.js";
import { offlineProcessing1Schema, type OfflineProcessing1 } from "./offline-processing1.js";
import { opi1Schema, type Opi1 } from "./opi1.js";
import { passcodes1Schema, type Passcodes1 } from "./passcodes1.js";
import { payAtTable1Schema, type PayAtTable1 } from "./pay-at-table1.js";
import { payment11Schema, type Payment11 } from "./payment11.js";
import { receiptOptions1Schema, type ReceiptOptions1 } from "./receipt-options1.js";
import { receiptPrinting1Schema, type ReceiptPrinting1 } from "./receipt-printing1.js";
import { refunds1Schema, type Refunds1 } from "./refunds1.js";
import { signature1Schema, type Signature1 } from "./signature1.js";
import { standalone1Schema, type Standalone1 } from "./standalone1.js";
import { storeAndForward1Schema, type StoreAndForward1 } from "./store-and-forward1.js";
import { surcharge21Schema, type Surcharge21 } from "./surcharge21.js";
import { tapToPay1Schema, type TapToPay1 } from "./tap-to-pay1.js";
import { terminalInstructions1Schema, type TerminalInstructions1 } from "./terminal-instructions1.js";
import { timeouts2Schema, type Timeouts2 } from "./timeouts2.js";
import { wifiProfiles2Schema, type WifiProfiles2 } from "./wifi-profiles2.js";

export type TerminalSettings = {
  /** Settings to define the header of the shopper receipt. */
  cardholderReceipt?: CardholderReceipt1;
  /** Settings for terminal connectivity features. */
  connectivity?: Connectivity1;
  /** Settings for Dynamic Currency Conversion (DCC). */
  dcc?: Dcc1;
  /**
   * Settings for tipping with or without predefined options to choose from. The maximum number of
   * predefined options is four, or three plus the option to enter a custom tip.
   */
  gratuities?: Gratuity[] | null;
  /** Settings for terminal hardware features. */
  hardware?: Hardware1;
  /** Settings for the home screen. */
  homeScreen?: HomeScreenSettings1;
  /** Settings for kiosk mode. */
  kioskMode?: KioskModeSettings1;
  /** Settings for localization. */
  localization?: Localization1;
  /** Settings for Mail Order/Telephone Order transactions. */
  moto?: Moto1;
  /** Settings for a Terminal API integration. */
  nexo?: Nexo1;
  /**
   * Settings for EMV [offline payment](https://docs.adyen.com/point-of-sale/offline-payments)
   * features.
   */
  offlineProcessing?: OfflineProcessing1;
  /** Settings for an Oracle Payment Interface (OPI) integration. */
  opi?: Opi1;
  /**
   * Settings for
   * [passcodes](https://docs.adyen.com/point-of-sale/managing-terminals/menu-access?tab=manage_passcodes_with_an_api_call_2#manage-passcodes)
   * features.
   */
  passcodes?: Passcodes1;
  /** Settings for [Pay-at-table](https://docs.adyen.com/point-of-sale/pay-at-x) features. */
  payAtTable?: PayAtTable1;
  /** Settings for payment features. */
  payment?: Payment11;
  /** Generic receipt settings. */
  receiptOptions?: ReceiptOptions1;
  /**
   * Transaction outcomes that you want the terminal to print a merchant receipt or a shopper
   * receipt for.
   */
  receiptPrinting?: ReceiptPrinting1;
  /** Settings for refunds. */
  refunds?: Refunds1;
  /** Settings to skip signature, sign on display, or sign on receipt. */
  signature?: Signature1;
  /**
   * Settings for
   * [standalone](https://docs.adyen.com/point-of-sale/standalone/standalone-build/set-up-standalone#set-up-standalone-using-an-api-call)
   * features.
   */
  standalone?: Standalone1;
  /**
   * Settings for store-and-forward offline payments. The `maxAmount`, `maxPayments`, and
   * `supportedCardTypes` parameters must be configured, either in the request or inherited from a
   * higher level in your account structure.
   */
  storeAndForward?: StoreAndForward1;
  /** Settings for payment [surcharge](https://docs.adyen.com/point-of-sale/surcharge) features. */
  surcharge?: Surcharge21;
  /** Settings for Tap to Pay. */
  tapToPay?: TapToPay1;
  /** Settings to define the behaviour of the payment terminal. */
  terminalInstructions?: TerminalInstructions1;
  /**
   * Settings for device
   * [time-outs](https://docs.adyen.com/point-of-sale/pos-timeouts#device-time-out).
   */
  timeouts?: Timeouts2;
  /** Remote Wi-Fi profiles for WPA and WPA2 PSK and EAP Wi-Fi networks. */
  wifiProfiles?: WifiProfiles2;
};

export const terminalSettingsSchema: Schema<TerminalSettings> = s.object<TerminalSettings>({
  cardholderReceipt: s.optional(s.lazy(() => cardholderReceipt1Schema)),
  connectivity: s.optional(s.lazy(() => connectivity1Schema)),
  dcc: s.optional(s.lazy(() => dcc1Schema)),
  gratuities: s.optionalNullable(s.array(s.lazy(() => gratuitySchema))),
  hardware: s.optional(s.lazy(() => hardware1Schema)),
  homeScreen: s.optional(s.lazy(() => homeScreenSettings1Schema)),
  kioskMode: s.optional(s.lazy(() => kioskModeSettings1Schema)),
  localization: s.optional(s.lazy(() => localization1Schema)),
  moto: s.optional(s.lazy(() => moto1Schema)),
  nexo: s.optional(s.lazy(() => nexo1Schema)),
  offlineProcessing: s.optional(s.lazy(() => offlineProcessing1Schema)),
  opi: s.optional(s.lazy(() => opi1Schema)),
  passcodes: s.optional(s.lazy(() => passcodes1Schema)),
  payAtTable: s.optional(s.lazy(() => payAtTable1Schema)),
  payment: s.optional(s.lazy(() => payment11Schema)),
  receiptOptions: s.optional(s.lazy(() => receiptOptions1Schema)),
  receiptPrinting: s.optional(s.lazy(() => receiptPrinting1Schema)),
  refunds: s.optional(s.lazy(() => refunds1Schema)),
  signature: s.optional(s.lazy(() => signature1Schema)),
  standalone: s.optional(s.lazy(() => standalone1Schema)),
  storeAndForward: s.optional(s.lazy(() => storeAndForward1Schema)),
  surcharge: s.optional(s.lazy(() => surcharge21Schema)),
  tapToPay: s.optional(s.lazy(() => tapToPay1Schema)),
  terminalInstructions: s.optional(s.lazy(() => terminalInstructions1Schema)),
  timeouts: s.optional(s.lazy(() => timeouts2Schema)),
  wifiProfiles: s.optional(s.lazy(() => wifiProfiles2Schema)),
});
