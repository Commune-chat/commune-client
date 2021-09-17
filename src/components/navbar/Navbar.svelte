<!-- <link rel="stylesheet" href="./Navbar.scss"> -->
<script>
    //import { showElement } from "src/App.svelte";
    import { lastEl, nextEl } from '/src/App_ts'

    export let home;
    export let communities;
    export let announcements;
    export let profile;


    let lastElement;
    let nextElement;
    lastEl.subscribe(value => {
        lastElement=value;
    });
    nextEl.subscribe(value => {
        nextElement=value;
    });
    // $: {console.log(lastElement)}
    export const showElement = (el) => {
        nextEl.update(value=>value=el);
    switch (el) {
      case 1:
        if (lastElement == 1) {
            break;
        };

        
        home = null;
        communities = false;
        announcements = false;
        profile = false;
        break;

      case 2:
        if (lastElement == 2) {
            break;
        };

        home = false;
        communities = null;
        announcements = false;
        profile = false;
        break;

      case 3:
        if (lastElement == 3) {
            break;
        };  
        home = false;
        communities = false;
        announcements = null;
        profile = false;
        break;

      case 4:
        if (lastElement == 4) {
            break;
        };  
        home = false;
        communities = false;
        announcements = false;
        profile = null;
        break;
    }
  }
</script>
<div class="navbar-container">
    <div class="navbar-items">
        <div class="home-item">
            <div on:click={() => showElement(1)}><span>Home</span></div>
        </div>
        <div class="communities-item">
            <div on:click={() => showElement(2)}><span>Communities</span></div>
        </div>
        <div class="app-announcements-item">
            <div on:click={() => showElement(3)}><span>Announcements</span></div>
        </div>
        <div class="profile-item">
            <div on:click={() => showElement(4)}><span>Profile</span></div>
        </div>
    </div>
</div>

<style lang="scss">
    .navbar-container {
        z-index: 100;
        min-height: 100%;
        min-width: 100%;
        flex: 0 1 auto;
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
