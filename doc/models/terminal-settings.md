
# Terminal Settings

## Structure

`TerminalSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardholderReceipt` | [`CardholderReceipt1 \| undefined`](../../doc/models/cardholder-receipt-1.md) | Optional | Settings to define the header of the shopper receipt. |
| `connectivity` | [`Connectivity1 \| undefined`](../../doc/models/connectivity-1.md) | Optional | Settings for terminal connectivity features. |
| `dcc` | [`Dcc1 \| undefined`](../../doc/models/dcc-1.md) | Optional | Settings for Dynamic Currency Conversion (DCC). |
| `gratuities` | [`Gratuity[] \| null \| undefined`](../../doc/models/gratuity.md) | Optional | Settings for tipping with or without predefined options to choose from. The maximum number of predefined options is four, or three plus the option to enter a custom tip. |
| `hardware` | [`Hardware1 \| undefined`](../../doc/models/hardware-1.md) | Optional | Settings for terminal hardware features. |
| `homeScreen` | [`HomeScreenSettings1 \| undefined`](../../doc/models/home-screen-settings-1.md) | Optional | Settings for the home screen. |
| `kioskMode` | [`KioskModeSettings1 \| undefined`](../../doc/models/kiosk-mode-settings-1.md) | Optional | Settings for kiosk mode. |
| `localization` | [`Localization1 \| undefined`](../../doc/models/localization-1.md) | Optional | Settings for localization. |
| `moto` | [`Moto1 \| undefined`](../../doc/models/moto-1.md) | Optional | Settings for Mail Order/Telephone Order transactions. |
| `nexo` | [`Nexo1 \| undefined`](../../doc/models/nexo-1.md) | Optional | Settings for a Terminal API integration. |
| `offlineProcessing` | [`OfflineProcessing1 \| undefined`](../../doc/models/offline-processing-1.md) | Optional | Settings for EMV [offline payment](https://docs.adyen.com/point-of-sale/offline-payments) features. |
| `opi` | [`Opi1 \| undefined`](../../doc/models/opi-1.md) | Optional | Settings for an Oracle Payment Interface (OPI) integration. |
| `passcodes` | [`Passcodes1 \| undefined`](../../doc/models/passcodes-1.md) | Optional | Settings for [passcodes](https://docs.adyen.com/point-of-sale/managing-terminals/menu-access?tab=manage_passcodes_with_an_api_call_2#manage-passcodes) features. |
| `payAtTable` | [`PayAtTable1 \| undefined`](../../doc/models/pay-at-table-1.md) | Optional | Settings for [Pay-at-table](https://docs.adyen.com/point-of-sale/pay-at-x) features. |
| `payment` | [`Payment11 \| undefined`](../../doc/models/payment-11.md) | Optional | Settings for payment features. |
| `receiptOptions` | [`ReceiptOptions1 \| undefined`](../../doc/models/receipt-options-1.md) | Optional | Generic receipt settings. |
| `receiptPrinting` | [`ReceiptPrinting1 \| undefined`](../../doc/models/receipt-printing-1.md) | Optional | Transaction outcomes that you want the terminal to print a merchant receipt or a shopper receipt for. |
| `refunds` | [`Refunds1 \| undefined`](../../doc/models/refunds-1.md) | Optional | Settings for refunds. |
| `signature` | [`Signature1 \| undefined`](../../doc/models/signature-1.md) | Optional | Settings to skip signature, sign on display, or sign on receipt. |
| `standalone` | [`Standalone1 \| undefined`](../../doc/models/standalone-1.md) | Optional | Settings for [standalone](https://docs.adyen.com/point-of-sale/standalone/standalone-build/set-up-standalone#set-up-standalone-using-an-api-call) features. |
| `storeAndForward` | [`StoreAndForward1 \| undefined`](../../doc/models/store-and-forward-1.md) | Optional | Settings for store-and-forward offline payments. The `maxAmount`, `maxPayments`, and `supportedCardTypes` parameters must be configured, either in the request or inherited from a higher level in your account structure. |
| `surcharge` | [`Surcharge21 \| undefined`](../../doc/models/surcharge-21.md) | Optional | Settings for payment [surcharge](https://docs.adyen.com/point-of-sale/surcharge) features. |
| `tapToPay` | [`TapToPay1 \| undefined`](../../doc/models/tap-to-pay-1.md) | Optional | Settings for Tap to Pay. |
| `terminalInstructions` | [`TerminalInstructions1 \| undefined`](../../doc/models/terminal-instructions-1.md) | Optional | Settings to define the behaviour of the payment terminal. |
| `timeouts` | [`Timeouts2 \| undefined`](../../doc/models/timeouts-2.md) | Optional | Settings for device [time-outs](https://docs.adyen.com/point-of-sale/pos-timeouts#device-time-out). |
| `wifiProfiles` | [`WifiProfiles2 \| undefined`](../../doc/models/wifi-profiles-2.md) | Optional | Remote Wi-Fi profiles for WPA and WPA2 PSK and EAP Wi-Fi networks. |

## Example

```ts
import { SimcardStatusEnum, TerminalSettings } from 'adyen';

const terminalSettings: TerminalSettings = {
  cardholderReceipt: {
    headerForAuthorizedReceipt: 'headerForAuthorizedReceipt8',
  },
  connectivity: {
    simcardStatus: SimcardStatusEnum.ACTIVATED,
    terminalIPAddressURL: {
      eventLocalUrls: [
        {
          encrypted: false,
          password: 'password4',
          url: 'url4',
          username: 'username0',
        }
      ],
      eventPublicUrls: [
        {
          encrypted: false,
          password: 'password8',
          url: 'url8',
          username: 'username4',
        },
        {
          encrypted: false,
          password: 'password8',
          url: 'url8',
          username: 'username4',
        }
      ],
    },
  },
  dcc: {
    enableDcc: false,
  },
  gratuities: [
    {
      allowCustomAmount: false,
      currency: 'currency0',
      predefinedTipEntries: [
        'predefinedTipEntries0',
        'predefinedTipEntries1',
        'predefinedTipEntries2'
      ],
      usePredefinedTipEntries: false,
    },
    {
      allowCustomAmount: false,
      currency: 'currency0',
      predefinedTipEntries: [
        'predefinedTipEntries0',
        'predefinedTipEntries1',
        'predefinedTipEntries2'
      ],
      usePredefinedTipEntries: false,
    }
  ],
  hardware: {
    displayMaximumBackLight: 142,
    resetTotalsHour: 132,
    restartHour: 110,
  },
};
```

