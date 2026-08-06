
# App Identifier Info 1

The app identifier information containing iOS scheme and Android package ID.

*This model accepts additional fields of type unknown.*

## Structure

`AppIdentifierInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `androidPackageId` | `string \| undefined` | Optional | The Android package identifier for this app. |
| `iosScheme` | `string \| undefined` | Optional | The iOS URL scheme for this app. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AppIdentifierInfo1 } from 'adyen';

const appIdentifierInfo1: AppIdentifierInfo1 = {
  androidPackageId: 'androidPackageId2',
  iosScheme: 'iosScheme2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

