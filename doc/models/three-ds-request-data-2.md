
# Three Ds Request Data 2

Object with additional parameters for the 3D Secure authentication flow.

*This model accepts additional fields of type unknown.*

## Structure

`ThreeDsRequestData2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `challengeWindowSize` | [`ChallengeWindowSize \| undefined`](../../doc/models/challenge-window-size.md) | Optional | - |
| `dataOnly` | [`DataOnly \| undefined`](../../doc/models/data-only.md) | Optional | - |
| `nativeThreeDs` | [`NativeThreeDs \| undefined`](../../doc/models/native-three-ds.md) | Optional | - |
| `threeDsVersion` | [`ThreeDsVersion \| undefined`](../../doc/models/three-ds-version.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ChallengeWindowSize,
  DataOnly,
  NativeThreeDs,
  ThreeDsRequestData2,
  ThreeDsVersion,
} from 'adyenlib';

const threeDsRequestData2: ThreeDsRequestData2 = {
  challengeWindowSize: ChallengeWindowSize.Enum05,
  dataOnly: DataOnly.False,
  nativeThreeDs: NativeThreeDs.Preferred,
  threeDsVersion: ThreeDsVersion.Enum210,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

