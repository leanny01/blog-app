export default function AddCommentForm({ articleId }) {
  return (
    <form
      action={`/articles/${articleId}/comment`}
      method="POST"
      className="p-6"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="body">Commenter</label>
        <input
          type="text"
          className="form-control"
          id="commenter"
          name="commenter"
          placeholder="Commenter"
        />
      </div>
      <div className="form-group flex flex-col gap-3 mt-6">
        <label htmlFor="body">Body</label>
        <textarea
          className="form-control"
          id="body"
          name="body"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary mt-6 bg-slate-600 p-3 text-white">
        Submit
      </button>
    </form>
  )
}
