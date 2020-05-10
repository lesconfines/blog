<script>
  import { posts } from "../posts";
  import PostCard from "../components/BlogPost.svelte";
</script>

<style>
  .content {
    overflow-y: auto;
    margin-top: 150px;
    display: grid;
    width: 1032px;
    grid-template-columns: 300px 300px 300px;
    grid-gap: 38px 44px;
    grid-auto-rows: 406px;
  }
</style>

<div class="content">
  {#each posts as post}
    <PostCard {post} />
  {/each}
</div>
