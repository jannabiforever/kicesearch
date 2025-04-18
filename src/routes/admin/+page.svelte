<script lang="ts">
    import {
        CATEGORIES,
        displayKiceYear,
        displayKiceMonth,
        POINTS,
        KICE_YEARS,
        KICE_MONTHS,
    } from "$lib/problem";
    import type { PageProps } from "./$types";

    let { form }: PageProps = $props();
</script>

<form action="?/initialize_ms_server" method="post">
    <button type="submit">서버 초기화</button>
</form>

<form method="post" action="?/postData">
    <label class="input-container multi-option">
        [학년도]
        {#each KICE_YEARS as year}
            <label>
                {displayKiceYear(year)}
                <input type="radio" name="year" value={year} required />
            </label>
        {/each}
    </label>
    <label class="input-container multi-option">
        [시험 분류]
        {#each KICE_MONTHS as month}
            <label>
                {displayKiceMonth(month)}
                <input type="radio" name="month" value={month} required />
            </label>
        {/each}
    </label>
    <label class="input-container multi-option">
        [문제 분류]
        {#each CATEGORIES as category}
            <label>
                {category}
                <input type="radio" name="category" value={category} required />
            </label>
        {/each}
    </label>
    <label class="input-container">
        [문제 번호]
        <input type="number" name="index" min="1" max="30" required />
    </label>
    <label class="input-container multi-option">
        [배점]
        {#each POINTS as point}
            <label>
                {point}
                <input type="radio" name="point" value={point} required />
            </label>
        {/each}
    </label>
    <label class="input-container text-label">
        <div>[텍스트]</div>
        <textarea
            name="body"
            id="body"
            cols="100"
            rows="8"
            placeholder="함수 f(x)가 f'(x)=3x^2-2x, f(1)=1을 만족시킬 때,..."
            required
        ></textarea>
    </label>
    <button type="submit">submit</button>
</form>

{#if form}
    Last Post operation result: {form.result?.toString()}
    <p>{form.formData?.body}</p>
    <p>{form.formData?.category}</p>
    <p>{form.formData?.point}</p>
    <p>{form.formData?.year} - {form.formData?.month}</p>
{/if}

<style>
    form {
        margin-bottom: 2rem;
    }

    .input-container {
        display: block;
        margin-bottom: 2rem;
    }

    input {
        line-height: 20px;
    }

    .text-label {
        align-content: center;
    }

    .multi-option label {
        display: block;
    }
</style>
