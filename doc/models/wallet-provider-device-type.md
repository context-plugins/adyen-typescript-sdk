
# Wallet Provider Device Type

*This model accepts additional fields of type unknown.*

## Structure

`WalletProviderDeviceType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value6[] \| undefined`](../../doc/models/value-6.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Value6, WalletProviderDeviceType } from 'adyenlib';

const walletProviderDeviceType: WalletProviderDeviceType = {
  operation: 'operation4',
  value: [
    Value6.Card,
    Value6.MobilePhone
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

