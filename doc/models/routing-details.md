
# Routing Details

*This model accepts additional fields of type unknown.*

## Structure

`RoutingDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `detail` | `string \| undefined` | Optional | A human-readable explanation specific to this occurrence of the problem. |
| `errorCode` | `string \| undefined` | Optional | A code that identifies the problem type. |
| `priority` | [`Priority \| undefined`](../../doc/models/priority.md) | Optional | - |
| `title` | `string \| undefined` | Optional | A short, human-readable summary of the problem type. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Priority, RoutingDetails } from 'adyenlib';

const routingDetails: RoutingDetails = {
  detail: 'detail4',
  errorCode: 'errorCode4',
  priority: Priority.CrossBorder,
  title: 'title4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

