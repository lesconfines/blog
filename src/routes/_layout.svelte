<script>
  import Navbar from "../components/Navbar.svelte";
  import Tailwind from "../components/Tailwind.svelte";

  export let segment;
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
</style>

<Tailwind />

<main>
  <Navbar {segment} />
  <slot />
</main>
