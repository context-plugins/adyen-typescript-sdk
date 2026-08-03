
# Install Android App Details

*This model accepts additional fields of type unknown.*

## Structure

`InstallAndroidAppDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `appId` | `string \| undefined` | Optional | The unique identifier of the app to be installed. |
| `type` | [`Type310 \| undefined`](../../doc/models/type-310.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InstallAndroidAppDetails, Type310 } from 'adyenlib';

const installAndroidAppDetails: InstallAndroidAppDetails = {
  appId: 'appId8',
  type: Type310.InstallAndroidApp,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

