<script context="module">
  export async function preload() {
    const res = await this.fetch(
      `${process.env.GHOST_API_URL}/posts?key=${process.env.GHOST_API_KEY}&include=authors,tag&order=published_at`
    );
    const { posts, meta } = await res.json();

    if (res.status === 200 && posts && meta) {
      const t = {
        posts,
        meta,
        featuredPost: posts.length > 0 ? posts[0] : null,
      };
      return t;
    } else {
      this.error(res.status, "Error fetching posts from Ghost");
    }
  }
</script>

<script>
  export let posts;
  export let featuredPost;
  export let meta;
  import PostCard from "../components/BlogPost.svelte";
  import FeaturedPost from "../components/FeaturedPost.svelte";
</script>

<style>
  .content {
    overflow-y: auto;
    padding: 150px 15%;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 38px 44px;
    grid-auto-rows: auto;
    margin-top: 40px;
    justify-content: space-between;
    flex-wrap: wrap;
    justify-items: center;
  }
</style>

<svelte:head>
  <title>Confin.Dev</title>
</svelte:head>

<div class="content">
  {#if featuredPost}
    <header>
      <FeaturedPost post={featuredPost} />
    </header>
  {/if}
  <div class="grid">
    {#each posts as post}
      <PostCard {post} />
    {/each}
  </div>
</div>
