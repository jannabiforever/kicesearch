<script>
    import { page } from "$app/state";
    import { onMount } from "svelte";

    onMount(() => console.log(page.data));
</script>

<div class="login-container">
    <form action="/admin/login" method="post">
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit"> login </button>
    </form>
</div>

{#if page.data.successful}
    <p>login successful!</p>
{/if}
