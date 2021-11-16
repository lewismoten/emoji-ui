import emoji from '@lewismoten/emoji'
import actionBuilder from '../actionBuilder'
const build = actionBuilder('search', emoji.magnifyingGlassTiltedRight)

export const load = build('load')
export const unload = build('unload')
export const filterText = build('filterText')
