<script lang="ts">
    let result = $props();
</script>

{#each result.result as hit}
    <p>id: {hit.id}</p>
    <p>body: {hit.body}</p>
{/each}
