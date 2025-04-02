<script lang="ts">
  let searchQueryString: string = $state("");
  let searchQueryYear: number | null = $state(null);
  type SearchResult = {
    query: string;
    year: number | null;
    category: string | null;
  };
  let searchResults: SearchResult[] = $state([]);
  let searchResultStrings: string[] = $derived(
    searchResults.map((result) => searchResultAsString(result))
  );

  const sendQueryToDB = () => {
    searchResults.push({
      query: searchQueryString,
      year: searchQueryYear,
      category: null,
    });
    searchQueryString = "";
  };

  const searchResultAsString = (result: SearchResult) => {
    return `Query: ${result.query}, Year: ${result.year}, Category: ${result.category}`;
  };
</script>

<section>
  <form class="search-form" onsubmit={sendQueryToDB}>
    <div class="search-input">
      <input
        type="text"
        placeholder="문제 검색"
        bind:value={searchQueryString}
      />
      <button type="submit">검색</button>
    </div>
    <div class="search-options">
      <label>
        <span>출제년도</span>
        <input
          type="number"
          min="2000"
          max="2023"
          bind:value={searchQueryYear}
        />
      </label>
      <label>
        <span>구분</span>
        <input type="text" placeholder="ex) 수학1" />
      </label>
    </div>
  </form>

  {#each searchResultStrings.entries() as [idx, searchResult]}
    <div class="search-result">
      <p>[{idx + 1}] {searchResult}</p>
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

  .search-form .search-input {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .search-form .search-input input {
    width: 80%;
    height: 1.5rem;
  }

  .search-form .search-options {
    display: inline-block;
  }
</style>
