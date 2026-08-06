
# Localized Information 2

Localized information about the store.

*This model accepts additional fields of type unknown.*

## Structure

`LocalizedInformation2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localShopperStatement` | [`LocalShopperStatement[]`](../../doc/models/local-shopper-statement.md) | Required | An array of local shopper statements. Card schemes use this in the bank statement.<br><br>For Japan local shopper statements in both ja-Hani and ja-Kana are required. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { LocalizedInformation2 } from 'adyen';

const localizedInformation2: LocalizedInformation2 = {
  localShopperStatement: [
    {
      script: 'script4',
      value: 'value6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

