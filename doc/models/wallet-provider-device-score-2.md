
# Wallet Provider Device Score 2

Wallet Provider Device Score and the operation.

Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.

*This model accepts additional fields of type unknown.*

## Structure

`WalletProviderDeviceScore2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { WalletProviderDeviceScore2 } from 'adyen';

const walletProviderDeviceScore2: WalletProviderDeviceScore2 = {
  operation: 'operation8',
  value: 196,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

