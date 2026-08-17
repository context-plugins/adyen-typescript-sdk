
# Bank Category Data

## Structure

`BankCategoryData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `priority` | [`Priority1Enum \| undefined`](../../doc/models/priority-1-enum.md) | Optional | The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.<br><br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN). |
| `type` | [`Type310Enum \| undefined`](../../doc/models/type-310-enum.md) | Optional | **bank**<br><br>**Default**: `Type310Enum.Bank` |

## Example

```ts
import { BankCategoryData, Priority1Enum, Type310Enum } from 'adyen';

const bankCategoryData: BankCategoryData = {
  priority: Priority1Enum.Instant,
  type: Type310Enum.Bank,
};
```

