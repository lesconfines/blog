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
</script>

<style>
  .content {
    overflow-y: auto;
    padding: 150px 15%;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 38px 44px;
    grid-auto-rows: auto;
    justify-content: space-between;
    flex-wrap: wrap;
    justify-items: center;
  }
</style>

<svelte:head>
  <title>Confin.Dev</title>
</svelte:head>

<div class="content">
  {#each posts as post}
    <PostCard {post} />
  {/each}
  {@html meta}
</div>
