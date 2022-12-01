<template>
    <div>
      <table v-if="serverList.length > 0" class="table">
        <thead>
          <tr>
            <th scope="col" class="w-20" style="font-family: var(--bs-font-sans-serif);">Console</th>
            <th scope="col" class="w-30" style="font-family: var(--bs-font-sans-serif);">Game name</th>
            <th scope="col" class="w-25" style="font-family: var(--bs-font-sans-serif);">Current player count</th>
            <th scope="col" class="w-25" style="font-family: var(--bs-font-sans-serif);">Max player count</th>
          </tr>
        </thead>
          <tbody class="border-top border-top-color">
            <tr v-for="(item, index) in serverList" :key="index">
            <td v-for="(value, index) in item" :key="index" style="font-family: var(--bs-font-sans-serif);">{{ value }}</td>
          </tr>
        </tbody>
      </table>
      <p v-else style="font-family: var(--bs-font-sans-serif);">No open lobbies could be found. Follow <router-link class="link" to="start">these steps</router-link> to start one yourself!</p>
    </div>
</template>

<script>
import { serverUrl } from '../../auth-config.json';

export default {
    name: 'ServerList',
    data() {
      return {
        serverList: JSON.parse("[]"),
      };
    },
    methods: {
      async getServerList() {
        try {
          const response = await fetch(
            `${serverUrl}/server`,
          );

          const json = await response.json();
          this.serverList = json;
        } catch {
          this.serverList = JSON.parse("[]");
        }
      }
    },
  async mounted() {
    await this.getServerList();
  }
}
</script>
