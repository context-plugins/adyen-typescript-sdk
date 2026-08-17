
# Logout Response

It conveys the result of the Logout.
Content of the Logout Response message.

## Structure

`LogoutResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |

## Example

```ts
import { ErrorCondition1Enum, LogoutResponse, Result11Enum } from 'adyen';

const logoutResponse: LogoutResponse = {
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
};
```

