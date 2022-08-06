import { Link } from '@inertiajs/inertia-react'
import moment from 'moment';
import PageWrapper from '../components/PageContainer'

export default function Articles({ recentArticles }) {
  return (
    <PageWrapper>
      <Link href="articles/new" className="absolute right-0 p-3 bg-emerald-900 text-white"><button >Add New</button></Link>
      <h1 className="text-3xl capitalize">Articles</h1>

      <ul className="flex flex-wrap gap-10">
        {recentArticles.length ? (
          recentArticles.map((article) => (
            <a href={`/articles/${article.id}`}  className="min-h-20 w-1/4 overflow-hidden rounded text-center capitalize shadow-lg p-3"
            >
              <li
                key={article.id}
              >
                <p>{article.title}</p>
                <p className="text-sm font-thin text-gray-400">{moment(article.createdAt).fromNow()}</p>
                <p className="text-sm font-thin text-gray-400">{article.comment.length} comment(s)</p>
              </li>
            </a>
          ))
        ) : (
          <li>No articles found</li>
        )}
      </ul>
    </PageWrapper>
  )
}
