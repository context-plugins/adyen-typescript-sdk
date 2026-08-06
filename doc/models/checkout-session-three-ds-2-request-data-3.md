
# Checkout Session Three Ds 2 Request Data 3

The cardholder phone number need to be part of the authentication message for payment data. It is a requirement for Visa Secure Authentication Data Field Mandate effective August 2024.

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutSessionThreeDs2RequestData3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `homePhone` | [`HomePhone \| undefined`](../../doc/models/home-phone.md) | Optional | - |
| `mobilePhone` | [`MobilePhone \| undefined`](../../doc/models/mobile-phone.md) | Optional | - |
| `threeDsRequestorChallengeInd` | [`ThreeDsRequestorChallengeInd \| undefined`](../../doc/models/three-ds-requestor-challenge-ind.md) | Optional | - |
| `workPhone` | [`WorkPhone \| undefined`](../../doc/models/work-phone.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CheckoutSessionThreeDs2RequestData3,
  ThreeDsRequestorChallengeInd,
} from 'adyen';

const checkoutSessionThreeDs2RequestData3: CheckoutSessionThreeDs2RequestData3 = {
  homePhone: {
    cc: 'cc0',
    subscriber: 'subscriber2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  mobilePhone: {
    cc: 'cc4',
    subscriber: 'subscriber6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  threeDsRequestorChallengeInd: ThreeDsRequestorChallengeInd.Enum05,
  workPhone: {
    cc: 'cc2',
    subscriber: 'subscriber4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

