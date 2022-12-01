<template>
    <div id="DeviceInformation" class="w-50 p-3 position-relative start-50 translate-middle-x border border-top-0 rounded-bottom">
        <form ref="DeviceInformationForm" @submit.prevent="submitDeviceInformation">
            <div v-if="errorMsg != null" class="p-2 bg bg-danger bg-opacity-25 text-danger border border-danger rounded">
                {{ errorMsg }}
            </div>
            <div style="width: fit-content">
                <label for="MacAddr0" class="form-label" style="font-family: var(--bs-font-sans-serif)">MAC address</label>
            </div>
            <div class="row g-3 mb-3 align-items-center">
                <div class="col">
                    <input type="text" v-model="macAddress0" minlength="2" maxlength="2" class="form-control" id="MacAddr0" pattern="[A-Fa-f0-9]{2}"  title="Please insert the two-character long section (A-F, a-f or 0-9) of the MAC address as shown on the Nintendo DS.">
                </div>
                <div class="col-auto">
                    <label for="MacAddr1" class="form-label">-</label>
                </div>
                <div class="col">
                    <input type="text" v-model="macAddress1" minlength="2" maxlength="2" class="form-control" id="MacAddr1" pattern="[A-Fa-f0-9]{2}"  title="Please insert the two-character long section (A-F, a-f or 0-9) of the MAC address as shown on the Nintendo DS.">
                </div>
                <div class="col-auto">
                    <label for="MacAddr2" class="form-label">-</label>
                </div>
                <div class="col">
                    <input type="text" v-model="macAddress2" minlength="2" maxlength="2" class="form-control" id="MacAddr2" pattern="[A-Fa-f0-9]{2}"  title="Please insert the two-character long section (A-F, a-f or 0-9) of the MAC address as shown on the Nintendo DS.">
                </div>
                <div class="col-auto">
                    <label for="MacAddr3" class="form-label">-</label>
                </div>
                <div class="col">
                    <input type="text" v-model="macAddress3" minlength="2" maxlength="2" class="form-control" id="MacAddr3" pattern="[A-Fa-f0-9]{2}"  title="Please insert the two-character long section (A-F, a-f or 0-9) of the MAC address as shown on the Nintendo DS.">
                </div>
                <div class="col-auto">
                    <label for="MacAddr4" class="form-label">-</label>
                </div>
                <div class="col">
                    <input type="text" v-model="macAddress4" minlength="2" maxlength="2" class="form-control" id="MacAddr4" pattern="[A-Fa-f0-9]{2}"  title="Please insert the two-character long section (A-F, a-f or 0-9) of the MAC address as shown on the Nintendo DS.">
                </div>
                <div class="col-auto">
                    <label for="MacAddr5" class="form-label">-</label>
                </div>
                <div class="col">
                    <input type="text" v-model="macAddress5" minlength="2" maxlength="2" class="form-control" id="MacAddr5" pattern="[A-Fa-f0-9]{2}"  title="Please insert the two-character long section (A-F, a-f or 0-9) of the MAC address as shown on the Nintendo DS.">
                </div>
            </div>
            <div style="width: fit-content">
                <label style="font-family: var(--bs-font-sans-serif)" for="DeviceId0" class="form-label">Nintendo Wi-Fi Connection ID</label>
            </div>
            <div class="row g-3 mb-3 align-items-center">
                <div class="col">
                    <input type="text" v-model="deviceId0" class="form-control" minlength="4" maxlength="4" id="DeviceId0" pattern="[0-9]{4}" title="Please insert the four-digit section of the Nintendo Wi-Fi Connection ID as shown on the Nintendo DS.">
                </div>
                <div class="col-auto">
                    <label for="DeviceId1" class="form-label">-</label>
                </div>
                <div class="col">
                    <input type="text" v-model="deviceId1" class="form-control" minlength="4" maxlength="4" id="DeviceId1" pattern="[0-9]{4}" title="Please insert the four-digit section of the Nintendo Wi-Fi Connection ID as shown on the Nintendo DS.">
                </div>
                <div class="col-auto">
                    <label for="DeviceId2" class="form-label">-</label>
                </div>
                <div class="col">
                    <input type="text" v-model="deviceId2" class="form-control" minlength="4" maxlength="4" id="DeviceId2" pattern="[0-9]{4}" title="Please insert the four-digit section of the Nintendo Wi-Fi Connection ID as shown on the Nintendo DS.">
                </div>
                <div class="col-auto">
                    <label for="DeviceId3" class="form-label">-</label>
                </div>
                <div class="col">
                    <input type="text" v-model="deviceId3" class="form-control" minlength="4" maxlength="4" id="DeviceId3" pattern="[0-9]{4}" title="Please insert the four-digit section of the Nintendo Wi-Fi Connection ID as shown on the Nintendo DS.">
                </div>
            </div>
            <div style="width: fit-content">
                <button type="submit" class="btn btn-primary">Link</button>
            </div>
        </form>
    </div>
</template>

<script>
import router from '@/router';
import { serverUrl } from '../../auth-config.json'

export default {
    name: "RegisterDeviceView",
    data() {
        return {
            macAddress0: null,
            macAddress1: null,
            macAddress2: null,
            macAddress3: null,
            macAddress4: null,
            macAddress5: null,
            deviceId0: null,
            deviceId1: null,
            deviceId2: null,
            deviceId3: null,
            errorMsg: null
        }
    },
    methods: {
        async submitDeviceInformation() {
            const authToken = await this.$auth.getTokenSilently();

            try {
                const response = await fetch(
                    `${serverUrl}/user/link`,
                    {
                        method: "post",
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ 
                            email: this.$auth.user.email,
                            deviceId: `${this.deviceId0}${this.deviceId1}${this.deviceId2}${this.deviceId3}`,
                            macAddress: `${this.macAddress0}${this.macAddress1}${this.macAddress2}${this.macAddress3}${this.macAddress4}${this.macAddress5}`
                        })
                    })
                if (response.ok) {
                    router.push("/profile");
                }
                else {
                    this.errorMsg = await (await response.text()).replaceAll("\"", "");
                }
            } catch(e) {
                console.log(e);
            }
        }
    }
}
</script>
