# nano-id

[Nano ID](https://github.com/ai/nanoid) wrapper with custom functionalities

## Installation

```bash
npm i nano-id
```

## Usage

```typescript
import nano from 'nano-id';

const id = nano(); // 1s_JN-r7CQnSLbvr1be5y
const id = nano(5); // f01a2
const id = nano({ length: 10 }); // H7x1-8apXn
const id = nano({ alphabet: 'abcd' }); // cadcabadadbdbdcccacdb
const id = nano({ lookalike: false }); // Un-7-yYwIVufwbZeoCoFS
const id = nano({ symbols: '$@&€' }); // fil@A8a6gKZgWsdJ€i$YK
```

## Options

| Key       | Optional | Type              | Default     | Description                                                                            |
| --------- | -------- | ----------------- | ----------- | -------------------------------------------------------------------------------------- |
| length    | yes      | number            | _21_        | Length of the returned string                                                          |
| alphabet  | yes      | string            | _undefined_ | Custom alphabet<br>_If specified, ignore other params_                                 |
| lowercase | yes      | boolean \| string | _true_      | _true_: `abcdefghijklmnopqrstuvwxyz`<br>_false_: _disabled_<br>_string_: custom string |
| uppercase | yes      | boolean \| string | _true_      | _true_: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`<br>_false_: _disabled_<br>_string_: custom string |
| numbers   | yes      | boolean \| string | _true_      | _true_: `0123456789`<br>_false_: _disabled_<br>_string_: custom string                 |
| symbols   | yes      | boolean \| string | _true_      | _true_: `_-`<br>_false_: _disabled_<br>_string_: custom string                         |
| lookalike | yes      | boolean           | _true_      | If _false_ remove lookalike charachters:<br>`1, l, I, 0, O, o, u, v, 5, S, s, 2, Z`    |
