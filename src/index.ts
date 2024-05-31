import { customAlphabet } from 'nanoid';

const LENGTH = 21;
const LOWERCASE = (lookalike: Boolean) => (lookalike ? 'abcdefghijklmnopqrstuvwxyz' : 'abcdefghijkmnpqrtwxyz');
const UPPERCASE = (lookalike: Boolean) => (lookalike ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'ABCDEFGHJKLMNPQRTUVWXY');
const NUMBERS = (lookalike: Boolean) => (lookalike ? '0123456789' : '346789');
const SYMBOLS = '_-';

export type NanoidOptions = {
  length?: number;
  alphabet?: string;
  lowercase?: boolean | string;
  uppercase?: boolean | string;
  numbers?: boolean | string;
  symbols?: boolean | string;
  lookalike?: boolean;
};

export const nano = (lengthOrOptions?: NanoidOptions | number) => {
  const length = typeof lengthOrOptions === 'number' ? lengthOrOptions : lengthOrOptions?.length || LENGTH;

  lengthOrOptions ||= {};
  const { alphabet, lowercase = true, uppercase = true, numbers = true, symbols = true, lookalike = true } = <NanoidOptions>lengthOrOptions;

  if (alphabet && typeof alphabet === 'string' && alphabet.length) return customAlphabet(alphabet, length)();

  let s = '';

  if (lowercase) s += typeof lowercase === 'string' ? lowercase : LOWERCASE(lookalike);
  if (uppercase) s += typeof uppercase === 'string' ? uppercase : UPPERCASE(lookalike);
  if (numbers) s += typeof numbers === 'string' ? numbers : NUMBERS(lookalike);
  if (symbols) s += typeof symbols === 'string' ? symbols : SYMBOLS;

  return customAlphabet(s, length)();
};

export default nano;
