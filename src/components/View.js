import React from 'react'

import ListView from './ListView'
import DetailView from './DetailView'
import IconView from './IconView'
import * as constants from '../utils/constants'

const View = ({ view, list, size }) => {
  switch (view) {
    case constants.VIEW_ICONS:
      return <IconView list={list} size={size} />
    case constants.VIEW_LIST:
      return <ListView list={list} size={size} />
    case constants.VIEW_DETAILS:
      return <DetailView list={list} size={size} />
  }
}

export default View
