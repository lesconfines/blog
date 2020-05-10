<script>
  export let segment;
</script>

<style>
  nav {
    align-items: center;
    background-color: rgba(255, 255, 255, 0.11);
    color: var(--color-white);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    font-size: 24px;
    font-weight: bold;
    justify-content: space-between;
    padding: 0% 24%;
    position: fixed;
    width: 100vw;
  }

  ul {
    align-items: center;
    display: flex;
    height: 7.5vh;
    justify-content: flex-end;
  }

  li {
    margin: 0px 15px;
  }

  .current {
    color: var(--color-primary);
    text-decoration: underline;
  }

  .dot {
    color: var(--color-primary);
  }

  .blogName {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<nav>
  <div class="blogName">
    Confin
    <span class="dot">.</span>
    dev
  </div>
  <ul>
    <li>
      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <a
        class:current={segment === undefined}
        rel="prefetch"
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">
        Home
      </a>
    </li>
    <li>
      <a
        class:current={segment === 'about'}
        rel="prefetch"
        aria-current={segment === 'about' ? 'page' : undefined}
        href="about">
        About
      </a>
    </li>
    <li>
      <a
        class:current={segment === 'contact'}
        rel="prefetch"
        aria-current={segment === 'contact' ? 'page' : undefined}
        href="contact">
        Contact
      </a>
    </li>
  </ul>
</nav>
