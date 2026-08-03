
# Test Card Range

*This model accepts additional fields of type unknown.*

## Structure

`TestCardRange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`AvsAddress \| undefined`](../../doc/models/avs-address.md) | Optional | - |
| `cardHolderName` | `string` | Required | The name of the card holder, as it appears on the card, for the test card range. |
| `cvc` | `string \| undefined` | Optional | The test card range security code.<br><br>Example: 123 |
| `expiryMonth` | [`ExpiryMonth`](../../doc/models/expiry-month.md) | Required | - |
| `expiryYear` | `number` | Required | Expiry year for the test card range.<br><br>Example: 2020 |
| `rangeEnd` | `string` | Required | The last test card number in the test card range (inclusive):<br><br>* Min 6, max 19 digits<br>* BIN compliant<br>  Example: 5432 1234 1234 4321 |
| `rangeStart` | `string` | Required | The first test card number in the test card range (inclusive):<br><br>* Min 6, max 19 digits<br>* BIN compliant<br>  Example: 5432 1234 1234 1234 |
| `threeDDirectoryServerResponse` | [`ThreeDDirectoryServerResponse \| undefined`](../../doc/models/three-d-directory-server-response.md) | Optional | - |
| `threeDPassword` | `string \| undefined` | Optional | The password used for 3D Secure authentication. |
| `threeDUsername` | `string \| undefined` | Optional | The username used for 3D Secure authentication. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ExpiryMonth,
  TestCardRange,
  ThreeDDirectoryServerResponse,
} from 'adyenlib';

const testCardRange: TestCardRange = {
  cardHolderName: 'cardHolderName0',
  expiryMonth: ExpiryMonth.January,
  expiryYear: 144,
  rangeEnd: 'rangeEnd6',
  rangeStart: 'rangeStart4',
  address: {
    streetAddress: 'streetAddress6',
    zip: 'zip0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  cvc: 'cvc0',
  threeDDirectoryServerResponse: ThreeDDirectoryServerResponse.Y,
  threeDPassword: 'threeDPassword2',
  threeDUsername: 'threeDUsername8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

