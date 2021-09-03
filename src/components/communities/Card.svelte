<script lang="ts">
    //import { communityType } from '../../ts/types/commune.ts';
    import { slide } from "svelte/transition";

    export let activeCommunity;
    export let community: communityType = {
        name: "test",
        members: null,
        id: 0,
        icon: "icon",
    };
    export const createCommunity = () => {
        activeCommunity = true;
    }
</script>

<div class="card-container" on:click={() => createCommunity()} transition:slide>
    <div class="card-header">
        <img src="{community.icon}" alt="community logo">
        {#if community.members}
            {#each community.members as member}
                {#if member.status != "offline"}
                    <div class="card-user">

                    </div>
                {/if}
            {/each}
        {/if}
    </div>
    <div class="card-title">
        <span>{community.name}</span>
    </div>
</div>


<style lang="scss">
    .card-container {
        margin: 1em;
        padding: 4px;
        min-height: 4em;
        height: max-content;
        min-width: 80%;
        border-radius: 1em;
        background: rgba(255,255,255,.3);
        box-shadow: 0px 0px 16px 2px rgba(0,0,0,.2)
    }
    img {
        border-radius: 50%;
        width: 2em;
        height: 2em;
    }
</style>