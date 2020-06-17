<script>
  import moment from "moment";
  import { goto } from "@sapper/app";

  export let post;
</script>

<style>
  a {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-white);
    margin-bottom: 14px;
  }

  article {
    width: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.11);
    mix-blend-mode: normal;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.5s ease;
  }

  article:hover {
    transform: scale(1.1);
  }

  h1 {
    font-weight: 500;
    font-size: 23px;
    line-height: 27px;
    color: var(--color-white);
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  h2 {
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    color: var(--color-white);
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  hr {
    height: 2px;
    width: 230px;
    background-color: var(--color-primary);
    border-radius: 1px;
    border: 0px;
    margin: 4px 0px 8px 0px;
  }

  img {
    height: 150px;
    width: 100%;
    object-fit: cover;
  }

  .postContent {
    flex: 1;
    padding: 8px 16px 0px 16px;
    border-top: 4px solid var(--color-tertiary);
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  }

  .postMetadata {
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    color: var(--color-white);
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
  }

  .postFooter {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .test {
    display: inline-block;
    margin: 0px;
  }
</style>

<article on:click={() => goto(`blog/${post.id}`)}>
  <img src={post.feature_image} alt={`${post.title} cover picture`} />
  <div class="postContent">
    <section class="postMetadata">
      <p>Author : {post.primary_author.name}</p>
      <p>Published : {moment(post.published_at).format('DD-MM-YYYY')}</p>
    </section>
    <section>
      <h1>{post.title}</h1>
      <hr />
      <h2>{post.custom_excerpt}</h2>
    </section>
    <div class="postFooter">
      <a href={`blog/${post.id}`} rel="prefetch">
        Learn more
        <svg
          class="test"
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.20001 11.3668L7.70001 7.84918L4.20001 4.3316L4.90001
            2.92456L9.80001 7.84918L4.90001 12.7738L4.20001 11.3668Z"
            fill="#EF5467" />
        </svg>
      </a>
    </div>
  </div>
</article>
