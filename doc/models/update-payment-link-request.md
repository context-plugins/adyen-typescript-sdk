
# Update Payment Link Request

*This model accepts additional fields of type unknown.*

## Structure

`UpdatePaymentLinkRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`Status28`](../../doc/models/status-28.md) | Required | Status of the payment link. Possible values:<br><br>* **expired** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Status28, UpdatePaymentLinkRequest } from 'adyen';

const updatePaymentLinkRequest: UpdatePaymentLinkRequest = {
  status: Status28.Expired,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

