
# Web Data Exemption 1

The reason why the web data is not provided.

*This model accepts additional fields of type unknown.*

## Structure

`WebDataExemption1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | [`Reason1 \| undefined`](../../doc/models/reason-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Reason1, WebDataExemption1 } from 'adyen';

const webDataExemption1: WebDataExemption1 = {
  reason: Reason1.NoOnlinePresence,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

