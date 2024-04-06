import { getPost } from '@/service/post';
import { getPostDetail } from '@/service/postDetail';
import Image from 'next/image';
import React from 'react'

type Props = {
    params: {
        slug: string;
    };
};

export default async function PostDetailPage({params}: Props) {
    const post = await getPost(params.slug);
    const postDetail = await getPostDetail(params.slug);
    if(!post) {
        return <>게시글을 찾을 수 없습니다.</>
    }
  return (
    <div className='my-16'>
        <h2 className='font-bold text-2xl'>{post.title}</h2>
        <Image className='w-full h-full mb-8' src={`/postImages/${post.image}`} alt={post.title} width='1000' height='1000'></Image>
      {postDetail}
    </div>
  )
}
