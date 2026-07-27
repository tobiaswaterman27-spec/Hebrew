// The Hebrew alphabet (aleph-bet) for Modern Hebrew.
// `sofit` marks the five final letter forms that appear at the end of a word.
// `name` is the letter's name; `sound` is an approximate Modern Israeli
// pronunciation guide for an English speaker.

export interface Letter {
  char: string;
  name: string;
  sound: string;
  transliteration: string;
  sofit?: boolean;
}

export const ALPHABET: Letter[] = [
  { char: 'א', name: 'Alef', sound: 'silent / carries a vowel', transliteration: "'" },
  { char: 'ב', name: 'Bet', sound: 'b as in "boy" (v without dagesh)', transliteration: 'b/v' },
  { char: 'ג', name: 'Gimel', sound: 'g as in "go"', transliteration: 'g' },
  { char: 'ד', name: 'Dalet', sound: 'd as in "door"', transliteration: 'd' },
  { char: 'ה', name: 'He', sound: 'h as in "hat"', transliteration: 'h' },
  { char: 'ו', name: 'Vav', sound: 'v as in "van"', transliteration: 'v' },
  { char: 'ז', name: 'Zayin', sound: 'z as in "zoo"', transliteration: 'z' },
  { char: 'ח', name: 'Chet', sound: 'ch as in "Bach" (guttural)', transliteration: 'kh' },
  { char: 'ט', name: 'Tet', sound: 't as in "top"', transliteration: 't' },
  { char: 'י', name: 'Yod', sound: 'y as in "yes"', transliteration: 'y' },
  { char: 'כ', name: 'Kaf', sound: 'k as in "kite" (kh without dagesh)', transliteration: 'k/kh' },
  { char: 'ך', name: 'Kaf sofit', sound: 'kh at end of a word', transliteration: 'kh', sofit: true },
  { char: 'ל', name: 'Lamed', sound: 'l as in "look"', transliteration: 'l' },
  { char: 'מ', name: 'Mem', sound: 'm as in "moon"', transliteration: 'm' },
  { char: 'ם', name: 'Mem sofit', sound: 'm at end of a word', transliteration: 'm', sofit: true },
  { char: 'נ', name: 'Nun', sound: 'n as in "noon"', transliteration: 'n' },
  { char: 'ן', name: 'Nun sofit', sound: 'n at end of a word', transliteration: 'n', sofit: true },
  { char: 'ס', name: 'Samekh', sound: 's as in "sun"', transliteration: 's' },
  { char: 'ע', name: 'Ayin', sound: 'silent / guttural (carries a vowel)', transliteration: "'" },
  { char: 'פ', name: 'Pe', sound: 'p as in "pen" (f without dagesh)', transliteration: 'p/f' },
  { char: 'ף', name: 'Pe sofit', sound: 'f at end of a word', transliteration: 'f', sofit: true },
  { char: 'צ', name: 'Tsadi', sound: 'ts as in "cats"', transliteration: 'ts' },
  { char: 'ץ', name: 'Tsadi sofit', sound: 'ts at end of a word', transliteration: 'ts', sofit: true },
  { char: 'ק', name: 'Qof', sound: 'k as in "kite"', transliteration: 'q' },
  { char: 'ר', name: 'Resh', sound: 'r as in French "rue" (uvular)', transliteration: 'r' },
  { char: 'ש', name: 'Shin', sound: 'sh as in "shoe" (s with left dot)', transliteration: 'sh/s' },
  { char: 'ת', name: 'Tav', sound: 't as in "top"', transliteration: 't' },
];
