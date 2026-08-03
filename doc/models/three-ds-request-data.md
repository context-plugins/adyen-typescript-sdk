
# Three Ds Request Data

*This model accepts additional fields of type unknown.*

## Structure

`ThreeDsRequestData`

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
  ThreeDsRequestData,
  ThreeDsVersion,
} from 'adyenlib';

const threeDsRequestData: ThreeDsRequestData = {
  challengeWindowSize: ChallengeWindowSize.Enum03,
  dataOnly: DataOnly.False,
  nativeThreeDs: NativeThreeDs.Preferred,
  threeDsVersion: ThreeDsVersion.Enum210,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

