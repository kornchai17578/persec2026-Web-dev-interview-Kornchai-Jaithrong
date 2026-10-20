/**
 * Returns up to `maxResult` items that contain `search` as a substring
 * (case-insensitive), ordered by how early the match occurs in the item
 * (so prefix matches rank before matches in the middle/end of the word).
 */
export function autocomplete(search: string, items: string[], maxResult: number): string[] {
  const needle = search.toLowerCase();

  const matches = items
    .map((item) => ({ item, index: item.toLowerCase().indexOf(needle) }))
    .filter((entry) => entry.index !== -1)
    .sort((a, b) => a.index - b.index);

  return matches.slice(0, maxResult).map((entry) => entry.item);
}
