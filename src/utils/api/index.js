import {useRequest} from './request'
import { useApi } from './api'
import { useCourseApi } from './course'

const request = useRequest(router)
const normalApi = useApi(request)
const courseApi = useCourseApi(request)
export default {...normalApi, ...courseApi}
