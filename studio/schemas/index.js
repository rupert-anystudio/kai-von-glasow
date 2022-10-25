import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import allSchemas from './allSchemas'

// const ORDER_FIELD_IS_HIDDEN = true

const sanitySchemas = allSchemas.map(({
  editOnly = false,
  isSingleton = false,
  hasPreview = false,
  hasOrder = false,
  fields = [],
  slug,
  ...s
}) => {
  const isDoc = s.type === 'document'
  const isObject = s.type === 'object'
  // const hasSlug = typeof slug === 'object'

  // is neither doc or object, return rest of schema as no fields are needed
  if (!isDoc && !isObject) return { ...s }

  // setup base schema
  let schema = { ...s, fields }

  if (editOnly) {
    // is edit only, add actions property
    schema = {
      ...schema,
      __experimental_actions: ['update','publish']
    }
  }

  // if (hasOrder && isDoc) {
  //   // is orderable, add ordering property and orderRankField
  //   schema = {
  //     ...schema,
  //     orderings: [orderRankOrdering],
  //     fields: [
  //       ...schema.fields,
  //       orderRankField({ type: s.name, hidden: ORDER_FIELD_IS_HIDDEN }),
  //     ]
  //   }
  // }

  // if (hasSlug && isDoc) {
  //   // is has slug field defined, add field
  //   const prefix = slug?.prefix || ''
  //   const source = slug?.source || 'title'
  //   const index = slug?.index || 1
  //   schema = {
  //     ...schema,
  //     fields: [
  //       ...schema.fields.slice(0, index),
  //       returnSlugWithType(prefix, source),
  //       ...schema.fields.slice(index)
  //     ]
  //   }
  // }

  return schema
})


export default createSchema({
  name: 'default',
  types: schemaTypes.concat(sanitySchemas)
})
