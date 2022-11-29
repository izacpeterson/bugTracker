export const state = () => ({
  projects: [],
  bugs: [],
  user: '',
})
export const mutations = {
  add_project(state, project) {
    state.projects.push(project)
  },
  set_projects(state, projects) {
    state.projects = projects
  },
  set_bugs(state, bugs) {
    state.bugs = bugs
  },
  add_bug(state, bug) {
    state.bugs.push(bug)
  },
  set_user(state, user) {
    state.user = user
  },
}
