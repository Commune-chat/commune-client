<script>
    export let shown = false;
    export let isContainer = false;
</script>

<svelte:options accessors={true}/>

{#if shown}
    {#if isContainer}
        <div class="only-container">
            <slot/>
        </div> 
    {:else}
        <div class="body-card-container">
            <slot/>
        </div>
    {/if}
{/if}

<style lang="scss">
    .body-card-container {
        position: relative;
        padding: 1em;
        border-radius: 2em;
        box-shadow: 0px 0px 16px 10px rgba(0,0,0,.2);
        background-color: white;
        display: block;
        min-height: 10%;
        height: 85%;
        max-height: 90%;
        min-width: 90%;
        margin: 12px;
        transition: all .2s ease-in-out 1s;
    }
    .only-container {
        position: relative;
        padding: 1em;
        display: block;
        min-height: 10%;
        height: 100%;
        max-height: 90.05%;
        min-width: 90%;
        transition: all .2s ease-in-out 1s;  
        overflow: auto;
        &::-webkit-scrollbar {
            width: .5em;
        }
        &::-webkit-scrollbar-track {
            background-color: var(--background2);
            // box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: var(--scrollbar-thumb-color);
            border-radius: 2em;
            // box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
            outline: none;
        }
    }
</style>