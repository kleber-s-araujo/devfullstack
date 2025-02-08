import IComment from "domains/entities/interfaces/IComment"
import Button from "./Button"

export default function CommentList({
  comments,
  deleteComment
}: {
  comments?: IComment[]
  deleteComment: (commentId: string) => void
}) {
  return (
    <div>
      <h2 className="text-lg mb-2">Comments</h2>
      <div>
        <ul className="space-y-2">
          {comments?.map((comment) => (
            <li
              key={comment.id}
              className="p-4 border border-gray/40 rounded-md text-sm"
            >
              <div className="flex justify-between items-center gap-6 w-full">
                <p>{comment.content}</p>
                <Button
                  text="Delete"
                  onClick={() => deleteComment(comment.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
