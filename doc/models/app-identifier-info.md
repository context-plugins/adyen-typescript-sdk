
# App Identifier Info

*This model accepts additional fields of type unknown.*

## Structure

`AppIdentifierInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `androidPackageId` | `string \| undefined` | Optional | The Android package identifier for this app. |
| `iosScheme` | `string \| undefined` | Optional | The iOS URL scheme for this app. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AppIdentifierInfo } from 'adyen';

const appIdentifierInfo: AppIdentifierInfo = {
  androidPackageId: 'androidPackageId8',
  iosScheme: 'iosScheme8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

