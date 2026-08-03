
# Term

*This model accepts additional fields of type unknown.*

## Structure

`Term`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `estimatedDays` | `number` | Required | The estimated term for repaying the grant, in days. |
| `maximumDays` | `number \| undefined` | Optional | The maximum term for repaying the grant, in days. Only applies when `contractType` is **loan**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Term } from 'adyenlib';

const term: Term = {
  estimatedDays: 248,
  maximumDays: 24,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

