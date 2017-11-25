const GITHUB_API = 'https://api.github.com'
const SEARCH_REPOS = '/search/repositories'

const getRepos = async searchTopic => {
  const response = await fetch(
    `${GITHUB_API}${SEARCH_REPOS}?q=topic:${searchTopic}`
  ).then(res => res.json())

  return response.items
}

const setCardLink = (repo, content) => {
  const link = content.querySelector('.link')
  link.href = repo.html_url
  link.textContent = repo.name
}

const setCardDescription = (repo, content) => {
  const desc = content.querySelector('.description')
  desc.textContent = repo.description
}

const setCardAuthor = (repo, content) => {
  const avatar = content.querySelector('.avatar')
  const authorName = content.querySelector('.authorName')

  avatar.src = repo.owner.avatar_url
  avatar.alt = `${repo.owner.login} Logo`
  authorName.textContent = repo.owner.login
}

const setCardStats = (repo, content) => {
  const statsKeys = [
    { key: 'stargazers_count', label: 'Stars', iconClass: 'star' },
    {
      key: 'open_issues_count',
      label: 'Open Issues',
      iconClass: 'exclamation'
    },
    { key: 'language', label: 'Language', iconClass: 'code' },
    { key: 'forks', label: 'Forks', iconClass: 'code-fork' }
  ]
  const statsList = content.querySelector('.stats')

  const listItems = statsKeys
    .map(({ key, label, iconClass }) => {
      if (repo[key]) {
        return `
            <li class="${key}">
              <i class="fa fa-${iconClass} statIcon"></i>${label}: ${repo[key]}
            </li>
          `
      }

      return ''
    })
    .reduce((html, li) => html + li, '')

  statsList.innerHTML = listItems
}

const createCards = repos => {
  const container = document.getElementById('items')
  const template = document.getElementById('repoTemplate')

  repos.forEach(repo => {
    const { content } = template

    setCardLink(repo, content)
    setCardDescription(repo, content)
    setCardAuthor(repo, content)
    setCardStats(repo, content)

    const clone = document.importNode(template.content, true)

    container.appendChild(clone)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('repoSearch')

  form.addEventListener('submit', ev => {
    event.preventDefault()

    const searchTopic = ev.target.elements.searchTopic
    const { value: searchTopicValue } = searchTopic

    getRepos(searchTopicValue).then(repos => createCards(repos))
  })
})
