
# Instalment

*This model accepts additional fields of type unknown.*

## Structure

`Instalment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `instalmentType` | [`InstalmentType \| undefined`](../../doc/models/instalment-type.md) | Optional | - |
| `sequenceNumber` | `number \| undefined` | Optional | Sequence number of the instalment. For an instalment payment transaction, number of the payment, from 1 to TotalNbOfPayments. |
| `planId` | `string \| undefined` | Optional | Identification of an instalment plan.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `period` | `number \| undefined` | Optional | Period of time with defined unit of time. A period between 2 payment instalments. |
| `periodUnit` | [`PeriodUnit1 \| undefined`](../../doc/models/period-unit-1.md) | Optional | - |
| `firstPaymentDate` | `string \| undefined` | Optional | First date of a payment. For instalment, the date of the first payments, if not immediate. |
| `totalNbOfPayments` | `number \| undefined` | Optional | Total number of payments. For instalment, the number of payments, including the first one. |
| `cumulativeAmount` | `number \| undefined` | Optional | Sum of a collection of amounts. Total amount of the payment instalments.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `firstAmount` | `number \| undefined` | Optional | First amount of the payment instalments.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `charges` | `number \| undefined` | Optional | Charges related to a transaction. Charge related to the payment instalments.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Instalment, InstalmentType, PeriodUnit1 } from 'adyen';

const instalment: Instalment = {
  instalmentType: InstalmentType.DeferredInstalments,
  sequenceNumber: 164,
  planId: 'PlanID4',
  period: 56,
  periodUnit: PeriodUnit1.Daily,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

