<script lang="ts">
    import { fade } from "svelte/transition";
    import Card from "./Card.svelte"
    export let activeCommunity;
    export let showCommunities;
    export let communities = [
        {
            name: "Community 1",
            id: 0,
            members: null,
            icon: "h"
        },
        {
            name: "Community 2",
            id: 0,
            members: null,
            icon: "h"
        },
        {
            name: "Community 3",
            id: 0,
            members: null,
            icon: "h"
        }
    ];
</script>
<div class="comcard-container">
    <div class="comcard-header">
        <h3 in:fade="{{delay: 200}}">
            Communities
        </h3>
    </div>
    {#if showCommunities}
        {#each communities as community}
            <Card bind:community bind:activeCommunity/>
        {/each}
    {/if}
</div>


<style>
    .comcard-header {
        position: sticky;
        display: flex;
        flex: 1 0 auto;
        align-items: center;
        width: 100%;
        height: 3em;
        background-color: #ECECEC;
        position: -webkit-sticky;
        top: -1em;
    }
    .comcard-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>