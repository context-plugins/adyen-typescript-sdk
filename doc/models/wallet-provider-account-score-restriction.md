
# Wallet Provider Account Score Restriction

*This model accepts additional fields of type unknown.*

## Structure

`WalletProviderAccountScoreRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { WalletProviderAccountScoreRestriction } from 'adyen';

const walletProviderAccountScoreRestriction: WalletProviderAccountScoreRestriction = {
  operation: 'operation0',
  value: 108,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

