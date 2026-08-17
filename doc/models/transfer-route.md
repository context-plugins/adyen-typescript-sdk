
# Transfer Route

## Structure

`TransferRoute`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `category` | [`Category2Enum \| undefined`](../../doc/models/category-2-enum.md) | Optional | The type of transfer.<br><br>Possible values:<br><br>- **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account. |
| `country` | `string \| undefined` | Optional | The two-character ISO-3166-1 alpha-2 country code of the counterparty. For example, **US** or **NL**. |
| `currency` | `string \| undefined` | Optional | The three-character ISO currency code of transfer. For example, **USD** or **EUR**. |
| `priority` | [`Priority2Enum \| undefined`](../../doc/models/priority-2-enum.md) | Optional | The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN). |
| `requirements` | [`TransferRouteRequirements[] \| undefined`](../../doc/models/containers/transfer-route-requirements.md) | Optional | This is Array of a container for one-of cases. |

## Example

```ts
import {
  AdditionalBankIdentificationTypeEnum,
  Category2Enum,
  Priority2Enum,
  TransferRoute,
} from 'adyen';

const transferRoute: TransferRoute = {
  category: Category2Enum.Grants,
  country: 'country4',
  currency: 'currency0',
  priority: Priority2Enum.Instant,
  requirements: [
    {
      type: 'type8',
      additionalBankIdentificationType: AdditionalBankIdentificationTypeEnum.GbSortCode,
      description: 'description8',
    }
  ],
};
```

