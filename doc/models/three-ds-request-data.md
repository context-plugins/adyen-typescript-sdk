
# Three DS Request Data

## Structure

`ThreeDSRequestData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `challengeWindowSize` | [`ChallengeWindowSizeEnum \| undefined`](../../doc/models/challenge-window-size-enum.md) | Optional | Dimensions of the 3DS2 challenge window to be displayed to the cardholder.<br><br>Possible values:<br><br>* **01** - size of 250x400<br>* **02** - size of 390x400<br>* **03** - size of 500x600<br>* **04** - size of 600x400<br>* **05** - Fullscreen |
| `dataOnly` | [`DataOnlyEnum \| undefined`](../../doc/models/data-only-enum.md) | Optional | Required to trigger the [data-only flow](https://docs.adyen.com/online-payments/3d-secure/data-only/). When set to **true**, forces the 3D Secure 2 data-only flow for all transactions where it is possible. |
| `nativeThreeDS` | [`NativeThreeDSEnum \| undefined`](../../doc/models/native-three-ds-enum.md) | Optional | Indicates if [native 3D Secure authentication](https://docs.adyen.com/online-payments/3d-secure/native-3ds2) should be triggered when available. Adyen can still select to fallback to the redirect flow to optimize authorization rates and improve the shopper's experience.<br><br>Possible values:<br><br>* **preferred**: Use native 3D Secure authentication when available.<br>* **disabled**: Use the redirect 3D Secure authentication flow. |
| `threeDSVersion` | [`ThreeDSVersionEnum \| undefined`](../../doc/models/three-ds-version-enum.md) | Optional | The version of 3D Secure to use.<br><br>Possible values:<br><br>* **2.1.0**<br>* **2.2.0** |

## Example

```ts
import {
  ChallengeWindowSizeEnum,
  DataOnlyEnum,
  NativeThreeDSEnum,
  ThreeDSRequestData,
  ThreeDSVersionEnum,
} from 'adyen';

const threeDSRequestData: ThreeDSRequestData = {
  challengeWindowSize: ChallengeWindowSizeEnum.Enum03,
  dataOnly: DataOnlyEnum.False,
  nativeThreeDS: NativeThreeDSEnum.Preferred,
  threeDSVersion: ThreeDSVersionEnum.Enum210,
};
```

