
# Device Render Options

Display options for the 3D Secure 2 SDK.
Optional and only for `deviceChannel` **app**.

## Structure

`DeviceRenderOptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sdkInterface` | [`SdkInterfaceEnum \| undefined`](../../doc/models/sdk-interface-enum.md) | Optional | Supported SDK interface types.<br>Allowed values:<br><br>* native<br>* html<br>* both<br><br>**Default**: `SdkInterfaceEnum.Both` |
| `sdkUiType` | [`SdkUiTypeEnum[] \| undefined`](../../doc/models/sdk-ui-type-enum.md) | Optional | UI types supported for displaying specific challenges.<br>Allowed values:<br><br>* text<br>* singleSelect<br>* outOfBand<br>* otherHtml<br>* multiSelect |

## Example

```ts
import { DeviceRenderOptions, SdkInterfaceEnum, SdkUiTypeEnum } from 'adyen';

const deviceRenderOptions: DeviceRenderOptions = {
  sdkInterface: SdkInterfaceEnum.Both,
  sdkUiType: [
    SdkUiTypeEnum.OutOfBand,
    SdkUiTypeEnum.SingleSelect
  ],
};
```

