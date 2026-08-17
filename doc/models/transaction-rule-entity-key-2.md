
# Transaction Rule Entity Key 2

The type and unique identifier of the resource to which the rule applies.

## Structure

`TransactionRuleEntityKey2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityReference` | `string \| undefined` | Optional | The unique identifier of the resource. |
| `entityType` | `string \| undefined` | Optional | The type of resource.<br><br>Possible values: **balancePlatform**, **paymentInstrumentGroup**, **accountHolder**, **balanceAccount**, or **paymentInstrument**. |

## Example

```ts
import { TransactionRuleEntityKey2 } from 'adyen';

const transactionRuleEntityKey2: TransactionRuleEntityKey2 = {
  entityReference: 'entityReference8',
  entityType: 'entityType4',
};
```

