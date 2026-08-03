
# Terminal Settings

*This model accepts additional fields of type unknown.*

## Structure

`TerminalSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardholderReceipt` | [`CardholderReceipt \| undefined`](../../doc/models/cardholder-receipt.md) | Optional | - |
| `connectivity` | [`Connectivity \| undefined`](../../doc/models/connectivity.md) | Optional | - |
| `dcc` | [`Dcc \| undefined`](../../doc/models/dcc.md) | Optional | - |
| `gratuities` | [`Gratuity[] \| null \| undefined`](../../doc/models/gratuity.md) | Optional | Settings for tipping with or without predefined options to choose from. The maximum number of predefined options is four, or three plus the option to enter a custom tip. |
| `hardware` | [`Hardware \| undefined`](../../doc/models/hardware.md) | Optional | - |
| `homeScreen` | [`HomeScreenSettings \| undefined`](../../doc/models/home-screen-settings.md) | Optional | - |
| `kioskMode` | [`KioskModeSettings \| undefined`](../../doc/models/kiosk-mode-settings.md) | Optional | - |
| `localization` | [`Localization \| undefined`](../../doc/models/localization.md) | Optional | - |
| `moto` | [`Moto \| undefined`](../../doc/models/moto.md) | Optional | - |
| `nexo` | [`Nexo \| undefined`](../../doc/models/nexo.md) | Optional | - |
| `offlineProcessing` | [`OfflineProcessing \| undefined`](../../doc/models/offline-processing.md) | Optional | - |
| `opi` | [`Opi \| undefined`](../../doc/models/opi.md) | Optional | - |
| `passcodes` | [`Passcodes \| undefined`](../../doc/models/passcodes.md) | Optional | - |
| `payAtTable` | [`PayAtTable \| undefined`](../../doc/models/pay-at-table.md) | Optional | - |
| `payment` | [`Payment1 \| undefined`](../../doc/models/payment-1.md) | Optional | - |
| `receiptOptions` | [`ReceiptOptions \| undefined`](../../doc/models/receipt-options.md) | Optional | - |
| `receiptPrinting` | [`ReceiptPrinting \| undefined`](../../doc/models/receipt-printing.md) | Optional | - |
| `refunds` | [`Refunds \| undefined`](../../doc/models/refunds.md) | Optional | - |
| `signature` | [`Signature \| undefined`](../../doc/models/signature.md) | Optional | - |
| `standalone` | [`Standalone \| undefined`](../../doc/models/standalone.md) | Optional | - |
| `storeAndForward` | [`StoreAndForward \| undefined`](../../doc/models/store-and-forward.md) | Optional | - |
| `surcharge` | [`Surcharge1 \| undefined`](../../doc/models/surcharge-1.md) | Optional | - |
| `tapToPay` | [`TapToPay \| undefined`](../../doc/models/tap-to-pay.md) | Optional | - |
| `terminalInstructions` | [`TerminalInstructions \| undefined`](../../doc/models/terminal-instructions.md) | Optional | - |
| `timeouts` | [`Timeouts \| undefined`](../../doc/models/timeouts.md) | Optional | - |
| `wifiProfiles` | [`WifiProfiles \| undefined`](../../doc/models/wifi-profiles.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SimcardStatus, TerminalSettings } from 'adyenlib';

const terminalSettings: TerminalSettings = {
  cardholderReceipt: {
    headerForAuthorizedReceipt: 'headerForAuthorizedReceipt8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  connectivity: {
    simcardStatus: SimcardStatus.Activated,
    terminalIpAddressUrl: {
      eventLocalUrls: [
        {
          encrypted: false,
          password: 'password4',
          url: 'url4',
          username: 'username0',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      eventPublicUrls: [
        {
          encrypted: false,
          password: 'password8',
          url: 'url8',
          username: 'username4',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          encrypted: false,
          password: 'password8',
          url: 'url8',
          username: 'username4',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  dcc: {
    enableDcc: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
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
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
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
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  hardware: {
    displayMaximumBackLight: 142,
    resetTotalsHour: 132,
    restartHour: 110,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

