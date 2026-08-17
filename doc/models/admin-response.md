
# Admin Response

It conveys the result of the Custom Admin.
Content of the Custom Admin Response message.

## Structure

`AdminResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |

## Example

```ts
import { AdminResponse, ErrorCondition1Enum, Result11Enum } from 'adyen';

const adminResponse: AdminResponse = {
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
};
```

