<script context="module">
  export async function preload(page) {
    const res = await this.fetch(
      `${process.env.GHOST_API_URL}/posts/${page.params.postId}?key=${process.env.GHOST_API_KEY}&include=authors,tag&order=published_at`
    );
    const { posts } = await res.json();
    const post = posts[0];

    return { post };

    // if (res.status === 200 && posts && meta) {
    //   const t = {
    //     posts,
    //     meta,
    //     featuredPost: posts.length > 0 ? posts[0] : null,
    //   };
    //   return t;
    // } else {
    //   this.error(res.status, "Error fetching posts from Ghost");
    // }
  }
</script>

<script>
  export let post;
</script>

<div>
  {@html post.html}
</div>
