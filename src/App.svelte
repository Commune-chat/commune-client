<script lang="ts">
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";

  import Navbar from "./Components/navbar/Navbar.svelte";
  import BodyCard from "./Components/BodyCard.svelte";
  import Home from "./Components/home/Home.svelte"
  import Communities from "./Components/communities/Communities.svelte";
  import Community from "./Components/communities/Community.svelte";

  let home = true;
  let communities = false;
  let announcements = false;
  let profile = false;

  let activeCommunity = null;

  function cleanTransition() {
    if (home == null) {
      home = true;
    } else if (communities == null) {
      communities = true;
    } else if (announcements == null) {
      announcements = true;
    } else if (profile == null) {
      profile = true;
    }
  }
  
</script>


<div class="container" id="container">
  <Community bind:activeCommunity/>
  {#if home}
    <div style="width:100%;height:100%;" 
    in:fly="{{ x: -500, duration: 500, delay: 200 }}" 
    out:fly="{{ x: 500, duration: 200 }}"
    on:outroend="{() => cleanTransition()}"
    >
      <BodyCard>
        Home
      </BodyCard>
    </div>
  {/if}
  
  {#if communities}
    <div style="width:100%;height:100%;" 
    in:fly="{{ x: -500, duration: 500, delay: 200 }}" 
    out:fly="{{ x: 500, duration: 200 }}"
    on:outroend="{() => cleanTransition()}"
    >
      <BodyCard isContainer={true}>
        <Communities bind:activeCommunity/>
      </BodyCard>
    </div>
  {/if}

  {#if announcements}
    <div style="width:100%;height:100%;" 
    in:fly="{{ x: -500, duration: 500, delay: 200 }}" 
    out:fly="{{ x: 500, duration: 200 }}"
    on:outroend="{() => cleanTransition()}"
    >
      <BodyCard>
        Announcements
      </BodyCard>
    </div>
  {/if}

  {#if profile}
    <div style="width:100%;height:100%;" 
    in:fly="{{ x: -500, duration: 500, delay: 200 }}" 
    out:fly="{{ x: 500, duration: 200 }}"
    on:outroend="{() => cleanTransition()}"
    >
      <BodyCard>
        Profile
      </BodyCard>
    </div>
  {/if}

  <div class="navbar">
    <Navbar bind:home bind:communities bind:announcements bind:profile/>
  </div>
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
      box-shadow: 0px 0px 16px 5px rgba(0,0,0,.08);
    }
  }
</style>