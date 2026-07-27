// Starter Modern Hebrew vocabulary for conversation.
// `hebrew` includes nikud (vowel points) as reading aids for beginners.
// `translit` is an approximate Modern Israeli pronunciation.

export interface VocabCard {
  id: string;
  hebrew: string;
  translit: string;
  english: string;
  category: string;
}

export const VOCABULARY: VocabCard[] = [
  // Greetings & basics
  { id: 'shalom', hebrew: 'שָׁלוֹם', translit: 'shalom', english: 'hello / peace', category: 'Greetings' },
  { id: 'boker-tov', hebrew: 'בֹּקֶר טוֹב', translit: 'boker tov', english: 'good morning', category: 'Greetings' },
  { id: 'erev-tov', hebrew: 'עֶרֶב טוֹב', translit: 'erev tov', english: 'good evening', category: 'Greetings' },
  { id: 'lehitraot', hebrew: 'לְהִתְרָאוֹת', translit: 'lehitraot', english: 'goodbye / see you', category: 'Greetings' },
  { id: 'toda', hebrew: 'תּוֹדָה', translit: 'toda', english: 'thank you', category: 'Greetings' },
  { id: 'bevakasha', hebrew: 'בְּבַקָּשָׁה', translit: 'bevakasha', english: 'please / you’re welcome', category: 'Greetings' },
  { id: 'ken', hebrew: 'כֵּן', translit: 'ken', english: 'yes', category: 'Greetings' },
  { id: 'lo', hebrew: 'לֹא', translit: 'lo', english: 'no', category: 'Greetings' },
  { id: 'slicha', hebrew: 'סְלִיחָה', translit: 'slicha', english: 'excuse me / sorry', category: 'Greetings' },

  // People
  { id: 'ani', hebrew: 'אֲנִי', translit: 'ani', english: 'I', category: 'People' },
  { id: 'ata', hebrew: 'אַתָּה', translit: 'ata', english: 'you (m.)', category: 'People' },
  { id: 'at', hebrew: 'אַתְּ', translit: 'at', english: 'you (f.)', category: 'People' },
  { id: 'ish', hebrew: 'אִישׁ', translit: 'ish', english: 'man', category: 'People' },
  { id: 'isha', hebrew: 'אִשָּׁה', translit: 'isha', english: 'woman', category: 'People' },
  { id: 'yeled', hebrew: 'יֶלֶד', translit: 'yeled', english: 'boy / child', category: 'People' },
  { id: 'yalda', hebrew: 'יַלְדָּה', translit: 'yalda', english: 'girl', category: 'People' },
  { id: 'chaver', hebrew: 'חָבֵר', translit: 'chaver', english: 'friend (m.)', category: 'People' },

  // Everyday things
  { id: 'mayim', hebrew: 'מַיִם', translit: 'mayim', english: 'water', category: 'Everyday' },
  { id: 'lechem', hebrew: 'לֶחֶם', translit: 'lechem', english: 'bread', category: 'Everyday' },
  { id: 'bayit', hebrew: 'בַּיִת', translit: 'bayit', english: 'house / home', category: 'Everyday' },
  { id: 'sefer', hebrew: 'סֵפֶר', translit: 'sefer', english: 'book', category: 'Everyday' },
  { id: 'ir', hebrew: 'עִיר', translit: 'ir', english: 'city', category: 'Everyday' },
  { id: 'yom', hebrew: 'יוֹם', translit: 'yom', english: 'day', category: 'Everyday' },
  { id: 'layla', hebrew: 'לַיְלָה', translit: 'layla', english: 'night', category: 'Everyday' },
  { id: 'ochel', hebrew: 'אֹכֶל', translit: 'ochel', english: 'food', category: 'Everyday' },

  // Useful verbs & phrases
  { id: 'rotze', hebrew: 'רוֹצֶה', translit: 'rotze', english: 'want (m.)', category: 'Verbs' },
  { id: 'ohev', hebrew: 'אוֹהֵב', translit: 'ohev', english: 'love / like (m.)', category: 'Verbs' },
  { id: 'yodea', hebrew: 'יוֹדֵעַ', translit: 'yodea', english: 'know (m.)', category: 'Verbs' },
  { id: 'medaber', hebrew: 'מְדַבֵּר', translit: 'medaber', english: 'speak (m.)', category: 'Verbs' },
  { id: 'ma-shlomcha', hebrew: 'מַה שְׁלוֹמְךָ', translit: 'ma shlomcha', english: 'how are you? (m.)', category: 'Phrases' },
  { id: 'ma-hashaa', hebrew: 'מַה הַשָּׁעָה', translit: 'ma hashaa', english: 'what time is it?', category: 'Phrases' },
  { id: 'eyfo', hebrew: 'אֵיפֹה', translit: 'eyfo', english: 'where?', category: 'Phrases' },
  { id: 'kama-ze-ole', hebrew: 'כַּמָּה זֶה עוֹלֶה', translit: 'kama ze ole', english: 'how much does it cost?', category: 'Phrases' },
];
