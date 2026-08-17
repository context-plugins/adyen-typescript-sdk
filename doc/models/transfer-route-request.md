
# Transfer Route Request

## Structure

`TransferRouteRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string \| undefined` | Optional | The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).<br>Required if `counterparty` is **transferInstrumentId**. |
| `balancePlatform` | `string` | Required | The unique identifier assigned to the balance platform associated with the account holder. |
| `category` | `string` | Required, Constant | The type of transfer. Possible values:<br><br>- **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.<br><br>**Value**: `'bank'` |
| `counterparty` | [`Counterparty1 \| undefined`](../../doc/models/counterparty-1.md) | Optional | The recipient of the funds transfer. A bank account or a transfer instrument. |
| `country` | `string \| undefined` | Optional | The two-character ISO-3166-1 alpha-2 country code of the counterparty. For example, **US** or **NL**.<br><br>> Either `counterparty` or `country` field must be provided in a transfer route request. |
| `currency` | `string` | Required | The three-character ISO currency code of transfer. For example, **USD** or **EUR**. |
| `priorities` | [`Priority1Enum[] \| undefined`](../../doc/models/priority-1-enum.md) | Optional | The list of priorities for the bank transfer. Priorities set the speed at which the transfer is sent and the fees that you have to pay. Multiple values can be provided.<br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN). |

## Example

```ts
import { Priority1Enum, TransferRouteRequest } from 'adyen';

const transferRouteRequest: TransferRouteRequest = {
  balancePlatform: 'balancePlatform8',
  category: 'bank',
  currency: 'currency6',
  balanceAccountId: 'balanceAccountId2',
  counterparty: {
    bankAccount: {
      accountIdentification: {
        accountNumber: 'accountNumber4',
        bsbCode: 'bsbCode8',
        type: 'type2',
      },
    },
    transferInstrumentId: 'transferInstrumentId4',
  },
  country: 'country0',
  priorities: [
    Priority1Enum.Regular,
    Priority1Enum.Wire,
    Priority1Enum.CrossBorder
  ],
};
```

