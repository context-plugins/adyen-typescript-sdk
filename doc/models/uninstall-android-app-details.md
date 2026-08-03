
# Uninstall Android App Details

*This model accepts additional fields of type unknown.*

## Structure

`UninstallAndroidAppDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `appId` | `string \| undefined` | Optional | The unique identifier of the app to be uninstalled. |
| `type` | [`Type73 \| undefined`](../../doc/models/type-73.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Type73, UninstallAndroidAppDetails } from 'adyenlib';

const uninstallAndroidAppDetails: UninstallAndroidAppDetails = {
  appId: 'appId0',
  type: Type73.UninstallAndroidApp,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

