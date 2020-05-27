<script context="module">
  export async function preload() {
    const res = await this.fetch(
      `${process.env.GHOST_API_URL}/posts?key=${process.env.GHOST_API_KEY}&include=authors,tags`
    );
    const { posts, meta } = await res.json();

    if (res.status === 200 && posts && meta) {
      return { posts, meta };
    } else {
      this.error(res.status, "Error fetching posts from Ghost");
    }
  }
</script>

<script>
  export let posts;
  export let meta;
  import PostCard from "../components/BlogPost.svelte";

  console.log(posts, meta);
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
