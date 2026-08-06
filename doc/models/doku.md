
# Doku

*This model accepts additional fields of type unknown.*

## Structure

`Doku`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `firstName` | `string` | Required | The shopper's first name. |
| `lastName` | `string` | Required | The shopper's last name. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `shopperEmail` | `string` | Required | The shopper's email. |
| `type` | [`Type23`](../../doc/models/type-23.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Doku, Type23 } from 'adyen';

const doku: Doku = {
  firstName: 'firstName8',
  lastName: 'lastName0',
  shopperEmail: 'shopperEmail0',
  type: Type23.DokuOvo,
  checkoutAttemptId: 'checkoutAttemptId2',
  sdkData: 'sdkData4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

