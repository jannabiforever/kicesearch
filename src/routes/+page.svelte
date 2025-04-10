<script lang="ts">
  import OptionSelection from "$lib/OptionSelection.svelte";
  import { SearchQuery, SearchResult, handleSearchRequest } from "$lib/search";
  import SearchResultDiv from "$lib/SearchResultDiv.svelte";

  let query_body: string = $state("");
  let searchResults: SearchResult[] = $state([]);

  const sendQueryToDB = async () => {
    let query: SearchQuery = new SearchQuery(query_body);
    let response: SearchResult = await handleSearchRequest(query);
    searchResults.push(response);
    query_body = "";
  };
</script>

<section>
  <form class="search-form" onsubmit={sendQueryToDB}>
    <div class="search-input">
      <input type="text" placeholder="문제 검색" bind:value={query_body} />
      <button type="submit">검색</button>
    </div>
    <OptionSelection />
  </form>

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
