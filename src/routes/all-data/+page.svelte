<script lang="ts">
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
</script>

<div>
    {#if data}
        {JSON.stringify(data)}
    {/if}
</div>
