
# Web Data Exemption

*This model accepts additional fields of type unknown.*

## Structure

`WebDataExemption`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | [`Reason1 \| undefined`](../../doc/models/reason-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Reason1, WebDataExemption } from 'adyenlib';

const webDataExemption: WebDataExemption = {
  reason: Reason1.NoOnlinePresence,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

