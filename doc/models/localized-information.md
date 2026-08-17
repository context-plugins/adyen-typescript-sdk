
# Localized Information

## Structure

`LocalizedInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localShopperStatement` | [`LocalShopperStatement[]`](../../doc/models/local-shopper-statement.md) | Required | An array of local shopper statements. Card schemes use this in the bank statement.<br><br>For Japan local shopper statements in both ja-Hani and ja-Kana are required. |

## Example

```ts
import { LocalizedInformation } from 'adyen';

const localizedInformation: LocalizedInformation = {
  localShopperStatement: [
    {
      script: 'script4',
      value: 'value6',
    }
  ],
};
```

