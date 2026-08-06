
# Affirm Info

*This model accepts additional fields of type unknown.*

## Structure

`AffirmInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePlan` | `string \| undefined` | Optional | Selected Affirm financing package. Choose from **core**, **standard**, or **signature**. Defaults to **core** if no selection made. |
| `supportEmail` | `string` | Required | Merchant support email used to manage disputes. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AffirmInfo } from 'adyen';

const affirmInfo: AffirmInfo = {
  supportEmail: 'supportEmail6',
  pricePlan: 'pricePlan4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

