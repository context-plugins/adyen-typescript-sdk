
# Instalment 1

Information related an instalment transaction. To request an instalment to the issuer, or to make individual instalments of a payment transaction.

## Structure

`Instalment1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `instalmentType` | [`InstalmentTypeEnum \| undefined`](../../doc/models/instalment-type-enum.md) | Optional | Type of instalment transaction. For requesting an instalment payment transaction.<br>Possible values:<br><br>* **DeferredInstalments**<br>* **EqualInstalments**<br>* **InequalInstalments** |
| `sequenceNumber` | `number \| undefined` | Optional | Sequence number of the instalment. For an instalment payment transaction, number of the payment, from 1 to TotalNbOfPayments. |
| `planID` | `string \| undefined` | Optional | Identification of an instalment plan.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `period` | `number \| undefined` | Optional | Period of time with defined unit of time. A period between 2 payment instalments. |
| `periodUnit` | [`PeriodUnit1Enum \| undefined`](../../doc/models/period-unit-1-enum.md) | Optional | Type of instalment transaction.<br>Possible values:<br><br>* **Annual**<br>* **Daily**<br>* **Monthly**<br>* **Weekly** |
| `firstPaymentDate` | `string \| undefined` | Optional | First date of a payment. For instalment, the date of the first payments, if not immediate. |
| `totalNbOfPayments` | `number \| undefined` | Optional | Total number of payments. For instalment, the number of payments, including the first one. |
| `cumulativeAmount` | `number \| undefined` | Optional | Sum of a collection of amounts. Total amount of the payment instalments.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `firstAmount` | `number \| undefined` | Optional | First amount of the payment instalments.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `charges` | `number \| undefined` | Optional | Charges related to a transaction. Charge related to the payment instalments.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |

## Example

```ts
import { Instalment1, InstalmentTypeEnum, PeriodUnit1Enum } from 'adyen';

const instalment1: Instalment1 = {
  instalmentType: InstalmentTypeEnum.EqualInstalments,
  sequenceNumber: 180,
  planID: 'PlanID4',
  period: 144,
  periodUnit: PeriodUnit1Enum.Daily,
};
```

