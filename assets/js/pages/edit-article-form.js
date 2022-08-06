import { Link } from '@inertiajs/inertia-react'
import PageWrapper from '../components/PageContainer'

export default function ViewEdit({ articleTobeUpdated }) {
  const { id, title, body } = articleTobeUpdated

  return (
    <PageWrapper >
        
      <h1 className="text-3xl capitalize">Edit Article</h1>

      <form action="/articles" method="POST" >
        <div className="form-group flex flex-col gap-3">
          {/* <label htmlFor="title">Title</label> */}
          <input
            type="text"
            className="form-control bg-gray-200"
            id="title"
            name="title"
            placeholder="Title"
            defaultValue={title}
           

          />
        </div>
        <div className="form-group flex flex-col gap-3 mt-6">
          {/* <label htmlFor="body">Body</label> */}
          <textarea
            className="form-control bg-gray-200"
            id="body"
            name="body"
            rows="3"
            defaultValue={body}
          ></textarea>
        </div>
        <div className="flex gap-6  items-baseline">
        <button type="submit" className="btn btn-primary mt-6 bg-slate-600 p-3 text-white">
          Submit
        </button>
        <Link href={`/articles/${id}`}>Cancel</Link>
        </div>
      </form>

      
    </PageWrapper>
  )
}
