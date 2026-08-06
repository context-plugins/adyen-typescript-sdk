
# Local Shopper Statement

*This model accepts additional fields of type unknown.*

## Structure

`LocalShopperStatement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `script` | `string` | Required | The character set of the local shopper statement.<br><br>Possible values: **ja-Hani**, **ja-Kana**. |
| `value` | `string` | Required | The text of the local shopper statement in the specified character set. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { LocalShopperStatement } from 'adyen';

const localShopperStatement: LocalShopperStatement = {
  script: 'script4',
  value: 'value6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

