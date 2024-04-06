import { getPosts } from '@/service/post';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <>
        <ul className='flex flex-wrap w-full  mt-8'>
        { posts.map(({date, title, description, category, image, path}, index) => <li className='w-1/4 p-6' key={index}>
            <Link href={`/posts/${path}`}>
              <div className='shadow-md rounded-lg pb-6'>
                <Image className='w-full h-72 rounded-lg' src={`/postImages/${image}`} alt={title} width={250} height={250}></Image>
                <p>{date}</p>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{category}</p>
              </div>
            </Link>
        </li>)}
      </ul>
    </>
  )
}
