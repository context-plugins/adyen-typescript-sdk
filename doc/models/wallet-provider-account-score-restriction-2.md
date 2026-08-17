
# Wallet Provider Account Score Restriction 2

Checks the wallet account score.

Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.

## Structure

`WalletProviderAccountScoreRestriction2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `number \| undefined` | Optional | - |

## Example

```ts
import { WalletProviderAccountScoreRestriction2 } from 'adyen';

const walletProviderAccountScoreRestriction2: WalletProviderAccountScoreRestriction2 = {
  operation: 'operation2',
  value: 154,
};
```

