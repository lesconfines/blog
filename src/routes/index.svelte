<script context="module">
  export function preload({ params, query }) {
    return this.fetch('posts.json')
      .then(r => r.json())
      .then(({ posts, meta }) => {
        return { posts, meta }
      })
  }
</script>

<script>
  import { posts } from '../posts'
  import PostCard from '../components/BlogPost.svelte'
</script>

<style>
  .content {
    overflow-y: auto;
    margin-top: 150px;
    display: grid;
    width: 1032px;
    grid-template-columns: 300px 300px 300px;
    grid-gap: 38px 44px;
    grid-auto-rows: auto;
    justify-content: space-between;
  }
</style>

<div class="content">
  {#each posts as post}
    <PostCard {post} />
  {/each}
</div>
