import React from 'react';
import Image from 'next/image';
import { IPost } from '../type/database.type';
import Link from 'next/link';

const BlogComponents: React.FC<{ blogpost: IPost[] }> = ({ blogpost }) => {
  return (
    <section className="pt-24 pb-36 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <h2 className="mb-4 text-6xl md:text-7xl text-center font-bold font-heading font-heading tracking-px-n leading-tight">
          Latest from Blog
        </h2>
        <p className="mb-24 font-medium text-gray-600 text-center leading-relaxed md:max-w-lg mx-auto">
          Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat
          tempor to the condimentum vitae vel purus.
        </p>
        <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
          <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
            <h4 className="text-2xl font-bold tracking-wide text-gray-300 mb-1">
              Personal info
            </h4>
            <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet</p>
          </div>
          <div className="w-full sm:w-auto px-4">
            <Link href={'/posts'}>
              <span className="inline-block py-2 px-4 text-xs text-center font-semibold leading-normal text-blue-50 bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200">
                Add a Post
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap -m-8">
          {blogpost.map((post) => (
            <div className="w-full md:w-1/2 p-8" key={post.id}>
              <div className="flex flex-wrap lg:items-center -m-4">
                <div className="w-auto p-4">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      className="transform hover:scale-105 transition ease-in-out duration-1000 object-cover "
                      src="https://images.unsplash.com/photo-1672135295855-40cf3b2ed441?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
                      alt=""
                      width={150}
                      height={70}
                    />
                  </div>
                </div>
                <div className="flex-1 p-4">
                  <div className="md:max-w-xs">
                    <div className="flex flex-col justify-between h-full">
                      <div className="mb-6">
                        <p className="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">
                          Product
                        </p>
                        <a
                          className="inline-block hover:text-gray-800 hover:underline"
                          href="#"
                        >
                          <h3 className="text-xl font-semibold leading-normal">
                            {post.tittle}
                          </h3>
                        </a>
                      </div>
                      <div className="flex flex-wrap items-center -m-1">
                        <div className="w-auto p-1 relative">
                          <Image
                            src="https://images.unsplash.com/photo-1672135295855-40cf3b2ed441?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
                            alt=""
                            width={80}
                            height={80}
                            priority
                            className="object-cover rounded-full w-10 h-10"
                          />
                        </div>
                        <div className="w-auto p-1">
                          <p className="text-sm font-semibold leading-relaxed">
                            Wade Warren
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogComponents;
