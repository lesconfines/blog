<script context="module"> 
  export async function preload(page, session) {
    const res = await this.fetch("<YOUR_GRAPHCMS_URL>",
      {
        method: "get",
        headers: { "Content-Type": "application/json" },
      }
    );
    const json = await res.json();

    if (res.status === 200) {
      return json.data;
    } else {
      this.error(res.status, json && json.errors);
    }
  }
</script>