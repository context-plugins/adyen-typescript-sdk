
# Active Network Tokens Restriction

## Structure

`ActiveNetworkTokensRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `number \| undefined` | Optional | The number of tokens. |

## Example

```ts
import { ActiveNetworkTokensRestriction } from 'adyen';

const activeNetworkTokensRestriction: ActiveNetworkTokensRestriction = {
  operation: 'operation8',
  value: 140,
};
```

