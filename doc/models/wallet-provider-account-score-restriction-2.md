
# Wallet Provider Account Score Restriction 2

Checks the wallet account score.

Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.

*This model accepts additional fields of type unknown.*

## Structure

`WalletProviderAccountScoreRestriction2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { WalletProviderAccountScoreRestriction2 } from 'adyen';

const walletProviderAccountScoreRestriction2: WalletProviderAccountScoreRestriction2 = {
  operation: 'operation2',
  value: 154,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

