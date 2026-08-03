
# Wallet Provider Device Score

*This model accepts additional fields of type unknown.*

## Structure

`WalletProviderDeviceScore`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { WalletProviderDeviceScore } from 'adyenlib';

const walletProviderDeviceScore: WalletProviderDeviceScore = {
  operation: 'operation8',
  value: 96,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

