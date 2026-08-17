
# Transfer Info

## Structure

`TransferInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | The amount of the transfer. |
| `balanceAccountId` | `string \| undefined` | Optional | The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).<br><br>If you want to make a transfer using a **virtual** **bankAccount** assigned to the balance account, you must specify the [payment instrument ID](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments#responses-200-id) of the **virtual** **bankAccount**. If you only specify a balance account ID, Adyen uses the default **physical** **bankAccount** payment instrument assigned to the balance account. |
| `category` | [`Category3Enum`](../../doc/models/category-3-enum.md) | Required | The category of the transfer.<br><br>Possible values:<br><br>- **bank**: A transfer involving a [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) or a bank account.<br><br>- **card**: A transfer involving a third-party card.<br><br>- **internal**: A transfer between [balance accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id) within your platform.<br><br>- **issuedCard**: A transfer initiated by an Adyen-issued card.<br><br>- **platformPayment**: Funds movements related to payments that are acquired for your users.<br><br>- **topUp**: An incoming transfer initiated by your user to top up their balance account. |
| `counterparty` | [`CounterpartyInfoV31`](../../doc/models/counterparty-info-v31.md) | Required | The other party involved in the funds transfer. A bank account, a balance account, a card, or a transfer instrument is required. |
| `description` | `string \| undefined` | Optional | Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.<br><br>Supported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**<br><br>Supported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ ' " ! ?**<br><br>**Constraints**: *Maximum Length*: `140` |
| `executionDate` | [`ExecutionDate3 \| undefined`](../../doc/models/execution-date-3.md) | Optional | The date when the transfer will be processed. This date must be within 30 days of the current date.<br><br>Until the `executionDate`:<br><br>- The `status` of the transfer remains as **received**.<br>- The `reason` of the transfer remains as **pending**. |
| `paymentInstrumentId` | `string \| undefined` | Optional | The unique identifier of the source [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments#responses-200-id).<br><br>If you want to make a transfer using a **virtual** **bankAccount**, you must specify the payment instrument ID of the **virtual** **bankAccount**. If you only specify a balance account ID, Adyen uses the default **physical** **bankAccount** payment instrument assigned to the balance account. |
| `priorities` | [`Priority1Enum[] \| undefined`](../../doc/models/priority-1-enum.md) | Optional | The list of priorities for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. You can provide multiple priorities. Adyen will try to pay out using the priority you list first. If that's not possible, it moves on to the next option in the order of your provided priorities.<br><br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).<br><br>Required for transfers with `category` **bank**. For more details, see [fallback priorities](https://docs.adyen.com/payouts/payout-service/payout-to-users/#fallback-priorities). |
| `priority` | [`Priority1Enum \| undefined`](../../doc/models/priority-1-enum.md) | Optional | The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.<br><br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN). |
| `reference` | `string \| undefined` | Optional | Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.<br><br>**Constraints**: *Maximum Length*: `80` |
| `referenceForBeneficiary` | `string \| undefined` | Optional | A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**. The maximum length depends on the `category`.<br><br>- **internal**: 80 characters<br><br>- **bank**: 35 characters when transferring to an IBAN, 15 characters for others. |
| `review` | [`TransferRequestReview2 \| undefined`](../../doc/models/transfer-request-review-2.md) | Optional | Contains information required for triggering transfer reviews. |
| `type` | [`Type113Enum \| undefined`](../../doc/models/type-113-enum.md) | Optional | The type of transfer.<br><br>Possible values:<br><br>- **bankTransfer**: for push transfers to a transfer instrument or a bank account. The `category` must be **bank**.<br>- **internalTransfer**: for push transfers between balance accounts. The `category` must be **internal**.<br>- **internalDirectDebit**: for pull transfers (direct debits) between balance accounts. The `category` must be **internal**. |
| `ultimateParty` | [`UltimatePartyIdentification1 \| undefined`](../../doc/models/ultimate-party-identification-1.md) | Optional | The ultimate sender of the funds of the transfer (ultimate debtor). |

## Example

```ts
import { Category3Enum, Priority1Enum, TransferInfo } from 'adyen';

const transferInfo: TransferInfo = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  category: Category3Enum.Bank,
  counterparty: {
    balanceAccountId: 'balanceAccountId0',
    bankAccount: {
      accountHolder: {
        address: {
          country: 'country0',
          city: 'city6',
          line1: 'line18',
          line2: 'line20',
          postalCode: 'postalCode8',
          stateOrProvince: 'stateOrProvince4',
        },
        dateOfBirth: '2016-03-13T12:52:32.123Z',
        email: 'email6',
        firstName: 'firstName4',
        fullName: 'fullName0',
      },
      accountIdentification: {
        accountNumber: 'accountNumber4',
        bsbCode: 'bsbCode8',
        type: 'type2',
      },
      storedPaymentMethodId: 'storedPaymentMethodId2',
    },
    card: {
      cardHolder: {
        address: {
          country: 'country0',
          city: 'city6',
          line1: 'line18',
          line2: 'line20',
          postalCode: 'postalCode8',
          stateOrProvince: 'stateOrProvince4',
        },
        dateOfBirth: '2016-03-13T12:52:32.123Z',
        email: 'email0',
        firstName: 'firstName8',
        fullName: 'fullName6',
      },
      cardIdentification: {
        expiryMonth: 'expiryMonth2',
        expiryYear: 'expiryYear2',
        issueNumber: 'issueNumber0',
        number: 'number6',
        startMonth: 'startMonth8',
      },
    },
    transferInstrumentId: 'transferInstrumentId4',
  },
  balanceAccountId: 'balanceAccountId8',
  description: 'description0',
  executionDate: {
    date: '2016-03-13T12:52:32.123Z',
    timezone: 'timezone0',
  },
  paymentInstrumentId: 'paymentInstrumentId2',
  priorities: [
    Priority1Enum.Instant
  ],
};
```

