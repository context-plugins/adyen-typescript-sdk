
# Enable Service Response

It conveys the result of the Enable Service processing.
Content of the Enable Service Response message.

## Structure

`EnableServiceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |

## Example

```ts
import {
  EnableServiceResponse,
  ErrorCondition1Enum,
  Result11Enum,
} from 'adyen';

const enableServiceResponse: EnableServiceResponse = {
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
};
```

