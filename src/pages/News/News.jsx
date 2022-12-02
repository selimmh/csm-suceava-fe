import React from "react";
import { useNavigate } from "react-router";
import BlogCard from "../../components/BlogCard/BlogCard";
import PageLabel from "../../components/Labels/PageLabel";

const news = Array(10)
  .fill(null)
  .map((_, index) => ({
    id: index,
    long_title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime architecto nisi harum ut ipsam corporis est magni facilis aliquam voluptatem accusamus veritatis numquam totam, atque, debitis fugiat id nesciunt cumque minus, at culpa quis. Debitis, quidem non. Amet rerum, eum odio ut accusantium ipsa? Quisquam laborum id magnam sit neque architecto sint eligendi odio, voluptatem provident quia molestias eos perspiciatis quo voluptate ad accusamus laudantium quae commodi laboriosam numquam illo quos vel dolore. Tempora itaque a accusantium similique molestias cum vero iure doloremque quidem eveniet temporibus quis rem delectus error, magni quae? Consequatur corrupti dolores distinctio voluptas quas dicta ratione, sint, laboriosam assumenda aliquam ullam veniam hic recusandae ipsum nisi magni obcaecati suscipit. Officiis aut, quae praesentium assumenda molestias odit, accusantium incidunt minus quaerat, consequuntur at labore quas? Earum similique rem at et debitis magnam accusamus, dicta eum natus architecto delectus vitae totam? Aut, repellendus recusandae. Repellat delectus cum dolorum deserunt cumque culpa illo quidem, vitae earum porro sequi dolorem ab voluptatum totam officiis eaque ad enim possimus quasi quam reprehenderit nihil fugit. Vitae, suscipit provident vero quas culpa fugit neque expedita, est eligendi quaerat doloremque velit atque, nobis laborum incidunt doloribus! Eum totam recusandae nihil? Fuga, magnam ex? Repellat veritatis nam voluptatem optio, quidem nostrum alias! Accusamus, necessitatibus laboriosam? Dicta illo sapiente nesciunt eaque totam corrupti dignissimos maiores ad voluptatem facere incidunt ex libero tempora praesentium reprehenderit minima temporibus, quaerat autem quod labore tenetur deserunt id modi? Expedita distinctio similique dolores maxime quisquam, deserunt voluptas laboriosam repudiandae unde hic ducimus et nesciunt consectetur quasi perspiciatis adipisci eaque earum explicabo, commodi sequi non odio aperiam velit. Impedit ipsam recusandae natus ratione velit exercitationem blanditiis nesciunt consectetur ab! Deserunt eum ut pariatur commodi modi dicta, mollitia voluptatem praesentium nesciunt cupiditate accusamus, quidem aut at quas ipsa soluta nam nihil ratione similique!",
    image_url: `https://picsum.photos/seed/${index + Math.random()}/300/400`,
    created_at: "12 Nov 2020",
    created_by: "Adam Smith",
  }));

const News = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageLabel
        label="Noutati"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iste."
      />
      <div className="flex flex-col gap-4">
        {news.map((blog) => (
          <div key={blog.id}>
            <BlogCard
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
  );
};

export default News;
