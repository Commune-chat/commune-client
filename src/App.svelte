<script lang="ts">
  import { onMount } from "svelte";

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

  
</script>


<div class="container" id="container">
  <Community bind:activeCommunity/>


  <BodyCard bind:shown={home}>
    Home
  </BodyCard>

  <BodyCard bind:shown={communities} isContainer={true}>
    <Communities bind:activeCommunity/>
  </BodyCard>

  <BodyCard bind:shown={announcements}>
    Announcements
  </BodyCard>

  <BodyCard bind:shown={profile}>
    Profile
  </BodyCard>

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