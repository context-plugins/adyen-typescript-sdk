
# Brand Variants Restriction

*This model accepts additional fields of type unknown.*

## Structure

`BrandVariantsRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `string[] \| undefined` | Optional | List of card brand variants.<br><br>Possible values:<br><br>- **mc**, **mccredit**, **mccommercialcredit_b2b**, **mcdebit**, **mcbusinessdebit**, **mcbusinessworlddebit**, **mcprepaid**, **mcmaestro**<br><br>- **visa**, **visacredit**, **visadebit**, **visaprepaid**.<br><br>You can specify a rule for a generic variant. For example, to create a rule for all Mastercard payment instruments, use **mc**. The rule is applied to all payment instruments under **mc**, such as **mcbusinessdebit** and **mcdebit**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BrandVariantsRestriction } from 'adyen';

const brandVariantsRestriction: BrandVariantsRestriction = {
  operation: 'operation4',
  value: [
    'value8',
    'value9',
    'value0'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

