
# Device Render Options

Display options for the 3D Secure 2 SDK.
Optional and only for `deviceChannel` **app**.

*This model accepts additional fields of type unknown.*

## Structure

`DeviceRenderOptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sdkInterface` | [`SdkInterface \| undefined`](../../doc/models/sdk-interface.md) | Optional | - |
| `sdkUiType` | [`SdkUiType[] \| undefined`](../../doc/models/sdk-ui-type.md) | Optional | UI types supported for displaying specific challenges.<br>Allowed values:<br><br>* text<br>* singleSelect<br>* outOfBand<br>* otherHtml<br>* multiSelect |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeviceRenderOptions, SdkInterface, SdkUiType } from 'adyen';

const deviceRenderOptions: DeviceRenderOptions = {
  sdkInterface: SdkInterface.Both,
  sdkUiType: [
    SdkUiType.OutOfBand,
    SdkUiType.SingleSelect
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

