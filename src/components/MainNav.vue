<template>
<div class="w-100 bg-primary">
  <nav class="navbar navbar-dark navbar-expand-lg bg-primary w-75 start-50 translate-middle-x">
    <div class="container-fluid">
      <router-link class="navbar-brand" style="font-family: var(--bs-font-sans-serif)" to="/">Niredo</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" style="font-family: var(--bs-font-sans-serif); font-weight: normal" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" style="font-family: var(--bs-font-sans-serif); font-weight: normal" to="/start">Getting started</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" style="font-family: var(--bs-font-sans-serif); font-weight: normal" to="/profile">Profile</router-link>
          </li>
        </ul>
      </div>
      <AuthNav/>
    </div>
  </nav>
</div>
</template>

<script>
import AuthNav from "@/components/AuthNav.vue"

export default {
  name: "MainNav",
  components: { AuthNav },
  data() {
      return {}
  }
}
</script>
