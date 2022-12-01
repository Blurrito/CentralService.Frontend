<template>
  <div>
    <div class="w-50 mt-5 mb-3 row position-relative start-50 translate-middle-x">
      <div class="col-md-2 mb-3">
        <img
          :src="$auth.user.picture"
          alt="User's profile picture"
          class="rounded-circle img-fluid profile-picture"
        />
      </div>
      <div class="col-md text-start text-md-left">
        <h2>{{ $auth.user.name }}</h2>
        <p class="lead text-muted">{{ $auth.user.email }}</p>
      </div>
    </div>
    <DeviceList :devices="profile.deviceProfiles" />
  </div>
</template>

<script>
import { serverUrl } from '../../auth-config.json';
import DeviceList from '@/components/DeviceList.vue';

export default {
  name: 'ProfileView',
  components: { DeviceList },
  data() {
    return {
      profile: JSON.parse("{ \"username\":\"\", \"email\": \"\", \"isVerified\": false, \"isOnline\": false, \"createdDate\": \"01/01/0001 00:00:00\", \"deviceProfiles\": [] }")
    }
  },
  methods: {
      async getUserInformation() {
        const accessToken = await this.$auth.getTokenSilently();

        try {
          const response = await fetch(
            `${serverUrl}/user?Nickname=${this.$auth.user.nickname}&Email=${this.$auth.user.email}&IsVerified=${this.$auth.user.email_verified}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            },
          );

          if (response.ok) {
            const json = await response.json();
            this.profile = json;
          }
        } catch (e) {
          this.profile = JSON.parse("{ \"username\":\"\", \"email\": \"\", \"isVerified\": false, \"isOnline\": false, \"createdDate\": \"01/01/0001 00:00:00\", \"deviceProfiles\": [] }");
        }
      }
  },
  async mounted() {
    await this.getUserInformation();
  }
}
</script>
