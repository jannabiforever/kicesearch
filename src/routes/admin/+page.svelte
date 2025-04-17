<script>
    import { CATEGORIES, POINTS } from "$lib/problem";
</script>

<form method="post" action="/admin">
    <label class="input-container">
        [문제 id]
        <input type="text" name="id" placeholder="2022-06-c01" required />
    </label>
    <label class="input-container multi-option">
        [분류]
        {#each CATEGORIES as category}
            <label>
                {category}
                <input type="radio" name="category" value={category} required />
            </label>
        {/each}
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

<style>
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
