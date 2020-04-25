<script>
  import Nav from "../components/Navbar.svelte";
  import Tailwind from "../components/Tailwind.svelte";

  export let segment;
</script>

<Tailwind />

<main>
  <slot />
</main>
