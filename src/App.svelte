<script lang="ts">
  // svelte
  import { fly, fade } from "svelte/transition";

  // components
  import Navbar from "./Components/navbar/Navbar.svelte";
  import BodyCard from "./Components/BodyCard.svelte";
  import Home from "./Components/home/Home.svelte";
  import Communities from "./Components/communities/Communities.svelte";
  import Community from "./Components/communities/Community.svelte";

  // ts
  import { lastEl, nextEl } from "./App_ts";

  let _lastElement: number;
  let nextElement: number;
  
  lastEl.subscribe((value) => {
    setTimeout(() => {
      _lastElement = value;
    }, 201);
  });

  nextEl.subscribe((value) => {
    nextElement = value;
  });

  
  let home = true;
  let communities = false;
  let announcements = false;
  let profile = false;

  let showCommunities = false;
  let activeCommunity = null;

  function getIndexY(o: number, io: string) {
    if (o == _lastElement && o > nextElement) {
      return 500;
    } else if (o == _lastElement && o < nextElement) {
      return -500;
    } else if (o > _lastElement) {
      return 500;
    } else {
      return -500;
    }
  }

  function cleanTransition() {
    if (home == null) {
      home = true;
      lastEl.update((value) => (value = 1));
    } else if (communities == null) {
      communities = true;
      lastEl.update((value) => (value = 2));
    } else if (announcements == null) {
      announcements = true;
      lastEl.update((value) => (value = 3));
    } else if (profile == null) {
      profile = true;
      lastEl.update((value) => (value = 4));
    }
  }
</script>

<div class="container" id="container">
  {#if appLoaded}
    <Community bind:activeCommunity />
    {#if home}
      <div
        style="width:100%;height:100%;"
        in:fly={{ x: getIndexY(1, "in"), duration: 500, delay: 200 }}
        out:fly={{ x: getIndexY(1, "out"), duration: 200 }}
        on:outroend={() => cleanTransition()}
      >
        <BodyCard isContainer={true}>Home</BodyCard>
      </div>
    {/if}

    {#if communities}
      <div
        style="width:100%;height:100%;"
        in:fly={{ x: getIndexY(2, "in"), duration: 500, delay: 200 }}
        out:fly={{ x: getIndexY(2, "out"), duration: 200 }}
        on:outroend={() => {
          cleanTransition();
          showCommunities = false;
        }}
        on:introend={() => (showCommunities = true)}
      >
        <BodyCard isContainer={true}>
          <Communities bind:activeCommunity bind:showCommunities />
        </BodyCard>
      </div>
    {/if}

    {#if announcements}
      <div
        style="width:100%;height:100%;"
        in:fly={{ x: getIndexY(3, "in"), duration: 500, delay: 200 }}
        out:fly={{ x: getIndexY(3, "out"), duration: 200 }}
        on:outroend={() => cleanTransition()}
      >
        <BodyCard isContainer={true}>Announcements</BodyCard>
      </div>
    {/if}

    {#if profile}
      <div
        style="width:100%;height:100%;"
        in:fly={{ x: getIndexY(4, "in"), duration: 500, delay: 200 }}
        out:fly={{ x: getIndexY(4, "out"), duration: 200 }}
        on:outroend={() => cleanTransition()}
      >
        <BodyCard isContainer={true}>Profile</BodyCard>
      </div>
    {/if}

    <div class="navbar">
      <Navbar bind:home bind:communities bind:announcements bind:profile />
    </div>
  {:else}
    <Loadingscreen />
  {/if}
</div>

<style lang="scss">
  .container {
    width: 100vw;
    height: 100vh;
    display: block;
    overflow: hidden;

    .navbar {
      background-color: white;
      position: fixed;
      bottom: 0;
      height: calc(4em - 3vh);
      width: 100%;
      box-shadow: 0px 0px 16px 5px rgba(0, 0, 0, 0.08);
    }
  }
</style>
