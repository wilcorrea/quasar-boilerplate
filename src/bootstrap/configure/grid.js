/**
 * @param {Resource} service
 * @param {string} path
 * @param {string} id
 * @param {Array} schemas
 * @param {Array} filters
 * @param {Array} actions
 * @param {Object} options
 * @returns {Object}
 */
export default (service, path, id, schemas, filters, actions = null, options = {}) => {
  const base = {
    scope: 'index',
    timeout: 200,
    bottom: false,
    styles: {
      height: 'calc(100vh - 220px)',
      minHeight: '280px'
    },
    bodyStyle: {
      height: 'calc(100vh - 270px)',
      minHeight: '230px'
    },
    rule: 'like'
  }
  const settings = {service, path, id, schemas, filters, actions}

  return Object.assign({}, base, settings, options)
}
