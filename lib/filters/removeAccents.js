export default function (str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

/*
 * normalize()ing to NFD Unicode normal form decomposes combined graphemes into the combination of simple ones.
 *
 * Using a regex character class to match the U+0300 → U+036F range, it is now trivial to globally get rid of the diacritics,
 * which the Unicode standard conveniently groups as the Combining Diacritical Marks Unicode block.
 */
