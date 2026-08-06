
# Transaction Rule Entity Key 2

The type and unique identifier of the resource to which the rule applies.

*This model accepts additional fields of type unknown.*

## Structure

`TransactionRuleEntityKey2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityReference` | `string \| undefined` | Optional | The unique identifier of the resource. |
| `entityType` | `string \| undefined` | Optional | The type of resource.<br><br>Possible values: **balancePlatform**, **paymentInstrumentGroup**, **accountHolder**, **balanceAccount**, or **paymentInstrument**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TransactionRuleEntityKey2 } from 'adyen';

const transactionRuleEntityKey2: TransactionRuleEntityKey2 = {
  entityReference: 'entityReference8',
  entityType: 'entityType4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

