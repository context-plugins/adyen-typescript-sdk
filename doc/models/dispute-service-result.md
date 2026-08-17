
# Dispute Service Result

## Structure

`DisputeServiceResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorMessage` | `string \| undefined` | Optional | The general error message. |
| `success` | `boolean` | Required | Indicates whether the request succeeded. |

## Example

```ts
import { DisputeServiceResult } from 'adyen';

const disputeServiceResult: DisputeServiceResult = {
  success: false,
  errorMessage: 'errorMessage8',
};
```

