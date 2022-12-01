<template>
  <div>
    <h1>External API</h1>
    <p>
      You use will use a button to call an external API using an access token,
      and the API will validate it using the API's audience value.
      <strong>This route should be private</strong>.
    </p>
    <div
      class="btn-group mt-5"
      role="group"
      aria-label="External API Requests Examples"
    >
      <button type="button" class="btn btn-primary" @click="callApiEndpoint">
        Get Public Message
      </button>
      <button
        type="button"
        class="btn btn-primary"
        @click="callApiSecuredEndpoint"
      >
        Get Private Message
      </button>
      <button
        type="button"
        class="btn btn-primary"
        @click="callApiScopedEndpoint"
      >
        Get Scoped Message
      </button>
    </div>

    <div v-if="apiMessage" class="mt-5">
      <h6 class="muted">Result</h6>
      <div class="container-fluid position-relative">
        <div class="w-75 p-3 position-absolute start-50 translate-middle-x border border-color rounded rounded-3">
          <table v-if="apiMessage" class="table">
            <thead>
              <tr>
                <th scope="col" class="w-20">Console</th>
                <th scope="col" class="w-30">Game name</th>
                <th scope="col" class="w-25">Current player count</th>
                <th scope="col" class="w-25">Max player count</th>
              </tr>
            </thead>
            <tbody class="border-top border-top-color">
              <tr v-for="(item, index) in apiMessage" :key="index">
                <td v-for="(value, index) in item" :key="index">{{ value }}</td>
              </tr>
            </tbody>
          </table>
          <div v-else class="col-12 text-light bg-dark p-4">"There are currently no open lobbies!"</div>
          <!--<code class="col-12 text-light bg-dark p-4">
            {{ JSON.stringify(apiMessage, null, 2) }}
          </code>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { serverUrl } from '../../auth-config.json';
  export default {
    name: 'ExternalApi',
    data() {
      return {
        apiMessage: null,
      };
    },
    methods: {
      async callApiEndpoint() {
        try {
          const response = await fetch(
            `${serverUrl}/server`,
          );

          const json = await response.json();
          this.apiMessage = json;
        } catch (e) {
          this.apiMessage = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`;
        }
      },
      async callApiSecuredEndpoint() {
        const accessToken = await this.$auth.getTokenSilently();

        try {
          const response = await fetch(
            `${serverUrl}/user`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            },
          );

          const json = await response.json();
          this.apiMessage = json;
        } catch (e) {
          console.log(e);
          this.apiMessage = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`;
        }
      },
      async callApiScopedEndpoint() {
        const accessToken = await this.$auth.getTokenSilently();

        try {
          const response = await fetch(
            `${serverUrl}/api/private-scoped`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            },
          );

          const json = await response.json();
          this.apiMessage = json.message;
        } catch (e) {
          console.log(e);
          this.apiMessage = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`;
        }
      },
    },
  };
</script>