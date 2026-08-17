
# Checkout Session Three DS 2 Request Data 1

Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments).

## Structure

`CheckoutSessionThreeDS2RequestData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `homePhone` | [`Phone3 \| undefined`](../../doc/models/phone-3.md) | Optional | The home phone number provided by the cardholder. The phone number must consist of a country code, followed by the number. If the value you provide does not follow the guidelines, we do not submit it for authentication.<br><br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the shopper's phone number in `telephoneNumber`. |
| `mobilePhone` | [`Phone1 \| undefined`](../../doc/models/phone-1.md) | Optional | The mobile phone number provided by the cardholder. The phone number must consist of a country code, followed by the number. If the value you provide does not follow the guidelines, we do not submit it for authentication.<br><br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the shopper's phone number in `telephoneNumber`. |
| `threeDSRequestorChallengeInd` | [`ThreeDSRequestorChallengeIndEnum \| undefined`](../../doc/models/three-ds-requestor-challenge-ind-enum.md) | Optional | Indicates whether a challenge is requested for this transaction. Possible values:<br><br>* **01** — No preference<br>* **02** — No challenge requested<br>* **03** — Challenge requested (3DS Requestor preference)<br>* **04** — Challenge requested (Mandate)<br>* **05** — No challenge (transactional risk analysis is already performed)<br>* **06** — Data Only |
| `workPhone` | [`Phone2 \| undefined`](../../doc/models/phone-2.md) | Optional | The work phone number provided by the cardholder. The phone number must consist of a country code, followed by the number. If the value you provide does not follow the guidelines, we do not submit it for authentication.<br><br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the shopper's phone number in `telephoneNumber`. |

## Example

```ts
import {
  CheckoutSessionThreeDS2RequestData1,
  ThreeDSRequestorChallengeIndEnum,
} from 'adyen';

const checkoutSessionThreeDS2RequestData1: CheckoutSessionThreeDS2RequestData1 = {
  homePhone: {
    cc: 'cc0',
    subscriber: 'subscriber2',
  },
  mobilePhone: {
    cc: 'cc4',
    subscriber: 'subscriber6',
  },
  threeDSRequestorChallengeInd: ThreeDSRequestorChallengeIndEnum.Enum05,
  workPhone: {
    cc: 'cc2',
    subscriber: 'subscriber4',
  },
};
```

