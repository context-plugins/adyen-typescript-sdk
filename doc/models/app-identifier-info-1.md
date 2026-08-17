
# App Identifier Info 1

The app identifier information containing iOS scheme and Android package ID.

## Structure

`AppIdentifierInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `androidPackageId` | `string \| undefined` | Optional | The Android package identifier for this app. |
| `iosScheme` | `string \| undefined` | Optional | The iOS URL scheme for this app. |

## Example

```ts
import { AppIdentifierInfo1 } from 'adyen';

const appIdentifierInfo1: AppIdentifierInfo1 = {
  androidPackageId: 'androidPackageId2',
  iosScheme: 'iosScheme2',
};
```

