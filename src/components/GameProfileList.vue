<template>
  <div class="collapse" :id="'collapseExample'+index">
    <div v-if="games.length > 0">
    <div v-for="(game, index) in games" :key="index" class="border border-bottom-0 p-2" style="height: 50px; width: calc(100% - 86px); margin-left: 43px">
      <div class="rounded-circle" :class="{ 'bg-success': game.isOnline, 'bg-secondary': !game.IsOnline }" style="height: 10px; width: 10px; margin-top: 3px"></div>
      <h6 style="width: fit-content; font-family: var(--bs-font-sans-serif); margin: -16px 0px 0px 13px">{{ game.gameName }}</h6>
      <!--<p v-if="game.isOnline" style="width: fit-content; color: grey; font-size: 11px; margin-top: 3px">Online now!</p>-->
      <p style="width: fit-content; color: grey; font-size: 11px; margin-top: 3px">Registered at: {{ game.registeredDate }}</p>
        <div class="border-start" style="width: 50%; height: 40px; margin-top: -55px; margin-left: 50%">
          <p style="width: fit-content; font-weight: 500; margin-top: 4px; margin-left: 5px; font-family: var(--bs-font-sans-serif);">Friend code: {{ game.friendCode }}</p>
        </div>
    </div>
    </div>
    <div v-else>
      <p style="font-family: var(--bs-font-sans-serif);">This device doesn't have any games linked to it. All games played online on this device will automatically be linked!</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "GameProfileList",
    props: {
        'index': Number,
        'games': Array
    }
}
</script>
