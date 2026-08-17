
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

## Structure

`WalletProviderDeviceType2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value6Enum[] \| undefined`](../../doc/models/value-6-enum.md) | Optional | - |

## Example

```ts
import { Value6Enum, WalletProviderDeviceType2 } from 'adyen';

const walletProviderDeviceType2: WalletProviderDeviceType2 = {
  operation: 'operation4',
  value: [
    Value6Enum.WATCHORWRISTBAND,
    Value6Enum.WEARABLE,
    Value6Enum.CARD
  ],
};
```

