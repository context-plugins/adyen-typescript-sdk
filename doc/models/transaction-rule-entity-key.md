
# Transaction Rule Entity Key

## Structure

`TransactionRuleEntityKey`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityReference` | `string \| undefined` | Optional | The unique identifier of the resource. |
| `entityType` | `string \| undefined` | Optional | The type of resource.<br><br>Possible values: **balancePlatform**, **paymentInstrumentGroup**, **accountHolder**, **balanceAccount**, or **paymentInstrument**. |

## Example

```ts
import { TransactionRuleEntityKey } from 'adyen';

const transactionRuleEntityKey: TransactionRuleEntityKey = {
  entityReference: 'entityReference2',
  entityType: 'entityType0',
};
```

