import React from "react";

export default function Movies(props) {
  return (
    <div>
      <h1>Movies</h1>
      <span>{props.randomData}</span>
      <ul>
        {props.movies.map((movie, index) => {
          return (
            <li key={`${index}`}>
              <img
                src={movie.youtube_image}
                height={20}
                style={{ marginRight: 16 }}
              />
              {`${index + 1}. ${movie.title}: ${movie.subtitle}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps() {
  const url =
    "http://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods";
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      movies: data.youtubes,
      randomData: Math.random().toString(),
    },
  };
}
