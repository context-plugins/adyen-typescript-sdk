
# Cardholder Receipt

*This model accepts additional fields of type unknown.*

## Structure

`CardholderReceipt`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `headerForAuthorizedReceipt` | `string \| undefined` | Optional | The structure of the header to show on the shopper receipt. You can define the order of one or two header lines and blank lines. For example, **header1,header2,filler**. The text of the header lines is defined in the Customer Area under **In-person payments** > **Terminal settings** > **Receipts** in the **Receipt lines** block. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CardholderReceipt } from 'adyen';

const cardholderReceipt: CardholderReceipt = {
  headerForAuthorizedReceipt: 'headerForAuthorizedReceipt8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

