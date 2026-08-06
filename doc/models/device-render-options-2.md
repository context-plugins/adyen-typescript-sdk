
# Device Render Options 2

*This model accepts additional fields of type unknown.*

## Structure

`DeviceRenderOptions2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sdkInterface` | [`SdkInterface \| undefined`](../../doc/models/sdk-interface.md) | Optional | - |
| `sdkUiType` | [`SdkUiType[] \| undefined`](../../doc/models/sdk-ui-type.md) | Optional | UI types supported for displaying specific challenges.<br>Allowed values:<br><br>* text<br>* singleSelect<br>* outOfBand<br>* otherHtml<br>* multiSelect |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeviceRenderOptions2, SdkInterface, SdkUiType } from 'adyen';

const deviceRenderOptions2: DeviceRenderOptions2 = {
  sdkInterface: SdkInterface.Native,
  sdkUiType: [
    SdkUiType.OutOfBand,
    SdkUiType.SingleSelect,
    SdkUiType.Text
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

