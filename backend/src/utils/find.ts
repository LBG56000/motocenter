
export interface ReqQuery {
    project?: string
    sort?: number
    size?: string
}

const defaultSize = 10
const defaultSort = 'asc'
const defaultProject = 'id'

export function prepareQuery (query: ReqQuery) {
    const project = query.project ? query.project : defaultProject
    const size = query.size ? Number(query.size) : defaultSize
    let sort = defaultSort
    if (query.sort && query.sort === -1) sort = 'desc'

    return {project, sort, size}
}