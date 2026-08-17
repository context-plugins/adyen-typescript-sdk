
# Local Shopper Statement

## Structure

`LocalShopperStatement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `script` | `string` | Required | The character set of the local shopper statement.<br><br>Possible values: **ja-Hani**, **ja-Kana**. |
| `value` | `string` | Required | The text of the local shopper statement in the specified character set. |

## Example

```ts
import { LocalShopperStatement } from 'adyen';

const localShopperStatement: LocalShopperStatement = {
  script: 'script4',
  value: 'value6',
};
```

