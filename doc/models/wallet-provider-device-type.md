
# Wallet Provider Device Type

## Structure

`WalletProviderDeviceType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value6Enum[] \| undefined`](../../doc/models/value-6-enum.md) | Optional | - |

## Example

```ts
import { Value6Enum, WalletProviderDeviceType } from 'adyen';

const walletProviderDeviceType: WalletProviderDeviceType = {
  operation: 'operation4',
  value: [
    Value6Enum.CARD,
    Value6Enum.MOBILEPHONE
  ],
};
```

