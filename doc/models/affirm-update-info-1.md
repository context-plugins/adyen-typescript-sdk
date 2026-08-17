
# Affirm Update Info 1

Details to provide if `type` is **affirm**.

## Structure

`AffirmUpdateInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePlan` | `string \| undefined` | Optional | Selected Affirm financing package. Choose from **core**, **standard**, or **signature**. Defaults to **core** if no selection made. |

## Example

```ts
import { AffirmUpdateInfo1 } from 'adyen';

const affirmUpdateInfo1: AffirmUpdateInfo1 = {
  pricePlan: 'pricePlan2',
};
```

