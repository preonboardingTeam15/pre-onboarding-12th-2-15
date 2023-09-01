import { Octokit } from 'octokit'

const octokit = new Octokit()

export const CORE_API = async (apiMethod: string, path: string, params?: object) => {
  return octokit.request(`${apiMethod} ${path}`, {
    ...params,
  })
}
