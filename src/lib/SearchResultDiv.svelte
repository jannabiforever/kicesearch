<script lang="ts">
    import { SearchResult } from "./search";
    let props = $props();
    let result: SearchResult = props.searchResult;
</script>

<p>{result}</p>
