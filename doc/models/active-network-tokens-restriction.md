
# Active Network Tokens Restriction

*This model accepts additional fields of type unknown.*

## Structure

`ActiveNetworkTokensRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `number \| undefined` | Optional | The number of tokens. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ActiveNetworkTokensRestriction } from 'adyen';

const activeNetworkTokensRestriction: ActiveNetworkTokensRestriction = {
  operation: 'operation8',
  value: 140,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

