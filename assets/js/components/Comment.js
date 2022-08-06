import moment from 'moment';
import { Link } from '@inertiajs/inertia-react';

export default function Comment({comment}) {
  const { article, body, createdAt, commenter } = comment;
  return (
    <div className="flex flex-col gap-4 p-6 mb-3 bg-slate-100  ">
      <p><strong>{commenter}</strong></p>
      <p>{body}</p>
      <p className="text-sm"><em>{moment(createdAt).fromNow()}</em></p>

      {/* <p>
        <Link href={`/articles/${id}/comments/${id}/edit`}>
          Edit
        </Link>
        <Link href={`/articles/${id}/comments/${id}/delete`}>
          Delete
        </Link>
      </p> */}
    </div>
  )
}
