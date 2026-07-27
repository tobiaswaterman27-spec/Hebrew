// The learning path: ordered units, each with ordered lessons. A lesson is
// just a small set of item ids; the exercise generator turns them into a
// sequence of interactive questions. Lessons unlock in order.

export interface Lesson {
  id: string;
  title: string;
  itemIds: string[];
}

export interface Unit {
  id: string;
  title: string;
  color: string;
  lessons: Lesson[];
}

export const CURRICULUM: Unit[] = [
  {
    id: 'alefbet-1',
    title: 'Aleph-Bet · Part 1',
    color: '#1cb0f6',
    lessons: [
      {
        id: 'ab1-l1',
        title: 'First letters',
        itemIds: ['ltr-alef', 'ltr-bet', 'ltr-gimel', 'ltr-dalet'],
      },
      {
        id: 'ab1-l2',
        title: 'More letters',
        itemIds: ['ltr-he', 'ltr-vav', 'ltr-zayin', 'ltr-chet'],
      },
      {
        id: 'ab1-l3',
        title: 'Building up',
        itemIds: ['ltr-tet', 'ltr-yod', 'ltr-kaf', 'ltr-lamed'],
      },
    ],
  },
  {
    id: 'alefbet-2',
    title: 'Aleph-Bet · Part 2',
    color: '#1cb0f6',
    lessons: [
      {
        id: 'ab2-l1',
        title: 'Middle of the alphabet',
        itemIds: ['ltr-mem', 'ltr-nun', 'ltr-samekh', 'ltr-ayin'],
      },
      {
        id: 'ab2-l2',
        title: 'The last letters',
        itemIds: ['ltr-pe', 'ltr-tsadi', 'ltr-qof', 'ltr-resh'],
      },
      {
        id: 'ab2-l3',
        title: 'Shin & Tav',
        itemIds: ['ltr-shin', 'ltr-tav', 'ltr-alef', 'ltr-bet'],
      },
    ],
  },
  {
    id: 'greetings',
    title: 'Greetings',
    color: '#58cc02',
    lessons: [
      {
        id: 'greet-l1',
        title: 'Hello & thanks',
        itemIds: ['shalom', 'toda', 'bevakasha', 'slicha'],
      },
      {
        id: 'greet-l2',
        title: 'Yes, no & goodbye',
        itemIds: ['ken', 'lo', 'lehitraot', 'shalom'],
      },
      {
        id: 'greet-l3',
        title: 'Morning & evening',
        itemIds: ['boker-tov', 'erev-tov', 'toda', 'lehitraot'],
      },
    ],
  },
  {
    id: 'people',
    title: 'People',
    color: '#ce82ff',
    lessons: [
      {
        id: 'ppl-l1',
        title: 'Me & you',
        itemIds: ['ani', 'ata', 'at', 'chaver'],
      },
      {
        id: 'ppl-l2',
        title: 'Men & women',
        itemIds: ['ish', 'isha', 'yeled', 'yalda'],
      },
    ],
  },
  {
    id: 'everyday',
    title: 'Everyday words',
    color: '#ff9600',
    lessons: [
      {
        id: 'day-l1',
        title: 'Food & drink',
        itemIds: ['mayim', 'lechem', 'ochel', 'sefer'],
      },
      {
        id: 'day-l2',
        title: 'Home & city',
        itemIds: ['bayit', 'ir', 'yom', 'layla'],
      },
    ],
  },
  {
    id: 'phrases',
    title: 'Verbs & phrases',
    color: '#ff4b4b',
    lessons: [
      {
        id: 'ph-l1',
        title: 'Common verbs',
        itemIds: ['rotze', 'ohev', 'yodea', 'medaber'],
      },
      {
        id: 'ph-l2',
        title: 'Useful questions',
        itemIds: ['ma-shlomcha', 'ma-hashaa', 'eyfo', 'kama-ze-ole'],
      },
    ],
  },
];

// Lessons in path order — used for sequential unlocking.
export const LESSONS_IN_ORDER: Lesson[] = CURRICULUM.flatMap((u) => u.lessons);
