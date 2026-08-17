
# Test Card Range

## Structure

`TestCardRange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`AvsAddress1 \| undefined`](../../doc/models/avs-address-1.md) | Optional | Contains the billing address of the card holder. The address details need to be AVS-compliant, which means that you need to provide at least street address. |
| `cardHolderName` | `string` | Required | The name of the card holder, as it appears on the card, for the test card range. |
| `cvc` | `string \| undefined` | Optional | The test card range security code.<br><br>Example: 123 |
| `expiryMonth` | [`ExpiryMonthEnum`](../../doc/models/expiry-month-enum.md) | Required | Expiry month for the test card range.<br><br>Allowed values:<br><br>* JANUARY<br>* FEBRUARY<br>* MARCH<br>* APRIL<br>* MAY<br>* JUNE<br>* JULY<br>* AUGUST<br>* SEPTEMBER<br>* OCTOBER<br>* NOVEMBER<br>* DECEMBER |
| `expiryYear` | `number` | Required | Expiry year for the test card range.<br><br>Example: 2020 |
| `rangeEnd` | `string` | Required | The last test card number in the test card range (inclusive):<br><br>* Min 6, max 19 digits<br>* BIN compliant<br>  Example: 5432 1234 1234 4321 |
| `rangeStart` | `string` | Required | The first test card number in the test card range (inclusive):<br><br>* Min 6, max 19 digits<br>* BIN compliant<br>  Example: 5432 1234 1234 1234 |
| `threeDDirectoryServerResponse` | [`ThreeDDirectoryServerResponseEnum \| undefined`](../../doc/models/three-d-directory-server-response-enum.md) | Optional | 3D Secure server response. It notifies whether the specified card holder is enrolled in a 3D Secure service. Possible values:<br><br>* Y (Authentication available)<br>* N (Card holder not enrolled/not participating)<br>* U (Unable to authenticate) |
| `threeDPassword` | `string \| undefined` | Optional | The password used for 3D Secure authentication. |
| `threeDUsername` | `string \| undefined` | Optional | The username used for 3D Secure authentication. |

## Example

```ts
import {
  ExpiryMonthEnum,
  TestCardRange,
  ThreeDDirectoryServerResponseEnum,
} from 'adyen';

const testCardRange: TestCardRange = {
  cardHolderName: 'cardHolderName0',
  expiryMonth: ExpiryMonthEnum.JANUARY,
  expiryYear: 144,
  rangeEnd: 'rangeEnd6',
  rangeStart: 'rangeStart4',
  address: {
    streetAddress: 'streetAddress6',
    zip: 'zip0',
  },
  cvc: 'cvc0',
  threeDDirectoryServerResponse: ThreeDDirectoryServerResponseEnum.Y,
  threeDPassword: 'threeDPassword2',
  threeDUsername: 'threeDUsername8',
};
```

