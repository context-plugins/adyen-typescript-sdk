
# Dispute Service Result 1

The result of the dispute service.

*This model accepts additional fields of type unknown.*

## Structure

`DisputeServiceResult1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorMessage` | `string \| undefined` | Optional | The general error message. |
| `success` | `boolean` | Required | Indicates whether the request succeeded. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DisputeServiceResult1 } from 'adyenlib';

const disputeServiceResult1: DisputeServiceResult1 = {
  success: false,
  errorMessage: 'errorMessage8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

