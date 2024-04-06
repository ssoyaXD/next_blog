import { getFeaturedPosts } from '@/service/post';
import { getPostDetail } from '@/service/postDetail';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function FeaturedPosts() {
    const posts = await getFeaturedPosts();
    const t = getPostDetail("best-react-practices");
    if(!posts) {
        return <>게시글이 없습니다.</>
    }
    
  return (
    <div>
      <h2 className='font-bold text-2xl'>Featured Posts</h2>
      <p className='border-2 border-blue-300'></p>
      <ul className='flex flex-wrap w-full'>
        { posts.map(({date, title, description, category, image, path}, index) => <li className='w-1/3 p-6' key={index}>
            <Link href={`/posts/${path}`}>
              <div className='w-full h-full flex flex-col items-center shadow-md rounded-lg pb-6'>
                <Image className='w-full h-72 rounded-lg' src={`/postImages/${image}`} alt={title} width={300} height={300}></Image>
                <p>{date}</p>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{category}</p>
              </div>
            </Link>
        </li>)}
      </ul>
    </div>
  )
}
