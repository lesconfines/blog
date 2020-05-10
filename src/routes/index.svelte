<script>
  import { posts } from "../posts";
  import PostCard from "../components/BlogPost.svelte";
</script>

<style>
  h1 {
    background-color: var(--color-tertiary);
  }
</style>

<h1>My Blog</h1>

<!-- iterate through each post -->
{#each posts as post}
  <PostCard {post} />
{/each}
