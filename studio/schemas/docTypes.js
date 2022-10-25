import allSchemas from './allSchemas'

export const docTypeArray = allSchemas
  .filter(schema => schema.type === 'document')
  .map(({
    editOnly = false,
    isSingleton = false,
    hasPreview = false,
    hasOrder = false,
    slug = null,
    name,
    title,
    icon
  }) => ({
    type: name,
    title: title || name,
    slug,
    editOnly,
    hasOrder,
    isSingleton,
    hasPreview,
    icon
  })
)

export const docTypeObject = docTypeArray
  .reduce((acc, curr) => {
    const type = curr.type
    if (!type) return acc
    return {
      ...acc,
      [type]: curr
    }
  }, {})