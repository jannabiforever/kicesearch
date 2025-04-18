<script>
    import { page } from "$app/state";
    import { onMount } from "svelte";

    onMount(() => console.log(page.data));
</script>

<div class="login-container">
    <form action="/admin/login" method="post">
        <input type="text" name="username" placeholder="username" required />
        <input
            type="password"
            name="password"
            placeholder="password"
            required
        />
        <button type="submit">login</button>
    </form>
</div>
