
# Dispute Service Result 1

The result of the dispute service.

## Structure

`DisputeServiceResult1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorMessage` | `string \| undefined` | Optional | The general error message. |
| `success` | `boolean` | Required | Indicates whether the request succeeded. |

## Example

```ts
import { DisputeServiceResult1 } from 'adyen';

const disputeServiceResult1: DisputeServiceResult1 = {
  success: false,
  errorMessage: 'errorMessage8',
};
```

