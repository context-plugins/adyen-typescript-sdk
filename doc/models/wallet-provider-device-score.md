
# Wallet Provider Device Score

## Structure

`WalletProviderDeviceScore`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `number \| undefined` | Optional | - |

## Example

```ts
import { WalletProviderDeviceScore } from 'adyen';

const walletProviderDeviceScore: WalletProviderDeviceScore = {
  operation: 'operation8',
  value: 96,
};
```

