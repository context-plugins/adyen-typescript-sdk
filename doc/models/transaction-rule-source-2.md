
# Transaction Rule Source 2

Contains information about the resource to which the transaction rule applies.

*This model accepts additional fields of type unknown.*

## Structure

`TransactionRuleSource2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | ID of the resource, when applicable. |
| `type` | `string \| undefined` | Optional | Indicates the type of resource for which the transaction rule is defined.<br><br>Possible values:<br><br>* **PaymentInstrumentGroup**<br><br>* **PaymentInstrument**<br><br>* **BalancePlatform**<br><br>* **EntityUsageConfiguration**<br><br>* **PlatformRule**: The transaction rule is a platform-wide rule imposed by Adyen. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TransactionRuleSource2 } from 'adyen';

const transactionRuleSource2: TransactionRuleSource2 = {
  id: 'id8',
  type: 'type2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

