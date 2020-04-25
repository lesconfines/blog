<script>
  import { posts } from "../posts";
</script>

<h1>My Blog</h1>

<!-- iterate through each post -->
{#each posts as post}
  <article>
    <!-- link article to /posts/$permalink -->
    <a href={`/${post.permalink}`}>
      <h2>{post.title}</h2>
      <p>{post.summary}</p>
    </a>
  </article>
{/each}
