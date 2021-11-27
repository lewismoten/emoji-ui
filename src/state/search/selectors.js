import { createSelector } from 'reselect'
import emoji from '@lewismoten/emoji'

const slice = ({ search = {} } = {}) => search
const text = createSelector(slice, ({ text = '' }) => text)
const matchingKeys = createSelector(text, text =>
  Object.keys(emoji).filter(key =>
    text
      .split(' ')
      .some(word => key.toLowerCase().indexOf(word.toLowerCase()) !== -1)
  )
)
export const list = createSelector(matchingKeys, matchingKeys => {
  return matchingKeys.map(key => ({
    key,
    value: emoji[key],
    encodedValue: encode(emoji[key]),
    text: camelCaseToText(key),
    codePoints: codePoints(emoji[key])
  }))
})

export const selectedId = createSelector(slice, ({selectedId}) => selectedId);
export const hasSelection = createSelector(selectedId, selectedId => !!selectedId);
export const selectedText = createSelector(hasSelection, selectedId, (hasSelection, selectedId) => hasSelection ? emoji[selectedId] : '');
export const selectedTitle = createSelector(hasSelection, selectedId, (hasSelection, selectedId) => hasSelection ? camelCaseToText(selectedId) : '');

const camelCaseToText = camelCase =>
  // my17CHARACTERTest = my 17 character test
  camelCase
    .replace(/\B([A-Z\d])([^A-Z\d])/g, ' $1$2')
    .replace(/([a-z])([\dA-Z])/g, '$1 $2')
    .toLowerCase()

const encode = value => {
  var bits = []
  var i
  for (i = 0; i < value.length; i++) {
    const hex = value.codePointAt(i).toString(16)
    if (hex.length <= 4) {
      bits.push(`\\u${hex}`)
    } else {
      bits.push(`\\u${hex}`)
      i++ // skip next code as this one overlaps into it
    }
  }
  return bits.join('')
}

const codePoints = value =>
  encode(value)
    .split('\\u')
    .filter(v => v !== '')
    .map(v => v.replace(/[{}]/g, ''))
