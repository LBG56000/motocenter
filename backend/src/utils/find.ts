export interface ReqQuery {
  project?: string
  sort?: number
  limit?: string
  filter?: string
}

const defaultLimit = 10
const defaultLimit = 10
const defaultSort = 'asc'
const defaultProject = 'id'
const defaultFilter = {}
const defaultFilter = {}

export function prepareQuery(query: ReqQuery) {
  const project = query.project ? query.project : defaultProject
  const limit = query.limit ? Number(query.limit) : defaultLimit
  const filter = query.filter ? JSON.parse(query.filter) : defaultFilter
  let sort = defaultSort
  if (query.sort && query.sort === -1) sort = 'desc'

  return { project, sort, limit, filter }
}
