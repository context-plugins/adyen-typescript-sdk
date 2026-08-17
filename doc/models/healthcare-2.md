
# Healthcare 2

Healthcare auto-substantiation amounts for FSA/HSA card transactions. The amounts are used to qualify for reduced interchange rates on healthcare-eligible cards.

## Structure

`Healthcare2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dentalValue` | `bigint \| undefined` | Optional | The dental amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000 |
| `otherMedicalValue` | `bigint \| undefined` | Optional | The other medical amount not covered by the specific categories, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000 |
| `prescriptionValue` | `bigint \| undefined` | Optional | The prescription/Rx amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000 |
| `totalHealthcareValue` | `bigint` | Required | The total healthcare amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000 |
| `visionPrescriptionValue` | `bigint \| undefined` | Optional | The vision/optical prescription amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000 |

## Example

```ts
import { Healthcare2 } from 'adyen';

const healthcare2: Healthcare2 = {
  totalHealthcareValue: BigInt(234),
  dentalValue: BigInt(138),
  otherMedicalValue: BigInt(156),
  prescriptionValue: BigInt(122),
  visionPrescriptionValue: BigInt(172),
};
```

