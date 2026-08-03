
# Wallet Provider Device Type 2

Wallet Provider Device Type and the operation.

Supported operations: **anyMatch**, **noneMatch**.

Supported value inputs:

- **MOBILE_PHONE**

- **TABLET_OR_EREADER**

- **WATCH_OR_WRISTBAND**

- **WEARABLE**

- **CARD**

- **PC**

- **OTHER**

- **UNKNOWN**

*This model accepts additional fields of type unknown.*

## Structure

`WalletProviderDeviceType2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value6[] \| undefined`](../../doc/models/value-6.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Value6, WalletProviderDeviceType2 } from 'adyenlib';

const walletProviderDeviceType2: WalletProviderDeviceType2 = {
  operation: 'operation4',
  value: [
    Value6.WatchOrWristband,
    Value6.Wearable,
    Value6.Card
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

