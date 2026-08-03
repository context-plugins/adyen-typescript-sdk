
# Checkout Session Three Ds 2 Request Data 1

Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments).

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutSessionThreeDs2RequestData1`

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
  CheckoutSessionThreeDs2RequestData1,
  ThreeDsRequestorChallengeInd,
} from 'adyenlib';

const checkoutSessionThreeDs2RequestData1: CheckoutSessionThreeDs2RequestData1 = {
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
  threeDsRequestorChallengeInd: ThreeDsRequestorChallengeInd.Enum03,
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

