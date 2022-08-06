import PageWrapper from '../components/PageContainer'

export default function NewArticleForm() {
  return (
    <PageWrapper>
       <h1 className="text-3xl capitalize">New Article Form</h1>
      
      <form action="/articles" method="POST" >
        <div className="form-group flex flex-col gap-3">
          
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Title here..."
          />
        </div>
        <div className="form-group flex flex-col gap-3 mt-6">
       
          
          <textarea
            className="form-control"
            id="body"
            name="body"
            rows="3"
            placeholder="Content here..."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-6 bg-slate-600 p-3 text-white">
          Submit
        </button>
      </form>
    </PageWrapper>
  )
}
