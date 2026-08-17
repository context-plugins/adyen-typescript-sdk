
# App Identifier Info

## Structure

`AppIdentifierInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `androidPackageId` | `string \| undefined` | Optional | The Android package identifier for this app. |
| `iosScheme` | `string \| undefined` | Optional | The iOS URL scheme for this app. |

## Example

```ts
import { AppIdentifierInfo } from 'adyen';

const appIdentifierInfo: AppIdentifierInfo = {
  androidPackageId: 'androidPackageId8',
  iosScheme: 'iosScheme8',
};
```

