<script>
  export let segment;
</script>

<style>
  nav {
    color: var(--color-white);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 24px;
    font-weight: bold;
    justify-content: space-between;
    width: 1032px;
  }

  ul {
    justify-self: flex-end;
    align-items: center;
    display: flex;
    height: 7.5vh;
    justify-content: flex-end;
  }

  li {
    margin: 0px 15px;
  }

  li:hover {
    color: var(--color-primary);
  }

  li:last-child {
    margin-right: 0px;
  }

  .navContainer {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100vw;
    height: 80px;
    background-color: #405c6c;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 999;
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

<div class="navContainer">
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
</div>
