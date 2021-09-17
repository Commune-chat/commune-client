<script lang="ts">
    //import { communityType } from "../../ts/types/commune.ts";
    import Card from "./Card.svelte"
    export let activeCommunity;
    export let communities = [
        {
            name: "h",
            id: 0,
            members: null,
            icon: "h"
        },
        {
            name: "h",
            id: 0,
            members: null,
            icon: "h"
        },
        {
            name: "h",
            id: 0,
            members: null,
            icon: "h"
        }
    ];
</script>
<div class="comcard-container">
    <div class="comcard-header">
        <h3>
            Communities
        </h3>
    </div>
    {#each communities as community}
        <Card bind:community bind:activeCommunity/>
    {/each}
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