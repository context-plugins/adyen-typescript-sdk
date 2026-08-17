
# Enable Service Response 2

Content of the Enable Service Response message.

## Structure

`EnableServiceResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |

## Example

```ts
import {
  EnableServiceResponse2,
  ErrorCondition1Enum,
  Result11Enum,
} from 'adyen';

const enableServiceResponse2: EnableServiceResponse2 = {
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
};
```

