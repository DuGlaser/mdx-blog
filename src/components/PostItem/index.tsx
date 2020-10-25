import { Post } from '@/types/post';
import Link from 'next/link';

interface Props {
  post: Post;
}

const PostItem: React.FC<Props> = ({ post }) => {
  return (
    <li className="w-full px-2 py-4 mx-auto mt-3 bg-white border border-gray-400 rounded-lg cursor-pointer md:p-4 sm:py-3">
      <Link
        as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
        href={`/posts/[slug]`}
      >
        <div>
          <h2 className="mb-2 text-2xl font-bold hover:text-blue-600 leading-7">
            <a>{post.data.title}</a>
          </h2>
          <div className="mb-2">
            <div className="flex flex-row p-1 ">
              {post.data.tags.map((tag: string) => (
                <div key={tag} className="mr-2 text-sm text-gray-600">
                  <span className="text-opacity-50">#</span>
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <a>{post.data.description}</a>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
