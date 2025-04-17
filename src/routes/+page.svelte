<script lang="ts">
    import {
        CATEGORIES,
        POINTS,
        YEARS,
        displayYearMessage as fmtYear,
    } from "$lib/problem";
    import { page } from "$app/state";
    import SearchResultDiv from "$lib/SearchResultDiv.svelte";
</script>

<section>
    <form class="search-form">
        <div class="search-input">
            <input name="query" placeholder="문제 검색" />
            <button>검색</button>
        </div>
        <div class="search-options">
            <div class="year-options">
                <p>출제년도</p>
                <ul class="year-options-labels">
                    {#each YEARS as year}
                        <li>
                            <label>
                                <input
                                    name="year"
                                    type="checkbox"
                                    value={year}
                                />
                                {fmtYear(year)}
                            </label>
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="category-options">
                <p>구분</p>
                <ul class="category-options-labels">
                    {#each CATEGORIES as category}
                        <li>
                            <label>
                                <input
                                    name="category"
                                    type="checkbox"
                                    value={category}
                                />
                                {category}
                            </label>
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="point-options">
                <p>배점</p>
                <ul class="point-options-labels">
                    {#each POINTS as point}
                        <li>
                            <label>
                                <input
                                    name="point"
                                    type="checkbox"
                                    value={point}
                                />
                                {point}
                            </label>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </form>

    <SearchResultDiv result={page.data.result} />
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
