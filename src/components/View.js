import React from 'react'

import ListView from './ListView'
import DetailView from './DetailView'
import IconView from './IconView'
import * as constants from '../utils/constants'

const View = ({ view, list, size, onSelect, selectedId }) => {
  switch (view) {
    case constants.VIEW_ICONS:
      return <IconView list={list} size={size} onSelect={onSelect} selectedId={selectedId} />
    case constants.VIEW_LIST:
      return <ListView list={list} size={size} onSelect={onSelect} selectedId={selectedId} />
    case constants.VIEW_DETAILS:
      return <DetailView list={list} size={size} onSelect={onSelect} selectedId={selectedId} />
  }
}

export default View
