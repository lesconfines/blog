<script>
  import Navbar from '../components/Navbar.svelte';
  import Tailwind from '../components/Tailwind.svelte';

  export let segment;
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  div {
    display: flex;
    flex: 1;
    justify-content: center;
  }
</style>

<Tailwind />

<main>
  <Navbar {segment} />
  <div>
    <slot />
  </div>
</main>
