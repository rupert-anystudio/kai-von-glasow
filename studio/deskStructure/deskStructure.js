import S from '@sanity/desk-tool/structure-builder'
import { BiLibrary, BiStar } from 'react-icons/bi'
import { getDocTypeListItem, getListItemItems } from './deskStructureUtils'

export const defaultItems = [
  getListItemItems({
    title: 'Portfolio',
    icon: BiStar,
    items: [
      getDocTypeListItem({
        type: 'project',
        title: 'Projects',
      }),
      getDocTypeListItem({
        type: 'mastering',
        title: 'Masterings',
      }),
      getDocTypeListItem({
        type: 'soundDesign',
        title: 'Sound Designs',
      }),
      getDocTypeListItem({
        type: 'postProduction',
        title: 'Post Productions',
      }),
      getDocTypeListItem({
        type: 'composition',
        title: 'Compositions',
      }),
      getDocTypeListItem({
        type: 'creation',
        title: 'Creations',
      }),
    ],
  }),
  getListItemItems({
    title: 'Library',
    icon: BiLibrary,
    items: [
      getDocTypeListItem({
        type: 'artist',
        title: 'Artists',
      }),
      getDocTypeListItem({
        type: 'label',
        title: 'Labels',
      }),
      getDocTypeListItem({
        type: 'company',
        title: 'Companies',
      }),
      getDocTypeListItem({
        type: 'productionHouse',
        title: 'Production Houses',
      }),
      getDocTypeListItem({
        type: 'album',
        title: 'Albums',
      }),
      getDocTypeListItem({
        type: 'ep',
        title: 'EPs',
      }),
      getDocTypeListItem({
        type: 'person',
        title: 'People',
      }),
      getDocTypeListItem({
        type: 'role',
        title: 'Roles',
      }),
    ],
  }),
]

export const adminItems = [
  getListItemItems({
    title: 'All',
    items: S.documentTypeListItems(),
  }),
]
