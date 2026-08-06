
# Affirm Update Info

*This model accepts additional fields of type unknown.*

## Structure

`AffirmUpdateInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePlan` | `string \| undefined` | Optional | Selected Affirm financing package. Choose from **core**, **standard**, or **signature**. Defaults to **core** if no selection made. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AffirmUpdateInfo } from 'adyen';

const affirmUpdateInfo: AffirmUpdateInfo = {
  pricePlan: 'pricePlan2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

