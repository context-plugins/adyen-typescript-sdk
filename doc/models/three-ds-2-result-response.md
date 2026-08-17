
# Three DS 2 Result Response

## Structure

`ThreeDS2ResultResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `threeDS2Result` | [`ThreeDS2Result \| undefined`](../../doc/models/three-ds-2-result.md) | Optional | The result of the 3D Secure 2 authentication. |

## Example

```ts
import { ChallengeCancelEnum, ThreeDS2ResultResponse } from 'adyen';

const threeDS2ResultResponse: ThreeDS2ResultResponse = {
  threeDS2Result: {
    authenticationValue: 'authenticationValue8',
    cavvAlgorithm: 'cavvAlgorithm8',
    challengeCancel: ChallengeCancelEnum.Enum06,
    dsTransID: 'dsTransID2',
    eci: 'eci6',
  },
};
```

