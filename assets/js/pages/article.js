import { Link } from '@inertiajs/inertia-react'
import PageWrapper from '../components/PageContainer'
import Comment from '../components/Comment'
import AddComment from '../components/AddCommentForm'

export default function Article({ singleArticle }) {
  const { title, body, comment } = singleArticle
  return (
    <PageWrapper>
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl capitalize">{title}</h1>

         
          <p>{body}</p>
          <p className="flex gap-3 mt-8">
            <Link
              href={`/articles/${singleArticle.id}/edit`}
              className="bg-slate-500 p-3 text-white"
            >
              Edit{' '}
            </Link>
            <Link
              href={`/articles/${singleArticle.id}/delete`}
              className="bg-slate-500 p-3 text-white"
            >
              Delete
            </Link>
          </p>
        </div>
        <div className="mt-6">
          <h5 className="text-xl">Comments</h5>
          <div  >
            {comment?.map((comment) => (
              <Comment comment={comment} key={comment.id}  className=" divide-slate-600"/>
            ))}
          </div>

          <div className="bg-slate-200">
            <AddComment articleId={singleArticle.id} />
          </div>
        </div>
      </PageWrapper>
  )
}
