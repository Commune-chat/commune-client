<!-- <link rel="stylesheet" href="./Navbar.scss"> -->
<script>
    //import { showElement } from "src/App.svelte";
    export let home;
    export let communities;
    export let announcements;
    export let profile;
    export const showElement = (el) => {
    switch (el) {
      case "home":
        home = true;
        communities = false;
        announcements = false;
        profile = false;
        break;

      case "communities":
        home = false;
        communities = true;
        announcements = false;
        profile = false;
        break;

      case "announcements":
        home = false;
        communities = false;
        announcements = true;
        profile = false;
        break;

      case "profile":
        home = false;
        communities = false;
        announcements = false;
        profile = true;
        break;


    }
  }
</script>
<div class="navbar-container">
    <div class="navbar-items">
        <div class="home-item">
            <div on:click={() => showElement("home")}><span>Home</span></div>
        </div>
        <div class="communities-item">
            <div on:click={() => showElement("communities")}><span>Communities</span></div>
        </div>
        <div class="app-announcements-item">
            <div on:click={() => showElement("announcements")}><span>Announcements</span></div>
        </div>
        <div class="profile-item">
            <div on:click={() => showElement("profile")}><span>Profile</span></div>
        </div>
    </div>
</div>

<style lang="scss">
    .navbar-container {
        z-index: 100;
        min-height: 100%;
        min-width: 100%;
        .navbar-items {
            height: 100%;
            width: 100%;
            flex: 1 1 auto;
            align-items: center;
            justify-content: center;
            display: flex;
            gap: min(calc(20vw - 5em), 20em);
            div {
                height: 100%;
                position: relative;
                transform: translateY(20%);
                div {
                    cursor: pointer;
                    background-color: inherit;
                    border: none;
                    outline: none;
                    transition: color .2s ease-in-out .03s;
                    &:hover {
                        color: chocolate; 
                    }
                }
            }   
        }
    }
</style>
