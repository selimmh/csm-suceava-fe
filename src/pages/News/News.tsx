import React from 'react'
import { useNavigate } from 'react-router'
import BlogDetails from '../../components/BlogDetails/BlogDetails'
import PageLabel from '../../components/Labels/PageLabel'

import { news } from '../../db'

const News = () => {
    const navigate = useNavigate()
    return (
        <>
            <PageLabel
                label="Noutati"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iste."
            />
            <div className="flex flex-col gap-4">
                {news.map((blog) => (
                    <div key={blog.id}>
                        <BlogDetails
                            onClick={() => navigate(`/news/${blog.id}`)}
                            image_url={blog.image_url}
                            long_title={blog.long_title}
                            content={blog.content}
                            created_by={blog.created_by}
                            created_at={blog.created_at}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default News
