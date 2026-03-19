export interface ReqQuery {
  project?: string
  sort?: number
  size?: string
}

const defaultSize = 10
const defaultSort = 'asc'
const defaultProject = 'id'

export function prepareQuery(query: ReqQuery) {
  // Permet le requêtage de plusieurs colonnes (ex = /users?project=firstname,lastname)
  let project: Record<string, number>
  if (query.project) {
    const fields = query.project.split(',')

    project = fields.reduce(
      (acc, field) => {
        acc[field.trim()] = 1
        return acc
      },
      {} as Record<string, number>,
    )
  } else {
    project = { [defaultProject]: 1 }
  }

  const size = query.size ? Number(query.size) : defaultSize
  let sort = defaultSort
  if (query.sort && query.sort === -1) sort = 'desc'

  return { project, sort, size }
}
