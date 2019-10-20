<template>
  <div>
    <div class="md-layout">
      <img :src="image"/>
    </div>
    <div class="md-layout">
      <md-button>
        <router-link to="/Auto">
          {{ search }}
        </router-link>
      </md-button>
      <md-button>
        <router-link to="/Form">
          Form
        </router-link>
      </md-button>
      <md-button>
        <router-link to="/Posts">
          Posts
        </router-link>
      </md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  data () {
    return {
        image: "https://images.pexels.com/photos/2071216/pexels-photo-2071216.jpeg?cs=srgb&dl=architectural-design-architecture-building-2071216.jpg&fm=jpg",
        search: "Search-ing"
    }
  }
};
</script>

<style scoped>
.md-layout {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 300px;
}
</style>
