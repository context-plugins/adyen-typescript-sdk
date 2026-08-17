
# Affirm Info 1

Details to provide if `type` is **affirm**.

## Structure

`AffirmInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePlan` | `string \| undefined` | Optional | Selected Affirm financing package. Choose from **core**, **standard**, or **signature**. Defaults to **core** if no selection made. |
| `supportEmail` | `string` | Required | Merchant support email used to manage disputes. |

## Example

```ts
import { AffirmInfo1 } from 'adyen';

const affirmInfo1: AffirmInfo1 = {
  supportEmail: 'supportEmail2',
  pricePlan: 'pricePlan8',
};
```

