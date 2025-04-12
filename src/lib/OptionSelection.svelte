<script lang="ts">
    import { CATEGORIES, yearToString, YEARS } from "$lib/problem";
</script>

<div class="search-options">
    <div class="year-options">
        <p>출제년도</p>
        <ul>
            {#each YEARS as year}
                <li>
                    <input type="checkbox" />
                    <lable for="year">{yearToString(year)}</lable>
                </li>
            {/each}
        </ul>
    </div>
    <div class="category-options">
        <p>구분</p>
        <ul>
            {#each CATEGORIES as category}
                <li>
                    <input type="checkbox" />
                    <lable for="category">{category}</lable>
                </li>
            {/each}
        </ul>
    </div>
    <div class="points-options">
        <p>배점</p>
        <ul>
            {#each ["2점", "3점", "4점"] as point}
                <li>
                    <input type="checkbox" />
                    <lable for="category">{point}</lable>
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

    .search-options div ul {
        text-decoration: none;
    }
</style>
