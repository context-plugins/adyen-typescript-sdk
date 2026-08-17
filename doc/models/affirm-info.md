
# Affirm Info

## Structure

`AffirmInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePlan` | `string \| undefined` | Optional | Selected Affirm financing package. Choose from **core**, **standard**, or **signature**. Defaults to **core** if no selection made. |
| `supportEmail` | `string` | Required | Merchant support email used to manage disputes. |

## Example

```ts
import { AffirmInfo } from 'adyen';

const affirmInfo: AffirmInfo = {
  supportEmail: 'supportEmail6',
  pricePlan: 'pricePlan4',
};
```

