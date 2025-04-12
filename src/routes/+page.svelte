<script lang="ts">
    import OptionSelection from "$lib/OptionSelection.svelte";
    import { SearchQuery } from "$lib/query";
    import SearchResultDiv from "$lib/SearchResultDiv.svelte";

    let queryBody: string = $state("");
    let searchResults = $state([]);

    let yearOptions = $state([]);
    let categoryOptions = $state([]);
    let pointOptions = $state([]);

    const sendQuery = async () => {
        let query: SearchQuery = new SearchQuery(
            queryBody,
            yearOptions,
            categoryOptions,
            pointOptions
        );

        console.log(query);
        clearQuery();
    };

    const clearQuery = () => {
        queryBody = "";
        yearOptions = [];
        categoryOptions = [];
        pointOptions = [];
    };
</script>

<section>
    <form class="search-form" onsubmit={sendQuery}>
        <div class="search-input">
            <input type="text" placeholder="문제 검색" bind:value={queryBody} />
            <button type="submit">검색</button>
        </div>
    </form>

    <OptionSelection bind:yearOptions bind:categoryOptions bind:pointOptions />

    {#each searchResults.entries() as [idx, searchResult]}
        <div class="search-result">
            <p>[{idx + 1}] <SearchResultDiv {searchResult} /></p>
        </div>
    {/each}
</section>

<style>
    .search-form {
        justify-content: center;
        align-items: center;
    }

    .search-form div {
        margin-bottom: 1rem;
    }

    .search-input {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    .search-input input {
        width: 80%;
        height: 1.5rem;
    }
</style>
