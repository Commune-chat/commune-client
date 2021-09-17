<script>
    import {onMount} from "svelte";
    export let activeCommunity;
    let _node;
    import { fade, fly } from "svelte/transition";
</script>


{#if activeCommunity}
    <div class="community-backdrop"
        in:fade="{{ duration: 200 }}" 
        out:fade="{{ duration: 300 }}"
        on:click={() => activeCommunity = null}
    >

    </div>
    <div
        in:fly="{{y: 120, duration: 1200 }}" 
        out:fade="{{ duration: 150 }}"
        class="community-inner"
    >
      <div class="community-page">

      </div>  
    </div>
        
{/if}


<style lang="scss">
    .community-backdrop {
        width: 100vw;
        height: 100vh;
        z-index: 10;
        display: block;
        position: absolute;
        background:rgba(0,0,0,0.9);
        opacity: 1;
    }
    .community-inner {
        z-index: 100;
        position: relative;
        padding: 1em;
        border-radius: 2em;
        box-shadow: 0px 0px 16px 10px rgba(0,0,0,.2);
        background-color: white;
        display: flex;
        min-height: 10%;
        height: 85%;
        max-height: 90%;
        min-width: 95%;
        margin: 12px;
        transition: all .2s ease-in-out 1s;    
    }
</style>