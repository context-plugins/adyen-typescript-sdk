
# Logout Response 2

Content of the Logout Response message.

## Structure

`LogoutResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |

## Example

```ts
import { ErrorCondition1Enum, LogoutResponse2, Result11Enum } from 'adyen';

const logoutResponse2: LogoutResponse2 = {
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
};
```

