
# Authentication Result Response

*This model accepts additional fields of type unknown.*

## Structure

`AuthenticationResultResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `threeDs1Result` | [`ThreeDs1Result \| undefined`](../../doc/models/three-ds-1-result.md) | Optional | - |
| `threeDs2Result` | [`ThreeDs2Result2 \| undefined`](../../doc/models/three-ds-2-result-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AuthenticationResultResponse, ChallengeCancel } from 'adyen';

const authenticationResultResponse: AuthenticationResultResponse = {
  threeDs1Result: {
    cavv: 'cavv2',
    cavvAlgorithm: 'cavvAlgorithm8',
    eci: 'eci6',
    threeDAuthenticatedResponse: 'threeDAuthenticatedResponse8',
    threeDOfferedResponse: 'threeDOfferedResponse2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  threeDs2Result: {
    authenticationValue: 'authenticationValue8',
    cavvAlgorithm: 'cavvAlgorithm8',
    challengeCancel: ChallengeCancel.Enum06,
    dsTransId: 'dsTransID2',
    eci: 'eci6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

