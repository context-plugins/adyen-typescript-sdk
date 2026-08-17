
# Authentication Result Response

## Structure

`AuthenticationResultResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `threeDS1Result` | [`ThreeDS1Result2 \| undefined`](../../doc/models/three-ds-1-result-2.md) | Optional | The result of the 3D Secure authentication. |
| `threeDS2Result` | [`ThreeDS2Result \| undefined`](../../doc/models/three-ds-2-result.md) | Optional | The result of the 3D Secure 2 authentication. |

## Example

```ts
import { AuthenticationResultResponse, ChallengeCancelEnum } from 'adyen';

const authenticationResultResponse: AuthenticationResultResponse = {
  threeDS1Result: {
    cavv: 'cavv2',
    cavvAlgorithm: 'cavvAlgorithm8',
    eci: 'eci6',
    threeDAuthenticatedResponse: 'threeDAuthenticatedResponse8',
    threeDOfferedResponse: 'threeDOfferedResponse2',
  },
  threeDS2Result: {
    authenticationValue: 'authenticationValue8',
    cavvAlgorithm: 'cavvAlgorithm8',
    challengeCancel: ChallengeCancelEnum.Enum06,
    dsTransID: 'dsTransID2',
    eci: 'eci6',
  },
};
```

