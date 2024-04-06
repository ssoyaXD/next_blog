import Link from 'next/link'
import React from 'react'
import { FaGithubAlt } from "react-icons/fa";

export default function GoGithubButton() {
  return (
    <button>
      <div className='flex flex-col items-center justify-center w-8 h-8 bg-blue-300 rounded-full m-4'>
        <Link href={`https://github.com/ssoyaXD`}>
          <FaGithubAlt/>
        </Link>
      </div>
    </button>
  )
}
