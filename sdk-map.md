<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Adyen (TypeScript)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, request-field placement, error types and server wiring **by lookup**. Model shapes and enum values are *not* duplicated here — the map names the file declaring each type and the schema value exported beside it; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Adyen |
| Package | `adyen` |
| Package version | `72.0.0` |
| API spec version | `72` |
| Import specifier | `adyen` — the package root is the **only** entry. Deep imports (`adyen/models/...`) do not resolve; the `exports` map exposes `.` and `./package.json` and nothing else |
| Module format | dual ESM + CommonJS, as folder dialects (`dist/esm`, `dist/commonjs`), each with its own `package.json` marker. No `.mjs`, `.cjs`, `.d.mts` or `.d.cts` files exist |
| Node floor | `>=20.3` (`engines.node`) |
| TypeScript floor | a resolver that reads `exports` (4.7+), plus whatever the pinned `zod` requires — `zod@4` needs 5.5 or later. The public `.d.ts` chain reaches `zod/v4-mini`, so this is a real constraint rather than a build-tool version |
| Runtime dependency | `zod` (`^4.1.0`), imported as `zod/v4-mini`. The only runtime dependency |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `package.json` — never to the page that carries them: a page two directories deep writes exactly what a page at the root would. The package ships its `src/` tree, so the same paths resolve inside `node_modules/adyen/` too. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

---

## Getting a client

```ts
import { AdyenClient } from "adyen";

const client = new AdyenClient({
  apiKeyAuth: "YOUR_API_KEY",
  basicAuth: { username: "YOUR_USERNAME", password: "YOUR_PASSWORD" },
  clientKey: "YOUR_API_KEY",
});
```

The only constructor is `new AdyenClient(options: ClientOptions = {})`, so `new AdyenClient()` is the minimum. Resources are memoized lazy getters on the client — `client.payments`, `client.donations`, `client.paymentLinks`, `client.modifications`, `client.recurringApi`, `client.orders`, `client.utility`, `client.general`, `client.initialization`, `client.reviewing`, `client.instantPayouts`, `client.rates`, `client.accountCompanyLevel`, `client.accountMerchantLevel`, `client.accountStoreLevel`, `client.payoutSettingsMerchantLevel`, `client.usersCompanyLevel`, `client.usersMerchantLevel`, `client.myApiCredential`, `client.apiCredentialsCompanyLevel`, `client.apiCredentialsMerchantLevel`, `client.apiKeyCompanyLevel`, `client.apiKeyMerchantLevel`, `client.clientKeyCompanyLevel`, `client.clientKeyMerchantLevel`, `client.allowedOriginsCompanyLevel`, `client.allowedOriginsMerchantLevel`, `client.webhooksCompanyLevel`, `client.webhooksMerchantLevel`, `client.paymentMethodsMerchantLevel`, `client.terminalsTerminalLevel`, `client.terminalActionsCompanyLevel`, `client.terminalActionsTerminalLevel`, `client.terminalOrdersCompanyLevel`, `client.terminalOrdersMerchantLevel`, `client.terminalSettingsCompanyLevel`, `client.terminalSettingsMerchantLevel`, `client.terminalSettingsStoreLevel`, `client.terminalSettingsTerminalLevel`, `client.androidFilesCompanyLevel`, `client.splitConfigurationMerchantLevel`, `client.donationCampaigns`, `client.accountHolders`, `client.accounts`, `client.verification`, `client.balancesOverview`, `client.balanceTransfers`, `client.platform`, `client.balanceAccounts`, `client.balances`, `client.managedPayoutSchedules`, `client.customPayoutSchedulesSweeps`, `client.authorizedCardUsers`, `client.recurringTopUps`, `client.paymentInstruments`, `client.paymentInstrumentGroups`, `client.transactionRules`, `client.bankAccountValidation`, `client.networkTokens`, `client.grantAccounts`, `client.grantOffersApi`, `client.cardOrders`, `client.directDebitMandates`, `client.manageCardPin`, `client.transferRoutes`, `client.scaDeviceManagement`, `client.transferLimitsBalanceAccountLevel`, `client.transferLimitsBalancePlatformLevel`, `client.manageScaDevices`, `client.scaAssociationManagement`, `client.transfers`, `client.transactions`, `client.capital`, `client.cashOutApi`, `client.dynamicOffers`, `client.grantsApi`, `client.sessionAuthentication`, `client.legalEntities`, `client.transferInstruments`, `client.businessLinesApi`, `client.documents`, `client.termsOfService`, `client.pciQuestionnaires`, `client.taxEDeliveryConsent`, `client.hostedOnboarding`, `client.hostedOnboardingPage`, `client.pciComplianceQuestionnairePage`, `client.iDealProfiles`, `client.accountVerification`, `client.disputeAttachments`, `client.raiseDisputes`, `client.paymentsApp` — and their classes are exported only for their merged namespaces and for `instanceof`; their constructors take engine internals that are not exported, so reach a resource only through its getter. 18 operations are methods on the client itself.

All `ClientOptions` fields (source: `src/client-options.ts`; every field is `readonly`):

| Field | Type | Default |
| --- | --- | --- |
| `serverOptions` | the server's base-URL and template-variable overrides | `{}` — the resolver merges the declared defaults in |
| `retry` | `RetryOptions` | the `RetryOptions` defaults below |
| `logging` | `LoggingOptions` | off — the `LoggingOptions` defaults below |
| `fetch` | `FetchLike \| undefined` | the global `fetch`, resolved by the transport |
| `apiKeyAuth` | `TokenProvider \| undefined` | unset |
| `basicAuth` | `BasicAuthCredentials \| undefined` | unset |
| `clientKey` | `TokenProvider \| undefined` | unset |

The 3 auth fields are all optional, and an unset one is not an error — the operation that wanted it simply sends no credential. What each one puts on the wire, and which operations require it, are under Servers & auth.

When no `fetch` is reachable the **constructor** throws `ConfigurationError`, not the first call.

`RetryOptions` fields (source: `src/core/retry.ts`; exported from `adyen` as a type). Every field is optional, so pass only the fields you change — each one left out takes its default:

| Field | Type | Default |
| --- | --- | --- |
| `timeout` | `number` (ms) | `60_000` |
| `statusCodesToRetry` | `readonly number[]` | `[408, 429, 500, 502, 503, 504]` |
| `httpMethodsToRetry` | `readonly HttpMethod[]` | `["GET", "HEAD", "PUT", "OPTIONS"]` |
| `maxRetries` | `number` | `3` |
| `delay` | `number` (ms) | `1000` |
| `backoffFactor` | `number` | `2` |
| `useExponentialBackoff` | `boolean` | `true` |
| `maxJitter` | `number` (a fraction, `0` to `1`) | `0.25` |
| `onRetry` | `((attempt: RetryAttempt) => void) \| undefined` | unset |

`retry: { maxRetries: 0 }` turns retries off.

A call may override three of these through `RequestOptions.retry`, typed `RequestRetryOptions`: `maxRetries`, `timeout` and `statusCodesToRetry`.

Retry types named by the fields above — public members with their **declared types**, verbatim from source; every member is `readonly`, and both are exported as types:

| Type | Public members | Source |
| --- | --- | --- |
| `RetryAttempt` — the `onRetry` callback argument | `attemptNumber: number` · `delay: number` · `reason: RetryReason` | `src/core/retry.ts` |
| `RetryReason` — narrow on `kind` | `{ kind: "status"; status: number; headers: Headers }` or `{ kind: "fault"; error: ConnectionError \| TimeoutError }`, the two retryable leaves of `AdyenError` | `src/core/retry.ts` |

`LoggingOptions` fields (source: `src/core/logging.ts`; exported from `adyen` as a type). Every field is optional, so pass only the fields you change — each one left out takes its default:

| Field | Type | Default |
| --- | --- | --- |
| `logger` | `Logger` | `console` |
| `level` | `LogLevel` — `"off" \| "error" \| "warn" \| "info" \| "debug"` | `"off"`; `"debug"` when `logger` is set |
| `logRequestHeaders` | `boolean` | `false` |
| `logResponseHeaders` | `boolean` | `false` |
| `logRequestBody` | `boolean` | `false` |
| `bodySizeLimit` | `number` (bytes of UTF-8) | `32_768` |
| `loggableContentTypes` | `readonly string[]` | `["application/json", "application/x-www-form-urlencoded"]` |
| `redactedHeaders` | `readonly string[]` | `[]` |
| `unmaskHeaders` | `readonly string[]` | `[]` |
| `redactedKeys` | `readonly string[]` | `["sig", "signature", "access_token", "apikey", "api_key", "client_secret", "password", "refresh_token", "code", "assertion", "client_assertion"]` |
| `redactionPlaceholder` | `string` | `"***"` |

A call may override one of these through `RequestOptions.logging`, typed `RequestLoggingOptions`: `level`.

Logging types named by the fields above — their **declared types**, verbatim from source; both are exported as types:

| Type | Public members | Source |
| --- | --- | --- |
| `Logger` — the `logger` field | `error(message: string, details: LogDetails): void` · `warn(message: string, details: LogDetails): void` · `info(message: string, details: LogDetails): void` · `debug(message: string, details: LogDetails): void` | `src/core/logging.ts` |
| `LogDetails` — narrow on `event` | `HttpRequestDetails \| RequestHeadersDetails \| RequestBodyDetails \| HttpResponseDetails \| ResponseHeadersDetails \| HttpRetryingDetails \| HttpFailedDetails`, each exported as a type | `src/core/logging.ts` |

**`ClientOptions.fetch` is the one transport extension point** — there are no hooks, no middleware and no interceptors, so a proxy, a custom agent and extra headers all go here. The SDK calls a replacement with one argument, the `Request` of the attempt, and no `init`. A replacement **must forward that `Request`, or its `signal`,** to whatever actually performs the request. Drop the signal and both the per-call signal and `retry.timeout` go inert — the call neither aborts nor times out. To add a header, copy the `Request` with `new Request(request)` and set it on the copy's `headers`: passing `{ headers }` to the copy replaces every header the SDK set rather than adding to them. A replacement may reject with an error of its own when that signal aborts; the SDK reads the `reason` of the signal it built the `Request` with to tell the deadline's `TimeoutError` from an abort of `RequestOptions.signal`, so a timeout is still retried, and an abort still rejects with the caller's own `reason`.

**Cancellation.** The `signal` on `RequestOptions` is the per-request cancellation surface. Aborting rejects with the signal's **own `reason`** — whatever you passed to `abort()`, or the platform `DOMException` a bare `abort()` supplies — unwrapped, so it is **not** an `AdyenError` and a `catch` that tests the family must rethrow it. An already-aborted signal rejects immediately. The `retry.timeout` that bounded the attempt is the SDK's own and does stay in the family, as `err.kind === "timeout"`. It starts once the credential is in hand and covers the request up to its response headers — not obtaining the credential and not reading the body, which only the signal bounds, so a body that stalls after its headers holds a call with no signal until the transport gives up.

The entire per-request surface is the optional second argument of every operation:

| Type | Members | Source |
| --- | --- | --- |
| `RequestOptions` | `signal?: AbortSignal \| undefined` · `retry?: RequestRetryOptions` · `logging?: RequestLoggingOptions` | `src/core/api-request.ts` |
| `RequestRetryOptions` — `Pick<RetryOptions, "maxRetries" \| "timeout" \| "statusCodesToRetry">` | `maxRetries?: number` · `timeout?: number` · `statusCodesToRetry?: readonly number[]` | `src/core/retry.ts` |
| `RequestLoggingOptions` — `Pick<LoggingOptions, "level">` | `level?: LogLevel` | `src/core/logging.ts` |

**A per-call `retry` is merged field by field over the client's resolved policy**, so `{ retry: { maxRetries: 0 } }` changes that one field for that one call and leaves every other call alone.

**Not on this SDK.** These are absent by design, not undocumented. This table ships with `src/core/` and is versioned with it.

| You might reach for | Reality |
| --- | --- |
| hooks, middleware, interceptors, `onRequest`/`onResponse` | none. `fetch` is the one transport extension point |
| pagination, `for await`, auto-paging helpers | no operation is paginated and nothing is async-iterable |
| SSE, `text/event-stream` | no event streams. Every decoder reads the body to completion, bar a binary success, which hands its stream over unread |
| multipart <em>responses</em>, XML bodies | none. A multipart reply is not decoded and an XML body is not sent — an operation declaring either is still emitted, with no body to supply or read |
| per-request `headers`, `baseUrl`, idempotency key | none. `RequestOptions` is `{ signal, retry, logging }`; a header, a base URL and a caller-supplied idempotency key are not on it |
| the raw `fetch` `Response` | deliberately unreachable. `status` and `headers` are on `asApiResult()` and on a thrown `ResponseError` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**, and every **operational** failure belongs to **one family**: `AdyenError`, a union over six leaves, so one `instanceof AdyenError` sees all of them. It is not the whole escape set — four throwables sit outside it, enumerated below. Every leaf names the call it raised — `err.method` and `err.uri` — and `message` opens with that name. `instanceof` is reliable **within one dialect**: a process that loads both — `import` in one file, `require` in another — gets two independent copies of every error class, and `instanceof` across that boundary is `false`. Narrow on `err.kind` there, or on `err.name`, which is stable across copies.

Core types (public members with their declared types; all are `readonly`):

| Type | Public members | Source |
| --- | --- | --- |
| `AdyenError` (declared as `CoreError`) | `kind: ErrorKind` · `method: HttpMethod` · `uri: string` · `message` · `cause` — the union every failure below belongs to | `src/core/errors.ts` |
| `ResponseError` | the rung the server answered on, `ApiError \| DecodeError`; adds `status: number` · `headers: Headers` | `src/core/errors.ts` |
| `ApiError` | `kind: "api"` · `payload` — the open arm, whose `kind` is `string`. **Not generic**: a typed operation's subclass redeclares `payload` with its own literal arms | `src/core/api-error.ts` |
| `TimeoutError` | `kind: "timeout"` · `timeout: number` | `src/core/errors.ts` |
| `DecodeError`, `EncodeError`, `ConnectionError`, `AuthError` | their `kind`, and nothing beyond the two rows above | `src/core/errors.ts` |
| `Declared<K, B>` | `kind: K` · `body: B` | `src/core/api-error.ts` |
| `ErrorPayload<P>` | `P` or `{ kind: "undeclared"; rawBody: ArrayBuffer }` | `src/core/api-error.ts` |
| `Undeclared` | `kind: "undeclared"` · `rawBody: ArrayBuffer` — the always-present arm, carrying the untouched bytes of a status the spec does not describe | `src/core/api-error.ts` |
| `ApiResult<T, E>` | on success `{ ok: true; status; headers; value: T }`, on failure `{ ok: false; status; headers; message: string; method: HttpMethod; uri: string; payload: ErrorPayload<P> }` — the failure branch carries the error's own members, never the error object | `src/core/api-promise.ts` |

`AdyenError` and `ResponseError` are each a **type and a value**: the type is the union, the value is the abstract class every leaf extends, so `instanceof` and `err.kind` select the same set. Neither can be constructed or extended. `uri` is the absolute URL the call dialled, with the server variables expanded and the path parameters filled. It carries no query, fragment or userinfo, so no query parameter reaches it, the `clientKey` credential included. One failure names an unresolved URI: a path parameter rejected by its schema arrives as an `EncodeError` whose `uri` still shows the unfilled `{braces}` — an `undefined` one included, since a path parameter is always required, so its schema rejects it first.

`ErrorKind` is closed, so a `switch` over `err.kind` is exhaustive:

| `err.kind` | What happened | Adds |
| --- | --- | --- |
| `"api"` | the API answered with an error status | `status` · `headers` · `payload` |
| `"decode"` | the answer could not be turned into the declared value — the body was not JSON, failed its schema, arrived where none is declared, or died mid-read after the response line; `cause` carries the underlying failure | `status` · `headers` |
| `"encode"` | a request value did not match its declared type, so **nothing was sent**. `cause` is the `SchemaError` that rejected it | — |
| `"connection"` | `fetch` rejected before a response line arrived | — |
| `"timeout"` | `ClientOptions.retry.timeout` elapsed. `timeout` is the budget that ran out | `timeout` |
| `"auth"` | a credential could not be **obtained**, per the paragraph below | — |

**Four throwables sit outside the family**, so `instanceof AdyenError` is `false` on each and a `catch` that tests it has to rethrow what is left. `ConfigurationError` comes out of the **`AdyenClient` constructor**, synchronously and before any `ApiPromise` exists: no reachable `fetch`, a `basicAuth.username` containing a colon (invalid per RFC 7617 §2, because the first colon separates user-id from password), or a `ClientOptions.retry` or `ClientOptions.logging` whose reads throw. One call can reject with it too: a `RequestOptions.retry` or `RequestOptions.logging` whose reads throw. Either way the failed read is on `cause`. `SchemaError` is what a codec throws when called directly — `achDirectDebitSchema.decode(json)` — so it names no call; through an operation the same failure arrives one level down, on `DecodeError.cause` or `EncodeError.cause`, and a `serverOptions` override whose value is not a string raises it from the constructor too. Bugs stay outside the family and reach you raw — an unparseable `baseUrl` is a `TypeError`. And a caller abort arrives as the signal's own `reason`, unwrapped. The first two are exported from the package root; the other two are not ours to export.

**`AuthError` is about obtaining a credential, never about being refused one** — every configured branch of an alternatives requirement failing. A 401 *from the API* is an `ApiError` like any other status. A 401 does have one auth consequence: it invalidates whatever that operation's scheme had cached, so the **next** call re-acquires. An alternatives requirement **falls through**: a configured scheme that throws is not the end of it, the next configured one is tried, and only when all of them have failed does it throw. When exactly one was configured, its failure surfaces as it would from that scheme alone. Otherwise it is an `AuthError` whose `cause` is an `AggregateError` holding what each branch threw, in the order tried. Cancellation is the exception: an abort or a timeout escapes immediately rather than being collected.

```ts
try {
  const response = await client.payments.postAuthorise({
    body: {
      accountInfo: { accountCreationDate: new Date(Date.UTC(2019, 0, 17, 12, 42, 40)) },
      amount: { currency: "USD", value: 1500 },
      billingAddress: {
        city: "New York",
        country: "US",
        houseNumberOrName: "37C",
        postalCode: "10039",
        stateOrProvince: "NY",
        street: "Redwood Block",
      },
      browserInfo: {
        acceptHeader: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        colorDepth: 24,
        javaEnabled: false,
        language: "en",
        screenHeight: 723,
        screenWidth: 1536,
        timeZoneOffset: 0,
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
      },
      card: {
        cvc: "737",
        expiryMonth: "03",
        expiryYear: "2030",
        holderName: "John Smith",
        number: "4917610000000000",
      },
      merchantAccount: "YOUR_MERCHANT_ACCOUNT",
      reference: "YOUR_REFERENCE_NUMBER",
      shopperEmail: "s.hopper@test.com",
      shopperIp: "192.0.2.1",
      threeDs2RequestData: {
        deviceChannel: "browser",
        notificationUrl: "https://www.example.com/YOUR_3DS_NOTIFICATION_URL",
      },
    },
  });
} catch (err) {
  if (err instanceof AdyenError) {
    switch (err.kind) {
      case "api":
        // TODO: the API answered with an error status — read err.status and err.payload
        break;
      case "decode":
        // TODO: the answer did not fit the spec — read err.status and err.cause
        break;
      case "encode":
        // TODO: nothing was sent — err.cause is the SchemaError that rejected the value
        break;
      case "connection":
      case "timeout":
      case "auth":
        // TODO: no response was produced — err.kind says which
        break;
    }
  } else {
    throw err;
  }
}
```

**Narrowing the payload.** A typed subclass declares its arms as literals, so `switch (err.payload.kind)` narrows `payload.body` to exactly one model. The `kind` is named after the arm's **body**, *not* its status code: a body that references a model takes that model's name in lower camel, any other body `error{Status}`, and a second arm that would land on the same name takes a numeric suffix. On the base `ApiError` — what an operation with no declared error bodies rejects with — `payload.kind` is `string`, so comparing it to `"undeclared"` narrows **nothing**: use `"rawBody" in err.payload`. Which arms an operation declares, with the status each covers, is the **Error arms** bullet on its page below.

**Matcher precedence** for a subclass with several arms, in three passes: an exact numeric status is looked up across the whole table **first**, then the first covering `[lo, hi]` range, and last a `"default"` arm where the spec declared one. A body that does not fit the arm it matched is a `DecodeError` — except on `"default"`, which describes no status in particular and so **degrades to the `"undeclared"` arm** rather than throwing.

**The non-throwing form exists on every operation.** `.asApiResult()` returns `ApiResult<T, E>` and does **not** reject for an HTTP error status — every other failure still rejects, `DecodeError` included, so the `catch` stays. It must be called on the value the operation returned: `ApiPromise` overrides `Symbol.species`, so `.then()`, `.catch()` and `.finally()` hand back a plain `Promise` and the method is gone.

```ts
try {
  const result = await client.payments.postAuthorise({
    body: {
      accountInfo: { accountCreationDate: new Date(Date.UTC(2019, 0, 17, 12, 42, 40)) },
      amount: { currency: "USD", value: 1500 },
      billingAddress: {
        city: "New York",
        country: "US",
        houseNumberOrName: "37C",
        postalCode: "10039",
        stateOrProvince: "NY",
        street: "Redwood Block",
      },
      browserInfo: {
        acceptHeader: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        colorDepth: 24,
        javaEnabled: false,
        language: "en",
        screenHeight: 723,
        screenWidth: 1536,
        timeZoneOffset: 0,
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
      },
      card: {
        cvc: "737",
        expiryMonth: "03",
        expiryYear: "2030",
        holderName: "John Smith",
        number: "4917610000000000",
      },
      merchantAccount: "YOUR_MERCHANT_ACCOUNT",
      reference: "YOUR_REFERENCE_NUMBER",
      shopperEmail: "s.hopper@test.com",
      shopperIp: "192.0.2.1",
      threeDs2RequestData: {
        deviceChannel: "browser",
        notificationUrl: "https://www.example.com/YOUR_3DS_NOTIFICATION_URL",
      },
    },
  }).asApiResult();
  // TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
  if (result.ok) {
    // TODO: Use 'result.value' — what this operation resolves to
  } else {
    // TODO: Use 'result.message', 'result.method' and 'result.uri', and narrow 'result.payload'
  }
} catch (err) {
  if (err instanceof AdyenError) {
    // TODO: no error status was produced — err.kind says which failure this is
  } else {
    throw err;
  }
}
```

`result.payload` is the same `ErrorPayload<P>` a thrown `ApiError` carries on `err.payload`, and `result.message`, `result.method` and `result.uri` are that error's own members — so the **Error arms** bullet on an operation's page enumerates the payload either way, and the `catch` above it is for the rest of the family. `result.method` and `result.uri` are named on this map alone.

Of **449 operations**, **420** declare typed error bodies and **29** reject with the base `ApiError`, whose payload is always the `"undeclared"` arm.

---

## Operations — by resource (93 groups, 449 operations)

Each page below carries one block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire**, **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms**, then a **Fields** table mapping every request field to the channel it travels on, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions. With `api-reference.md` documenting operations only, that table is the route from an operation to the file declaring what it takes.

**Each block states what is specific to its operation. Everything in the table below holds for EVERY operation unless that operation says otherwise, so a block silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A block departs from it only by |
| --- | --- | --- |
| **Call shape `op(request, options?)`** — one flat request object first, the per-call options second. There is no positional overload. What the second argument carries is a `signal`, a `retry` override and a log level; a per-call base URL, header or auth override does not exist | here, Getting a client | never — it always holds |
| **The request object is flat and channel-blind.** A field named `body` *is* the whole request body; every other field is fanned out to path, query, header or form by the SDK. Nothing in the object is nested by channel | here | never — the **Fields** table `Channel` column always resolves it |
| **Throw-based, returning `ApiPromise<T, E>`.** `await` it for `T`; call `.asApiResult()` on the returned value for the non-throwing `ApiResult<T, E>`. No operation is result-only | here, Error-handling model | never |
| **`E` is the base `ApiError`** and the payload is always the `"undeclared"` arm | Error-handling model | the spec declared error bodies — the **Error** bullet names a subclass and an **Error arms** bullet gives each arm's tag, status and body |
| **The request body and its media type are stated on every block**, by a **Request body** bullet that is never omitted. `none` means no body **and no `Content-Type` header**, and a named media type means the body is **required** — the request type's field is not optional | here | the spec declared the body optional — the bullet adds **Optional**, the field is `field?:`, and omitting it sends no body and no `Content-Type` header at all |
| **Resolves once, to one whole value** — except a binary body, which resolves to a stream the caller reads. No pagination, no SSE, no async iterables and no partial results | here, Not on this SDK | never at this SDK version |
| **Six identity headers ride every request** — `User-Agent`, `X-APIMatic-Lang`, `X-APIMatic-Package-Version`, `X-APIMatic-Gen-Version`, `X-APIMatic-OS` and `X-APIMatic-Runtime`. They identify the generated SDK, so **no option configures them** | here | the operation declared a header of the same name — the operation's layer is folded after the client's, so its value wins |
| **A fresh `Idempotency-Key` rides every non-GET call that does not declare that header itself**, minted per call in the operation's own header layer. It makes a *replayed* request safe, not a repeated one — a value that changes per call deduplicates nothing, so it is no substitute for a key the API documents. **No option sets it**, and once minted it is always sent — a runtime with no `crypto` global mints it from `Math.random` mixed with the clock and a per-process counter | here | the operation is a GET, or declared that header itself — then its own value stands and nothing is minted |
| **Server group `default`** | here, Servers & auth | the operation is on another group — its block carries a **Server** bullet |
| **Every operation states its auth requirement**, by an **Auth** bullet that is never omitted — one scheme, a composition over schemes, or `none` for a public operation | here, Servers & auth | never — the bullet is always present |
| **Every value is schema-encoded before the request is built** — a wrong type or format rejects and nothing is sent. **An omitted field that has a default is still sent, with that default**, filled by the SDK rather than by the server | here | the field has a default — it appears in the **Fields** table `Default` column |
| **Field names are TypeScript camelCase and the wire name is the same** | here | some field differs — the **Fields** table gains a `Wire` column, where an em dash means "same as the field name" |
| **Arrays repeat their key and objects bracket-expand** | the serialization block below | never — this SDK declares no per-field serialization style, so every array takes this one |

**Wire serialization, once, for every channel** (source: `src/core/param-value.ts`, `src/core/url.ts`, `src/core/headers.ts`, `src/core/params.ts`). This block ships with `src/core/` and is versioned with it:

- **`path`** takes no style. An array is comma-joined with each element percent-encoded **separately**; an object becomes one percent-encoded JSON document inside the segment. A field whose encoded value is `undefined` throws `TypeError` naming the unfilled placeholder — a guard no operation reaches, since a path parameter is always required and its schema rejects `undefined` first, as an `EncodeError`; `null` collapses the segment.
- **`header`** takes no style. An array is comma-joined un-encoded (OpenAPI `simple`). `undefined` says nothing, while `null` and an empty array are tombstones that remove the header. Later layers win by **lowercased** name, in the order body content type, then client defaults, then operation.
- **`query`** and **`form`** repeat an array's key and bracket-expand an object at any depth (`filter[status]=open`, `ranges[amount][min]=10`). An array of *objects* bracket-expands per element with **no index**, so element boundaries collapse.
- Nullish **fields** are dropped from every channel except `path`, where `null` collapses the segment. A nullish array **element** is dropped, so an all-nullish array emits no key at all.
- `form` bodies use RFC 1866 encoding (space becomes `+`); `query` uses `%20`. On the wire both key and value go through `encodeURIComponent`, plus a further escape of `!`, `'`, `(`, `)` and `*`.

**The verb and route are on the pages below**, where a map for a language whose method names are derived from the route can leave them to the source. A TypeScript method name carries none of it, and a `path` field row is unreadable without the route template it fills.

**Endpoint prose is not on this map.** Where the *semantics* of an operation decide what you must pass — a field whose value changes server-side behaviour, an ordering or exclusivity rule between fields — read `api-reference.md`, whose entries are keyed by the same signature these pages print. Blocks here give you the contract: names, channels, types, defaults, errors.

| Resource (`client.X`) | Ops | Page |
| --- | --- | --- |
| `client` (ungrouped) | 18 | [map/operations/client.md](map/operations/client.md) |
| `payments` | 14 | [map/operations/payments.md](map/operations/payments.md) |
| `donations` | 2 | [map/operations/donations.md](map/operations/donations.md) |
| `paymentLinks` | 3 | [map/operations/payment-links.md](map/operations/payment-links.md) |
| `modifications` | 14 | [map/operations/modifications.md](map/operations/modifications.md) |
| `recurringApi` | 4 | [map/operations/recurring-api.md](map/operations/recurring-api.md) |
| `orders` | 3 | [map/operations/orders.md](map/operations/orders.md) |
| `utility` | 4 | [map/operations/utility.md](map/operations/utility.md) |
| `general` | 41 | [map/operations/general.md](map/operations/general.md) |
| `initialization` | 3 | [map/operations/initialization.md](map/operations/initialization.md) |
| `reviewing` | 2 | [map/operations/reviewing.md](map/operations/reviewing.md) |
| `instantPayouts` | 1 | [map/operations/instant-payouts.md](map/operations/instant-payouts.md) |
| `rates` | 1 | [map/operations/rates.md](map/operations/rates.md) |
| `accountCompanyLevel` | 3 | [map/operations/account-company-level.md](map/operations/account-company-level.md) |
| `accountMerchantLevel` | 4 | [map/operations/account-merchant-level.md](map/operations/account-merchant-level.md) |
| `accountStoreLevel` | 8 | [map/operations/account-store-level.md](map/operations/account-store-level.md) |
| `payoutSettingsMerchantLevel` | 5 | [map/operations/payout-settings-merchant-level.md](map/operations/payout-settings-merchant-level.md) |
| `usersCompanyLevel` | 4 | [map/operations/users-company-level.md](map/operations/users-company-level.md) |
| `usersMerchantLevel` | 4 | [map/operations/users-merchant-level.md](map/operations/users-merchant-level.md) |
| `myApiCredential` | 6 | [map/operations/my-api-credential.md](map/operations/my-api-credential.md) |
| `apiCredentialsCompanyLevel` | 4 | [map/operations/api-credentials-company-level.md](map/operations/api-credentials-company-level.md) |
| `apiCredentialsMerchantLevel` | 4 | [map/operations/api-credentials-merchant-level.md](map/operations/api-credentials-merchant-level.md) |
| `apiKeyCompanyLevel` | 1 | [map/operations/api-key-company-level.md](map/operations/api-key-company-level.md) |
| `apiKeyMerchantLevel` | 1 | [map/operations/api-key-merchant-level.md](map/operations/api-key-merchant-level.md) |
| `clientKeyCompanyLevel` | 1 | [map/operations/client-key-company-level.md](map/operations/client-key-company-level.md) |
| `clientKeyMerchantLevel` | 1 | [map/operations/client-key-merchant-level.md](map/operations/client-key-merchant-level.md) |
| `allowedOriginsCompanyLevel` | 4 | [map/operations/allowed-origins-company-level.md](map/operations/allowed-origins-company-level.md) |
| `allowedOriginsMerchantLevel` | 4 | [map/operations/allowed-origins-merchant-level.md](map/operations/allowed-origins-merchant-level.md) |
| `webhooksCompanyLevel` | 7 | [map/operations/webhooks-company-level.md](map/operations/webhooks-company-level.md) |
| `webhooksMerchantLevel` | 7 | [map/operations/webhooks-merchant-level.md](map/operations/webhooks-merchant-level.md) |
| `paymentMethodsMerchantLevel` | 6 | [map/operations/payment-methods-merchant-level.md](map/operations/payment-methods-merchant-level.md) |
| `terminalsTerminalLevel` | 2 | [map/operations/terminals-terminal-level.md](map/operations/terminals-terminal-level.md) |
| `terminalActionsCompanyLevel` | 2 | [map/operations/terminal-actions-company-level.md](map/operations/terminal-actions-company-level.md) |
| `terminalActionsTerminalLevel` | 1 | [map/operations/terminal-actions-terminal-level.md](map/operations/terminal-actions-terminal-level.md) |
| `terminalOrdersCompanyLevel` | 10 | [map/operations/terminal-orders-company-level.md](map/operations/terminal-orders-company-level.md) |
| `terminalOrdersMerchantLevel` | 10 | [map/operations/terminal-orders-merchant-level.md](map/operations/terminal-orders-merchant-level.md) |
| `terminalSettingsCompanyLevel` | 4 | [map/operations/terminal-settings-company-level.md](map/operations/terminal-settings-company-level.md) |
| `terminalSettingsMerchantLevel` | 4 | [map/operations/terminal-settings-merchant-level.md](map/operations/terminal-settings-merchant-level.md) |
| `terminalSettingsStoreLevel` | 8 | [map/operations/terminal-settings-store-level.md](map/operations/terminal-settings-store-level.md) |
| `terminalSettingsTerminalLevel` | 4 | [map/operations/terminal-settings-terminal-level.md](map/operations/terminal-settings-terminal-level.md) |
| `androidFilesCompanyLevel` | 6 | [map/operations/android-files-company-level.md](map/operations/android-files-company-level.md) |
| `splitConfigurationMerchantLevel` | 9 | [map/operations/split-configuration-merchant-level.md](map/operations/split-configuration-merchant-level.md) |
| `donationCampaigns` | 6 | [map/operations/donation-campaigns.md](map/operations/donation-campaigns.md) |
| `accountHolders` | 16 | [map/operations/account-holders.md](map/operations/account-holders.md) |
| `accounts` | 3 | [map/operations/accounts.md](map/operations/accounts.md) |
| `verification` | 8 | [map/operations/verification.md](map/operations/verification.md) |
| `balancesOverview` | 2 | [map/operations/balances-overview.md](map/operations/balances-overview.md) |
| `balanceTransfers` | 1 | [map/operations/balance-transfers.md](map/operations/balance-transfers.md) |
| `platform` | 3 | [map/operations/platform.md](map/operations/platform.md) |
| `balanceAccounts` | 5 | [map/operations/balance-accounts.md](map/operations/balance-accounts.md) |
| `balances` | 5 | [map/operations/balances.md](map/operations/balances.md) |
| `managedPayoutSchedules` | 8 | [map/operations/managed-payout-schedules.md](map/operations/managed-payout-schedules.md) |
| `customPayoutSchedulesSweeps` | 5 | [map/operations/custom-payout-schedules-sweeps.md](map/operations/custom-payout-schedules-sweeps.md) |
| `authorizedCardUsers` | 4 | [map/operations/authorized-card-users.md](map/operations/authorized-card-users.md) |
| `recurringTopUps` | 4 | [map/operations/recurring-top-ups.md](map/operations/recurring-top-ups.md) |
| `paymentInstruments` | 9 | [map/operations/payment-instruments.md](map/operations/payment-instruments.md) |
| `paymentInstrumentGroups` | 3 | [map/operations/payment-instrument-groups.md](map/operations/payment-instrument-groups.md) |
| `transactionRules` | 4 | [map/operations/transaction-rules.md](map/operations/transaction-rules.md) |
| `bankAccountValidation` | 1 | [map/operations/bank-account-validation.md](map/operations/bank-account-validation.md) |
| `networkTokens` | 2 | [map/operations/network-tokens.md](map/operations/network-tokens.md) |
| `grantAccounts` | 2 | [map/operations/grant-accounts.md](map/operations/grant-accounts.md) |
| `grantOffersApi` | 4 | [map/operations/grant-offers-api.md](map/operations/grant-offers-api.md) |
| `cardOrders` | 2 | [map/operations/card-orders.md](map/operations/card-orders.md) |
| `directDebitMandates` | 4 | [map/operations/direct-debit-mandates.md](map/operations/direct-debit-mandates.md) |
| `manageCardPin` | 3 | [map/operations/manage-card-pin.md](map/operations/manage-card-pin.md) |
| `transferRoutes` | 1 | [map/operations/transfer-routes.md](map/operations/transfer-routes.md) |
| `scaDeviceManagement` | 4 | [map/operations/sca-device-management.md](map/operations/sca-device-management.md) |
| `transferLimitsBalanceAccountLevel` | 6 | [map/operations/transfer-limits-balance-account-level.md](map/operations/transfer-limits-balance-account-level.md) |
| `transferLimitsBalancePlatformLevel` | 4 | [map/operations/transfer-limits-balance-platform-level.md](map/operations/transfer-limits-balance-platform-level.md) |
| `manageScaDevices` | 6 | [map/operations/manage-sca-devices.md](map/operations/manage-sca-devices.md) |
| `scaAssociationManagement` | 3 | [map/operations/sca-association-management.md](map/operations/sca-association-management.md) |
| `transfers` | 6 | [map/operations/transfers.md](map/operations/transfers.md) |
| `transactions` | 2 | [map/operations/transactions.md](map/operations/transactions.md) |
| `capital` | 3 | [map/operations/capital.md](map/operations/capital.md) |
| `cashOutApi` | 1 | [map/operations/cash-out-api.md](map/operations/cash-out-api.md) |
| `dynamicOffers` | 3 | [map/operations/dynamic-offers.md](map/operations/dynamic-offers.md) |
| `grantsApi` | 6 | [map/operations/grants-api.md](map/operations/grants-api.md) |
| `sessionAuthentication` | 2 | [map/operations/session-authentication.md](map/operations/session-authentication.md) |
| `legalEntities` | 7 | [map/operations/legal-entities.md](map/operations/legal-entities.md) |
| `transferInstruments` | 4 | [map/operations/transfer-instruments.md](map/operations/transfer-instruments.md) |
| `businessLinesApi` | 4 | [map/operations/business-lines-api.md](map/operations/business-lines-api.md) |
| `documents` | 4 | [map/operations/documents.md](map/operations/documents.md) |
| `termsOfService` | 5 | [map/operations/terms-of-service.md](map/operations/terms-of-service.md) |
| `pciQuestionnaires` | 5 | [map/operations/pci-questionnaires.md](map/operations/pci-questionnaires.md) |
| `taxEDeliveryConsent` | 2 | [map/operations/tax-edelivery-consent.md](map/operations/tax-edelivery-consent.md) |
| `hostedOnboarding` | 3 | [map/operations/hosted-onboarding.md](map/operations/hosted-onboarding.md) |
| `hostedOnboardingPage` | 1 | [map/operations/hosted-onboarding-page.md](map/operations/hosted-onboarding-page.md) |
| `pciComplianceQuestionnairePage` | 1 | [map/operations/pci-compliance-questionnaire-page.md](map/operations/pci-compliance-questionnaire-page.md) |
| `iDealProfiles` | 3 | [map/operations/ideal-profiles.md](map/operations/ideal-profiles.md) |
| `accountVerification` | 2 | [map/operations/account-verification.md](map/operations/account-verification.md) |
| `disputeAttachments` | 4 | [map/operations/dispute-attachments.md](map/operations/dispute-attachments.md) |
| `raiseDisputes` | 4 | [map/operations/raise-disputes.md](map/operations/raise-disputes.md) |
| `paymentsApp` | 5 | [map/operations/payments-app.md](map/operations/payments-app.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every module under `src/models/` declares exactly one model type and the schema value beside it, and both are re-exported from the package root. Take the pair from an operation's **Type sources** table, or build the directory from the kind below. **Do not derive the path from the type name** — the transform is not reversible in general, and the table is the authority. Never grep for a type.

| Group | Count | Directory |
| --- | --- | --- |
| Objects (plain `type`, no class) | 2046 | `src/models/` |
| Enums (open; const companion plus schema) | 522 | `src/models/` |
| Unions | 21 | `src/models/unions/` |
| Typed error classes (`ApiError` subclass, one per typed operation) | 420 | `src/resources/`, in the declaring module's namespace |

Conventions: every model is a plain `type`, not a class — build one with an object literal; there is no constructor and no builder. `f: T` is required, `f?: T` is optional (omit the key), and `f: T | null` is a **required, nullable** field where `null` is a value distinct from an omitted key. Optional properties are declared `f?: T`, not `f?: T | undefined`, so under `exactOptionalPropertyTypes` you must **omit or spread** an absent field rather than assign `undefined` to it. A schema value is directly usable both ways: `Schema<T, W = Encoded<T>>` is `{ decode(v: unknown): T; encode(v: unknown): W }`, and `Encoded<T>` is the wire projection — a `Date` becomes `string | number`, a `Uint8Array` becomes a base64 `string`, recursing through arrays and objects. `EnumSchema<T>` adds `readonly values: readonly T[]`, so an enum's known set is testable at run time. Enums are **not** TypeScript `enum`s and are open: a `const` companion plus a union that includes `(string & {})` or `(number & {})`, so **any** value of the base type is assignable and the schema validates the base type only, never membership — read the member names and the values they send off the companion, and use `.values` to test membership yourself. A discriminated union is narrowed with an exhaustive `switch` on its tag, with no fallback arm and no type guard to import; one without a discriminant is narrowed on the shape of its arms, which its declaration spells out. A property default is filled by the SDK on **encode as well as decode**, so omitting one still sends it — read it off the `defaulted(…)` entry in the schema, or off the property's `@default`. A numeric property is a `number` whatever its format, and its schema follows the type. `type: integer` with no format, `int32` or `int64` rejects a fraction and any value outside the safe-integer range; `type: number` with no format, `float`, `double` or `bigdecimal` rejects a non-finite value. A property's wire name is its `_keysMap` entry in the schema and may differ from the TypeScript name — read it there rather than deriving it. A named spec schema whose resolved form is a bare container, or which is used only as a form-encoded body, gets no model file and no exported name: the first is written inline at each use site, the second is flattened onto the operation's request type, one field per property, so read that field list from the request type.

Every name comes from the package root — there is no default export, and no deep imports:

```ts
import { type AchDirectDebit, achDirectDebitSchema } from "adyen";
```

---

## Servers & auth

**Authentication is per operation.** Every operation declares the requirement it enforces and the SDK sends exactly that: **364 of the 449 operations** require a credential and **85** are public. Each block on a page above carries an **Auth** bullet naming its requirement, `none` included. There is no client-global switch and no per-call override.

| Scheme (as an **Auth** bullet names it) | Configured with | What the SDK sends |
| --- | --- | --- |
| `apiKeyAuth` | `apiKeyAuth` | header `X-API-Key: <key>` |
| `basicAuth` | `basicAuth: { username, password }` | `Authorization: Basic <base64 of username:password>`, UTF-8 |
| `clientKey` | `clientKey` | query `clientKey=<key>` |

A scheme **contributes** headers, query parameters and cookies rather than mutating the request, so a credential is encoded by exactly the code that encodes an operation's own parameters. The auth layer goes on **last**, which means a scheme's `Authorization` wins over one the operation declared.

**Composition is emitted, not configured.** Where the spec puts two schemes in one requirement the SDK sends **both**; where it lists alternatives the SDK sends the **first configured** one, in the order the **Auth** bullet prints them. The combinators that express this (`allAuth`, `anyAuth`, `noneAuth`) live in the generated resource modules and are **not exported**.

**A credential may be a function.** Every field typed `TokenProvider` is re-read on **every** request with no caching, so a key can rotate without rebuilding the client. An empty string counts as absent, and a function is treated as present without being invoked. The function is handed the call's `signal`, or one that never aborts when the call was given none, and the SDK waits for it to settle — so a function that fetches its credential should pass that signal on, or a cancelled call waits for the fetch to finish.

**An unconfigured scheme does not throw.** The request goes out without that credential and the server decides. So a 401 on a call you believed was authenticated is usually an unset credential field rather than an SDK failure — check the operation's **Auth** bullet against what the client was given.

**A 401 invalidates the cached credential.** On a **401** — 401 only, not 403 — the SDK clears whatever that operation's scheme had cached, so the *next* call re-acquires. The current request still rejects with the operation's `ApiError`. The credential fields are on `ClientOptions`.

**serverOptions.** 29 logical servers; each operation is bound to one at generation time, and a block carries a **Server** bullet only when its group is not `default`. Override `serverOptions.default`, `serverOptions.default1`, `serverOptions.default2`, `serverOptions.default3`, `serverOptions.default4`, `serverOptions.default5`, `serverOptions.default6`, `serverOptions.default7`, `serverOptions.default8`, `serverOptions.default9`, `serverOptions.default10`, `serverOptions.default11`, `serverOptions.default12`, `serverOptions.default13`, `serverOptions.default14`, `serverOptions.default15`, `serverOptions.default16`, `serverOptions.default17`, `serverOptions.default18`, `serverOptions.default19`, `serverOptions.default20`, `serverOptions.default21`, `serverOptions.default22`, `serverOptions.default23`, `serverOptions.default24`, `serverOptions.default25`, `serverOptions.default26`, `serverOptions.default27` and `serverOptions.default28`.

**Base URLs and overrides.** One row per group, and every cell is overridden at `serverOptions.<group>.<name>`, where `<name>` is `baseUrl` for the whole template or the variable name for one substitution. An override merges with the built-in defaults **key by key**.

| Group | Base URL template | Template variables (default) |
| --- | --- | --- |
| `default` | `https://checkout-test.adyen.com/v72` | — |
| `default1` | `https://pal-test.adyen.com/pal/servlet/Payment/v68` | — |
| `default2` | `https://pal-test.adyen.com/pal/servlet/Recurring/v68` | — |
| `default3` | `https://pal-test.adyen.com/pal/servlet/Payout/v68` | — |
| `default4` | `https://pal-test.adyen.com/pal/servlet/BinLookup/v54` | — |
| `default5` | `https://pal-test.adyen.com/pal/servlet/StoredValue/v46` | — |
| `default6` | `https://ca-test.adyen.com/ca/services/DataProtectionService/v1` | — |
| `default7` | `https://balanceplatform-api-test.adyen.com/fx/api/v1` | — |
| `default8` | `https://pal-test.adyen.com/pal/services/TestCard/v1` | — |
| `default9` | `https://management-test.adyen.com/v3` | — |
| `default10` | `https://cal-test.adyen.com/cal/services/Account/v6` | — |
| `default11` | `https://balance-control-test.adyen.com/balance-control/api/v2` | — |
| `default12` | `https://cal-test.adyen.com/cal/services/Notification/v6` | — |
| `default13` | `https://balanceplatform-api-test.adyen.com/bcl/v2` | — |
| `default14` | `https://balanceplatform-api-test.adyen.com/btl/v4` | — |
| `default15` | `https://balanceplatform-api-test.adyen.com/capital/v1` | — |
| `default16` | `https://cal-test.adyen.com/cal/services/Fund/v6` | — |
| `default17` | `https://test.adyen.com/authe/api/v1` | — |
| `default18` | `https://kyc-test.adyen.com/lem/v4` | — |
| `default19` | `https://cal-test.adyen.com/cal/services/Hop/v6` | — |
| `default20` | `https://balanceplatform-api-test.adyen.com/a2aissuer-api/v1` | — |
| `default21` | `https://obgateway-test.adyen.com/obgateway/v1` | — |
| `default22` | `https://ca-test.adyen.com/ca/services/DisputeService/v30` | — |
| `default23` | `https://balanceplatform-api-test.adyen.com/btl/api/v4` | — |
| `default24` | `https://device-api-test.adyen.com/v1` | — |
| `default25` | `https://softposconfig-test.adyen.com/softposconfig/v3` | — |
| `default26` | `https://management-test.adyen.com/v1` | — |
| `default27` | `https://checkout-test.adyen.com/checkout/possdk/v68` | — |
| `default28` | `https://postfmapi-test.adyen.com/postfmapi/terminal/v1` | — |

A `baseUrl` override replaces the template verbatim; variable values are percent-encoded into it. Server variables are filled in once, as the client is built; only the path parameters are expanded per request.

Retries are configurable via `ClientOptions.retry` (`RetryOptions`, source `src/core/retry.ts`) — the field table is under Getting a client.

---

## Runtime & packaging

The facts that change what you type, and the floors that decide whether the package loads at all. This section is the home for all of them.

|  |  |
| --- | --- |
| One entry, two dialects | `import` resolves `dist/esm`, `require` resolves `dist/commonjs`, both through the single `.` export. In a TypeScript CommonJS file the typed spelling is `import sdk = require("adyen")`; a plain `require` destructure works at run time but yields no types. `instanceof` is reliable **within** one dialect — if your app loads both, the two copies declare separate error classes |
| Consumer compiler settings | Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional rather than assigning `undefined` to it. Under `verbatimModuleSyntax`, names that carry no runtime value (the options types, every model type) must be imported with `import type` |
| Required globals, and only these | Always: `fetch` (or a replacement passed as the `fetch` option), `AbortController`, `AbortSignal.any`, `Headers`, `Request`, `URL`, `setTimeout` and `clearTimeout`, `JSON`, `BigInt`, and `console`, which is read as the package loads. Auth adds more, each reached only once the credential needing it is configured. `TextEncoder` and `btoa` build every `Authorization: Basic` value, sent on every request that authenticates with basic. `crypto.randomUUID` or `crypto.getRandomValues` mints the `Idempotency-Key` a non-GET call carries — **read and never required**, since a runtime offering neither fills the bytes from `Math.random` mixed with the clock and a per-process counter, so the header is always sent. Three more are **read and never required** — `process`, `navigator` and `EdgeRuntime`, which name the host in `X-APIMatic-OS` and `X-APIMatic-Runtime`. A runtime offering none of them sends neither header and works unchanged. `process.env.ADYEN_CLIENT_LOG` is read at most once, when the client is built and code sets neither a `logger` nor a valid `level`. Logging writes to `console` only as the default logger, and for the warning on a `ADYEN_CLIENT_LOG` value that is not a level. |
| Values that cross the boundary | `Date` for `date-time`, `string` for `date`, `ArrayBuffer` for an undeclared error body, `Headers` on a result and on a thrown `ResponseError`. The engine also carries a `bigint` int64 path and a base64 `bytes()` codec, reached only where a model uses them |
| Browser distribution | The package ships `dist/esm` and `dist/commonjs` and nothing else — **no bundle, no UMD file, no CDN artifact**. Use it through a bundler, which resolves `zod/v4-mini`, deduplicates it against your own copy and tree-shakes the rest |
| Other runtimes | Deno, Bun, Cloudflare Workers and Vercel Edge are all likely to work — the SDK needs only the globals above and imports no Node built-in — but **none of them is tested for this package**, so nothing here claims support for them |

The browser floor is set by `AbortSignal.any`, which every call uses to combine `RequestOptions.signal`, or a signal that never aborts when there is none, with the attempt's timer. The emitted output needs less: `tshy` builds at `target: ES2022`, so native `#private` fields and methods survive into `dist/`, and those load from Chrome 85, Firefox 90 and Safari 15.

| Browser | Minimum |
| --- | --- |
| Chrome / Edge | **116** |
| Firefox | **124** |
| Safari / iOS Safari | **17.4** |

Below that table the module still loads, down to the emitted-output floor, but every call rejects with a `TypeError`.

