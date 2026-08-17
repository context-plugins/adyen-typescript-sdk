
# Affirm Update Info

## Structure

`AffirmUpdateInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePlan` | `string \| undefined` | Optional | Selected Affirm financing package. Choose from **core**, **standard**, or **signature**. Defaults to **core** if no selection made. |

## Example

```ts
import { AffirmUpdateInfo } from 'adyen';

const affirmUpdateInfo: AffirmUpdateInfo = {
  pricePlan: 'pricePlan2',
};
```

