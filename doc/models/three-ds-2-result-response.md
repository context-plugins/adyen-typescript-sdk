
# Three Ds 2 Result Response

*This model accepts additional fields of type unknown.*

## Structure

`ThreeDs2ResultResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `threeDs2Result` | [`ThreeDs2Result2 \| undefined`](../../doc/models/three-ds-2-result-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ChallengeCancel, ThreeDs2ResultResponse } from 'adyen';

const threeDs2ResultResponse: ThreeDs2ResultResponse = {
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

