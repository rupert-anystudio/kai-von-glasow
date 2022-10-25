import allSchemas from './allSchemas'

export default allSchemas.filter(s => s.type === 'document' && !!s.isSingleton)