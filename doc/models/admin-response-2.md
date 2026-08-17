
# Admin Response 2

Content of the Admin Response message.

## Structure

`AdminResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |

## Example

```ts
import { AdminResponse2, ErrorCondition1Enum, Result11Enum } from 'adyen';

const adminResponse2: AdminResponse2 = {
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
};
```

