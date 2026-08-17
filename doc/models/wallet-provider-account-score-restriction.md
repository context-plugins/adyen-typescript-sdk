
# Wallet Provider Account Score Restriction

## Structure

`WalletProviderAccountScoreRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `number \| undefined` | Optional | - |

## Example

```ts
import { WalletProviderAccountScoreRestriction } from 'adyen';

const walletProviderAccountScoreRestriction: WalletProviderAccountScoreRestriction = {
  operation: 'operation0',
  value: 108,
};
```

