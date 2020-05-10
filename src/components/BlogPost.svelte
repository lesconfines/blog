<script>
  export let post;
</script>

<style>
  article {
    margin: 20px;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.11);
  }

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }

  .postContent {
    flex: 1;
    padding: 12px 12px 22px 12px;
    border-top: 4px solid var(--color-tertiary);
  }
</style>

<article>
  <img src={post.imageUrl} alt={`${post.title} cover picture`} />
  <div class="postContent">
    <div class="postDescription">
      <section class="postMetadata">
        <p>Author : {post.author}</p>
        <p>
          Published : {post.publicationDate.toLocaleDateString('DD-MM-YYYY')}
        </p>
      </section>
      <section class="postPreview">
        <h1>{post.title}</h1>
        <h2>{post.description}</h2>
      </section>
    </div>
    <div class="postFooter">
      <a href={`${post.permalink}`}>Learn more</a>
    </div>
  </div>
</article>
