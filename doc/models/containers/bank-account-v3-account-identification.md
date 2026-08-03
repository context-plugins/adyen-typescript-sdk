
# Bank Account V3 Account Identification

## Class Name

`BankAccountV3AccountIdentification`

## Cases

| Type |
|  --- |
| [`AuLocalAccountIdentification`](../../../doc/models/au-local-account-identification.md) |
| [`BrLocalAccountIdentification`](../../../doc/models/br-local-account-identification.md) |
| [`CaLocalAccountIdentification`](../../../doc/models/ca-local-account-identification.md) |
| [`CzLocalAccountIdentification`](../../../doc/models/cz-local-account-identification.md) |
| [`DkLocalAccountIdentification`](../../../doc/models/dk-local-account-identification.md) |
| [`HkLocalAccountIdentification`](../../../doc/models/hk-local-account-identification.md) |
| [`HuLocalAccountIdentification`](../../../doc/models/hu-local-account-identification.md) |
| [`IbanAccountIdentification1`](../../../doc/models/iban-account-identification-1.md) |
| [`NoLocalAccountIdentification`](../../../doc/models/no-local-account-identification.md) |
| [`NzLocalAccountIdentification`](../../../doc/models/nz-local-account-identification.md) |
| [`NumberAndBicAccountIdentification`](../../../doc/models/number-and-bic-account-identification.md) |
| [`PlLocalAccountIdentification`](../../../doc/models/pl-local-account-identification.md) |
| [`SeLocalAccountIdentification`](../../../doc/models/se-local-account-identification.md) |
| [`SgLocalAccountIdentification`](../../../doc/models/sg-local-account-identification.md) |
| [`UkLocalAccountIdentification`](../../../doc/models/uk-local-account-identification.md) |
| [`UsLocalAccountIdentification`](../../../doc/models/us-local-account-identification.md) |

## AuLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV3AccountIdentification = {
  accountNumber: 'accountNumber4',
  bsbCode: 'bsbCode8',
  type: Type413.AuLocal,
};
```

## BrLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV3AccountIdentification = {
  accountNumber: 'accountNumber0',
  bankCode: 'bankCode2',
  branchNumber: 'branchNumber2',
  type: Type146.BrLocal,
};
```

## CaLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV3AccountIdentification = {
  accountNumber: 'accountNumber8',
  institutionNumber: 'institutionNumber2',
  transitNumber: 'transitNumber8',
  type: Type153.CaLocal,
};
```

## CzLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV3AccountIdentification = {
  accountNumber: 'accountNumber4',
  bankCode: 'bankCode8',
  type: Type163.CzLocal,
};
```

## DkLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV3AccountIdentification = {
  accountNumber: 'accountNumber6',
  bankCode: 'bankCode6',
  type: Type173.DkLocal,
};
```

## HkLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV3AccountIdentification = {
  accountNumber: 'accountNumber8',
  clearingCode: 'clearingCode2',
  type: Type1810.HkLocal,
};
```

## HuLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV3AccountIdentification = {
  accountNumber: 'accountNumber8',
  type: Type193.HuLocal,
};
```

## IbanAccountIdentification1

### Initialization Code

#### Example

```ts
const value: BankAccountV3AccountIdentification = {
  iban: 'iban4',
  type: Type203.Iban,
};
```

## NoLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV3AccountIdentification = {
  accountNumber: 'accountNumber6',
  type: Type223.NoLocal,
};
```

## NzLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV3AccountIdentification = {
  accountNumber: 'accountNumber6',
  type: Type233.NzLocal,
};
```

## NumberAndBicAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV3AccountIdentification = {
  accountNumber: 'accountNumber0',
  bic: 'bic4',
  type: Type244.NumberAndBic,
};
```

## PlLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV3AccountIdentification = {
  accountNumber: 'accountNumber4',
  type: Type256.PlLocal,
};
```

## SeLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV3AccountIdentification = {
  accountNumber: 'accountNumber0',
  clearingNumber: 'clearingNumber2',
  type: Type264.SeLocal,
};
```

## SgLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV3AccountIdentification = {
  accountNumber: 'accountNumber2',
  bic: 'bic2',
};
```

## UkLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV3AccountIdentification = {
  accountNumber: 'accountNumber8',
  sortCode: 'sortCode8',
  type: Type273.UkLocal,
};
```

## UsLocalAccountIdentification

### Initialization Code

#### Example

```ts
const value: BankAccountV3AccountIdentification = {
  accountNumber: 'accountNumber2',
  routingNumber: 'routingNumber2',
  type: Type283.UsLocal,
};
```

