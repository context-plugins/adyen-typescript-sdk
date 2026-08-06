
# Transaction Rule Entity Key

*This model accepts additional fields of type unknown.*

## Structure

`TransactionRuleEntityKey`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityReference` | `string \| undefined` | Optional | The unique identifier of the resource. |
| `entityType` | `string \| undefined` | Optional | The type of resource.<br><br>Possible values: **balancePlatform**, **paymentInstrumentGroup**, **accountHolder**, **balanceAccount**, or **paymentInstrument**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TransactionRuleEntityKey } from 'adyen';

const transactionRuleEntityKey: TransactionRuleEntityKey = {
  entityReference: 'entityReference2',
  entityType: 'entityType0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

