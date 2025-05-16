<script lang="ts">
    let { children } = $props();
</script>

<div class="app">
    <main>
        <header>
            <h1><a href="/">평가원 수학 문제 검색</a></h1>
            <h2><a href="/all-data">모든 데이터 셋</a></h2>
        </header>
        {@render children()}
    </main>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 65%;
        max-width: 64rem;
        margin: 0 auto;
        box-sizing: border-box;
    }

    main header h1 {
        text-align: center;
    }
</style>
