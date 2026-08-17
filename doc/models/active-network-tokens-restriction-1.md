
# Active Network Tokens Restriction 1

The total number of tokens that a card can have across different kinds of digital wallets on the user's phones, watches, or other wearables.

Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.

## Structure

`ActiveNetworkTokensRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `number \| undefined` | Optional | The number of tokens. |

## Example

```ts
import { ActiveNetworkTokensRestriction1 } from 'adyen';

const activeNetworkTokensRestriction1: ActiveNetworkTokensRestriction1 = {
  operation: 'operation0',
  value: 224,
};
```

