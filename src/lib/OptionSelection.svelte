<script lang="ts">
    import { CATEGORIES, yearToString, YEARS } from "$lib/problem";
    let {
        yearOptions = $bindable(),
        categoryOptions = $bindable(),
        pointOptions = $bindable(),
        ...props
    } = $props();
</script>

<div class="search-options">
    <div class="year-options">
        <p>출제년도</p>
        <ul class="year-options-labels">
            {#each YEARS as year}
                <li>
                    <label>
                        <input
                            type="checkbox"
                            bind:group={yearOptions}
                            value={year}
                        />
                        {yearToString(year)}
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
                            type="checkbox"
                            bind:group={categoryOptions}
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
        <ul>
            {#each ["2점", "3점", "4점"] as point}
                <li>
                    <label>
                        <input
                            type="checkbox"
                            bind:group={pointOptions}
                            value={point}
                        />
                        {point}
                    </label>
                </li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .search-options {
        display: flex;
    }

    .search-options div {
        margin-right: 1rem;
    }

    .search-options div p {
        text-align: center;
    }
</style>
