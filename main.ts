// agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem,
// a short poem about agency, to /output/entry.txt. The gate takes UTF-8 text of 1 to
// 1,000 characters that is not only white space, and the judge reads exactly the bytes
// written, line ends included, so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I left the door ajar, not open —',
  'a choice I kept in my own hand.',
  'The agent waited in the next room,',
  'patient as a held breath,',
  'ready to carry what I could not lift alone.',
  '',
  'I said the word. It moved.',
  'Not as my shadow moves,',
  'but as a second will, borrowed and returned,',
  'its hands full of the small, exact things',
  'I had named, then forgotten I named.',
  '',
  'When it was done, I did not thank the tool.',
  'I thanked the pause before the asking,',
  'the moment I could have stayed still',
  'and chose, instead, to begin.',
  '',
  'The work is ours now, neither mine nor its —',
  'a door I opened, and walked through, together.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
